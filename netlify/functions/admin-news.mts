import type { Config, Context } from "@netlify/functions";
import { AuthError, verifyRequestOrigin } from "@netlify/identity";
import { and, desc, eq, ne } from "drizzle-orm";
import { db } from "../../db/index.js";
import { newsPosts } from "../../db/schema.js";
import { CATEGORIES, STATUSES, jsonError, serializePost, slugify } from "../shared/news.js";
import { authorizeAdmin } from "../shared/admin-auth.js";

type PostInput = {
  title?: unknown;
  slug?: unknown;
  category?: unknown;
  excerpt?: unknown;
  body?: unknown;
  coverImageUrl?: unknown;
  coverImageAlt?: unknown;
  status?: unknown;
  authorName?: unknown;
};

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

/** Finds a slug that is not taken yet, ignoring the post being edited. */
async function uniqueSlug(desired: string, excludeId: number | null) {
  const base = slugify(desired) || "post";
  for (let attempt = 0; attempt < 50; attempt += 1) {
    const candidate = attempt === 0 ? base : `${base}-${attempt + 1}`;
    const clash = await db
      .select({ id: newsPosts.id })
      .from(newsPosts)
      .where(
        excludeId === null
          ? eq(newsPosts.slug, candidate)
          : and(eq(newsPosts.slug, candidate), ne(newsPosts.id, excludeId)),
      )
      .limit(1);
    if (clash.length === 0) {
      return candidate;
    }
  }
  return `${base}-${Date.now()}`;
}

function readInput(payload: PostInput) {
  const title = asString(payload.title);
  const category = CATEGORIES.includes(asString(payload.category) as (typeof CATEGORIES)[number])
    ? asString(payload.category)
    : "company-update";
  const status = STATUSES.includes(asString(payload.status) as (typeof STATUSES)[number])
    ? asString(payload.status)
    : "draft";
  const coverImageUrl = asString(payload.coverImageUrl);

  return {
    title,
    category,
    status,
    excerpt: asString(payload.excerpt).slice(0, 500),
    body: typeof payload.body === "string" ? payload.body : "",
    coverImageUrl: coverImageUrl === "" ? null : coverImageUrl,
    coverImageAlt: asString(payload.coverImageAlt).slice(0, 300),
    authorName: asString(payload.authorName).slice(0, 120),
    requestedSlug: asString(payload.slug),
  };
}

/**
 * Authoring API for the newsroom. Every route requires a signed-in Netlify
 * Identity user, and mutations also require a same-origin request.
 */
export default async (req: Request, context: Context) => {
  const { user, error } = await authorizeAdmin();
  if (error) {
    return error;
  }

  if (req.method !== "GET") {
    try {
      verifyRequestOrigin(req);
    } catch (error) {
      if (error instanceof AuthError) {
        return jsonError("Request blocked: unexpected origin.", 403);
      }
      throw error;
    }
  }

  const idParam = context.params.id;
  const id = idParam ? Number.parseInt(idParam, 10) : null;
  if (idParam && (id === null || Number.isNaN(id))) {
    return jsonError("Invalid post id.", 400);
  }

  if (req.method === "GET") {
    if (id !== null) {
      const [post] = await db.select().from(newsPosts).where(eq(newsPosts.id, id)).limit(1);
      if (!post) {
        return jsonError("Post not found", 404);
      }
      return Response.json({ post: serializePost(post) });
    }

    const posts = await db.select().from(newsPosts).orderBy(desc(newsPosts.updatedAt));
    return Response.json({ posts: posts.map(serializePost) });
  }

  if (req.method === "POST") {
    const input = readInput((await req.json()) as PostInput);
    if (input.title === "") {
      return jsonError("A headline is required.", 400);
    }

    const slug = await uniqueSlug(input.requestedSlug || input.title, null);
    const [created] = await db
      .insert(newsPosts)
      .values({
        title: input.title,
        slug,
        category: input.category,
        excerpt: input.excerpt,
        body: input.body,
        coverImageUrl: input.coverImageUrl,
        coverImageAlt: input.coverImageAlt,
        status: input.status,
        authorName: input.authorName || user.name || user.email || "",
        publishedAt: input.status === "published" ? new Date() : null,
      })
      .returning();

    return Response.json({ post: serializePost(created) }, { status: 201 });
  }

  if (req.method === "PUT") {
    if (id === null) {
      return jsonError("Missing post id.", 400);
    }

    const [existing] = await db.select().from(newsPosts).where(eq(newsPosts.id, id)).limit(1);
    if (!existing) {
      return jsonError("Post not found", 404);
    }

    const input = readInput((await req.json()) as PostInput);
    if (input.title === "") {
      return jsonError("A headline is required.", 400);
    }

    const slug =
      input.requestedSlug && input.requestedSlug !== existing.slug
        ? await uniqueSlug(input.requestedSlug, id)
        : existing.slug;

    // Keep the original publish date on re-edits; stamp it the first time a
    // draft goes live, and clear it when a post is pulled back to draft.
    let publishedAt = existing.publishedAt;
    if (input.status === "published" && !publishedAt) {
      publishedAt = new Date();
    } else if (input.status === "draft") {
      publishedAt = null;
    }

    const [updated] = await db
      .update(newsPosts)
      .set({
        title: input.title,
        slug,
        category: input.category,
        excerpt: input.excerpt,
        body: input.body,
        coverImageUrl: input.coverImageUrl,
        coverImageAlt: input.coverImageAlt,
        status: input.status,
        authorName: input.authorName || existing.authorName,
        publishedAt,
        updatedAt: new Date(),
      })
      .where(eq(newsPosts.id, id))
      .returning();

    return Response.json({ post: serializePost(updated) });
  }

  if (req.method === "DELETE") {
    if (id === null) {
      return jsonError("Missing post id.", 400);
    }
    const deleted = await db.delete(newsPosts).where(eq(newsPosts.id, id)).returning();
    if (deleted.length === 0) {
      return jsonError("Post not found", 404);
    }
    return Response.json({ deleted: true });
  }

  return jsonError("Method not allowed", 405);
};

export const config: Config = {
  path: ["/api/admin/news", "/api/admin/news/:id"],
};

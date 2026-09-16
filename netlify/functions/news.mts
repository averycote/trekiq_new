import type { Config, Context } from "@netlify/functions";
import { and, desc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { newsPosts } from "../../db/schema.js";
import { jsonError, serializePost } from "../shared/news.js";

/**
 * Public newsroom feed. Only ever returns published posts, so drafts stay
 * invisible until an author hits Publish in the admin UI.
 */
export default async (req: Request, context: Context) => {
  if (req.method !== "GET") {
    return jsonError("Method not allowed", 405);
  }

  const slug = context.params.slug;

  if (slug) {
    const [post] = await db
      .select()
      .from(newsPosts)
      .where(and(eq(newsPosts.slug, slug), eq(newsPosts.status, "published")))
      .limit(1);

    if (!post) {
      return jsonError("Post not found", 404);
    }

    return Response.json({ post: serializePost(post) });
  }

  const posts = await db
    .select()
    .from(newsPosts)
    .where(eq(newsPosts.status, "published"))
    .orderBy(desc(newsPosts.publishedAt), desc(newsPosts.id));

  return Response.json({ posts: posts.map(serializePost) });
};

export const config: Config = {
  path: ["/api/news", "/api/news/:slug"],
};

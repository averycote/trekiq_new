import { newsPosts } from "../../db/schema.js";

export const CATEGORIES = [
  "press-release",
  "company-update",
  "product",
  "announcement",
] as const;

export const STATUSES = ["draft", "published"] as const;

export type NewsPostRow = typeof newsPosts.$inferSelect;

/** Turns a headline into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
}

/** Shapes a database row into the JSON the browser consumes. */
export function serializePost(row: NewsPostRow) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    excerpt: row.excerpt,
    body: row.body,
    coverImageUrl: row.coverImageUrl,
    coverImageAlt: row.coverImageAlt,
    status: row.status,
    authorName: row.authorName,
    publishedAt: row.publishedAt ? row.publishedAt.toISOString() : null,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

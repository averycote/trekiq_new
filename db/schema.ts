import { pgTable, serial, text, timestamp, index } from "drizzle-orm/pg-core";

/**
 * Blog / newsroom posts. Authored through the protected admin UI at /admin/news
 * and read publicly at /news.
 */
export const newsPosts = pgTable(
  "news_posts",
  {
    id: serial().primaryKey(),
    title: text().notNull(),
    // URL segment used by /news/:slug. Unique so links stay stable.
    slug: text().notNull().unique(),
    // "press-release" | "company-update" | "product" | "announcement" | "blog-post"
    category: text().notNull().default("company-update"),
    excerpt: text().notNull().default(""),
    // Rich text (HTML) produced by the editor.
    body: text().notNull().default(""),
    coverImageUrl: text("cover_image_url"),
    coverImageAlt: text("cover_image_alt").notNull().default(""),
    // "draft" | "published"
    status: text().notNull().default("draft"),
    authorName: text("author_name").notNull().default(""),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("news_posts_status_published_at_idx").on(table.status, table.publishedAt),
  ],
);

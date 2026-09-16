import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { categoryLabel, formatPostDate, postSummary } from '@/lib/news';

export default function PostCard({ post, featured = false }) {
  const summary = postSummary(post);

  return (
    <Link
      to={`/news/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
      featured ? 'md:flex-row' : ''}`
      }>

      {post.coverImageUrl &&
      <div className={`overflow-hidden bg-muted ${featured ? 'md:w-1/2' : ''}`}>
          <img
          src={post.coverImageUrl}
          alt={post.coverImageAlt || ''}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
          featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[320px]' : 'aspect-[16/9]'}`
          } />

        </div>
      }

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:p-10' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
          <span
            className="rounded-full px-3 py-1 font-semibold uppercase tracking-wide text-secondary-foreground"
            style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

            {categoryLabel(post.category)}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {formatPostDate(post.publishedAt || post.createdAt)}
          </span>
        </div>

        <h3
          className={`font-bold text-primary transition group-hover:text-[hsl(206_64%_49%)] ${
          featured ? 'text-3xl leading-tight' : 'text-xl'}`
          }>

          {post.title}
        </h3>

        {summary &&
        <p className={`mt-3 leading-relaxed text-muted-foreground ${featured ? 'text-lg' : 'text-sm'}`}>
            {summary}
          </p>
        }

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(206_64%_49%)]">
          Read more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>);

}

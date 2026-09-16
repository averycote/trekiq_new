import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { fetchPublishedPost, isNotFoundError } from '@/lib/newsApi';
import { categoryLabel, formatPostDate } from '@/lib/news';

export default function NewsPost() {
  const { slug } = useParams();

  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ['news', 'published', slug],
    queryFn: () => fetchPublishedPost(slug),
    enabled: Boolean(slug),
    retry: false
  });

  const notFound = isNotFoundError(error);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/news"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary">

            <ArrowLeft className="h-4 w-4" />
            Back to newsroom
          </Link>

          {isLoading &&
          <div className="space-y-4">
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />
              <div className="h-10 w-full animate-pulse rounded bg-muted" />
              <div className="h-64 w-full animate-pulse rounded-xl bg-muted" />
            </div>
          }

          {isError &&
          <div className="rounded-xl border border-border bg-card p-12 text-center">
              <h1 className="mb-3 text-2xl font-bold text-primary">
                {notFound ? 'This post isn’t available' : 'We couldn’t load this post'}
              </h1>
              <p className="mb-6 text-muted-foreground">
                {notFound ?
              'It may have been unpublished or the link may be out of date.' :
              'Please refresh the page to try again.'}
              </p>
              <Link
              to="/news"
              className="inline-block rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

                Browse all news
              </Link>
            </div>
          }

          {post &&
          <article>
              <header className="mb-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                  <span
                  className="rounded-full px-3 py-1 font-semibold uppercase tracking-wide text-white"
                  style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

                    {categoryLabel(post.category)}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatPostDate(post.publishedAt || post.createdAt)}
                  </span>
                  {post.authorName &&
                <span className="flex items-center gap-1.5 text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                      {post.authorName}
                    </span>
                }
                </div>

                <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl">{post.title}</h1>

                {post.excerpt &&
              <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
              }
              </header>

              {post.coverImageUrl &&
            <img
              src={post.coverImageUrl}
              alt={post.coverImageAlt || ''}
              className="mb-10 w-full rounded-xl border border-border object-cover" />

            }

              {/* Body HTML comes from the signed-in editor only. */}
              <div className="news-prose" dangerouslySetInnerHTML={{ __html: post.body }} />
            </article>
          }
        </div>
      </main>
      <Footer />
    </div>);

}

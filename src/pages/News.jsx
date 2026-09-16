import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import PostCard from '../components/news/PostCard';
import { fetchPublishedPosts } from '@/lib/newsApi';
import { NEWS_CATEGORIES } from '@/lib/news';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('all');

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['news', 'published'],
    queryFn: fetchPublishedPosts
  });

  // Only offer filters for categories that actually have posts.
  const availableCategories = useMemo(() => {
    const used = new Set((posts || []).map((post) => post.category));
    return NEWS_CATEGORIES.filter((category) => used.has(category.value));
  }, [posts]);

  const visiblePosts = useMemo(() => {
    if (!posts) {
      return [];
    }
    return activeCategory === 'all' ?
    posts :
    posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  const [featured, ...rest] = visiblePosts;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="bg-[hsl(210_100%_12%)] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              <Newspaper className="h-3.5 w-3.5" />
              Newsroom
            </span>
            <h1 className="mb-6 text-5xl font-bold text-white">News &amp; Press</h1>
            <p className="text-xl leading-relaxed text-white/75">
              Press releases, company updates, and product news from the team building Trek iQ.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {availableCategories.length > 1 &&
            <div className="mb-10 flex flex-wrap justify-center gap-2">
                {[{ value: 'all', label: 'All' }, ...availableCategories].map((category) => {
                const isActive = activeCategory === category.value;
                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setActiveCategory(category.value)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive ?
                    'border-transparent bg-primary text-primary-foreground' :
                    'border-border bg-card text-muted-foreground hover:border-[hsl(206_64%_49%)] hover:text-primary'}`
                    }>

                      {category.label}
                    </button>);

              })}
              </div>
            }

            {isLoading &&
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((index) =>
              <div key={index} className="overflow-hidden rounded-xl border border-border bg-card">
                    <div className="aspect-[16/9] animate-pulse bg-muted" />
                    <div className="space-y-3 p-6">
                      <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                      <div className="h-5 w-full animate-pulse rounded bg-muted" />
                      <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                    </div>
                  </div>
              )}
              </div>
            }

            {isError &&
            <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-10 text-center">
                <h2 className="mb-2 text-xl font-semibold text-primary">We couldn&apos;t load the newsroom</h2>
                <p className="text-muted-foreground">Please refresh the page to try again.</p>
              </div>
            }

            {!isLoading && !isError && visiblePosts.length === 0 &&
            <div className="mx-auto max-w-xl rounded-xl border border-dashed border-border bg-card p-12 text-center">
                <Newspaper className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold text-primary">No posts yet</h2>
                <p className="text-muted-foreground">
                  Announcements and press releases will appear here as soon as they are published.
                </p>
              </div>
            }

            {featured &&
            <div className="space-y-10">
                <Reveal>
                  <PostCard post={featured} featured />
                </Reveal>

                {rest.length > 0 &&
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post, index) =>
                <Reveal key={post.id} delay={index * 0.05}>
                        <PostCard post={post} />
                      </Reveal>
                )}
                  </div>
              }
              </div>
            }
          </div>
        </section>

        <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-primary">Media enquiries</h2>
            <p className="mb-6 text-muted-foreground">
              For interviews, assets, or comment, get in touch and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@trekiq.ca"
                className="rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

                Contact us
              </a>
              <Link
                to="/book-demo"
                className="rounded-xl border border-border bg-card px-6 py-3 font-semibold text-primary transition hover:border-[hsl(206_64%_49%)]">

                Book a demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}

import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ExternalLink, FilePlus2, Loader2, LogOut, Pencil, Trash2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AdminAuthCard from '../components/news/AdminAuthCard';
import PostEditorForm from '../components/news/PostEditorForm';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { createPost, deletePost, fetchAllPosts, updatePost } from '@/lib/newsApi';
import { categoryLabel, formatPostDate } from '@/lib/news';
import { useIdentity } from '@/lib/useIdentity';

export default function AdminNews() {
  const { user, isLoading: isLoadingUser, signOut } = useIdentity();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // null = showing the list, {} = composing a new post, otherwise the post being edited.
  const [editing, setEditing] = useState(null);

  const postsQuery = useQuery({
    queryKey: ['news', 'admin'],
    queryFn: fetchAllPosts,
    enabled: Boolean(user),
    retry: false
  });

  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: ['news'] });
  };

  const saveMutation = useMutation({
    mutationFn: (values) =>
    editing && editing.id ? updatePost(editing.id, values) : createPost(values),
    onSuccess: ({ post }) => {
      refresh();
      setEditing(null);
      toast({
        title: post.status === 'published' ? 'Post published' : 'Draft saved',
        description:
        post.status === 'published' ?
        `“${post.title}” is now live at /news/${post.slug}.` :
        `“${post.title}” was saved. It stays hidden until you publish it.`
      });
    },
    onError: (error) => {
      toast({ variant: 'destructive', title: 'Could not save the post', description: error.message });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      refresh();
      toast({ title: 'Post deleted' });
    },
    onError: (error) => {
      toast({ variant: 'destructive', title: 'Could not delete the post', description: error.message });
    }
  });

  const posts = (postsQuery.data && postsQuery.data.posts) || [];
  const loadError = postsQuery.error;

  if (isLoadingUser) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>);

  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navigation />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <AdminAuthCard />
        </main>
        <Footer />
      </div>);

  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">Newsroom</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Signed in as {user.email}. Drafts stay private until you publish them.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition hover:border-[hsl(206_64%_49%)]">

                <ExternalLink className="h-4 w-4" />
                View newsroom
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </div>
          </div>

          {loadError &&
          <div className="mb-8 rounded-xl border border-destructive/40 bg-destructive/5 p-6">
              <h2 className="mb-2 font-semibold text-primary">Publishing is not available yet</h2>
              <p className="text-sm text-muted-foreground">{loadError.message}</p>
            </div>
          }

          {editing ?
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-primary">
                {editing.id ? 'Edit post' : 'New post'}
              </h2>
              <PostEditorForm
              key={editing.id || 'new'}
              post={editing.id ? editing : null}
              isSaving={saveMutation.isPending}
              onSave={(values) => saveMutation.mutate(values)}
              onCancel={() => setEditing(null)} />

            </div> :

          <>
              <Button
              onClick={() => setEditing({})}
              className="mb-8 font-semibold text-white"
              style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

                <FilePlus2 className="mr-2 h-4 w-4" />
                Write a new post
              </Button>

              {postsQuery.isLoading &&
            <div className="space-y-3">
                  {[0, 1, 2].map((index) =>
              <div key={index} className="h-20 animate-pulse rounded-xl bg-muted" />
              )}
                </div>
            }

              {!postsQuery.isLoading && !loadError && posts.length === 0 &&
            <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                  <h2 className="mb-2 text-lg font-semibold text-primary">No posts yet</h2>
                  <p className="text-sm text-muted-foreground">
                    Start with a press release or a company update — you can save it as a draft first.
                  </p>
                </div>
            }

              <div className="space-y-3">
                {posts.map((post) =>
              <div
                key={post.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-5">

                    <div className="min-w-0">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2 text-xs">
                        <span
                      className={`rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wide ${
                      post.status === 'published' ?
                      'bg-[hsl(206_64%_49%)] text-white' :
                      'bg-muted text-muted-foreground'}`
                      }>

                          {post.status === 'published' ? 'Live' : 'Draft'}
                        </span>
                        <span className="text-muted-foreground">{categoryLabel(post.category)}</span>
                        <span className="text-muted-foreground">
                          {post.status === 'published' ?
                      formatPostDate(post.publishedAt) :
                      `Edited ${formatPostDate(post.updatedAt)}`}
                        </span>
                      </div>
                      <p className="truncate font-semibold text-primary">{post.title}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {post.status === 'published' &&
                  <Link
                    to={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition hover:text-primary">

                          <ExternalLink className="h-4 w-4" />
                          View
                        </Link>
                  }
                      <Button variant="outline" size="sm" onClick={() => setEditing(post)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    disabled={deleteMutation.isPending}
                    onClick={() => {
                      const confirmed = window.confirm(
                        `Delete “${post.title}”? This cannot be undone.`
                      );
                      if (confirmed) {
                        deleteMutation.mutate(post.id);
                      }
                    }}>

                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
              )}
              </div>
            </>
          }
        </div>
      </main>
      <Footer />
    </div>);

}

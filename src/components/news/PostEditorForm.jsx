import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImagePlus, Loader2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NEWS_CATEGORIES, slugifyTitle } from '@/lib/news';
import { uploadCoverImage } from '@/lib/newsApi';

const EMPTY_POST = {
  title: '',
  slug: '',
  category: 'company-update',
  excerpt: '',
  body: '',
  coverImageUrl: '',
  coverImageAlt: '',
  authorName: ''
};

const QUILL_FORMATS = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'blockquote', 'link', 'image', 'video'];


export default function PostEditorForm({ post, onSave, onCancel, isSaving }) {
  const isNew = !post || !post.id;

  const [values, setValues] = useState(() => ({
    ...EMPTY_POST,
    ...(post || {}),
    coverImageUrl: (post && post.coverImageUrl) || '',
    slug: (post && post.slug) || ''
  }));
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  // Once the author edits the slug by hand, stop syncing it to the headline.
  const slugTouched = useRef(!isNew);
  const fileInputRef = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: [
      [{ header: [2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'link'],
      ['clean']]

    }),
    []
  );

  const setField = (field, value) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setValues((previous) => ({
      ...previous,
      title,
      slug: slugTouched.current ? previous.slug : slugifyTitle(title)
    }));
  };

  const handleSlugChange = (event) => {
    slugTouched.current = true;
    setField('slug', slugifyTitle(event.target.value));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    setUploadError('');
    setIsUploading(true);
    try {
      const url = await uploadCoverImage(file);
      setField('coverImageUrl', url);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const submit = (status) => {
    onSave({
      title: values.title,
      slug: values.slug || slugifyTitle(values.title),
      category: values.category,
      excerpt: values.excerpt,
      body: values.body,
      coverImageUrl: values.coverImageUrl,
      coverImageAlt: values.coverImageAlt,
      authorName: values.authorName,
      status
    });
  };

  const isPublished = post && post.status === 'published';
  const canSubmit = values.title.trim().length > 0 && !isSaving && !isUploading;

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        submit(isPublished ? 'published' : 'draft');
      }}>

      <div>
        <Label htmlFor="post-title">Headline</Label>
        <Input
          id="post-title"
          value={values.title}
          onChange={handleTitleChange}
          placeholder="Trek iQ partners with…"
          className="mt-2 text-lg"
          required />

      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="post-category">Category</Label>
          <Select value={values.category} onValueChange={(value) => setField('category', value)}>
            <SelectTrigger id="post-category" className="mt-2">
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              {NEWS_CATEGORIES.map((category) =>
              <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="post-author">Byline</Label>
          <Input
            id="post-author"
            value={values.authorName}
            onChange={(event) => setField('authorName', event.target.value)}
            placeholder="Trek iQ Team"
            className="mt-2" />

        </div>
      </div>

      <div>
        <Label htmlFor="post-slug">Web address</Label>
        <Input
          id="post-slug"
          value={values.slug}
          onChange={handleSlugChange}
          placeholder="auto-generated-from-headline"
          className="mt-2 font-mono text-sm" />

        <p className="mt-2 text-xs text-muted-foreground">
          This post will live at /news/{values.slug || 'your-headline'}
        </p>
      </div>

      <div>
        <Label htmlFor="post-excerpt">Summary</Label>
        <Textarea
          id="post-excerpt"
          value={values.excerpt}
          onChange={(event) => setField('excerpt', event.target.value)}
          placeholder="One or two sentences shown on the newsroom listing."
          rows={3}
          maxLength={500}
          className="mt-2" />

      </div>

      <div className="rounded-xl border border-border bg-muted/40 p-5">
        <Label>Cover image</Label>

        {values.coverImageUrl ?
        <div className="mt-3 space-y-4">
            <img
            src={values.coverImageUrl}
            alt={values.coverImageAlt || 'Cover preview'}
            className="max-h-56 w-full rounded-lg border border-border object-cover" />

            <div>
              <Label htmlFor="post-cover-alt" className="text-xs font-normal text-muted-foreground">
                Describe the image for screen reader users
              </Label>
              <Input
              id="post-cover-alt"
              value={values.coverImageAlt}
              onChange={(event) => setField('coverImageAlt', event.target.value)}
              placeholder="Two people reviewing an accessibility report on a tablet"
              className="mt-2" />

            </div>
            <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setField('coverImageUrl', '');
              setField('coverImageAlt', '');
            }}>

              <Trash2 className="mr-2 h-4 w-4" />
              Remove image
            </Button>
          </div> :

        <div className="mt-3">
            <input
            ref={fileInputRef}
            id="post-cover"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
            onChange={handleFileChange}
            className="sr-only" />

            <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            disabled={isUploading}>

              {isUploading ?
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> :

            <ImagePlus className="mr-2 h-4 w-4" />
            }
              {isUploading ? 'Uploading…' : 'Upload an image'}
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">
              JPEG, PNG, WebP, GIF or AVIF, up to 5 MB.
            </p>
          </div>
        }

        {uploadError &&
        <p className="mt-3 text-sm text-destructive">{uploadError}</p>
        }
      </div>

      <div>
        <Label htmlFor="post-body">Post</Label>
        <div className="news-editor mt-2">
          <ReactQuill
            id="post-body"
            theme="snow"
            value={values.body}
            onChange={(html) => setField('body', html)}
            modules={modules}
            formats={QUILL_FORMATS}
            placeholder="Write the announcement…" />

        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <Button
          type="button"
          disabled={!canSubmit}
          onClick={() => submit('published')}
          className="font-semibold text-white"
          style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPublished ? 'Save & keep live' : 'Publish now'}
        </Button>

        <Button type="button" variant="outline" disabled={!canSubmit} onClick={() => submit('draft')}>
          {isPublished ? 'Unpublish & save as draft' : 'Save as draft'}
        </Button>

        <Button type="button" variant="ghost" onClick={onCancel} disabled={isSaving}>
          Cancel
        </Button>
      </div>
    </form>);

}

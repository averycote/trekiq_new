export const NEWS_CATEGORIES = [
  { value: 'press-release', label: 'Press Release' },
  { value: 'company-update', label: 'Company Update' },
  { value: 'product', label: 'Product News' },
  { value: 'announcement', label: 'Announcement' }];


export function categoryLabel(value) {
  const match = NEWS_CATEGORIES.find((category) => category.value === value);
  return match ? match.label : 'News';
}

export function formatPostDate(value) {
  if (!value) {
    return '';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/** Falls back to the opening words of the body when no summary was written. */
export function postSummary(post) {
  if (post.excerpt) {
    return post.excerpt;
  }
  const text = String(post.body || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > 180 ? `${text.slice(0, 180)}…` : text;
}

/** Mirrors the server-side slug rules so the editor can preview the URL. */
export function slugifyTitle(input) {
  return String(input || '').
  toLowerCase().
  normalize('NFKD').
  replace(/[̀-ͯ]/g, '').
  replace(/['"]/g, '').
  replace(/[^a-z0-9]+/g, '-').
  replace(/^-+|-+$/g, '').
  slice(0, 80).
  replace(/-+$/g, '');
}

/** Error carrying the HTTP status so callers can branch on 404s. */
export class ApiError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   */
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/** True when a failed request was a 404 from our own API. */
export function isNotFoundError(error) {
  return error instanceof ApiError && error.status === 404;
}

async function request(url, options = {}) {
  const response = await fetch(url, {
    credentials: 'same-origin',
    ...options
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new ApiError(payload.error || 'Something went wrong. Please try again.', response.status);
  }

  return payload;
}

function jsonRequest(url, method, body) {
  return request(url, {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  });
}

/** Published posts, for the public newsroom. */
export async function fetchPublishedPosts() {
  const { posts } = await request('/api/news');
  return posts;
}

export async function fetchPublishedPost(slug) {
  const { post } = await request(`/api/news/${encodeURIComponent(slug)}`);
  return post;
}

/** Every post including drafts. Requires a signed-in Identity user. */
export async function fetchAllPosts() {
  return request('/api/admin/news');
}

export function createPost(values) {
  return jsonRequest('/api/admin/news', 'POST', values);
}

export function updatePost(id, values) {
  return jsonRequest(`/api/admin/news/${id}`, 'PUT', values);
}

export function deletePost(id) {
  return request(`/api/admin/news/${id}`, { method: 'DELETE' });
}

export async function uploadCoverImage(file) {
  const body = new FormData();
  body.append('file', file);
  const { url } = await request('/api/admin/uploads', { method: 'POST', body });
  return url;
}

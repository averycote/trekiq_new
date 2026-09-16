import { handleAuthCallback } from '@netlify/identity';

let pending = null;

/**
 * Netlify Identity delivers invite, recovery, and confirmation links as a URL
 * hash that may land on any page. The result is cached so both the app-level
 * handler and the admin page can read the same outcome.
 */
export function consumeAuthCallback() {
  if (!pending) {
    pending = handleAuthCallback().catch((error) => ({
      type: 'error',
      message: error.message || 'That link could not be verified.'
    }));
  }
  return pending;
}

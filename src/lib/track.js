// Lightweight conversion tracking. Pushes to Google Tag Manager / GA4 and
// Plausible if either is installed on the page; otherwise it's a no-op.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.plausible === 'function') window.plausible(name, { props: params });
  } catch {
    // Tracking must never break the page.
  }
}

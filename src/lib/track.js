// Lightweight conversion tracking. Pushes to Google Tag Manager / GA4 and
// Plausible and Microsoft Clarity if installed on the page; otherwise it's a no-op.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.plausible === 'function') window.plausible(name, { props: params });
    if (typeof window.clarity === 'function') window.clarity('event', name);
  } catch {
    // Tracking must never break the page.
  }
}

// Remember how the visitor arrived (UTM tags, or the referring site) for this
// browser session, so the booking form can pass it to Calendly even after the
// visitor has clicked around a few pages.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const SOURCE_KEY = 'trekiq_traffic_source';

export function rememberTrafficSource() {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(SOURCE_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const source = {};
    UTM_KEYS.forEach((k) => {
      if (params.get(k)) source[k] = params.get(k);
    });
    if (!source.utm_source && document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '');
      if (host && !host.endsWith('trekiq.ca')) {
        source.utm_source = host;
        source.utm_medium = 'referral';
      }
    }
    sessionStorage.setItem(SOURCE_KEY, JSON.stringify(source));
  } catch {
    // Storage can be blocked; attribution is a nice-to-have.
  }
}

export function getTrafficSource() {
  try {
    return JSON.parse(sessionStorage.getItem(SOURCE_KEY) || '{}');
  } catch {
    return {};
  }
}

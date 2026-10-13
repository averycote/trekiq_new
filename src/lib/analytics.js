// Loads site analytics. Each tool is switched on by setting its ID as a
// Netlify environment variable (Site configuration > Environment variables),
// so nothing loads until an ID is set and no code change is needed after.
//
//   VITE_GA4_ID      Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX
//   VITE_CLARITY_ID  Microsoft Clarity project ID (session recordings, heatmaps)
//
// trackEvent() in ./track.js already sends demo_cta_click and demo_booked to
// whichever of these is present.

function loadScript(src) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  const ga4Id = import.meta.env.VITE_GA4_ID;
  if (ga4Id) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // GA4 enhanced measurement records client-side route changes as page views.
    window.gtag('config', ga4Id);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  }

  const clarityId = import.meta.env.VITE_CLARITY_ID;
  if (clarityId) {
    window.clarity =
      window.clarity ||
      function clarity() {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
    loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`);
  }
}

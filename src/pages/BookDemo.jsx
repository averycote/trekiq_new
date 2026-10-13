import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Clock, Video } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { demoAgenda } from '../components/sections/FinalCTA';
import { trackEvent, getTrafficSource } from '@/lib/track';

const CALENDLY_URL = 'https://calendly.com/founder-trekiq-qpue/30min';

function calendlyUrl() {
  const params = new URLSearchParams({ hide_gdpr_banner: '1', ...getTrafficSource() });
  return `${CALENDLY_URL}?${params.toString()}`;
}

export default function BookDemo() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // The Calendly script only scans the page for widgets when it first loads.
    // On a single-page site, coming back to this page later would leave an
    // empty box, so we draw the widget ourselves every time the page mounts.
    const render = () => {
      const el = widgetRef.current;
      if (!el || !window.Calendly) return;
      el.innerHTML = '';
      window.Calendly.initInlineWidget({ url: calendlyUrl(), parentElement: el });
    };

    let script = document.getElementById('calendly-script');
    if (window.Calendly) {
      render();
    } else {
      if (!script) {
        script = document.createElement('script');
        script.id = 'calendly-script';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener('load', render);
    }

    // Calendly posts messages to the parent page; a scheduled event is the
    // conversion we care about.
    const onMessage = (e) => {
      if (e.origin !== 'https://calendly.com') return;
      if (e.data?.event === 'calendly.event_scheduled') trackEvent('demo_booked', getTrafficSource());
    };
    window.addEventListener('message', onMessage);
    return () => {
      script?.removeEventListener('load', render);
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--cream))] flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--primary))] mb-4">
              See the copilot on a space like yours
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
              A 30-minute video call. We'll show you how one phone and one walk-through gets you from "where do we stand?" to "here's the fix and who pays for it."
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-[hsl(var(--primary))] mb-8">
              <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-[hsl(var(--secondary))]" /> 30 minutes</span>
              <span className="inline-flex items-center gap-1.5"><Video className="w-4 h-4 text-[hsl(var(--secondary))]" /> Video call</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))] mb-4">On the call you'll</p>
            <ul className="space-y-3">
              {demoAgenda.map((item) =>
              <li key={item} className="flex items-start gap-3 text-[hsl(var(--primary))]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[hsl(var(--secondary))]" aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>
            <p className="mt-8 text-sm text-[hsl(var(--muted-foreground))]">
              Prefer email? <a href="mailto:hello@trekiq.ca" className="font-semibold text-[hsl(var(--secondary))] underline underline-offset-2">hello@trekiq.ca</a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div
              ref={widgetRef}
              className="rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-[hsl(var(--border))]"
              style={{ minWidth: '320px', height: '720px' }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>);
}

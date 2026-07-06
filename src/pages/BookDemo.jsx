import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CALENDLY_URL = 'https://calendly.com/founder-trekiq-qpue/30min';

export default function BookDemo() {
  useEffect(() => {
    // Load Calendly widget script once
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-3">Book a Demo</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">See how Trek iQ helps your organization document accessibility, improve planning, and build visitor confidence. Pick a time that works for you below.

            </p>
          </div>
          <div
            className="calendly-inline-widget rounded-xl overflow-hidden border border-border shadow-sm bg-card"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }} />
          
        </div>
      </main>
      <Footer />
    </div>);

}
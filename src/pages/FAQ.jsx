import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQHero from '../components/sections/FAQHero';
import FAQAccordion from '../components/sections/FAQAccordion';
import FAQCta from '../components/sections/FAQCta';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <FAQHero />
        <FAQAccordion />
        <FAQCta />
      </main>
      <Footer />
    </div>
  );
}

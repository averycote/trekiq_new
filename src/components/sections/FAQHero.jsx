import React from 'react';

export default function FAQHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Everything you need to know about TrekIQ, from how the audit process works to pricing, timeline, and compliance impact.
        </p>
      </div>
    </section>
  );
}
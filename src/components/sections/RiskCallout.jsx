import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function RiskCallout() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <TrendingUp className="w-16 h-16 text-amber-400 flex-shrink-0" />
          <div>
            <h3 className="text-3xl font-bold mb-3">
              Accessibility is a Business Opportunity
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Organizations that communicate accessibility proactively build trust long before regulations require it. Leading organizations don't wait for legislation to define the visitor experience.
            </p>
            <p className="text-base opacity-80">
              TrekIQ helps you turn accessibility transparency into a competitive advantage—improving visitor confidence, supporting funding applications, and strengthening your reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
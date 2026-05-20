import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function RiskCallout() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <AlertTriangle className="w-16 h-16 text-amber-400 flex-shrink-0" />
          <div>
            <h3 className="text-3xl font-bold mb-3">
              The 2030 Compliance Mandate
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Nova Scotia and provinces across Canada are enforcing accessibility compliance by 2030. Non-compliance carries penalties up to <span className="font-bold">$250,000+</span>.
            </p>
            <p className="text-base opacity-80">
              Don't wait. Automate today and turn compliance into a competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
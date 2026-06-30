import React from 'react';
import { Card } from '@/components/ui/card';

export default function WhyVerifyHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Our Approach
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          TrekIQ is an Accessibility Documentation Platform. We help organizations confidently understand, document, improve, and communicate the accessibility of their physical spaces—leading to increased visitor confidence and better organizational decisions.
        </p>

        <div className="space-y-8">
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-4">The Problem</h3>
            <p className="text-foreground leading-relaxed">
              Organizations struggle to accurately document and communicate accessibility information. Information is fragmented, inconsistent, or outdated—creating uncertainty for visitors and unnecessary workload for staff.
            </p>
          </Card>

          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-4">Why It Matters</h3>
            <p className="text-foreground leading-relaxed">
              Poor accessibility information creates uncertainty, increases staff workload, reduces visitor confidence, and limits participation. When people can't find the information they need, they simply don't visit.
            </p>
          </Card>

          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-4">How Trek IQ Helps</h3>
            <p className="text-foreground leading-relaxed">
              TrekIQ creates photo-backed accessibility documentation that identifies barriers, recommends improvements, and helps organizations communicate accessibility clearly to the people who need it.
            </p>
          </Card>

          <Card className="p-8 bg-white border-2 border-secondary">
            <h3 className="text-2xl font-bold text-secondary mb-4">What Changes Afterwards</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-foreground">Visitors know what to expect before they arrive</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-foreground">Organizations plan improvements more effectively</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-foreground">Accessibility information becomes easier to maintain and communicate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-foreground">Staff spend less time answering repetitive questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-foreground">Organizations become recognized as accessibility leaders</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
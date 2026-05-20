import React from 'react';
import { Card } from '@/components/ui/card';

export default function WhyVerifyHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Why Accessibility Verification Matters
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Accessibility compliance isn't just about legal risk—it's about unlocking a $21B market. When you automate audits and create a verified public profile, you save money while attracting disability travelers who currently have no way to trust that your venue is truly accessible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-4">For Your Operations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Reduce audit costs by 80%+</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Automate compliance documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Stay ahead of 2030 mandate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Real-time compliance tracking</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-4">For Your Market</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Reach 86% of disability travelers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Differentiate from competitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Photo-backed verified profile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-foreground">Attract new guest segments</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
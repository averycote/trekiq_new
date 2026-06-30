import React from 'react';
import { Card } from '@/components/ui/card';

export default function MarketOpportunity() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          The Opportunity is Massive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">$21B</div>
            <p className="text-lg font-semibold text-white">Combined spending power of people with disabilities in Canada</p>
          </Card>
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">86%</div>
            <p className="text-lg font-semibold text-white">Avoided venues due to lack of information</p>
          </Card>
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">1 in 4</div>
            <p className="text-lg font-semibold text-white">Canadians have a disability</p>
          </Card>
        </div>

        <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20">
          <h3 className="text-2xl font-bold mb-4 text-white">Our Findings</h3>
          <p className="text-lg leading-relaxed opacity-90 text-white">
            Our market research in Halifax revealed that 86% of people with disabilities have actively avoided venues or attractions in the past year simply because they had no way to confirm accessibility features beforehand. This isn't just an information gap—it's lost participation, lost revenue, and missed connections. TrekIQ helps close that gap.
          </p>
        </Card>
      </div>
    </section>
  );
}
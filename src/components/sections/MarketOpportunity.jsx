import React from 'react';
import { Card } from '@/components/ui/card';

export default function MarketOpportunity() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          The Disability Travel Market is Massive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">$21B</div>
            <p className="text-lg font-semibold text-[#ffffff]">Annual visitor economy potential</p>
          </Card>
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">86%</div>
            <p className="text-lg font-semibold text-[#ffffff]">Avoided venues due to lack of info</p>
          </Card>
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center">
            <div className="text-5xl font-bold text-amber-400 mb-4">1 in 4</div>
            <p className="text-lg font-semibold text-[#ffffff]">Canadians have a disability</p>
          </Card>
        </div>

        <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20">
          <h3 className="text-2xl font-bold mb-4 text-[#fff5f5]">Our Findings</h3>
          <p className="text-lg leading-relaxed opacity-90 text-[#ffffff]">Our market research in Halifax revealed that 86% of people with disabilities have actively avoided venues or attractions in the past year simply because they had no way to verify accessibility features beforehand. This isn't a compliance problem—it's a revenue problem. TrekIQ solves both at once.

          </p>
        </Card>
      </div>
    </section>);

}
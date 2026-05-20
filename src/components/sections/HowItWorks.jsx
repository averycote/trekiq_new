import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
  {
    number: '01',
    title: 'Submit Venue Details',
    description: 'Provide basic information about your venue—location, type, current accessibility features.'
  },
  {
    number: '02',
    title: 'Automated Audit & Verification',
    description: "Trek IQ verifies your accessibility data with photo documentation and compliance reporting."
  },
  {
    number: '03',
    title: 'Live Public Profile',
    description: "Your verified accessibility profile goes live on Trek IQ, discoverable by 86% of travellers with disabilities."
  }];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Three simple steps to automated accessibility compliance and market growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Lines (desktop only) */}
          <div className="hidden md:block absolute top-32 left-1/3 right-1/3 h-1 bg-gradient-to-r from-amber-400 to-amber-400/0"></div>
          <div className="hidden md:block absolute top-32 right-1/3 left-2/3 h-1 bg-gradient-to-l from-amber-400 to-amber-400/0"></div>

          {steps.map((step, idx) =>
          <Card key={idx} className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm relative z-10">
              <div className="text-5xl font-bold text-amber-400 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3 text-[#ffffff]">{step.title}</h3>
              <p className="opacity-90 leading-relaxed text-[#ffffff]">{step.description}</p>
            </Card>
          )}
        </div>
      </div>
    </section>);

}
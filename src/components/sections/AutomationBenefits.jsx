import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export default function AutomationBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Reduce Manual Documentation',
      description: 'Replace months of expensive, manual accessibility documentation with photo-backed accessibility profiles built in days.'
    },
    {
      icon: Users,
      title: 'Improve Visitor Confidence',
      description: 'Give visitors the information they need to plan their visit with confidence, reducing uncertainty and increasing participation.'
    },
    {
      icon: TrendingUp,
      title: 'Prioritize Improvements',
      description: 'Identify barriers and plan accessibility upgrades with clarity. TrekIQ helps you match improvements to grant funding opportunities.'
    },
    {
      icon: ShieldCheck,
      title: 'Strengthen Accessibility Transparency',
      description: 'Build trust with visitors, patients, guests, and event planners through clear, photo-backed accessibility communication.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          What Changes Afterwards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-8 bg-background">
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
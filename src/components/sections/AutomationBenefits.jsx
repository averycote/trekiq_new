import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart3, Clock, TrendingUp, Shield } from 'lucide-react';

export default function AutomationBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Months of Work',
      description: 'What used to take 3–6 months of manual audits now takes days with TrekIQ automated verification.'
    },
    {
      icon: BarChart3,
      title: 'Reduce Costs by 80%+',
      description: 'No need for expensive external accessibility consultants. TrekIQ automates the heavy lifting.'
    },
    {
      icon: TrendingUp,
      title: 'Unlock Revenue Growth',
      description: 'Attract the $21B disability travel market by showing a verified, photo-backed accessibility profile.'
    },
    {
      icon: Shield,
      title: 'Compliance Peace of Mind',
      description: 'Real-time documentation and automated reporting keep you audit-ready at all times.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">
          The Power of Automation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card key={idx} className="p-8 bg-background">
                <Icon className="w-12 h-12 text-teal-500 mb-4" />
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
import React from 'react';
import { Card } from '@/components/ui/card';

export default function PartnerGrid() {
  const partners = [
    {
      name: 'Tourism Nova Scotia',
      category: 'Strategic Partner',
      logo: '🏛️',
      description: 'Amplifying accessibility across Nova Scotia\'s visitor economy and tourism infrastructure.'
    },
    {
      name: 'reachAbility',
      category: 'Accessibility Advocacy',
      logo: '🤝',
      description: 'Championing accessibility rights and ensuring our solutions serve the disability community authentically.'
    },
    {
      name: 'Propel ICT',
      category: 'Innovation Partner',
      logo: '🚀',
      description: 'Accelerating TrekIQ\'s growth and market reach across Atlantic Canada and beyond.'
    },
    {
      name: 'NSCC SPRINT',
      category: 'Education & Training',
      logo: '📚',
      description: 'Building workforce development and skills training around accessibility compliance and automation.'
    },
    {
      name: 'Bentley Systems',
      category: 'Technology Partner',
      logo: '🏗️',
      description: 'Providing advanced venue mapping and infrastructure data for verified accessibility profiling.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <Card key={idx} className="p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-bold text-primary mb-1">{partner.name}</h3>
              <p className="text-sm font-semibold text-teal-500 mb-4">{partner.category}</p>
              <p className="text-foreground leading-relaxed">{partner.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
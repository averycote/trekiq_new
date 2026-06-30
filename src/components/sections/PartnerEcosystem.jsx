import React from 'react';
import { Card } from '@/components/ui/card';

export default function PartnerEcosystem() {
  const partners = [
  { name: 'Tourism Nova Scotia', category: 'Strategic Partner', logo: '🏛️' },
  { name: 'reachAbility', category: 'Accessibility Leader', logo: '🤝' },
  { name: 'Propel ICT', category: 'Innovation Partner', logo: '🚀' },
  { name: 'NSCC SPRINT', category: 'Education Partner', logo: '📚' },
  { name: 'Bentley Systems', category: 'Technology Partner', logo: '🏗️' }];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Backed by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrekIQ is built on a foundation of trusted partnerships across tourism, accessibility, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) =>
          <Card key={idx} className="p-8 bg-white text-center">
              <div className="text-5xl mb-4">{partner.logo}</div>
              <h3 className="text-lg font-bold text-primary mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.category}</p>
            </Card>
          )}
        </div>
      </div>
    </section>);

}
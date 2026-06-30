import React from 'react';
import { Card } from '@/components/ui/card';

export default function PartnerGrid() {
  const partners = [
    {
      name: 'League of Innovators',
      category: 'Accelerator Partner',
      logo: 'https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/619c3a3cd_image.png',
      description: 'Canada\'s largest accelerator for founders under 30, supporting Trek IQ\'s growth and innovation journey.'
    },
    {
      name: 'reachAbility',
      category: 'Accessibility Advocacy',
      logo: 'https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/8ac153fd7_image.png',
      description: 'Championing accessibility rights and ensuring our solutions serve the disability community authentically.'
    },
    {
      name: 'Propel ICT',
      category: 'Innovation Partner',
      logo: 'https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/40de3fb98_image.png',
      description: 'Accelerating TrekIQ\'s growth and market reach across Atlantic Canada and beyond.'
    },
    {
      name: 'NSCC Applied Research',
      category: 'Education & Training',
      logo: 'https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/d49140cad_image.png',
      description: 'Building workforce development and skills training around accessibility compliance and automation.'
    },
    {
      name: 'Volta',
      category: 'Innovation Hub',
      logo: 'https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/dca207546_image.png',
      description: 'Trek IQ is a proud Volta resident, part of Atlantic Canada\'s premier innovation and startup community.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <Card key={idx} className="p-8 bg-background hover:shadow-lg transition-shadow">
              <div className="mb-4 h-16 flex items-center">
                {partner.logo.startsWith('http') ? (
                  <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-16 w-auto" />
                ) : (
                  <span className="text-5xl">{partner.logo}</span>
                )}
              </div>
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
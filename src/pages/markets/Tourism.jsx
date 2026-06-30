import React from 'react';
import MarketPageTemplate from '../../components/MarketPageTemplate';

export default function Tourism() {
  const market = {
    sector: 'Tourism Attractions',
    icon: '🎡',
    coreMessage: 'Help every visitor know what to expect before they arrive.',
    heroSubtext: 'Replace fragmented accessibility information with photo-backed accessibility profiles that improve visitor confidence and drive attendance.',
    primaryPain: 'Visitors lack reliable accessibility information.',
    primaryOutcome: 'Increase visitor confidence.',
    valueProposition: 'Replace fragmented accessibility information with accessibility profiles that improve visitor confidence before arrival.',
    benefits: [
      'Reduce repetitive accessibility inquiries from staff',
      'Demonstrate accessibility leadership in your community',
      'Attract visitors who currently avoid venues due to uncertainty',
      'Prioritize accessibility improvements with clear documentation'
    ],
    stakeholders: [
      {
        role: 'Visitor Experience Manager',
        priority: 'Reducing accessibility inquiries',
        message: 'Stop answering the same accessibility questions every day. Give visitors the information they need upfront.'
      },
      {
        role: 'Director of Operations',
        priority: 'Operational efficiency',
        message: 'Centralize accessibility information and prioritize improvements with confidence.'
      },
      {
        role: 'Executive Director',
        priority: 'Community impact and attendance',
        message: 'Demonstrate accessibility leadership while improving visitor confidence and growing attendance.'
      }
    ]
  };

  return <MarketPageTemplate market={market} />;
}
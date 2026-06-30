import React from 'react';
import MarketPageTemplate from '../../components/MarketPageTemplate';

export default function Mice() {
  const market = {
    sector: 'MICE Venues',
    icon: '🏢',
    coreMessage: 'Give event planners photo-backed accessibility information before they book.',
    heroSubtext: 'Help event planners choose your venue with confidence through clear, photo-backed accessibility documentation.',
    primaryPain: 'Event planners require accessibility information.',
    primaryOutcome: 'Win more events and improve planner confidence.',
    valueProposition: 'Help event planners choose your venue with confidence through photo-backed accessibility information.',
    benefits: [
      'Respond to planner accessibility requests faster and with confidence',
      'Standardize accessibility information across your venue',
      'Make accessibility a competitive advantage for attracting events',
      'Reduce onboarding friction for event planners'
    ],
    stakeholders: [
      {
        role: 'Venue Operations Manager',
        priority: 'Planner requests',
        message: 'Respond to planner accessibility requests faster and with confidence.'
      },
      {
        role: 'Director of Operations',
        priority: 'Venue competitiveness',
        message: 'Standardize accessibility information across your venue to stand out in a competitive market.'
      },
      {
        role: 'General Manager',
        priority: 'Revenue growth',
        message: 'Make accessibility a competitive advantage for attracting events and growing revenue.'
      }
    ]
  };

  return <MarketPageTemplate market={market} />;
}
import React from 'react';
import MarketPageTemplate from '../../components/MarketPageTemplate';

export default function IndependentHotels() {
  const market = {
    sector: 'Independent Hotels',
    icon: '🏨',
    coreMessage: 'Help guests book with confidence by providing photo-backed accessibility information.',
    heroSubtext: 'Turn accessibility transparency into a competitive advantage that improves booking confidence and reduces abandoned reservations.',
    primaryPain: 'Guests abandon bookings due to uncertainty.',
    primaryOutcome: 'Increase booking confidence.',
    valueProposition: 'Turn accessibility transparency into a competitive advantage that improves booking confidence.',
    benefits: [
      'Give every guest confidence before they arrive',
      'Standardize accessibility information across your property',
      'Build trust and attract more guests through transparency',
      'Reduce booking abandonment due to accessibility uncertainty'
    ],
    stakeholders: [
      {
        role: 'General Manager',
        priority: 'Guest satisfaction',
        message: 'Give every guest confidence before they arrive with clear, photo-backed accessibility information.'
      },
      {
        role: 'Operations Lead',
        priority: 'Operational consistency',
        message: 'Standardize accessibility information across your property for consistent guest experiences.'
      },
      {
        role: 'Owner',
        priority: 'Occupancy and reputation',
        message: 'Accessibility transparency builds trust and attracts more guests, improving occupancy and reputation.'
      }
    ]
  };

  return <MarketPageTemplate market={market} />;
}
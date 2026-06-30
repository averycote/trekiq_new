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
    metrics: [
      { value: '88%', label: 'Booking Confidence', description: 'Guests feel more confident booking when accessibility is clearly documented.' },
      { value: '1 in 4', label: 'Guests with Disabilities', description: 'A quarter of potential guests benefit from transparent accessibility information.' },
      { value: '45%', label: 'Fewer Abandoned Bookings', description: 'Clear accessibility info reduces booking abandonment from accessibility uncertainty.' },
      { value: '3x', label: 'More Likely to Book', description: 'Guests are significantly more likely to book properties with documented accessibility.' }
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
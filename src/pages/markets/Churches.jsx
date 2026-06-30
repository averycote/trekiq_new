import React from 'react';
import MarketPageTemplate from '../../components/MarketPageTemplate';

export default function Churches() {
  const market = {
    sector: 'Churches & Faith Organizations',
    icon: '⛪',
    coreMessage: 'Create a welcoming experience for every member of your community.',
    heroSubtext: 'Document and communicate your accessibility features to help every member of your congregation participate with confidence.',
    primaryPain: 'Aging congregations experience accessibility barriers.',
    primaryOutcome: 'Increase participation and inclusion.',
    valueProposition: 'Create a welcoming environment for all by documenting and communicating your accessibility features to help every member of your congregation participate with confidence.',
    benefits: [
      'Simplify accessibility planning and documentation',
      'Help every member of your congregation participate with confidence',
      'Invest in accessibility improvements that support future funding opportunities',
      'Create a practical improvement roadmap for long-term inclusion'
    ],
    metrics: [
      { value: '90%', label: 'Feel Welcomed', description: 'Congregation members feel more welcomed when accessibility is clearly communicated.' },
      { value: '1 in 3', label: 'Need Accessibility', description: 'Many congregations have members who rely on accessibility features to participate.' },
      { value: '70%', label: 'Greater Participation', description: 'Clear accessibility information encourages fuller participation across all members.' },
      { value: '2x', label: 'Community Reach', description: 'Documenting accessibility helps extend your welcome to the broader community.' }
    ],
    stakeholders: [
      {
        role: 'Church Administrator',
        priority: 'Facility management',
        message: 'Simplify accessibility planning and documentation with a clear, maintainable profile.'
      },
      {
        role: 'Pastor',
        priority: 'Community inclusion',
        message: 'Help every member of your congregation participate with confidence, regardless of ability.'
      },
      {
        role: 'Board / Stewardship',
        priority: 'Investment and funding',
        message: 'Invest in accessibility improvements that support your community and future funding opportunities.'
      }
    ]
  };

  return <MarketPageTemplate market={market} />;
}
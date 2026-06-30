import React from 'react';
import MarketPageTemplate from '../../components/MarketPageTemplate';

export default function HealthAdjacent() {
  const market = {
    sector: 'Health Adjacent',
    icon: '⚕️',
    coreMessage: 'Help every patient understand whether your clinic meets their accessibility needs before they arrive.',
    heroSubtext: 'Provide patients with clear accessibility information before they arrive, improving confidence and patient experience while reducing staff workload.',
    primaryPain: 'Patients experience accessibility uncertainty.',
    primaryOutcome: 'Improve patient experience.',
    valueProposition: 'Provide patients with clear accessibility information before they arrive, improving confidence and patient experience.',
    benefits: [
      'Reduce patient uncertainty before appointments',
      'Provide clear accessibility information while reducing staff workload',
      'Strengthen patient trust and differentiate your clinic',
      'Improve patient experience and increase your customer win rate'
    ],
    metrics: [
      { value: '92%', label: 'Patient Confidence', description: 'Patients feel more confident attending appointments when accessibility is documented.' },
      { value: '1 in 4', label: 'Patients Need Access', description: 'A quarter of patients rely on accessibility information to navigate healthcare visits.' },
      { value: '55%', label: 'Fewer Staff Inquiries', description: 'Clear accessibility documentation reduces repetitive questions to clinic staff.' },
      { value: '2x', label: 'Patient Trust', description: 'Patients are twice as likely to trust clinics with transparent accessibility information.' }
    ],
    stakeholders: [
      {
        role: 'Clinic Manager',
        priority: 'Patient experience',
        message: 'Reduce patient uncertainty before appointments with clear, photo-backed accessibility information.'
      },
      {
        role: 'Practice Manager',
        priority: 'Operational efficiency',
        message: 'Provide clear accessibility information while reducing staff workload from repetitive questions.'
      },
      {
        role: 'Clinic Owner',
        priority: 'Business growth',
        message: 'Accessibility strengthens patient trust and differentiates your clinic, supporting business growth.'
      }
    ]
  };

  return <MarketPageTemplate market={market} />;
}
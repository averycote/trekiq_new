import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function SegmentDetails() {
  const segments = [
    {
      title: 'Tourism Attractions',
      icon: '🎡',
      outcome: 'Increase visitor confidence',
      pain: 'Visitors lack reliable accessibility information.',
      description: 'Help every visitor know what to expect before they arrive.',
      path: '/markets/tourism'
    },
    {
      title: 'MICE Venues',
      icon: '🏢',
      outcome: 'Win more events and improve planner confidence',
      pain: 'Event planners require accessibility information.',
      description: 'Give event planners photo-backed accessibility information before they book.',
      path: '/markets/mice'
    },
    {
      title: 'Churches',
      icon: '⛪',
      outcome: 'Increase participation and inclusion',
      pain: 'Aging congregations experience accessibility barriers.',
      description: 'Create a welcoming experience for every member of your community.',
      path: '/markets/churches'
    },
    {
      title: 'Independent Hotels',
      icon: '🏨',
      outcome: 'Increase booking confidence',
      pain: 'Guests abandon bookings due to uncertainty.',
      description: 'Help guests book with confidence by providing photo-backed accessibility information.',
      path: '/markets/independent-hotels'
    },
    {
      title: 'Health Adjacent',
      icon: '⚕️',
      outcome: 'Improve patient experience',
      pain: 'Patients experience accessibility uncertainty.',
      description: 'Help every patient understand whether your clinic meets their accessibility needs before they arrive.',
      path: '/markets/health-adjacent'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, idx) => (
            <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-6xl mb-4">{segment.icon}</div>
              <h2 className="text-2xl font-bold text-primary mb-2">{segment.title}</h2>
              <p className="text-lg font-semibold text-secondary mb-4">{segment.outcome}</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>The Challenge:</strong> {segment.pain}</p>
              <p className="text-foreground mb-6 leading-relaxed flex-grow">{segment.description}</p>
              <Link to={segment.path}>
                <Button className="w-full flex items-center justify-center gap-2" style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
                  Explore This Market
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
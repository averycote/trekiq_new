import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function MarketSegments() {
  const segments = [
  {
    title: 'Tourism Attractions',
    icon: '🎡',
    outcome: 'Increase visitor confidence',
    description: 'Help every visitor know what to expect before they arrive.',
    path: '/markets/tourism'
  },
  {
    title: 'MICE Venues',
    icon: '🏢',
    outcome: 'Win more events',
    description: 'Give event planners photo-backed accessibility information before they book.',
    path: '/markets/mice'
  },
  {
    title: 'Churches',
    icon: '⛪',
    outcome: 'Increase participation',
    description: 'Create a welcoming experience for every member of your community.',
    path: '/markets/churches'
  },
  {
    title: 'Independent Hotels',
    icon: '🏨',
    outcome: 'Increase booking confidence',
    description: 'Help guests book with confidence by providing photo-backed accessibility information.',
    path: '/markets/independent-hotels'
  },
  {
    title: 'Health Adjacent',
    icon: '⚕️',
    outcome: 'Improve patient experience',
    description: 'Help every patient understand whether your clinic meets their accessibility needs before they arrive.',
    path: '/markets/health-adjacent'
  }];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Built for Your Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrekIQ serves organizations across the visitor economy. Find your sector and see how accessibility documentation drives your outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, idx) =>
          <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow flex flex-col">
              <div className="text-6xl mb-4">{segment.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{segment.title}</h3>
              <p className="text-lg font-semibold text-secondary mb-4">{segment.outcome}</p>
              <p className="text-foreground mb-6 leading-relaxed flex-grow">{segment.description}</p>
              <Link to={segment.path}>
                <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2">
                
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          )}
        </div>
      </div>
    </section>);

}
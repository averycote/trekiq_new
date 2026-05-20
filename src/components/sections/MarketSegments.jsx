import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function MarketSegments() {
  const segments = [
    {
      title: 'Hotels & Accommodations',
      icon: '🏨',
      stat: '$8.2B annual market',
      description: 'Compete for disability travelers and corporate groups requiring verified accessibility.'
    },
    {
      title: 'MICE Venues',
      icon: '🏢',
      stat: '$6.5B annual market',
      description: 'Stand out in convention planning with documented, verified accessibility features.'
    },
    {
      title: 'Major Attractions',
      icon: '🎡',
      stat: '$6.3B annual market',
      description: 'Attract 86% of visitors with disabilities who currently avoid venues due to lack of information.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Built for Your Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrekIQ serves the $21B visitor economy. Find your venue type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, idx) => (
            <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">{segment.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{segment.title}</h3>
              <p className="text-lg font-semibold text-teal-500 mb-4">{segment.stat}</p>
              <p className="text-foreground mb-6 leading-relaxed">{segment.description}</p>
              <Link to="/markets">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  Learn More
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
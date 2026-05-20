import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function SegmentDetails() {
  const segments = [
    {
      title: 'Hotels & Accommodations',
      icon: '🏨',
      market: '$8.2B annual market',
      painPoints: [
        'Manual accessibility verification for room types is time-consuming',
        'Guests with disabilities have limited trusted information',
        'Competitors lack differentiation',
        'Compliance documentation is complex'
      ],
      solution: 'TrekIQ automates room-level accessibility audits and creates a verified public profile that attracts disability travelers directly.',
      stats: [
        { label: 'Average hotel loses', value: '$450K/year' },
        { label: 'From missed bookings', value: 'Due to accessibility uncertainty' }
      ]
    },
    {
      title: 'MICE Venues',
      icon: '🏢',
      market: '$6.5B annual market',
      painPoints: [
        'Convention planners require accessibility documentation upfront',
        'Outdated ADA/ACA checklists don\'t build trust',
        'Complex venue layouts are hard to communicate',
        'Manual reporting is slow and inefficient'
      ],
      solution: 'TrekIQ provides verified accessibility profiles with photo documentation that reassures event planners and reduces onboarding friction.',
      stats: [
        { label: 'Planners requesting', value: '73%' },
        { label: 'Verified accessibility info', value: 'Before committing to venues' }
      ]
    },
    {
      title: 'Major Attractions',
      icon: '🎡',
      market: '$6.3B annual market',
      painPoints: [
        'Attractions don\'t have unified accessibility messaging',
        'Guests with disabilities avoid without verified info',
        '86% of the market is being lost',
        'Seasonal changes to accessibility aren\'t documented'
      ],
      solution: 'TrekIQ makes your attraction discoverable by disability travelers with a live, verified, real-time accessibility profile.',
      stats: [
        { label: 'Disability travelers', value: '86%' },
        { label: 'Who avoid attractions', value: 'Due to accessibility uncertainty' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {segments.map((segment, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Alternate layout for visual rhythm */}
            {idx % 2 === 0 ? (
              <>
                <div>
                  <div className="text-6xl mb-4">{segment.icon}</div>
                  <h2 className="text-4xl font-bold text-primary mb-2">{segment.title}</h2>
                  <p className="text-lg font-semibold text-teal-500 mb-8">{segment.market}</p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">The Challenge</h3>
                  <ul className="space-y-2 mb-8">
                    {segment.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/book-demo">
                    <Button className="w-full sm:w-auto flex items-center justify-center gap-2" style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
                      Learn How TrekIQ Helps
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <Card className="p-8 bg-white">
                  <h3 className="text-xl font-bold text-teal-500 mb-6">The TrekIQ Solution</h3>
                  <p className="text-foreground mb-8 leading-relaxed">{segment.solution}</p>
                  <div className="space-y-4">
                    {segment.stats.map((stat, i) => (
                      <div key={i} className="border-b border-border pb-4">
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            ) : (
              <>
                <Card className="p-8 bg-white order-last lg:order-first">
                  <h3 className="text-xl font-bold text-teal-500 mb-6">The TrekIQ Solution</h3>
                  <p className="text-foreground mb-8 leading-relaxed">{segment.solution}</p>
                  <div className="space-y-4">
                    {segment.stats.map((stat, i) => (
                      <div key={i} className="border-b border-border pb-4">
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <div>
                  <div className="text-6xl mb-4">{segment.icon}</div>
                  <h2 className="text-4xl font-bold text-primary mb-2">{segment.title}</h2>
                  <p className="text-lg font-semibold text-teal-500 mb-8">{segment.market}</p>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">The Challenge</h3>
                  <ul className="space-y-2 mb-8">
                    {segment.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/book-demo">
                    <Button className="w-full sm:w-auto flex items-center justify-center gap-2" style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
                      Learn How TrekIQ Helps
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
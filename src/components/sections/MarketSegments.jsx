import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

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
        <Reveal className="text-center mb-16">
          

          
          <h2 className="text-4xl font-bold text-primary mb-4">
            Built for Your Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trek iQ serves organizations across the visitor economy. Find your sector and see how accessibility documentation drives your outcomes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, idx) =>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease }}>
            
              <Link to={segment.path} className="block group h-full">
                <div className="rounded-2xl bg-white border border-border p-8 hover:shadow-xl hover:border-[hsl(206_64%_49%)]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(206_64%_49%)]/10 flex items-center justify-center text-3xl mb-5">
                    {segment.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{segment.title}</h3>
                  <p className="text-sm font-semibold text-[hsl(206_64%_49%)] mb-3">{segment.outcome}</p>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{segment.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-[hsl(206_64%_49%)] transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
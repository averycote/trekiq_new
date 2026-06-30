import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Document Your Space',
      description: 'TrekIQ captures photo-backed accessibility documentation across every area of your venue—entrances, restrooms, pathways, parking, and more.'
    },
    {
      number: '02',
      title: 'Identify &amp; Prioritize',
      description: 'TrekIQ identifies barriers and recommends improvements, helping you plan accessibility upgrades with confidence and clarity.'
    },
    {
      number: '03',
      title: 'Communicate with Confidence',
      description: 'Your public accessibility profile goes live, giving visitors the information they need to plan their visit with confidence.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Three simple steps to better visitor confidence and accessibility transparency.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-32 left-1/3 right-1/3 h-1 bg-gradient-to-r from-secondary to-secondary/0"></div>
          <div className="hidden md:block absolute top-32 right-1/3 left-2/3 h-1 bg-gradient-to-l from-secondary to-secondary/0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease }}
            >
              <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm relative z-10 h-full">
                <div className="text-5xl font-bold text-secondary mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-white" dangerouslySetInnerHTML={{ __html: step.title }} />
                <p className="opacity-90 leading-relaxed text-white" dangerouslySetInnerHTML={{ __html: step.description }} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
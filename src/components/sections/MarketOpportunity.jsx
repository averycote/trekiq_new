import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function MarketOpportunity() {
  const stats = [
    { value: '$21B', label: 'Combined spending power of people with disabilities in Canada' },
    { value: '86%', label: 'Avoided venues due to lack of information' },
    { value: '1 in 4', label: 'Canadians have a disability' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            The Opportunity is Massive
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease }}
            >
              <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20 text-center h-full">
                <div className="text-5xl font-bold text-secondary mb-4">{stat.value}</div>
                <p className="text-lg font-semibold text-white">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Card className="p-8 bg-primary-foreground/10 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Findings</h3>
            <p className="text-lg leading-relaxed opacity-90 text-white">
              Our market research in Halifax revealed that 86% of people with disabilities have actively avoided venues or attractions in the past year simply because they had no way to confirm accessibility features beforehand. This isn't just an information gap. It's lost participation, lost revenue, and missed connections. TrekIQ helps close that gap.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function HowItWorks() {
  const steps = [
  {
    number: '01',
    title: 'Document Your Space',
    description: 'Trek iQ captures photo-backed accessibility documentation across every area of your venue: entrances, restrooms, pathways, parking, and more.'
  },
  {
    number: '02',
    title: 'Identify & Prioritize',
    description: 'Trek iQ identifies barriers and recommends improvements, helping you plan accessibility upgrades with confidence and clarity.'
  },
  {
    number: '03',
    title: 'Communicate with Confidence',
    description: 'Your public accessibility profile goes live, giving visitors the information they need to plan their visit with confidence.'
  }];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          

          
          <h2 className="text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to better visitor confidence and accessibility transparency.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-px bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0" />

          {steps.map((step, idx) =>
          <motion.div
            key={idx}
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease }}>
            
              <div className="group rounded-2xl bg-white border border-border p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[hsl(206_64%_49%)]/10 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[hsl(206_64%_49%)]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
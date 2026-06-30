import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function PartnerEcosystem() {
  const partners = [
  { name: 'Tourism Nova Scotia', category: 'Strategic Partner', logo: '🏛️' },
  { name: 'reachAbility', category: 'Accessibility Leader', logo: '🤝' },
  { name: 'Propel ICT', category: 'Innovation Partner', logo: '🚀' },
  { name: 'NSCC SPRINT', category: 'Education Partner', logo: '📚' },
  { name: 'Bentley Systems', category: 'Technology Partner', logo: '🏗️' }];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full mb-4 uppercase tracking-wider">
            Partners
          </span>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Backed by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrekIQ is built on a foundation of trusted partnerships across tourism, accessibility, and technology.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, idx) =>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease }}>
            
              <div className="rounded-2xl bg-white border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="text-sm font-bold text-primary mb-1">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.category}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
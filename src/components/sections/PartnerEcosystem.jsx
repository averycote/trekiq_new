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
    { name: 'Bentley Systems', category: 'Technology Partner', logo: '🏗️' }
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(210_100%_12%)] text-white">
      {/* Glow accents */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[hsl(206_64%_49%)] opacity-12 blur-[120px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[hsl(206_64%_49%)]/15 text-[hsl(206_80%_65%)] rounded-full mb-4 uppercase tracking-wider border border-[hsl(206_64%_49%)]/20">
            Partners
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Backed by Industry Leaders
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            TrekIQ is built on a foundation of trusted partnerships across tourism, accessibility, and technology.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease }}
            >
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 hover:border-[hsl(206_64%_49%)]/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center justify-center">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="text-sm font-bold text-white mb-1">{partner.name}</h3>
                <p className="text-xs text-white/50">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
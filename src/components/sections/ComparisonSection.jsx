import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function ComparisonSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(210_100%_12%)] text-white">
      {/* Glow accents — hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(206_64%_49%)] opacity-10 blur-[120px]" />
      <div className="hidden lg:block absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(206_80%_60%)] opacity-08 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-[hsl(206_80%_65%)] rounded-full mb-4 uppercase tracking-wider border border-white/10">
            The Difference
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Accessibility Documentation Reimagined
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Organizations struggle to document and communicate accessibility information. Poor information creates uncertainty, increases staff workload, and limits participation. There's a better way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease }}>
            
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white/80">The Old Way</h3>
              <ul className="space-y-4">
                {['Manual site audits take months', 'Expensive external consultants', 'No public profile = no market differentiation', 'Fragmented, outdated information'].map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-white/70">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}>
            
            <div className="rounded-2xl bg-[hsl(206_64%_49%)]/10 backdrop-blur-sm border border-[hsl(206_64%_49%)]/30 p-8 h-full shadow-xl shadow-[hsl(206_64%_49%)]/10">
              <h3 className="text-2xl font-bold mb-6 text-[hsl(206_80%_65%)]">The Trek IQ Way</h3>
              <ul className="space-y-4">
                {[
                'Comprehensive accessibility documentation in days, not months',
                'A fraction of traditional consultant costs',
                'Public accessibility profiles = visitor confidence',
                'Dynamic profiles that grow with your venue'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#2dcd68]" />
                    <span className="text-white/90">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
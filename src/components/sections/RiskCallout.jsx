import React from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function RiskCallout() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(210_100%_12%)] text-white">
      {/* Glow accent - hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[hsl(206_64%_49%)] opacity-12 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-[hsl(206_64%_49%)]/15 flex items-center justify-center flex-shrink-0 border border-[hsl(206_64%_49%)]/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            <TrendingUp className="w-8 h-8 text-[hsl(206_80%_65%)]" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Accessibility is a Business Opportunity
            </h2>
            <p className="text-lg text-white/70 mb-4">
              Organizations that communicate accessibility proactively build trust long before regulations require it. Leading organizations don't wait for legislation to define the visitor experience.
            </p>
            <p className="text-base text-white/50">
              Trek iQ helps you turn accessibility transparency into a competitive advantage, improving visitor confidence, supporting funding applications, and strengthening your reputation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

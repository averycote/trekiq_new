import React from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function RiskCallout() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            <TrendingUp className="w-16 h-16 text-secondary flex-shrink-0" />
          </motion.div>
          <div>
            <h3 className="text-3xl font-bold mb-3">
              Accessibility is a Business Opportunity
            </h3>
            <p className="text-lg opacity-90 mb-4">
              Organizations that communicate accessibility proactively build trust long before regulations require it. Leading organizations don't wait for legislation to define the visitor experience.
            </p>
            <p className="text-base opacity-80">
              TrekIQ helps you turn accessibility transparency into a competitive advantage—improving visitor confidence, supporting funding applications, and strengthening your reputation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
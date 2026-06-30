import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Accessibility Documentation Reimagined
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations struggle to document and communicate accessibility information. Poor information creates uncertainty, increases staff workload, and limits participation. There's a better way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease }}
          >
            <Card className="p-8 bg-white h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">The Old Way: Manual &amp; Static</h3>
              <ul className="space-y-4">
                {['Manual site audits take months, not months', 'Expensive external consultants', 'No public profile = no market differentiation', 'Fragmented, outdated information'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Card className="p-8 bg-white border-2 border-secondary h-full">
              <h3 className="text-2xl font-bold text-secondary mb-6">The Trek IQ Way: Accessibility Profiles</h3>
              <ul className="space-y-4">
                {[
                  'Comprehensive accessibility documentation in days, not months',
                  'A fraction of traditional consultant costs',
                  'Public accessibility profiles = visitor confidence',
                  'Dynamic profiles that grow with your venue'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
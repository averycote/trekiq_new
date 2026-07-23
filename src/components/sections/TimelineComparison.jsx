import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function TimelineComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">
            Today vs. With Trek iQ
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease }}
          >
            <Card className="p-8 bg-white h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Today</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Month 1-2</div>
                  <p className="text-foreground">Engage an accessibility consultant</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Month 2-4</div>
                  <p className="text-foreground">Schedule and complete a site assessment</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Month 4-6</div>
                  <p className="text-foreground">Receive a static compliance report</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">Ongoing</div>
                  <p className="text-foreground">Documentation goes outdated with no public visibility</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <Card className="p-8 bg-white border-2 border-secondary h-full">
              <h3 className="text-2xl font-bold text-secondary mb-6">With Trek iQ</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-secondary mb-2">On-site</div>
                  <p className="text-foreground">Accessibility documentation captured in about 30 minutes (40,000 sq ft building)</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary mb-2">Post-audit</div>
                  <p className="text-foreground">Live public accessibility profile published within 30 minutes</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary mb-2">Ongoing</div>
                  <p className="text-foreground">Dynamic profile, updated as your venue evolves</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
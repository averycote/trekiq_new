import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DemoCTA from '@/components/DemoCTA';
import PromoVideo from '@/components/PromoVideo';

const ease = [0.22, 1, 0.36, 1];

const reassurances = ['30 minutes or less', 'Just a phone', 'Guided, no expertise needed'];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[hsl(var(--cream))]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-10 lg:pt-16 lg:pb-24">
        {/* DOM order is headline -> video -> details so phones see the video
            above the fold; on desktop the video spans both rows on the right. */}
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 lg:gap-y-0 items-center">
          <motion.div
            className="lg:col-span-6 xl:col-span-5 lg:row-start-1 lg:self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}>
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--primary))] lg:mb-5">
              Audit your space in 30 minutes.{' '}
              <span className="text-[hsl(var(--secondary))]">With just a phone.</span>
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-6 xl:col-span-7 lg:col-start-7 xl:col-start-6 lg:row-start-1 lg:row-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}>
            <PromoVideo />
          </motion.div>

          <motion.div
            className="lg:col-span-6 xl:col-span-5 lg:row-start-2 lg:self-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-7 max-w-xl">
              Trek iQ is a copilot for accessibility. A guided walk-through shows how people with disabilities and their families use, move through and access your space, and where they run into friction. Then you get a plan to fix it, the funding to pay for it, and a public profile so visitors know what to expect.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-5">
              <DemoCTA location="hero" />
              <Link
                to="/sample-audit"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl px-6 font-semibold text-[hsl(var(--primary))] bg-white ring-1 ring-[hsl(var(--border))] transition hover:ring-[hsl(var(--secondary))]/50">
                See a sample profile
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              {reassurances.map((item) =>
              <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--secondary))]" aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);
}

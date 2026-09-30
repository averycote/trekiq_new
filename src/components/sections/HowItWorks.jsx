import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import DemoCTA from '@/components/DemoCTA';

const ease = [0.22, 1, 0.36, 1];

const steps = [
{ title: 'Onboard', description: 'Tell us a little about your space and get a link to your audit.' },
{ title: 'Guided audit', description: 'The app walks you through step by step (entrance, doors, washrooms and more) and prompts the photos it needs. Anything that doesn\'t apply gets skipped.' },
{ title: 'Analysis', description: 'Our computer vision reads the photos to understand how people with disabilities and their families would arrive, move through and use your space.' },
{ title: 'Report', description: 'A clear picture of where your space works well, and where visitors are likely to run into friction.' },
{ title: 'Improvement plan', description: 'Next steps, ordered by the difference they make for your visitors.' },
{ title: 'Fund and fix', description: 'Matched grants and funding programs, plus service providers to do the work.' },
{ title: 'Public profile', description: 'Visitors see what to expect before they arrive.' }];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--cream))]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))] mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            One phone, one walk-through, 30 minutes or less
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            From "where do we stand?" to "here's the fix and who pays for it."
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) =>
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (idx % 4) * 0.08, ease }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[hsl(var(--border))]">
              <span className="flex w-9 h-9 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-white text-sm font-bold mb-4">
                {idx + 1}
              </span>
              <h3 className="text-lg font-bold mb-1.5 text-[hsl(var(--primary))]">{step.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{step.description}</p>
            </motion.li>
          )}
          <li className="rounded-2xl bg-[hsl(var(--primary))] p-6 flex flex-col justify-between text-white">
            <p className="text-lg font-bold mb-4">See the whole flow on a space like yours.</p>
            <DemoCTA location="how_it_works" className="w-full" />
          </li>
        </ol>
      </div>
    </section>);
}

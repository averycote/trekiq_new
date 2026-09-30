import React from 'react';
import { Smartphone, Footprints, Landmark, Eye, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

const advantages = [
{
  icon: Smartphone,
  title: 'Every space is worth documenting',
  body: 'A guided audit on a phone takes 30 minutes or less, so even a small space can understand how visitors experience it.'
},
{
  icon: Footprints,
  title: 'See where friction happens',
  body: 'Understand how people with disabilities and their families experience your space, from parking to the washroom, and what to improve first.'
},
{
  icon: Landmark,
  title: 'Funding to pay for it',
  body: 'Matched grants and funding programs, plus service providers to do the work.'
},
{
  icon: Eye,
  title: 'A profile visitors can trust',
  body: 'Verified photos show what a visitor will actually find, not just whether there\'s a ramp.'
}];

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--ink))] mb-4">Why Trek iQ</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            One flow from "where do we stand?" to "here's the fix and who pays for it."
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 text-center">
          {advantages.map(({ icon: Icon, title, body }, idx) =>
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease }}
            className="flex flex-col items-center">
              <Icon className="w-16 h-16 text-[hsl(var(--ink))]/25 mb-7" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="text-xl font-bold text-[hsl(var(--ink))] mb-3">{title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">{body}</p>
              <Check className="mt-auto w-7 h-7 text-[hsl(var(--secondary))]" strokeWidth={3.5} aria-hidden="true" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);
}

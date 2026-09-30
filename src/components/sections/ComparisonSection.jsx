import React from 'react';
import { Smartphone, ListChecks, Landmark, Eye } from 'lucide-react';
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
  icon: ListChecks,
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
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))] mb-3">Why Trek iQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--primary))] mb-5 leading-tight">
            Knowing where you stand is only the start.{' '}
            <span className="text-[hsl(var(--secondary))]">We close the whole loop.</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Audit, report, improvement plan, grant match, contractor match and public profile, in one flow.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map(({ icon: Icon, title, body }, idx) =>
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease }}
            className="rounded-2xl bg-[hsl(var(--cream))] p-7">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <Icon className="w-5 h-5 text-[hsl(var(--secondary))]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[hsl(var(--primary))] mb-2">{title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{body}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Store, ClipboardCheck, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

const audiences = [
{
  icon: Store,
  who: 'Businesses & organizations',
  why: 'See how visitors experience your space and what to do next.',
  gets: ['Baseline report', 'Improvement plan', 'Matched funding', 'Public profile']
},
{
  icon: ClipboardCheck,
  who: 'Accessibility consultants',
  why: 'Deliver audits faster with reporting built in, and serve more clients, including smaller spaces.',
  gets: ['Audits, billing and booking in one place', 'The same report, plan and profile for your clients']
},
{
  icon: Network,
  who: 'Networks & large organizations',
  why: 'Run your own accessibility program on our technology.',
  gets: ['Consistent audits across many sites', 'White-label option']
}];

const sectors = [
{ label: 'Tourism attractions', path: '/markets/tourism' },
{ label: 'Event & conference venues', path: '/markets/mice' },
{ label: 'Independent hotels', path: '/markets/independent-hotels' },
{ label: 'Churches & faith spaces', path: '/markets/churches' },
{ label: 'Clinics & health', path: '/markets/health-adjacent' }];

export default function MarketSegments() {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))] mb-3">Who uses it</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            Same copilot, whoever runs the audit
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
            Run it yourself, or have your accessibility consultant run it for you. Either way, you get the same report, plan, funding matches and profile.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {audiences.map(({ icon: Icon, ...a }, idx) =>
          <motion.div
            key={a.who}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease }}
            className="flex flex-col rounded-2xl p-7 ring-1 ring-[hsl(var(--border))]">
              <Icon className="w-7 h-7 text-[hsl(var(--secondary))] mb-5" aria-hidden="true" />
              <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">{a.who}</h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">{a.why}</p>
              <ul className="mt-auto space-y-2 border-t border-[hsl(var(--border))] pt-5">
                {a.gets.map((g) =>
              <li key={g} className="text-sm font-medium text-[hsl(var(--primary))]">{g}</li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <span className="text-sm font-semibold text-[hsl(var(--muted-foreground))] mr-1">By sector:</span>
          {sectors.map((s) =>
          <Link
            key={s.path}
            to={s.path}
            className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[hsl(var(--primary))] ring-1 ring-[hsl(var(--border))] transition hover:ring-[hsl(var(--secondary))]/50 hover:text-[hsl(var(--secondary))]">
              {s.label}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>);
}

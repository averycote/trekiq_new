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
  gets: 'Baseline report · Improvement plan · Matched funding · Public profile'
},
{
  icon: ClipboardCheck,
  who: 'Accessibility consultants',
  why: 'Deliver audits faster with reporting built in, and serve more clients, including smaller spaces.',
  gets: 'Audits, billing and booking in one place'
},
{
  icon: Network,
  who: 'Networks & large organizations',
  why: 'Run your own accessibility program on our technology.',
  gets: 'Consistent audits across many sites · White-label option'
}];

const sectors = [
{ label: 'Tourism attractions', path: '/markets/tourism' },
{ label: 'Event & conference venues', path: '/markets/mice' },
{ label: 'Independent hotels', path: '/markets/independent-hotels' },
{ label: 'Churches & faith spaces', path: '/markets/churches' },
{ label: 'Clinics & health', path: '/markets/health-adjacent' }];

// Dark section with speech-bubble cards, in the style of the Ayro theme.
export default function MarketSegments() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--ink))] text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Same copilot, whoever runs the audit</h2>
          <p className="text-lg text-white/75">
            Run it yourself, or have your accessibility consultant run it for you. Either way, you get the same report, plan, funding matches and profile.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map(({ icon: Icon, ...a }, idx) =>
          <motion.div
            key={a.who}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease }}>
              <div className="relative rounded-sm bg-white/10 p-8 mb-8">
                <h3 className="text-xl font-bold mb-3">{a.who}</h3>
                <p className="text-white/80 leading-relaxed">{a.why}</p>
                <span className="absolute -bottom-3 left-10 h-0 w-0 border-x-[12px] border-t-[12px] border-x-transparent border-t-white/10" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 pl-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </span>
                <p className="text-sm text-white/70 leading-snug">{a.gets}</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="w-full sm:w-auto text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white/70 sm:mr-2">By sector</span>
          {sectors.map((s) =>
          <Link
            key={s.path}
            to={s.path}
            className="group inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:ring-white hover:bg-white/10">
              {s.label}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>);
}

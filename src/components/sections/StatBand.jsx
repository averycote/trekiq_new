import React from 'react';
import Reveal from '@/components/Reveal';

const stats = [
{
  value: '86%',
  label: 'of people with disabilities avoided a business in the past year because they weren\'t sure it was accessible.',
  note: 'Trek iQ pilot survey'
},
{
  value: '30 min',
  label: 'or less for a guided audit, with just a phone.'
},
{
  value: '60,000+',
  label: 'square feet of audits validated in paid pilots.'
}];

export default function StatBand() {
  return (
    <section className="bg-[hsl(var(--primary))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((stat, idx) =>
          <Reveal key={stat.value} delay={idx * 0.08}>
              <div className="text-5xl lg:text-6xl font-extrabold tracking-tight text-[hsl(206_80%_65%)] mb-3">
                {stat.value}
              </div>
              <p className="text-lg text-white/85 leading-snug">{stat.label}</p>
              {stat.note && <p className="mt-2 text-xs text-white/45">{stat.note}</p>}
            </Reveal>
          )}
        </div>
      </div>
    </section>);
}

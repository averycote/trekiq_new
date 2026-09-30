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
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) =>
          <Reveal key={stat.value} delay={idx * 0.08}>
              <div className="text-6xl lg:text-7xl font-extrabold tracking-tight text-[hsl(var(--secondary))] mb-3">
                {stat.value}
              </div>
              <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xs mx-auto">{stat.label}</p>
              {stat.note && <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]/80">{stat.note}</p>}
            </Reveal>
          )}
        </div>
      </div>
    </section>);
}

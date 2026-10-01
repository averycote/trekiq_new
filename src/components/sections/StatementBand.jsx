import React from 'react';
import Reveal from '@/components/Reveal';
import DemoCTA from '@/components/DemoCTA';

// Big-type statement band, in the style of the Ayro theme.
export default function StatementBand() {
  return (
    <section className="bg-[hsl(var(--primary))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Knowing where you stand is only the start.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.1}>
          <p className="text-2xl font-bold mb-4">We close the whole loop.</p>
          <p className="text-lg text-white/80 leading-relaxed mb-9">
            Audit, report, improvement plan, grant match, contractor match and public profile, in one flow.
          </p>
          <DemoCTA location="statement_band" variant="white" />
        </Reveal>
      </div>
    </section>);
}

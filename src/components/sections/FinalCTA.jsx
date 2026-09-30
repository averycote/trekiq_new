import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import DemoCTA from '@/components/DemoCTA';

export const demoAgenda = [
'Walk through a guided audit and the report it produces',
'See how the improvement plan prioritizes what to fix first',
'Explore grants and funding that could pay for the work',
'See the public profile your visitors would see'];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--primary))] text-white">
      <div className="hidden lg:block absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-[hsl(206_64%_49%)] opacity-20 blur-[120px]" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-5">
            Find out where your space stands.
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a 30-minute call and see the whole loop: audit, plan, funding and public profile.
          </p>
          <DemoCTA location="final_cta" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(206_80%_65%)] mb-5">On the call you'll</p>
            <ul className="space-y-4">
              {demoAgenda.map((item) =>
              <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[hsl(206_80%_65%)]" aria-hidden="true" />
                  <span className="text-white/90">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>);
}

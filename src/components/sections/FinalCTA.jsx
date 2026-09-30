import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import DemoCTA from '@/components/DemoCTA';
import { Phone } from '@/components/DeviceFrames';

export const demoAgenda = [
'Walk through a guided audit and the report it produces',
'See how the improvement plan prioritizes what to fix first',
'Explore grants and funding that could pay for the work',
'See the public profile your visitors would see'];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--cream))] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7 py-20 lg:py-28">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--ink))] mb-5">
            Find out where your space stands.
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-xl">
            Book a 30-minute call and see the whole loop: audit, plan, funding and public profile. On the call you'll:
          </p>
          <ul className="space-y-3 mb-10">
            {demoAgenda.map((item) =>
            <li key={item} className="flex items-start gap-3 text-[hsl(var(--ink))]">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[hsl(var(--secondary))]" strokeWidth={3.5} aria-hidden="true" />
                {item}
              </li>
            )}
          </ul>
          <DemoCTA location="final_cta" variant="dark" />
        </Reveal>
        <div className="hidden lg:flex lg:col-span-5 justify-center self-end" aria-hidden="true">
          <Phone className="w-[300px] translate-y-24 -rotate-[4deg]">
            <img src="/video/trekiq-vertical-poster.jpg" alt="" className="h-full w-full object-cover" />
          </Phone>
        </div>
      </div>
    </section>);
}

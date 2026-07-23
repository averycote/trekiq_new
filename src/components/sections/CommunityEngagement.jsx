import React from 'react';
import Reveal from '@/components/Reveal';
import { Users } from 'lucide-react';

export default function CommunityEngagement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(210_100%_12%)] text-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(206_64%_49%)]/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-[hsl(206_80%_65%)]" />
              </div>
            </div>
            <div className="text-5xl font-bold mb-4 text-[hsl(206_80%_65%)]">80+</div>
            <h2 className="text-2xl font-bold mb-4">
              People with Disabilities Engaged in Our Design Process
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              From day one, we have placed the lived experience of people with disabilities at the center of how Trek iQ is built. To date, we have engaged over 80 individuals across a range of disabilities to shape our documentation process, interface design, and accessibility standards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
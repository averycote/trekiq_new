import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import DemoCTA from '@/components/DemoCTA';
import { Phone, InViewVideo } from '@/components/DeviceFrames';

const steps = [
{ title: 'Onboard', description: 'Tell us a little about your space and get a link to your audit.' },
{ title: 'Guided audit', description: 'The app walks you through step by step (entrance, doors, washrooms and more) and prompts the photos it needs. Anything that doesn\'t apply gets skipped.' },
{ title: 'Analysis', description: 'Our computer vision reads the photos to understand how people with disabilities and their families would arrive, move through and use your space.' },
{ title: 'Report', description: 'A clear picture of where your space works well, and where visitors are likely to run into friction.' },
{ title: 'Improvement plan', description: 'Next steps, ordered by the difference they make for your visitors.' },
{ title: 'Fund and fix', description: 'Matched grants and funding programs, plus service providers to do the work.' },
{ title: 'Public profile', description: 'Visitors see what to expect before they arrive.' }];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--cream))]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[hsl(var(--secondary))] mb-4">How it works</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--ink))]">
              One phone, one walk-through, 30 minutes or less
            </h2>
          </Reveal>

          <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-7 mb-12">
            {steps.map((step, idx) =>
            <li key={step.title} className="flex gap-3">
                <Check className="mt-1 w-5 h-5 flex-shrink-0 text-[hsl(var(--secondary))]" strokeWidth={3.5} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-[hsl(var(--ink))] leading-snug">
                    <span className="sr-only">Step {idx + 1}: </span>{step.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">{step.description}</p>
                </div>
              </li>
            )}
          </ol>
          <DemoCTA location="how_it_works" />
        </div>

        <Reveal className="lg:col-span-5 flex justify-center" delay={0.1}>
          <Phone className="w-[260px] sm:w-[300px] rotate-[4deg]">
            <InViewVideo
              src="/video/trekiq-vertical.mp4"
              poster="/video/trekiq-vertical-poster.jpg"
              startAt={12}
              label="Trek iQ on a phone: a guided audit and its accessibility report" />
          </Phone>
        </Reveal>
      </div>
    </section>);
}

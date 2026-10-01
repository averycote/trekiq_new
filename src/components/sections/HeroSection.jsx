import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import DemoCTA, { PillLink } from '@/components/DemoCTA';
import PromoVideo from '@/components/PromoVideo';
import { Laptop } from '@/components/DeviceFrames';

const ease = [0.22, 1, 0.36, 1];

const reassurances = ['30 minutes or less', 'Just a phone', 'Guided, no expertise needed'];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[hsl(var(--hero))] text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-14 lg:pt-24 lg:pb-28">
        {/* DOM order is headline -> video -> details so phones see the video
            above the fold; on desktop the laptop spans both rows on the right. */}
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 sm:gap-y-8 lg:gap-y-0 items-center">
          <motion.div
            className="lg:col-span-6 lg:row-start-1 lg:self-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}>
            <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight lg:mb-7">
              Audit your space in 30 minutes. With just a phone.
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:-mr-24 xl:-mr-40"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}>
            <Laptop className="mx-[4%] lg:mx-0">
              <PromoVideo className="" />
            </Laptop>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:row-start-2 lg:self-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-9 max-w-xl">
              Trek iQ is a copilot for accessibility. A guided walk-through shows how people with disabilities and their families use, move through and access your space, and where they run into friction. Then you get a plan to fix it, the funding to pay for it, and a public profile so visitors know what to expect.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-7">
              <DemoCTA location="hero" variant="white" />
              <PillLink to="/sample-audit" variant="outlineWhite">See a sample profile</PillLink>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/85">
              {reassurances.map((item) =>
              <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(210_100%_8%)] via-[hsl(210_100%_12%)] to-[hsl(210_80%_18%)] text-white">
      {/* Gradient mesh glow accents - hidden on mobile for performance */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[hsl(206_64%_49%)] opacity-20 blur-[120px]" />
      <div className="hidden lg:block absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(206_80%_55%)] opacity-10 blur-[100px]" />
      <div className="hidden lg:block absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[hsl(200_70%_45%)] opacity-10 blur-[100px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to Build{' '}
            <span className="bg-gradient-to-r from-[hsl(206_64%_49%)] to-[hsl(206_80%_65%)] bg-clip-text text-transparent">
              Visitor Confidence?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Book a demo and see how Trek iQ helps your organization document accessibility, improve planning, and give every visitor the confidence to choose you.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2, ease }}
            className="inline-block"
          >
            <Button
              asChild
              size="lg"
              className="h-12 px-8 font-semibold rounded-xl text-white flex items-center justify-center gap-2 mx-auto shadow-lg shadow-[hsl(206_64%_49%)]/30"
              style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
              <Link to="/book-demo">
                Book a Demo Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

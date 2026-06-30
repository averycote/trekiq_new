import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-bl-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 rounded-tr-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Help every visitor understand what to expect before they arrive.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              TrekIQ helps organizations confidently understand, document, improve, and communicate the accessibility of their physical spaces. Replace manual, fragmented reporting with photo-backed accessibility profiles that build trust and drive participation.
            </p>
          </motion.div>

          {/* Key Stat */}
          <motion.div
            className="border-l-4 border-secondary pl-6 py-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            <div className="text-5xl font-bold text-primary mb-2">86%</div>
            <p className="text-lg text-foreground">
              of people with disabilities avoided a new venue last year due to lack of accessible information.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
          >
            <Link to="/book-demo">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sample-audit">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-lg transition-transform hover:scale-[1.03]">
                See an Accessibility Profile
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
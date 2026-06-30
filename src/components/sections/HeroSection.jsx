import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-8">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Help every visitor understand what to expect before they arrive.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              TrekIQ helps organizations confidently understand, document, improve, and communicate the accessibility of their physical spaces. Replace manual, fragmented reporting with photo-backed accessibility profiles that build trust and drive participation.
            </p>
          </div>

          {/* Key Stat */}
          <div className="border-l-4 border-teal-500 pl-6 py-4">
            <div className="text-5xl font-bold text-primary mb-2">86%</div>
            <p className="text-lg text-foreground">
              of people with disabilities avoided a new venue last year due to lack of accessible information.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/book-demo">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sample-audit">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 font-semibold rounded-lg">
                See an Accessibility Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
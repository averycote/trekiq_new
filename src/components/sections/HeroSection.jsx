import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
                Automate your accessibility audits.
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-teal-500 mb-6">
                Unlock a $21B market.
              </h2>
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
                  style={{ backgroundColor: 'hsl(37 92% 65%)' }}
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/why-verify">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 font-semibold rounded-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="relative h-96 lg:h-auto flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
              style={{ backgroundColor: 'hsl(171 55% 45%)' }}
            ></div>
            <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-border max-w-sm">
              <div className="bg-gradient-to-b from-teal-500 to-teal-400 rounded-lg h-48 flex items-center justify-center text-white font-bold text-lg">
                TrekIQ Verified Profile
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  <span className="text-sm font-medium text-foreground">Wheelchair accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  <span className="text-sm font-medium text-foreground">Accessible parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  <span className="text-sm font-medium text-foreground">Service animals welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
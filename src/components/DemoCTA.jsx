import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/track';

// Single source of truth for the primary conversion button so copy, colour
// and click tracking stay consistent everywhere it appears.
export default function DemoCTA({ location, label = 'Book a 30-min demo', size = 'lg', className = '' }) {
  const sizing = size === 'sm' ? 'h-10 px-5 text-sm' : 'h-12 px-7 text-base';
  return (
    <Link
      to="/book-demo"
      onClick={() => trackEvent('demo_cta_click', { location })}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold text-white bg-[hsl(var(--secondary))] shadow-lg shadow-[hsl(206_64%_49%)]/25 transition hover:bg-[hsl(206_64%_42%)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--secondary))] ${sizing} ${className}`}>
      {label}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
}

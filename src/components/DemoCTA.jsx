import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/track';

const variants = {
  blue: 'bg-[hsl(var(--secondary))] text-white hover:bg-[hsl(206_64%_40%)] shadow-lg shadow-[hsl(206_64%_49%_/_0.25)]',
  dark: 'bg-[hsl(var(--ink))] text-white hover:bg-black',
  white: 'bg-white text-[hsl(var(--ink))] hover:bg-white/90 shadow-lg shadow-black/10'
};

// Single source of truth for the primary conversion button so copy, colour
// and click tracking stay consistent everywhere it appears.
export default function DemoCTA({ location, label = 'Book a 30-min demo', size = 'lg', variant = 'blue', className = '' }) {
  const sizing = size === 'sm' ? 'h-10 px-5 text-xs' : 'h-12 px-8 text-[13px]';
  return (
    <Link
      to="/book-demo"
      onClick={() => trackEvent('demo_cta_click', { location })}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-extrabold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--secondary))] ${variants[variant]} ${sizing} ${className}`}>
      {label}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
}

// Secondary pill, same shape as DemoCTA.
export function PillLink({ to, children, variant = 'outline', className = '' }) {
  const styles = {
    outline: 'ring-1 ring-inset ring-[hsl(var(--ink))]/20 text-[hsl(var(--ink))] hover:ring-[hsl(var(--ink))]/50',
    outlineWhite: 'ring-1 ring-inset ring-white/50 text-white hover:ring-white hover:bg-white/10'
  };
  return (
    <Link
      to={to}
      className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-8 text-[13px] font-extrabold uppercase tracking-[0.08em] transition ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

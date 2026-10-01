import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import DemoCTA from '@/components/DemoCTA';

const marketLinks = [
{ label: 'Tourism attractions', path: '/markets/tourism' },
{ label: 'Event & conference venues', path: '/markets/mice' },
{ label: 'Independent hotels', path: '/markets/independent-hotels' },
{ label: 'Churches & faith spaces', path: '/markets/churches' },
{ label: 'Clinics & health', path: '/markets/health-adjacent' }];

const mainLinks = [
{ label: 'Sample profile', path: '/sample-audit' },
{ label: 'Our approach', path: '/why-verify' },
{ label: 'Partners', path: '/partners' },
{ label: 'FAQ', path: '/faq' },
{ label: 'News', path: '/news' }];

const linkClass = ({ isActive }) =>
`text-[15px] font-semibold transition hover:text-[hsl(var(--secondary))] ${isActive ? 'text-[hsl(var(--secondary))]' : 'text-[hsl(var(--ink))]'}`;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[hsl(var(--border))]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="font-extrabold text-2xl tracking-tight text-[hsl(var(--ink))]">
            Trek <span className="text-[hsl(var(--secondary))]">iQ</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            <div
              className="relative"
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}>
              <button
                className="flex items-center gap-1 text-[15px] font-semibold text-[hsl(var(--ink))] hover:text-[hsl(var(--secondary))] transition"
                aria-expanded={marketsOpen}
                aria-haspopup="true"
                onClick={() => setMarketsOpen((open) => !open)}>
                Who it's for
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {marketsOpen &&
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white border border-[hsl(var(--border))] rounded-xl shadow-xl py-2">
                    {marketLinks.map((market) =>
                  <Link
                    key={market.path}
                    to={market.path}
                    onClick={() => setMarketsOpen(false)}
                    className="block px-4 py-2 text-sm text-[hsl(var(--primary))] hover:bg-[hsl(var(--cream))] transition">
                        {market.label}
                      </Link>
                  )}
                    <div className="border-t border-[hsl(var(--border))] my-1" />
                    <Link to="/markets" className="block px-4 py-2 text-sm font-semibold text-[hsl(var(--secondary))] hover:bg-[hsl(var(--cream))] transition">
                      All sectors
                    </Link>
                  </div>
                </div>
              }
            </div>
            {mainLinks.map((link) =>
            <NavLink key={link.path} to={link.path} className={linkClass}>{link.label}</NavLink>
            )}
          </div>

          <DemoCTA location="nav" label="Book a demo" size="sm" variant="dark" className="hidden lg:inline-flex" />

          <button
            className="lg:hidden p-2 -mr-2 text-[hsl(var(--primary))]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen &&
        <div className="lg:hidden pb-5 space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Who it's for</p>
            {marketLinks.map((market) =>
          <Link key={market.path} to={market.path} className="block px-3 py-2 text-[hsl(var(--primary))] hover:bg-[hsl(var(--cream))] rounded-lg">
                {market.label}
              </Link>
          )}
            <div className="border-t border-[hsl(var(--border))] my-2" />
            {mainLinks.map((link) =>
          <Link key={link.path} to={link.path} className="block px-3 py-2 text-[hsl(var(--primary))] hover:bg-[hsl(var(--cream))] rounded-lg">
                {link.label}
              </Link>
          )}
            <div className="pt-3">
              <DemoCTA location="nav_mobile" className="w-full" />
            </div>
          </div>
        }
      </div>
    </nav>);
}

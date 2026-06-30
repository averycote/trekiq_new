import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);

  const marketLinks = [
    { label: 'Tourism Attractions', path: '/markets/tourism' },
    { label: 'MICE Venues', path: '/markets/mice' },
    { label: 'Churches', path: '/markets/churches' },
    { label: 'Independent Hotels', path: '/markets/independent-hotels' },
    { label: 'Health Adjacent', path: '/markets/health-adjacent' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-primary">Trek IQ</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link to="/why-verify" className="text-sm text-foreground hover:text-primary transition">
              Our Approach
            </Link>

            {/* Markets Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition">
                Markets
                <ChevronDown className="w-4 h-4" />
              </button>
              {marketsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white border border-border rounded-lg shadow-lg py-2">
                    <Link to="/markets" className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition">
                      All Markets
                    </Link>
                    <div className="border-t border-border my-1"></div>
                    {marketLinks.map((market) => (
                      <Link
                        key={market.path}
                        to={market.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition"
                      >
                        {market.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/partners" className="text-sm text-foreground hover:text-primary transition">
              Partners
            </Link>
            <Link to="/faq" className="text-sm text-foreground hover:text-primary transition">
              FAQ
            </Link>
            <Link to="/sample-audit" className="text-sm text-foreground hover:text-primary transition">
              See It In Action
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/book-demo"
            className="hidden md:inline-block px-6 py-2 text-white rounded-lg font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
            Book a Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">Home</Link>
            <Link to="/why-verify" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">Our Approach</Link>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Markets</p>
              <Link to="/markets" className="block px-2 py-1.5 text-sm text-foreground hover:bg-secondary rounded">All Markets</Link>
              {marketLinks.map((market) => (
                <Link key={market.path} to={market.path} className="block px-2 py-1.5 text-sm text-foreground hover:bg-secondary rounded">
                  {market.label}
                </Link>
              ))}
            </div>
            <Link to="/partners" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">Partners</Link>
            <Link to="/faq" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">FAQ</Link>
            <Link to="/sample-audit" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">See It In Action</Link>
            <Link
              to="/book-demo"
              className="block px-4 py-2 text-white rounded font-semibold text-center"
              style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
              Book a Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
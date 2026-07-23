import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const marketsButtonRef = useRef(null);
  const marketsWrapperRef = useRef(null);
  const { pathname } = useLocation();

  const marketLinks = [
    { label: 'Tourism Attractions', path: '/markets/tourism' },
    { label: 'MICE Venues', path: '/markets/mice' },
    { label: 'Churches', path: '/markets/churches' },
    { label: 'Independent Hotels', path: '/markets/independent-hotels' },
    { label: 'Health Adjacent', path: '/markets/health-adjacent' }
  ];

  useEffect(() => {
    setMobileOpen(false);
    setMarketsOpen(false);
  }, [pathname]);

  const closeMarketsOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setMarketsOpen(false);
    }
  };

  const handleMarketsKeyDown = (event) => {
    if (event.key === 'Escape') {
      setMarketsOpen(false);
      marketsButtonRef.current?.focus();
    }
  };

  const handleMarketsMouseLeave = () => {
    if (!marketsWrapperRef.current?.contains(document.activeElement)) {
      setMarketsOpen(false);
    }
  };

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav aria-label="Primary navigation" className="sticky top-0 z-50 bg-[hsl(210_100%_12%)]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl text-[hsl(var(--secondary))]" aria-label="Trek iQ home">Trek iQ</Link>

            <div className="hidden md:flex items-center gap-8 text-[hsl(var(--ring))]">
              <Link to="/" className="text-sm hover:text-white transition text-[hsl(var(--secondary))]">Home</Link>
              <Link to="/why-verify" className="text-sm hover:text-white transition text-[hsl(var(--secondary))]">Our Approach</Link>

              <div
                ref={marketsWrapperRef}
                className="relative"
                onBlur={closeMarketsOnBlur}
                onKeyDown={handleMarketsKeyDown}
                onMouseEnter={() => setMarketsOpen(true)}
                onMouseLeave={handleMarketsMouseLeave}
              >
                <button
                  ref={marketsButtonRef}
                  type="button"
                  className="flex items-center gap-1 text-sm hover:text-white transition text-[hsl(var(--secondary))]"
                  aria-expanded={marketsOpen}
                  aria-controls="markets-menu"
                  aria-haspopup="true"
                  onClick={() => setMarketsOpen((open) => !open)}
                >
                  Markets
                  <ChevronDown className={`w-4 h-4 transition-transform ${marketsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {marketsOpen && (
                  <div id="markets-menu" className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-[hsl(210_100%_12%)] backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl py-2">
                      <Link to="/markets" className="block px-4 py-2 text-sm text-white hover:bg-[hsl(206_64%_49%)]/20 transition">All Markets</Link>
                      <div className="border-t border-white/10 my-1" aria-hidden="true" />
                      {marketLinks.map((market) => (
                        <Link key={market.path} to={market.path} className="block px-4 py-2 text-sm text-white hover:bg-[hsl(206_64%_49%)]/20 transition">
                          {market.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/partners" className="text-sm hover:text-white transition text-[hsl(var(--secondary))]">Partners</Link>
              <Link to="/faq" className="text-sm hover:text-white transition text-[hsl(var(--secondary))]">FAQ</Link>
              <Link to="/sample-audit" className="text-sm hover:text-white transition text-[hsl(var(--secondary))]">See It In Action</Link>
            </div>

            <Link
              to="/book-demo"
              className="hidden md:inline-block px-6 py-2 text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-[hsl(206_64%_49%)]/20"
              style={{ backgroundColor: 'hsl(206 64% 49%)' }}
            >
              Book a Demo
            </Link>

            <button
              type="button"
              className="md:hidden text-white p-2 rounded-lg"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X aria-hidden="true" /> : <Menu className="text-[hsl(var(--muted-foreground))]" aria-hidden="true" />}
            </button>
          </div>

          {mobileOpen && (
            <div id="mobile-navigation" className="md:hidden pb-4 space-y-1 bg-[hsl(210_100%_12%)]">
              <Link to="/" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">Home</Link>
              <Link to="/why-verify" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">Our Approach</Link>
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-[hsl(206_80%_65%)] mb-1">Markets</p>
                <Link to="/markets" onClick={closeMobileMenu} className="block px-2 py-2 text-sm text-white hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">All Markets</Link>
                {marketLinks.map((market) => (
                  <Link key={market.path} to={market.path} onClick={closeMobileMenu} className="block px-2 py-2 text-sm text-white hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">
                    {market.label}
                  </Link>
                ))}
              </div>
              <Link to="/partners" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">Partners</Link>
              <Link to="/faq" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">FAQ</Link>
              <Link to="/sample-audit" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base hover:bg-[hsl(206_64%_49%)]/20 rounded-lg">See It In Action</Link>
              <Link to="/book-demo" onClick={closeMobileMenu} className="block px-4 py-2.5 text-white text-base bg-[hsl(206_64%_49%)] rounded-lg mt-2 text-center font-semibold">Book a Demo</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

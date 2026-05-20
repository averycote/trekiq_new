import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-primary">Trek IQ

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link to="/why-verify" className="text-sm text-foreground hover:text-primary transition">
              Why Verify
            </Link>
            <Link to="/markets" className="text-sm text-foreground hover:text-primary transition">
              Markets
            </Link>
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
            className="hidden md:inline-block px-6 py-2 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition"
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
        {mobileOpen &&
        <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Home
            </Link>
            <Link to="/why-verify" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Why Verify
            </Link>
            <Link to="/markets" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Markets
            </Link>
            <Link to="/partners" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Partners
            </Link>
            <Link to="/faq" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              FAQ
            </Link>
            <Link to="/sample-audit" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              See It In Action
            </Link>
            <Link
            to="/book-demo"
            className="block px-4 py-2 bg-amber-500 text-white rounded font-semibold text-center"
            style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
            
              Book a Demo
            </Link>
          </div>
        }
      </div>
    </nav>);

}
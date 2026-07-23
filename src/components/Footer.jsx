import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold text-lg mb-4">Trek iQ</p>
            <p className="text-sm opacity-90">
              An Accessibility Documentation Platform. Help every visitor understand what to expect before they arrive.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Platform</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-verify" className="hover:opacity-80">Our Approach</Link></li>
              <li><Link to="/markets" className="hover:opacity-80">Markets</Link></li>
              <li><Link to="/book-demo" className="hover:opacity-80">Book a Demo</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partners" className="hover:opacity-80">Partners</Link></li>
              <li><Link to="/faq" className="hover:opacity-80">FAQ</Link></li>
              <li><a href="mailto:hello@trekiq.ca" className="hover:opacity-80">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>© 2026 Trek iQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

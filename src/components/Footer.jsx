import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://media.base44.com/images/public/6a0dcb1e5b88cf409631f1ab/356555ea7_TrekIQLogo-WhiteBR-1.png"
              alt="Trek.iq — The Smart Way Forward"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              An Accessibility Documentation Platform. Help every visitor understand what to expect before they arrive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-verify" className="hover:opacity-80">Our Approach</Link></li>
              <li><Link to="/markets" className="hover:opacity-80">Markets</Link></li>
              <li><Link to="/book-demo" className="hover:opacity-80">Book a Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/partners" className="hover:opacity-80">Partners</Link></li>
              <li><Link to="/faq" className="hover:opacity-80">FAQ</Link></li>
              <li><a href="mailto:hello@trekiq.ca" className="hover:opacity-80">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>© 2026 Trek IQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
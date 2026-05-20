import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PartnersHero from '../components/sections/PartnersHero';
import PartnerGrid from '../components/sections/PartnerGrid';
import PartnersCallout from '../components/sections/PartnersCallout';

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PartnersHero />
        <PartnerGrid />
        <PartnersCallout />
      </main>
      <Footer />
    </div>
  );
}
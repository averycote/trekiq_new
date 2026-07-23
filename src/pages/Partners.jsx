import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PartnersHero from '../components/sections/PartnersHero';
import PartnerGrid from '../components/sections/PartnerGrid';
import PartnersCallout from '../components/sections/PartnersCallout';
import CommunityEngagement from '../components/sections/CommunityEngagement';

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PartnersHero />
        <PartnerGrid />
        <CommunityEngagement />
        <PartnersCallout />
      </main>
      <Footer />
    </div>
  );
}
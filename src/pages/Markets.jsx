import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MarketsHero from '../components/sections/MarketsHero';
import SegmentDetails from '../components/sections/SegmentDetails';

export default function Markets() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <MarketsHero />
        <SegmentDetails />
      </main>
      <Footer />
    </div>
  );
}
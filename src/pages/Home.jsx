import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import SocialProof from '../components/sections/SocialProof';
import StatBand from '../components/sections/StatBand';
import ComparisonSection from '../components/sections/ComparisonSection';
import HowItWorks from '../components/sections/HowItWorks';
import MarketSegments from '../components/sections/MarketSegments';
import Objections from '../components/sections/Objections';
import StickyDemoBar from '../components/StickyDemoBar';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <StatBand />
        <ComparisonSection />
        <HowItWorks />
        <MarketSegments />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
      <StickyDemoBar />
    </div>
  );
}
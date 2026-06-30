import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import SocialProof from '../components/sections/SocialProof';
import ComparisonSection from '../components/sections/ComparisonSection';
import HowItWorks from '../components/sections/HowItWorks';
import MarketSegments from '../components/sections/MarketSegments';
import RiskCallout from '../components/sections/RiskCallout';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <ComparisonSection />
        <HowItWorks />
        <MarketSegments />
        <RiskCallout />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
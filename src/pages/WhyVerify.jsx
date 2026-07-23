import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhyVerifyHero from '../components/sections/WhyVerifyHero';
import AutomationBenefits from '../components/sections/AutomationBenefits';
import MarketOpportunity from '../components/sections/MarketOpportunity';
import TimelineComparison from '../components/sections/TimelineComparison';

export default function WhyVerify() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <WhyVerifyHero />
        <AutomationBenefits />
        <MarketOpportunity />
        <TimelineComparison />
      </main>
      <Footer />
    </div>
  );
}

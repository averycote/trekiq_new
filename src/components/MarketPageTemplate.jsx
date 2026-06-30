import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function MarketPageTemplate({ market }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{market.icon}</div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full mb-4 uppercase tracking-wider">
              {market.sector}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {market.coreMessage}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {market.heroSubtext}
            </p>
            <Link to="/book-demo">
              <Button
                size="lg"
                className="h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2 mx-auto"
                style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Pain & Outcome */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-background">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">The Challenge</h3>
                <p className="text-2xl font-bold text-primary leading-snug">{market.primaryPain}</p>
              </Card>
              <Card className="p-8 bg-background border-2 border-teal-500">
                <h3 className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">The Outcome</h3>
                <p className="text-2xl font-bold text-teal-500 leading-snug">{market.primaryOutcome}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stakeholder Messaging */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                What Trek IQ Means for Your Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Different roles, different priorities—TrekIQ delivers value across your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {market.stakeholders.map((stakeholder, idx) => (
                <Card key={idx} className="p-8 bg-white">
                  <h3 className="text-lg font-bold text-primary mb-2">{stakeholder.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{stakeholder.priority}</p>
                  <p className="text-foreground leading-relaxed font-medium">{stakeholder.message}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Value Proposition */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Core Value Proposition
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              {market.valueProposition}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {market.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="opacity-90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book a demo and see how TrekIQ helps your organization communicate accessibility with confidence.
            </p>
            <Link to="/book-demo">
              <Button
                size="lg"
                className="h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2 mx-auto"
                style={{ backgroundColor: 'hsl(37 92% 65%)' }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
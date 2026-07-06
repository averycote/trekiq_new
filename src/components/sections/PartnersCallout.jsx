import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PartnersCallout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join Our Ecosystem
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Whether you're a venue operator, technology partner, or accessibility advocate, Trek iQ is built to help every visitor understand what to expect before they arrive.

        </p>
        <Link to="/book-demo">
          <Button
            size="lg"
            className="h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2 mx-auto"
            style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
            
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>);

}
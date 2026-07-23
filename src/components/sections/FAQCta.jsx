import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FAQCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Still have questions?
        </h2>
        <p className="text-xl opacity-90 mb-10">
          Our team is happy to walk you through how Trek iQ can help your organization document accessibility, improve planning, and build visitor confidence.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 px-8 font-semibold rounded-lg text-white flex items-center justify-center gap-2 mx-auto"
          style={{ backgroundColor: 'hsl(206 64% 49%)' }}
        >
          <Link to="/book-demo">
            Book a Demo
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

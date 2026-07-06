import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DemoConfirmation() {
  return (
    <Card className="w-full max-w-md p-8 text-center">
      <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-primary mb-3">
        Thank You!
      </h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Your demo request has been received. Our team will contact you within 24 hours to schedule your personalized walkthrough.
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        In the meantime, check out our FAQ or explore more about Trek iQ.
      </p>
      <Link to="/">
        <Button className="w-full h-12 text-base font-semibold rounded-lg" style={{ backgroundColor: 'hsl(206 64% 49%)' }}>
          Back to Home
        </Button>
      </Link>
    </Card>
  );
}
import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Compliance Reimagined
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The old approach to accessibility compliance is manual, expensive, and leaves money on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Compliance */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-6">Standard Compliance</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span className="text-foreground">Manual site audits (months, not weeks)</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span className="text-foreground">Expensive external consultants</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span className="text-foreground">No public profile = no market differentiation</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span className="text-foreground">Static documentation (obsolete within months)</span>
              </li>
            </ul>
          </Card>

          {/* TrekIQ Verified */}
          <Card className="p-8 bg-white border-2 border-teal-500">
            <h3 className="text-2xl font-bold text-teal-500 mb-6">Trek IQ Verified</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Automated audits (days, not months)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Fraction of traditional consultant costs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Public verified profile = market growth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Real-time updates as venue evolves</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>);

}
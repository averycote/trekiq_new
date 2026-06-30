import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Accessibility Documentation Reimagined
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations struggle to document and communicate accessibility information. Poor information creates uncertainty, increases staff workload, and limits participation. There's a better way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-6">The Old Way: Manual &amp; Static</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <span className="text-foreground">Manual site audits take months, not weeks</span>
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
                <span className="text-foreground">Fragmented, outdated information</span>
              </li>
            </ul>
          </Card>

          {/* TrekIQ Way */}
          <Card className="p-8 bg-white border-2 border-teal-500">
            <h3 className="text-2xl font-bold text-teal-500 mb-6">The Trek IQ Way: Accessibility Profiles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Comprehensive accessibility documentation in days, not months</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">A fraction of traditional consultant costs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Public accessibility profiles = visitor confidence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-foreground">Dynamic profiles that grow with your venue</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
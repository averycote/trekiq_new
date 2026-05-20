import React from 'react';
import { Card } from '@/components/ui/card';

export default function TimelineComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">The Old Way vs. Trek IQ Way

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-primary mb-6">Traditional Approach</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Month 1-2</div>
                <p className="text-foreground">Hire external accessibility consultant</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Month 2-4</div>
                <p className="text-foreground">Conduct manual site audit</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Month 4-6</div>
                <p className="text-foreground">Generate compliance report</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Ongoing</div>
                <p className="text-foreground">Static documentation, no public visibility</p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-2xl font-bold text-destructive">$15K–$40K</div>
                <p className="text-sm text-muted-foreground">Total cost</p>
              </div>
            </div>
          </Card>

          {/* TrekIQ Way */}
          <Card className="p-8 bg-white border-2 border-teal-500">
            <h3 className="text-2xl font-bold text-teal-500 mb-6">Trek IQ Automated</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-teal-500 mb-2">Day 1</div>
                <p className="text-foreground">Submit venue details to TrekIQ</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-teal-500 mb-2">Days 2-3</div>
                <p className="text-foreground">Automated verification & photo documentation</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-teal-500 mb-2">Day 4</div>
                <p className="text-foreground">Live public accessibility profile published</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-teal-500 mb-2">Ongoing</div>
                <p className="text-foreground">Real-time updates, visible to disability travelers</p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-2xl font-bold text-teal-500">$3K–$8K</div>
                <p className="text-sm text-muted-foreground">Total cost (80% savings)</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>);

}
import React from 'react';

export default function MarketMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary mb-4">
            What Changes for Your Visitors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations that document their accessibility see measurable improvements in visitor confidence and engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-background border border-border"
            >
              <div className="text-4xl font-bold text-teal-500 mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                {metric.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
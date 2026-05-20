import React from 'react';

export default function SocialProof() {
  const partners = [
  { name: 'Tourism Nova Scotia', logo: '🏛️' },
  { name: 'reachAbility', logo: '🤝' },
  { name: 'Propel ICT', logo: '🚀' },
  { name: "NSCC Applied Research", logo: '📚' },
  { name: 'Bentley Systems', logo: '🏗️' }];


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">Trusted by the best in the industry

        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {partners.map((partner) =>
          <div
            key={partner.name}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-background hover:bg-secondary/50 transition">
            
              <div className="text-4xl mb-2">{partner.logo}</div>
              <p className="text-xs font-medium text-foreground text-center">{partner.name}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
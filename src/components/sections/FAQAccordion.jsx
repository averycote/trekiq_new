import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQAccordion() {
  const faqs = [
    {
      question: 'How does the TrekIQ audit process work?',
      answer: 'You submit your venue details through our platform. Our team conducts an automated accessibility audit using photo documentation and verified data collection. Within 3-5 business days, your venue receives a verified accessibility profile that goes live on the TrekIQ network and is discoverable by disability travelers.'
    },
    {
      question: 'What does a TrekIQ verified profile include?',
      answer: 'A verified profile includes detailed accessibility information for all areas of your venue: entrance accessibility, parking, restrooms, elevators, seating areas, staff training certifications, service animal policies, emergency procedures, and more—all backed by photo documentation and real-time verification.'
    },
    {
      question: 'How much does TrekIQ cost?',
      answer: 'Pricing depends on your venue type and size. Hotels typically range from $3,500–$8,000/year, MICE venues from $5,000–$12,000/year, and major attractions from $6,000–$15,000/year. All pricing includes the initial audit, public profile, real-time updates, and compliance documentation. Contact our team for a custom quote.'
    },
    {
      question: 'How does this help with 2030 compliance?',
      answer: 'The 2030 provincial accessibility mandate requires documented, verifiable compliance. TrekIQ automates compliance documentation and keeps your records audit-ready at all times. You\'ll have continuous proof of accessibility compliance—no scrambling to gather documentation when audits occur.'
    },
    {
      question: 'Can I update my accessibility profile over time?',
      answer: 'Yes. Venue accessibility changes seasonally or after renovations. TrekIQ allows real-time updates to your profile. If you make changes (like adding an elevator or improving parking), our team can verify and publish updates within days.'
    },
    {
      question: 'Who can see my TrekIQ verified profile?',
      answer: 'Your profile is discoverable by anyone on the TrekIQ platform and searchable by people with disabilities planning trips. It\'s also shareable directly to travel agents, convention planners, and tourism boards. You own and control your profile visibility.'
    },
    {
      question: 'What if we don\'t pass the initial audit?',
      answer: 'If accessibility gaps are identified, we provide a detailed remediation roadmap. You can address gaps and schedule a re-audit. Our goal is to help you improve accessibility and succeed—not to penalize you. We\'re here to support compliance and growth together.'
    },
    {
      question: 'Do you offer multi-location discounts?',
      answer: 'Yes. Hotels and attractions with multiple locations qualify for bulk pricing. Contact our team to discuss enterprise solutions tailored to your portfolio.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-lg font-semibold text-primary hover:text-teal-500 transition">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
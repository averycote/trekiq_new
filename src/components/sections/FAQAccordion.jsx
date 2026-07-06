import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQAccordion() {
  const faqs = [
    {
      question: 'We already hired an accessibility consultant. Why do we need TrekIQ?',
      answer: 'Consultants assess. TrekIQ helps organizations manage, communicate, and maintain accessibility over time. We transform that assessment into a living accessibility profile that can be updated, shared publicly, and used for future planning, extending the value of your consultant\'s work to be public-facing and long-lasting.'
    },
    {
      question: 'We\'re already accessible. What does TrekIQ add?',
      answer: 'Many organizations have invested heavily in accessibility but still struggle to communicate those investments to visitors, patients, guests, or event planners. TrekIQ helps ensure the work you\'ve already done becomes visible and valuable, turning your accessibility features into a public profile that builds confidence.'
    },
    {
      question: 'Accessibility isn\'t a priority right now. Should we wait?',
      answer: 'TrekIQ doesn\'t require organizations to fix everything immediately. It helps identify priorities so improvements can happen over time. Many organizations begin by simply documenting accessibility. TrekIQ can also help with capital planning by matching you with grants so you can find funding for upgrades.'
    },
    {
      question: 'We don\'t have budget for this. How can it work?',
      answer: 'Rather than creating a new project, TrekIQ often strengthens projects already planned. Accessibility documentation supports broader initiatives such as grant applications, capital planning, visitor experience improvements, and organizational transparency, making it a multiplier for existing investments.'
    },
    {
      question: 'We\'re too small. Does accessibility documentation make sense for us?',
      answer: 'Accessibility matters regardless of organizational size. For smaller organizations, having clear accessibility information can significantly improve visitor confidence while reducing staff time spent answering accessibility questions. This brings in more traffic with less admin time spent.'
    },
    {
      question: 'We\'re waiting for accessibility legislation. Why act now?',
      answer: 'Accessibility legislation establishes minimum expectations. Organizations that communicate accessibility proactively build trust long before regulations require additional reporting. Leading organizations rarely wait for legislation to define the customer experience.'
    },
    {
      question: 'How is this different from Google Maps?',
      answer: 'Google Maps may indicate whether a location has wheelchair access, but it doesn\'t explain what visitors should actually expect. TrekIQ provides photo-backed accessibility documentation that helps people make informed decisions before arriving, covering entrances, restrooms, pathways, sensory considerations, and more.'
    },
    {
      question: 'We don\'t receive many accessibility requests. Is there really demand?',
      answer: 'The absence of questions does not necessarily indicate the absence of demand. Many people simply don\'t visit places when accessibility information isn\'t available. Clear accessibility information gives people the confidence to engage with your organization, turning silent non-visitors into active visitors.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-lg font-semibold text-primary hover:text-secondary transition">
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
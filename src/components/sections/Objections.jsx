import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Reveal from '@/components/Reveal';

// Answers the questions that most often stop a visitor from booking a demo.
const questions = [
{
  q: 'How does a non-expert know what to do?',
  a: "The audit is guided. The app walks you through your space step by step and prompts the photos it needs. Anything that doesn't apply gets skipped."
},
{
  q: 'We already work with an accessibility consultant. Does this fit?',
  a: "Yes. Consultants use Trek iQ as their tool to deliver audits faster and serve more clients. Your consultant can run your audit on Trek iQ, and you get the same plan, funding matches and public profile."
},
{
  q: 'How is this different from Google Maps or AccessNow?',
  a: "They tell you whether there's a ramp. Trek iQ shows, with verified photos, what a visitor will actually find, and helps you fix what's missing."
},
{
  q: 'Is this a compliance check?',
  a: "No. Trek iQ isn't about passing a checklist. It's about how people with disabilities and their families actually get in, get around and use your space, where they run into friction, and what you can do about it."
},
{
  q: 'How do we pay for the improvements?',
  a: 'Trek iQ matches you with grants and funding programs (federal, Nova Scotia, Halifax and private foundations), plus service providers to do the work.'
},
{
  q: 'Who pays for Trek iQ?',
  a: 'Businesses subscribe directly. Consultants pay per audit or by subscription. Large networks can license the platform. We will find the right fit on your demo.'
}];

export default function Objections() {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--cream))]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--secondary))] mb-3">Questions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--primary))] mb-4">
            What people ask us first
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="rounded-2xl bg-white px-6 ring-1 ring-[hsl(var(--border))]">
            {questions.map((item, idx) =>
            <AccordionItem key={item.q} value={`item-${idx}`} className={idx === questions.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger className="text-left text-base lg:text-lg font-semibold text-[hsl(var(--primary))] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>
    </section>);
}

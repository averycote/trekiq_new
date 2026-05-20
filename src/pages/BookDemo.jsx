import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import DemoConfirmation from '../components/DemoConfirmation';

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    await base44.integrations.Core.SendEmail({
      to: 'founder@trekiq.ca',
      subject: `New Demo Request from ${formData.name} – ${formData.organization}`,
      body: `New demo request received:\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nVenue Type: ${formData.venue_type}\nEmail: ${formData.email}\nMessage: ${formData.message || 'N/A'}`
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        {submitted ? (
          <DemoConfirmation />
        ) : (
          <DemoForm onSubmit={handleSubmit} />
        )}
      </main>
      <Footer />
    </div>
  );
}
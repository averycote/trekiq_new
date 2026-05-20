import React, { useState } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoForm from '../components/DemoForm';
import DemoConfirmation from '../components/DemoConfirmation';

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    const response = await fetch('https://formspree.io/f/mpwvynrr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Failed to submit. Please try again.');
    }
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
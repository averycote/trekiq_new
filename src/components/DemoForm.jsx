import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export default function DemoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    venue_type: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVenueTypeChange = (value) => {
    setFormData(prev => ({ ...prev, venue_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md p-8">
      <h2 className="text-3xl font-bold text-primary mb-2">Book a Demo</h2>
      <p className="text-muted-foreground mb-6">
        See how TrekIQ helps your organization document accessibility, improve planning, and build visitor confidence.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Organization *
          </label>
          <Input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization name"
            required
            className="text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Organization Type *
          </label>
          <Select value={formData.venue_type} onValueChange={handleVenueTypeChange}>
            <SelectTrigger className="text-lg">
              <SelectValue placeholder="Select your sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hotel">Independent Hotel</SelectItem>
              <SelectItem value="mice">MICE Venue</SelectItem>
              <SelectItem value="attraction">Tourism Attraction</SelectItem>
              <SelectItem value="church">Church / Faith Organization</SelectItem>
              <SelectItem value="health">Health / Clinic</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@organization.com"
            required
            className="text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any questions or context about your organization?"
            className="text-base"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 text-base font-semibold rounded-lg"
          style={{ backgroundColor: 'hsl(37 92% 65%)' }}
        >
          {loading ? 'Submitting...' : 'Book a Demo'}
        </Button>
      </form>
    </Card>
  );
}
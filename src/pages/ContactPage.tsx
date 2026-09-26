import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { QuranQuote } from '../components/QuranQuote';

interface ContactPageProps {
  initialCourse?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialCourse }) => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Contact Form & Official Info Section */}
      <ContactSection initialCourse={initialCourse} />

      {/* Quote Section at bottom */}
      <QuranQuote />
    </div>
  );
};

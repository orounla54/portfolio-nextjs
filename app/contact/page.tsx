import ContactSection from '@/components/sections/contact-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Contactez-moi pour discuter de vos projets ou opportunités professionnelles',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
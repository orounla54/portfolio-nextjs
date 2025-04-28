import AboutSection from '@/components/sections/about-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | Portfolio',
  description: 'En savoir plus sur mon parcours, mes compétences et mes expériences professionnelles',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  );
}
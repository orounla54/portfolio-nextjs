import SkillsSection from '@/components/sections/skills-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compétences | Portfolio',
  description: 'Découvrez mes compétences techniques en développement web et design',
};

export default function SkillsPage() {
  return (
    <div className="pt-24">
      <SkillsSection />
    </div>
  );
}
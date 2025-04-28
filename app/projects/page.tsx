import ProjectsSection from '@/components/sections/projects-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets | Portfolio',
  description: 'Explorez mes projets récents en développement web et mobile',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsSection />
    </div>
  );
}
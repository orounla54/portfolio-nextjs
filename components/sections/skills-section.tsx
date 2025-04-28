"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 84, category: 'frontend' },
  { name: 'Node.js', level: 82, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'backend' },
  { name: 'SQL', level: 75, category: 'backend' },
  { name: 'Tailwind CSS', level: 90, category: 'design' },
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'Git', level: 85, category: 'other' },
];

export default function SkillsSection() {
  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Mes compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voici les technologies et outils que j'utilise quotidiennement pour créer des expériences web exceptionnelles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Front-end" skills={skills.filter(skill => skill.category === 'frontend')} />
          <SkillCategory title="Back-end" skills={skills.filter(skill => skill.category === 'backend')} />
          <SkillCategory title="Design & Autres" skills={[
            ...skills.filter(skill => skill.category === 'design'),
            ...skills.filter(skill => skill.category === 'other')
          ]} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={cn(
            "h-full rounded-full",
            skill.category === 'frontend' && "bg-chart-1",
            skill.category === 'backend' && "bg-chart-2",
            skill.category === 'design' && "bg-chart-3",
            skill.category === 'other' && "bg-chart-4"
          )}
        />
      </div>
    </div>
  );
}
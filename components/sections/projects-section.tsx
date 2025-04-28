"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: string;
  title: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Tableau de bord Financier',
    image: '/assets/example.jpeg',
    demoUrl: 'https://github.com/orounla54/TB_Coldec24.git',
    category: ['web', 'data'],
  },
  {
    id: 'project-2',
    title: 'Projet de cours',
    image: '/assets/desktop-preview.jpg',
    demoUrl: 'https://formulaire-frontend.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-3',
    title: 'Projet de cours',
    image: '/assets/image copy 4.png',
    demoUrl: 'https://projet1-chi.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-4',
    title: 'Calculatrice',
    image: '/assets/image copy 2.png',
    demoUrl: 'https://calculator-ebon-mu.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-5',
    title: 'Cas pratique cours',
    image: '/assets/Sedan.jpg',
    demoUrl: 'https://sedan-byfrontend.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-6',
    title: 'Test pratique',
    image: '/assets/image-product-mobile.jpg',
    demoUrl: 'https://parfum-byfrontend.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-7',
    title: 'Pratique cours',
    image: '/assets/active-states.jpg',
    demoUrl: 'https://html-css-by-frontend.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-8',
    title: 'Restaurant fictif',
    image: '/assets/ph1.1.jpeg',
    demoUrl: 'https://bootstrap-resto.vercel.app/',
    category: ['web'],
  },
  {
    id: 'project-9',
    title: 'Site en Tailwind CSS',
    image: '/assets/image-gallery-orange.jpg',
    demoUrl: 'https://p-tw.vercel.app/',
    category: ['web'],
  },
];

const categories = ['tous', 'web', 'data'];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('tous');
  
  const filteredProjects = filter === 'tous' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section className="py-24 bg-muted/20" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Ce que j'ai fait</h2>
          <p className="text-muted-foreground">(plus à venir bientôt)</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button size="sm" asChild variant="secondary">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              Voir le projet
            </a>
          </Button>
          {project.githubUrl && (
            <Button size="sm" asChild variant="secondary">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code source
              </a>
            </Button>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex gap-1">
          {project.category.map((cat) => (
            <span key={cat} className="text-xs text-muted-foreground">
              #{cat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
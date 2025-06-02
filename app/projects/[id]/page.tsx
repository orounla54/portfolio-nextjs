import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
};

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce moderne',
    description: 'Plateforme e-commerce complète avec paiement en ligne, panier d\'achat et gestion de produits.',
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg',
    category: ['web', 'e-commerce'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    detailedDescription: 'Cette plateforme e-commerce offre une expérience utilisateur complète et fluide. Développée avec React pour le frontend et Node.js pour le backend, elle permet aux utilisateurs de parcourir des produits, de les ajouter à leur panier et de finaliser leur achat avec un paiement sécurisé via Stripe. Les administrateurs disposent d\'un tableau de bord pour gérer les produits, les stocks et les commandes.',
    features: [
      'Catalogue de produits avec filtrage et recherche',
      'Panier d\'achat persistant',
      'Intégration de paiement Stripe',
      'Authentification utilisateur',
      'Tableau de bord administrateur',
      'Gestion des stocks en temps réel',
      'Suivi des commandes'
    ],
    challenges: [
      'Optimisation des performances pour un grand nombre de produits',
      'Mise en place d\'un système de paiement sécurisé',
      'Gestion des stocks en temps réel'
    ],
    screenshots: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
      'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg'
    ]
  },
  {
    id: 'project-2',
    title: 'Application de gestion de tâches',
    description: 'Application permettant de gérer des tâches avec des fonctionnalités de planification et de rappels.',
    image: 'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg',
    category: ['web', 'mobile'],
    technologies: ['React Native', 'Firebase', 'Redux'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    detailedDescription: 'Cette application de gestion de tâches permet aux utilisateurs d\'organiser leur travail efficacement. Développée avec React Native pour une compatibilité cross-platform et Firebase pour le backend, elle offre une synchronisation en temps réel des données sur tous les appareils. La gestion d\'état est assurée par Redux pour une expérience utilisateur fluide.',
    features: [
      'Création et gestion de tâches avec priorités',
      'Planification avec rappels',
      'Listes personnalisées',
      'Synchronisation multi-appareils',
      'Mode hors ligne',
      'Statistiques de productivité',
      'Thèmes personnalisables'
    ],
    challenges: [
      'Synchronisation des données en temps réel',
      'Performance sur différents appareils',
      'Gestion des rappels natifs'
    ],
    screenshots: [
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      'https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg',
      'https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg'
    ]
  },
  {
    id: 'project-3',
    title: 'Site vitrine d\'agence',
    description: 'Site web moderne pour une agence créative avec animations et effets visuels avancés.',
    image: 'https://images.pexels.com/photos/196647/pexels-photo-196647.jpeg',
    category: ['web', 'design'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    detailedDescription: 'Ce site vitrine moderne pour une agence créative met en valeur leur travail avec des animations fluides et des effets visuels impressionnants. Construit avec Next.js pour des performances optimales et un bon référencement, il utilise Tailwind CSS pour un design responsive et Framer Motion pour des animations élégantes. Le site présente le portfolio de l\'agence, leurs services et leur équipe.',
    features: [
      'Design moderne et animations fluides',
      'Vitrine de projets avec filtrage',
      'Formulaire de contact',
      'Optimisation SEO',
      'Performance optimale',
      'Design responsive',
      'Mode sombre/clair'
    ],
    challenges: [
      'Création d\'animations fluides et performantes',
      'Optimisation des images pour maintenir de bonnes performances',
      'Équilibre entre design créatif et fonctionnalité'
    ],
    screenshots: [
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      'https://images.pexels.com/photos/2802688/pexels-photo-2802688.jpeg',
      'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg'
    ]
  },
  {
    id: 'project-4',
    title: 'Dashboard analytique',
    description: 'Interface d\'administration pour visualiser et analyser des données en temps réel.',
    image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg',
    category: ['web', 'data'],
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    detailedDescription: 'Ce dashboard analytique offre une interface intuitive pour visualiser et analyser des données en temps réel. Développé avec Vue.js et D3.js pour les visualisations, il s\'appuie sur Express et PostgreSQL pour le backend. Le dashboard présente des graphiques interactifs, des tableaux de données et des indicateurs clés de performance pour aider à la prise de décision.',
    features: [
      'Visualisations de données interactives',
      'Tableaux de bord personnalisables',
      'Filtres avancés et export de données',
      'Mise à jour des données en temps réel',
      'Rapports programmés',
      'Alertes configurables',
      'Gestion des permissions utilisateurs'
    ],
    challenges: [
      'Optimisation des performances pour de grands volumes de données',
      'Création de visualisations interactives et intuitives',
      'Mise en place de mises à jour en temps réel'
    ],
    screenshots: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg'
    ]
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-32">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux projets
        </Link>
      </Button>
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              priority
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg">{project.detailedDescription}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Fonctionnalités</h2>
            <ul>
              {project.features?.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Défis techniques</h2>
            <ul>
              {project.challenges?.map((challenge, index) => (
                <li key={index} className="mb-2">{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.screenshots?.map((screenshot, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="sticky top-24 bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Informations du projet</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Catégories</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.category.map((cat) => (
                    <span 
                      key={cat} 
                      className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Technologies</h3>
                <p className="mt-1">{project.technologies.join(', ')}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir la démo
                </a>
              </Button>
              
              <Button variant="outline" className="w-full" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Voir le code source
                </a>
              </Button>
            </div>
            
            <hr className="my-6" />
            
            <h3 className="text-lg font-semibold mb-4">Vous avez un projet similaire ?</h3>
            <p className="text-muted-foreground mb-4">
              Je serais ravi de discuter de votre idée et de voir comment je peux vous aider.
            </p>
            
            <Button asChild>
              <Link href="/contact">
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
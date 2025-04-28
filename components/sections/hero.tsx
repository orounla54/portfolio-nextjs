"use client"

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/assets/mountain-dusk.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="block">Développeur Web</span>
            <span className="block text-primary mt-2">Créateur d'expériences digitales</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Je conçois et développe des applications web modernes, intuitives et performantes
            en utilisant les dernières technologies du marché.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button asChild size="lg">
              <a href="/contact">Me contacter</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/projects">Voir mes projets</a>
            </Button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToNext}
            className={cn(
              "rounded-full h-12 w-12",
              "border border-primary/20"
            )}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Défiler vers le bas</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-muted/20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl mx-12 h-30">
            <Image
              src="/assets/profil1.jpg"
              alt="Photo de profil"
              className="object-cover h-50 w-80"
              fill
              sizes="(max-width: 240px) 50vw, 20vw"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            
            <p className="mb-4 text-muted-foreground">
              Bonjour ! Je suis un développeur web passionné avec plusieurs années d'expérience
              dans la création d'applications web innovantes et performantes.
            </p>
            
            <p className="mb-4 text-muted-foreground">
              Mon parcours m'a permis d'acquérir une solide expertise dans le développement
              front-end et back-end, avec une spécialisation dans les technologies JavaScript
              modernes comme React, Next.js et Node.js.
            </p>
            
            <p className="mb-6 text-muted-foreground">
              Je m'efforce de créer des expériences utilisateur exceptionnelles en combinant
              un design élégant avec une architecture robuste. Mon objectif est de transformer
              vos idées en solutions digitales performantes et accessibles.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary">01+</h3>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">19+</h3>
                <p className="text-sm text-muted-foreground">Projets complétés</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">08+</h3>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
            </div>
            
            <Button asChild>
              <a 
                href="/assets/CV-OROUNLA.pdf" 
                download="CV-Arsene-OROUNLA.pdf"
                className="flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
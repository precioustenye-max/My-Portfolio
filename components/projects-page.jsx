'use client';

import { ArrowLeft } from 'lucide-react';
import { ProjectsSection } from '@/components/projects-section';

export function ProjectsPage({ onBack, onProjectSelect }) {
  return (
    <main className="px-4 sm:px-6 lg:px-8 pt-20 pb-14 sm:pt-24 sm:pb-16">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground transition-colors hover:text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </button>
      </div>

      <ProjectsSection
        onProjectSelect={onProjectSelect}
        heading="All Projects"
        description="Explore the products and interfaces I am currently building, along with completed work across frontend, backend, and AI-powered experiences."
      />
    </main>
  );
}

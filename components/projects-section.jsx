'use client';

import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const projects = [
    {
      title: 'MedConnect',
      description:
        'A medicine-focused website for browsing products, viewing details, and making informed choices with a clean, responsive UI.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'MySQL', 'REST APIs'],
    },
    {
      title: 'Community Resolve Platform',
      description:
        'A community platform to report local issues and coordinate clean-up efforts, helping keep neighborhoods safer and cleaner.',
      technologies: ['React', 'Node.js', 'Mysql', 'REST APIs'],
    },
    {
      title: 'ChasinDecor E-Commerce Website',
      description:
        'An online furniture store experience with product listings, search, cart flow, and a modern, mobile-first design.',
      technologies: ['React', 'Tailwind CSS'],
    },
  ];

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            My Work
          </p>
          <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            A few real projects I’ve built, showing my focus on clean UI, practical features, and
            end-to-end implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glassmorphism accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-8 flex flex-col h-full gap-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 mt-auto">
                  <span className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg font-medium text-sm text-muted-foreground cursor-default">
                    <ExternalLink className="w-4 h-4" />
                    Demo on request
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg font-medium text-sm text-muted-foreground cursor-default">
                    <Github className="w-4 h-4" />
                    Code on request
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

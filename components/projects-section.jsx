'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { projects } from '@/lib/projects';

export function ProjectsSection({
  onProjectSelect,
  limit,
  onViewAll,
  heading = 'Featured Projects',
  description = 'Real builds that show how I handle user interfaces, backend workflows, and practical product features from idea to implementation.',
}) {
  const { ref, isVisible } = useScrollReveal();
  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;
  const hasMoreProjects = visibleProjects.length < projects.length;

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <p className="mb-2 font-mono text-xs font-semibold uppercase text-accent">
            My Work
          </p>
          <h2 className="font-mono text-lg sm:text-xl font-bold text-foreground">{heading}</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={(event) => {
                if (!onProjectSelect) return;
                event.preventDefault();
                onProjectSelect(project.slug);
              }}
              className="group block overflow-hidden rounded-lg border border-border/60 bg-card/20 transition-colors duration-300 hover:bg-card/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted/20">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] group-hover:brightness-50"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-4 sm:px-5 py-2 font-mono text-xs sm:text-sm text-white backdrop-blur-sm">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="mb-2 font-mono text-base sm:text-lg font-bold uppercase text-foreground">
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-6 text-foreground/65">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="font-mono text-xs text-muted-foreground">
                      #{tech.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <a
              href="/projects"
              onClick={(event) => {
                if (!onViewAll) return;
                event.preventDefault();
                onViewAll();
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 sm:px-6 py-3 font-mono text-xs font-semibold uppercase text-foreground transition-colors hover:bg-muted/50"
            >
              See More Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

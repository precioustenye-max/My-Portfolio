'use client';

import { ArrowLeft, ExternalLink } from 'lucide-react';

export function ProjectDetail({ project, onBack }) {
  if (!project) return null;

  return (
    <main className="px-4 sm:px-6 lg:px-8 pt-20 pb-14 sm:pt-24 sm:pb-16">
      <article className="max-w-3xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="mb-7 sm:mb-9 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </button>

        <p className="mb-2 font-mono text-xs font-semibold uppercase text-muted-foreground">
          Project / {project.year}
        </p>
        <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight sm:leading-none text-foreground">
          {project.title}
        </h1>
        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-foreground/85">
          {project.description}
        </p>

        <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a
            href={project.siteUrl}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 sm:px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Visit Site
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border px-5 sm:px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            View Code
          </a>
        </div>

        <div className="mt-10 sm:mt-16 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-auto w-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
        </div>

        <section className="mt-10 sm:mt-16">
          <h2 className="font-mono text-lg sm:text-xl font-bold uppercase text-foreground">Overview</h2>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-muted-foreground">
            {project.overview}
          </p>
        </section>

        <section className="mt-10 sm:mt-16">
          <h2 className="font-mono text-lg sm:text-xl font-bold uppercase text-foreground">Technologies</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={onBack}
          className="mt-12 sm:mt-16 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-foreground hover:text-muted-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </button>
      </article>
    </main>
  );
}

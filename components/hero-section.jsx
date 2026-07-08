'use client';

import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  const [portraitSrc, setPortraitSrc] = useState('/hero-portrait.jpeg');
  const projectSnapshots = ['TrendAI', 'MedConnect', 'Community Resolve', 'ChasinDecor'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 md:pt-28 md:pb-12"
    >
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-5 md:gap-6 order-2 md:order-1">
          <div>
            <h1 className="font-mono text-[1.45rem] sm:text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
              Fonsah <span className="text-accent">Precious</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Frontend Developer | Node.js Backend Engineer
            </p>
          </div>

          <div className="space-y-3 max-w-xl">
            <p className="text-sm sm:text-[15px] text-foreground/80 leading-6 sm:leading-7">
              I build clean React interfaces and reliable Node.js backends for practical products
              like e-commerce stores, community tools, dashboards, and AI-powered web apps.
            </p>
            <p className="text-sm sm:text-[15px] text-muted-foreground leading-6 sm:leading-7">
              I enjoy turning ideas into useful web products, from polished responsive screens to
              REST APIs, authentication flows, and database-backed features.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4 max-w-xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase text-muted-foreground">
              Recent Builds
            </p>
            <div className="flex flex-wrap gap-2">
              {projectSnapshots.map((project) => (
                <span
                  key={project}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-xs text-foreground/85"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 border border-border text-foreground rounded-lg text-sm font-semibold hover:bg-muted transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/precioustenye-max"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/precious-tenye-203428358/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:precioustenye41@gmail.com"
              className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Right - Avatar/Image */}
        <div className="order-1 md:order-2 flex w-full justify-center md:justify-end">
          <div className="relative h-[calc(100svh-7rem)] min-h-[460px] w-full max-w-md md:h-auto md:min-h-0 md:w-96 md:max-w-none md:aspect-[3/4]">
            <div className="absolute inset-0 rounded-2xl bg-card/40 border border-border shadow-2xl shadow-black/60" />

            {/* Portrait */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center bg-muted/30">
              <img
                src={portraitSrc}
                onError={() => setPortraitSrc('/hero-image.jpeg')}
                alt="Fonsah Precious portrait"
                className="w-full h-full object-cover object-[50%_18%]"
                loading="eager"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

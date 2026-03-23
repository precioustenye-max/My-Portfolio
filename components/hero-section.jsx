'use client';

import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  const [portraitSrc, setPortraitSrc] = useState('/hero-portrait.jpg');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-4">
              Fonsah <span className="text-accent">Precious</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Frontend Developer | Node.js Backend Engineer
            </p>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
            I build beautiful, responsive web experiences with modern frontend technologies and
            scalable backend solutions using Node.js. Let's create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:precioustenye41@gmail.com"
              className="p-3 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right - Avatar/Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-72 md:w-96 aspect-[3/4]">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-xl border border-border/50 shadow-2xl" />

            {/* Portrait */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center bg-muted/30">
              <img
                src={portraitSrc}
                onError={() => setPortraitSrc('public/hero-image.jpeg')}
                alt="Fonsah Precious portrait"
                className="w-full h-full object-cover object-[50%_18%]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

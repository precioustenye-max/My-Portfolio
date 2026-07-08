'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const technologies = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML/CSS',
    'Node.js',
    'REST APIs',
    'Mysql',
    'Express.js',
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 font-mono text-xs font-semibold uppercase text-accent">
                About Me
              </p>
              <h2 className="mb-4 font-mono text-xl font-bold text-foreground">
                Frontend Developer with React and Node.js Expertise
              </h2>
            </div>

            <p className="text-[15px] leading-7 text-foreground/80">
              I'm a developer focused on building clean, responsive frontend experiences with
              React, supported by backend skills in Node.js, Express, REST APIs, and MySQL.
            </p>

            <p className="text-[15px] leading-7 text-foreground/80">
              I enjoy turning ideas into useful web products, from polished interfaces to the
              backend routes and data structures that make them work reliably.
            </p>

            <div className="pt-4">
              <h3 className="mb-4 font-mono text-base font-semibold text-foreground">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full font-mono text-accent font-medium text-xs hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats/Features */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '4+', label: 'Featured Builds' },
                { number: '2', label: 'Core Stacks' },
                { number: '100%', label: 'Responsive Focus' },
                { number: 'Open', label: 'Remote Availability' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <p className="mb-1 font-mono text-xl font-bold text-accent">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {[
                'Modern Frontend Development',
                'Node.js Backend Solutions',
                'Responsive & Accessible Design',
                'API Integration & Development',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

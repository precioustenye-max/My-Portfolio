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
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                About Me
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Frontend Developer with FrontEnd and Node.js Expertise
              </h2>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate developer specializing in building beautiful, responsive frontend
              experiences with React and Next.js, complemented by solid backend skills in Node.js.
              I focus on creating seamless user experiences with clean, maintainable code.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My expertise spans modern frontend frameworks, responsive design with Tailwind CSS,
              and backend development with Node.js and Express. I'm dedicated to writing scalable
              code and continuously expanding my technical knowledge.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium text-sm hover:bg-accent/20 transition-colors cursor-default"
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
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <p className="text-3xl font-bold text-accent mb-1">{stat.number}</p>
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
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

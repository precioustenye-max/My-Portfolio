'use client';

import {
  Database,
  Palette,
  Zap,
  GitBranch,
  Smartphone,
  Server,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'Database Design'],
    },
    {
      title: 'Tools & Version Control',
      icon: GitBranch,
      skills: ['Git', 'npm/pnpm', 'VS Code', 'GitHub', 'Linux Terminal'],
    },
    {
      title: 'Responsive Design',
      icon: Smartphone,
      skills: ['Mobile-First Design', 'Responsive Layout', 'CSS Flexbox', 'CSS Grid', 'Media Queries', 'Cross-browser'],
    },
    {
      title: 'Best Practices',
      icon: Zap,
      skills: ['Clean Code', 'Testing', 'Performance', 'Accessibility', 'SEO', 'Web Standards'],
    },
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="mb-2 font-mono text-xs font-semibold uppercase text-accent">
            Expertise
          </p>
          <h2 className="font-mono text-xl font-bold text-foreground">Skills & Technologies</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">
            A comprehensive set of technical skills developed through diverse projects and
            continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="mb-4 font-mono text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted/50 border border-border/50 rounded-lg font-mono text-foreground/80 text-xs font-medium group-hover:border-accent/30 group-hover:text-accent/90 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            { label: 'Expert Level', proficiency: '90%' },
            { label: 'Intermediate', proficiency: '75%' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-semibold">{item.label}</span>
                <span className="text-accent font-bold">{item.proficiency}</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{ width: item.proficiency }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

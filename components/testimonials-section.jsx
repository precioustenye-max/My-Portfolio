'use client';

import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const deliveryHighlights = [
    {
      title: 'Product-Focused Frontend',
      content:
        'I build interfaces around real user flows, including product browsing, reporting forms, cart experiences, dashboards, and responsive layouts.',
    },
    {
      title: 'Backend-Ready Thinking',
      content:
        'My projects are planned with APIs, authentication, database structure, and maintainable integration points in mind from the start.',
    },
    {
      title: 'Clean Handoff',
      content:
        'I keep code readable, component-based, and easy to extend so a project can grow after the first version is shipped.',
    },
  ];

  return (
    <section 
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Delivery Style
          </p>
          <h2 className="text-4xl font-bold text-foreground">How I Approach Projects</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Clear execution, practical features, and code that is built to keep moving after launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryHighlights.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-foreground/80 leading-relaxed flex-grow">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

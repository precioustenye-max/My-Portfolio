'use client';

import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      content:
        "Fonsah transformed our vision into reality. The attention to detail and problem-solving skills were exceptional. We couldn't have asked for a better developer.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, E-Commerce Co',
      content:
        'Working with Fonsah was a game-changer for our platform. The code quality is pristine and the performance improvements were immediate and measurable.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Founder, Design Agency',
      content:
        "Fantastic collaboration! Fonsah understood our design requirements and implemented them beautifully. The website conversion rate increased by 40%.",
      rating: 5,
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
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-foreground">What Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Feedback from satisfied clients who've experienced the quality of my work firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed flex-grow">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

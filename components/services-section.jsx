'use client';

import { Code, Smartphone, TrendingUp, Cog, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies, optimized for performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description:
        'Mobile-first responsive designs that work seamlessly across all devices and screen sizes.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description:
        'Optimize your applications for speed, SEO, and user experience. Faster sites = Higher conversions.',
    },
    {
      icon: Cog,
      title: 'Backend Development',
      description:
        'Scalable APIs and backend systems with secure authentication, databases, and cloud integration.',
    },
    {
      icon: Zap,
      title: 'Full Stack Solutions',
      description:
        'End-to-end development from concept to deployment with integrated frontend and backend.',
    },
    {
      icon: Users,
      title: 'Consultation',
      description:
        'Technical guidance and strategy planning to help you make the right technology choices.',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="services" 
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Services
          </p>
          <h2 className="text-4xl font-bold text-foreground">What I Can Do For You</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Comprehensive services designed to help bring your ideas to life with quality and
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-accent/50 hover:from-card/80 hover:to-card/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-background border border-accent/30 p-12 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to start a project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's collaborate to create something amazing. Get in touch to discuss your ideas and
              how I can help.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <p className="mb-2 font-mono text-xs font-semibold uppercase text-accent">
            Services
          </p>
          <h2 className="font-mono text-lg sm:text-xl font-bold text-foreground">What I Can Do For You</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-[15px] leading-6 sm:leading-7 text-muted-foreground">
            Comprehensive services designed to help bring your ideas to life with quality and
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-xl bg-card/35 border border-border/50 hover:border-accent/50 hover:bg-card/60 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-5 sm:mb-6 inline-flex p-3 sm:p-4 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-mono text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-foreground/70">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl bg-card/35 border border-border p-8 text-center overflow-hidden">
          <div>
            <h3 className="mb-4 font-mono text-lg sm:text-xl font-bold text-foreground">Ready to start a project?</h3>
            <p className="mb-8 max-w-xl mx-auto text-sm sm:text-[15px] leading-6 sm:leading-7 text-muted-foreground">
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

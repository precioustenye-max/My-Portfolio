'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="contact"
      className={`px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-3xl mx-auto border-y border-border/70 py-10 sm:py-12 text-center">
        <p className="text-sm sm:text-[15px] text-muted-foreground leading-6 sm:leading-7">
          I'm currently available for select freelance projects, collaboration and consulting. If
          you have a project that needs a blend of engineering precision and design excellence,
          let's talk.
        </p>
        <a
          href="mailto:precioustenye41@gmail.com?subject=Project%20conversation"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-8 sm:px-10 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}

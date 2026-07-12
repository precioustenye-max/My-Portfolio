'use client';

import { Github, Linkedin, Mail, X } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: 'https://github.com/precioustenye-max', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/precious-tenye-203428358/?skipRedirect=true',
      label: 'LinkedIn',
    },
    { icon: X, href: 'https://x.com', label: 'X' },
    { icon: Mail, href: 'mailto:precioustenye41@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm font-mono text-muted-foreground">© {currentYear}</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-foreground hover:text-muted-foreground transition-colors"
                aria-label={social.label}
              >
                <IconComponent className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

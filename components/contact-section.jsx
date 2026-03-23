'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const toEmail = 'precioustenye41@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [emailOpened, setEmailOpened] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (emailOpened) setEmailOpened(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = formData.subject.trim() || 'New message from portfolio site';
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setEmailOpened(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-foreground">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Have a project in mind? Reach out and let's discuss how I can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'precioustenye41@gmail.com',
                href: 'mailto:precioustenye41@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '654471272',
                href: '237654471272',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Open to remote opportunities',
                href: '#',
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:bg-card/80 transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: 'https://github.com',
                    label: 'GitHub',
                  },
                  {
                    icon: Linkedin,
                    href: 'https://linkedin.com',
                    label: 'LinkedIn',
                  },
                  {
                    icon: Twitter,
                    href: 'https://twitter.com',
                    label: 'Twitter',
                  },
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted/50 hover:bg-accent/20 text-foreground hover:text-accent transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none text-foreground placeholder-muted-foreground resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {emailOpened ? (
                  <>
                    <span>Opening email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {emailOpened && (
                <p className="text-center text-accent text-sm font-medium">
                  Your email app should open with the message filled in. Click "Send" to deliver it.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

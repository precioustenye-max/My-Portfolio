export const projects = [
  {
    slug: 'trendai',
    title: 'TrendAI',
    year: '2026',
    image: '/projects/trendai.png',
    description:
      'An AI-powered trend discovery tool that helps users move from market screenshots and scattered ideas into clearer, action-ready insights.',
    overview:
      'TrendAI helps users explore emerging topics, generate content ideas, and track what is gaining attention online. The product focuses on fast interpretation, practical dashboards, and AI-assisted workflows that turn raw information into useful next steps.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'AI Integration', 'REST APIs'],
    siteUrl: '#contact',
    codeUrl: 'https://github.com/precioustenye-max',
  },
  {
    slug: 'medconnect',
    title: 'MedConnect',
    year: '2026',
    image: '/projects/medconnect.png',
    description:
      'A medicine-focused shopping platform for browsing healthcare products, viewing product details, and supporting prescription workflows.',
    overview:
      'MedConnect is a responsive healthcare commerce interface designed around trust, clear browsing, and simple user flows. It supports product discovery, pharmacy-style navigation, and a structure that can connect cleanly to backend inventory and order APIs.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'MySQL', 'REST APIs'],
    siteUrl: '#contact',
    codeUrl: 'https://github.com/precioustenye-max',
  },
  {
    slug: 'community-resolve-platform',
    title: 'Community Resolve Platform',
    year: '2026',
    image: '/projects/community-resolve.png',
    description:
      'A community reporting platform for local issue tracking, coordination, and cleaner neighborhood response workflows.',
    overview:
      'Community Resolve Platform helps residents report local issues and coordinate clean-up or response efforts. The build emphasizes clear reporting forms, API-ready data flow, and a practical interface for turning local problems into trackable actions.',
    technologies: ['React', 'Node.js', 'MySQL', 'REST APIs'],
    siteUrl: '#contact',
    codeUrl: 'https://github.com/precioustenye-max',
  },
  {
    slug: 'chasindecor-e-commerce-website',
    title: 'ChasinDecor E-Commerce Website',
    year: '2026',
    image: '/projects/chasindecor.png',
    description:
      'A modern furniture store experience with product browsing, interior design positioning, and a polished shopping flow.',
    overview:
      'ChasinDecor is a furniture e-commerce interface focused on visual presentation, responsive layout, and product discovery. It includes a premium hero experience, shopping-oriented navigation, and foundations for catalog, cart, and design-service workflows.',
    technologies: ['React', 'Tailwind CSS'],
    siteUrl: '#contact',
    codeUrl: 'https://github.com/precioustenye-max',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

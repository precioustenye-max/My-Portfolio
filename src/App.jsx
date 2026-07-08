import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ProjectDetail } from '@/components/project-detail'
import { getProjectBySlug } from '@/lib/projects'

function getCurrentProjectSlug() {
  if (typeof window === 'undefined') return null

  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match?.[1] ?? null
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(getCurrentProjectSlug)
  const selectedProject = projectSlug ? getProjectBySlug(projectSlug) : null

  useEffect(() => {
    const handlePopState = () => setProjectSlug(getCurrentProjectSlug())

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openProject = (slug) => {
    window.history.pushState({}, '', `/projects/${slug}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setProjectSlug(slug)
  }

  const goHome = () => {
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setProjectSlug(null)
  }

  if (selectedProject) {
    return (
      <>
        <ProjectDetail project={selectedProject} onBack={goHome} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection onProjectSelect={openProject} />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ProjectDetail } from '@/components/project-detail'
import { ProjectsPage } from '@/components/projects-page'
import { getProjectBySlug } from '@/lib/projects'

function getCurrentProjectSlug() {
  if (typeof window === 'undefined') return null

  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match?.[1] ?? null
}

function isProjectsPage() {
  if (typeof window === 'undefined') return false
  return /^\/projects\/?$/.test(window.location.pathname)
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(getCurrentProjectSlug)
  const [showAllProjects, setShowAllProjects] = useState(isProjectsPage)
  const selectedProject = projectSlug ? getProjectBySlug(projectSlug) : null

  useEffect(() => {
    const handlePopState = () => {
      setProjectSlug(getCurrentProjectSlug())
      setShowAllProjects(isProjectsPage())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openProject = (slug) => {
    window.history.pushState({}, '', `/projects/${slug}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setProjectSlug(slug)
    setShowAllProjects(false)
  }

  const openAllProjects = () => {
    window.history.pushState({}, '', '/projects')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setProjectSlug(null)
    setShowAllProjects(true)
  }

  const goHome = () => {
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setProjectSlug(null)
    setShowAllProjects(false)
  }

  if (selectedProject) {
    return (
      <>
        <ProjectDetail project={selectedProject} onBack={goHome} />
        <Footer />
      </>
    )
  }

  if (showAllProjects) {
    return (
      <>
        <ProjectsPage onBack={goHome} onProjectSelect={openProject} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection limit={2} onProjectSelect={openProject} onViewAll={openAllProjects} />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

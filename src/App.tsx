import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import AboutMe from '@/components/AboutMe'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
// src/App.tsx
import React from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; // Import the AnimatedLogo component

const projects = [
  {
    id: 1,
    name: 'Project One',
    image: '/placeholder.svg?height=400&width=600',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    name: 'Project Two',
    image: '/placeholder.svg?height=400&width=600',
    techStack: ['Vue.js', 'JavaScript', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    id: 3,
    name: 'Project Three',
    image: '/placeholder.svg?height=400&width=600',
    techStack: ['Angular', 'TypeScript', 'Go', 'GraphQL', 'MySQL'],
  },
]

const App: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length)
  }, [])

  const scrollToSection = (index: number) => {
    projectRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="body">
      <AnimatedLogo />
      <div className="delay-1500 overflow-y-hidden">
      <div className="min-h-screen bg-gray-100">
      <Navbar onNavClick={scrollToSection} />
      <main className="container mx-auto px-4">
        <AboutMe />
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            ref={(el) => (projectRefs.current[index] = el)}
          />
        ))}
      </main>
      <Footer onContactClick={() => setShowContactForm(true)} />
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
      </div>
    </div>
  );
};

export default App;
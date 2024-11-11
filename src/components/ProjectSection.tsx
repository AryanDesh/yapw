import { forwardRef, useEffect, useRef } from 'react'

interface ProjectProps {
  project: {
    name: string
    image: string
    techStack: string[]
  }
}

const ProjectSection = forwardRef<HTMLDivElement, ProjectProps>(({ project }, ref) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && techStackRef.current) {
        const scrollPosition = window.scrollY
        const elementPosition = imageRef.current.offsetTop
        const distance = scrollPosition - elementPosition
        const windowHeight = window.innerHeight

        if (distance > -windowHeight && distance < windowHeight) {
          imageRef.current.style.transform = `translateY(${distance * 0.1}px)`
          techStackRef.current.style.transform = `translateX(${distance * 0.05}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 relative z-10">{project.name}</h2>
          <img
            ref={imageRef}
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div ref={techStackRef} className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

ProjectSection.displayName = 'ProjectSection'

export default ProjectSection
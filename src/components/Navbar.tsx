import { useState, useEffect } from 'react'

interface NavbarProps {
  onNavClick: (index: number) => void
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-gray-800">Portfolio</a>
          <ul className="flex space-x-4">
            <li><button onClick={() => onNavClick(0)} className="text-gray-600 hover:text-gray-900">Project 1</button></li>
            <li><button onClick={() => onNavClick(1)} className="text-gray-600 hover:text-gray-900">Project 2</button></li>
            <li><button onClick={() => onNavClick(2)} className="text-gray-600 hover:text-gray-900">Project 3</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
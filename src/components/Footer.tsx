import { Github, Linkedin, Twitter } from 'lucide-react'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Github /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin /></a>
            <a href="#" className="hover:text-gray-300"><Twitter /></a>
          </div>
          <button
            onClick={onContactClick}
            className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
    </footer>
  )
}
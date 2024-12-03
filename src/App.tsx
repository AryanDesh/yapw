import React, { useEffect, useRef, useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; 
import Title from "./components/Title";
import CenteredScrollComponent from "./components/ProjectImages"
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills'

const App: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollProfile = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2800); 

    let mouseX = 0
    let mouseY = 0
    let ballX = 0
    let ballY = 0
    const speed = 0.2
    
    function animate() {
      const distX = mouseX - ballX
      const distY = mouseY - ballY
      
      ballX += distX * speed
      ballY += distY * speed
      
      setPosition({ x: ballX, y: ballY })
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleScrollToProjects = () => {
    console.log(scrollRef.current)
    scrollRef.current?.scrollIntoView({ behavior : "smooth"});
  }

  const handleScrollToProfile = () => {
    console.log(scrollProfile.current)
    scrollProfile.current?.scrollIntoView({ behavior : "smooth"});
  }


  if (!isVisible) {
    return  (<AnimatedLogo />)
  }

  return (
    <div className="bg-[#FFF8E7] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div ref={ballRef}
      className={`bounce ball`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}>
      </div>
      <div 
      className="flex md:flex-row flex-col"
      >
        <Title onScrollToProjects={handleScrollToProjects} onScrollToProfile={handleScrollToProfile}/>
        <div
          className="md:w-[60%] relative overflow-y-auto bg-[#002a32]">
            <div ref={scrollProfile}>
              <AboutMe />
            </div>
            <div>
                <Skills />
            </div>    
            <div ref = {scrollRef} 
            >
              <CenteredScrollComponent />
            </div>
        </div>
      </div>
    </div>
  );
};

export default App

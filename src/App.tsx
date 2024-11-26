import React, { useEffect, useRef, useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; 
import Title from "./components/Title";
import CenteredScrollComponent from "./components/ProjectImages"
import AboutMe from "./components/AboutMe";

const App: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollProfile = useRef<HTMLDivElement>(null);
  const scrollSkills = useRef<HTMLDivElement>(null);
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
      mouseX = e.pageX
      mouseY = e.pageY
    }
    
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      setIsActive(false)
      setTimeout(() => setIsActive(true), 0)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    // document.addEventListener('click', handleClick)
    
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
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

  const handleScrollToSkills = () => {
    console.log(scrollSkills.current)
    scrollSkills.current?.scrollIntoView({ behavior : "smooth"});
  }


  if (!isVisible) {
    return  (<AnimatedLogo />)
  }

  return (
    <div className="bg-[#FFF8E7] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div ref={ballRef}
      className={`bounce ball  ${isActive ? 'active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}>
      </div>
      <div 
      className="flex md:flex-row flex-col"
      >
        <Title onScrollToProjects={handleScrollToProjects} onScrollToProfile={handleScrollToProfile} onScrollToSkills ={handleScrollToSkills}/>
        <div
          className="md:w-[55%] ml-auto relative overflow-y-auto">
            <div ref={scrollProfile}>
              <AboutMe />
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

export default App;
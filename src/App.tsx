import React, { useEffect, useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; // Import the AnimatedLogo component
import Title from "./components/Title";
import CenteredScrollComponent from "./components/ProjectImages"
import AboutMe from "./components/AboutMe"
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (!isVisible) {
    return  (<AnimatedLogo />)
  }

  return (
    <div className="flex">
      <Title />

      <div className="w-[65%] ml-auto relative overflow-y-auto">
        <CenteredScrollComponent />
      </div>
    </div>
  );
};

export default App;
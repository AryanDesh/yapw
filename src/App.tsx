import React, { useEffect, useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; // Import the AnimatedLogo component
import Topbar from "./components/Topbar";
import Title from "./components/Title";
import CenteredScrollImage from "./components/ProjectImages";

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
    <div>
        <Title/>
        <div className="parallax__foreground-back">
        <Topbar />
        </div> 
        <div className="parallax_rays">
          < CenteredScrollImage/>
        </div>
    </div>
  );
};

export default App;
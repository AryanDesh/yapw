// src/App.tsx
import React from "react";
import AnimatedLogo from "@/components/AnimatedLogo"; // Import the AnimatedLogo component

const App: React.FC = () => {
  return (
    <div className="body">
      <AnimatedLogo />
      <div className="delay-1500">

      </div>
    </div>
  );
};

export default App;

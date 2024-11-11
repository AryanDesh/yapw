// src/components/AnimatedLogo.tsx
import React from "react";
import "@/App.scss"; 

const AnimatedLogo: React.FC = () => {
  const a = ":)"
  return (
    <div className="opening">
      <span className="title">A</span>
      <span className="title">R</span>
      <span className="title">Y</span>
      <span className="title">A</span>
      <span className="title">N</span>
      <span className="title">{a}</span>
    </div>
  );
};

export default AnimatedLogo;

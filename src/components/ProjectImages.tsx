import React, { useState, useEffect, useRef, useMemo } from 'react';
import bmbi from '../assets/BMBI.svg';
import bgImage from '../assets/background.webp';
import reactimage from '../assets/react.svg';
import './ProjectImages.scss'
type Section = {
  id: string;
  text: string;
  imageUrl: string;
};

const CenteredScrollComponent: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections: Section[] = useMemo(
    () => [
      { id: 'section1', text: 'Innovative', imageUrl: bgImage },
      { id: 'section2', text: 'Creative', imageUrl: bmbi },
      { id: 'section3', text: 'Inspiring', imageUrl: reactimage },
    ],
    []
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sections.findIndex(
            (section) => section.id === entry.target.id
          );
          if (sectionIndex !== -1) setCurrentSectionIndex(sectionIndex);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="relative min-h-screen">
      {/* Fixed image container */}
      <div className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <div className="relative w-[400px] h-[400px] transform transition-transform duration-700 ease-in-out">
          {/* Image */}
          <img
            src={sections[currentSectionIndex].imageUrl}
            alt="Fixed central image"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative z-3">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="h-screen flex items-center justify-center bg-gray-100"
          >
            <div className="section-text-container">
              <h2
                className={`section-text ${
                  currentSectionIndex === index ? 'active' : ''
                }`}
              >
                {section.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredScrollComponent;

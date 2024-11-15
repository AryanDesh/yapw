import React, { useState, useEffect, useRef, useMemo } from 'react';
import bmbi from '../assets/BMBI.svg';
import bgImage from '../assets/background.webp';
import reactImage from '../assets/react.svg';
import AboutMe from './AboutMe';

type Section = {
  id: string;
  text: string;
  imageUrl: string;
};

const CenteredScrollComponent: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections: Section[] = useMemo(
    () => [
      { id: 'section1', text: 'Innovative', imageUrl: bgImage },
      { id: 'section2', text: 'Creative', imageUrl: bmbi },
      { id: 'section3', text: 'Inspiring', imageUrl: reactImage },
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full overflow-scroll">
        <AboutMe />
      </div>
      <div className="flex">
        {/* Scrollable content */}
        <div className="w-[50%] ml-auto relative">
          <div className="relative z-20">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="h-screen flex items-center justify-center"
              >
                <div className="text-center">
                  <h2
                    className={`text-3xl font-semibold ${
                      currentSectionIndex === index
                        ? 'text-gray-800'
                        : 'text-gray-400'
                    }`}
                  >
                    {section.text}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Fixed Image */}
          <div className="fixed top-0 right-[12.5%] w-[25%] h-screen flex items-center justify-center z-10">
            <div
              className={`w-[250px] h-[250px] transition-opacity duration-500 ease-in-out ${
                isImageVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <img
                src={sections[currentSectionIndex].imageUrl}
                alt="Fixed central image"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenteredScrollComponent;

import React, { useState, useEffect, useRef, useMemo } from 'react';
import webcraft from '@/assets/webcraft.png';
import bmbi from '../assets/BMBI.svg';
import pc from '@/assets/psychecare.png';
import bgImage from '../assets/background.webp';
// import coffee from '../assets/coffee.jpg' 
import ledger from '@/assets/ledgerflow.png'
import blog from '@/assets/blog.webp'
import rtchat from '@/assets/rtchat.jpg'
type Section = {
  id: string;
  text: string;
  imageUrl: string;
  techStack: string[];
};

const CenteredScrollComponent: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const [parallaxOffset, setParallaxOffset] = useState<number>(0);

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const sections: Section[] = useMemo(
    () => [
      {
        id: 'WebCraft',
        text: 'WebCraft is a multi-tenant SaaS website builder empowering agencies to create, manage, and monetize products with customizable templates and automation.',
        imageUrl: webcraft,
        techStack: ['Next.js', 'Clerk Auth', 'Shadcn/ui','Prisma', 'MySQL', 'Razorpay', 'TypeScript', 'UploadThings'],
      },
      {
        id: 'LedgerFlow',
        text: 'LedgerFlow is a seamless user-merchant payment app enabling secure P2P transfers, bank integrations, real-time transactions, and comprehensive financial management.',
        imageUrl: ledger,
        techStack: ['Next.js', 'OAuth', 'TurboRepo', 'Prisma','PostgreSQL', 'TypeScript','Express', 'Webhooks'],
      },
      {
        id: 'Psyche-Care',
        text: 'PsycheCare revolutionizes therapy access by combining advanced technology with empathy, offering personalized mental health solutions through an intuitive platform.',
        imageUrl: pc,
        techStack: ['Next.js', 'Clerk Auth', 'Shadcn/ui', 'Razorpay', 'TypeScript', 'UploadThings'],
      },
      {
        id: 'Ink & Insight',
        text: 'Ink and Insight is a creative platform empowering writers to showcase their work, collaborate, and connect with a vibrant literary community.',
        imageUrl: blog,
        techStack: ['Next.js', 'Clerk Auth', 'Shadcn/ui', 'Razorpay', 'TypeScript', 'UploadThings'],
      },
      {
        id: 'RTChat',
        text: 'RTChat is a real-time chat application offering seamless communication with WebSockets, scalable architecture, rich messaging features, and secure authentication.',
        imageUrl: rtchat,
        techStack: ['Next.js', 'Clerk Auth', 'Shadcn/ui', 'Razorpay', 'TypeScript', 'UploadThings'],
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.findIndex((section) => section.id === entry.target.id);
            if (sectionIndex !== -1) setCurrentSectionIndex(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        if (window.innerWidth >= 768) setIsImageVisible(true);
        else if (window.scrollY > 1000) setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }

      // Parallax calculation
      const offset = window.scrollY * 0.5; // Adjust multiplier for stronger/weaker parallax effect
      setParallaxOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        {/* Parallax Background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
          style={{
            // backgroundImage: `url(${rtchat})`,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        ></div>

        <div className="relative z-10 flex">
          {/* Scrollable content */}
          <div className="relative">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="h-screen flex items-center justify-center"
              ></div>
            ))}
          </div>
          {/* Fixed Image */}
          <div
            className={`fixed top-0 right-[20%] lg:right-[12.5%] lg:w-[30%] h-screen flex flex-col items-center justify-center z-10 ${
              isImageVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            {/* Project Title */}
            <h1
              className="text-3xl font-bold mb-4 bg-clip-text text-[#FFF8E7]"
            >
              {sections[currentSectionIndex].id}
            </h1>

            {/* Image */}
            <img
              src={sections[currentSectionIndex].imageUrl}
              alt="Fixed central image"
              className="shadow-2xl shadow-black h-[200px] w-[400px] rounded-lg mb-6 z-20"
            />

            {/* Project Description */}
            <p
              className="text-md text-left px-4 bg-clip-text text-[#FFF8E7]"
            >
              {sections[currentSectionIndex].text}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {sections[currentSectionIndex].techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full shadow shadow-[#FFF8E7] hover:motion-bg-out-neutral-950 text-[#FFF8E7] "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenteredScrollComponent;

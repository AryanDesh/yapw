import React from 'react';
import profile from '@/assets/profile.jpeg'
const AboutMe: React.FC = () => {
  const name = 'John Doe';
  const profilePicture = profile;

  return (                                  
    <div className="mx-4 lg:mx-32 my-10 lg:my-40">
      <div className=" flex justify-items-center mb-6">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-36 h-52 rounded-3xl object-cover "
        />
        <div className='font-mono text-[#FFF8E7] ml-2'>
        Hello, I'm Aryan Deshmukh, a technology enthusiast with a strong foundation in modern web development, DevOps, and scalable backend architecture. I specialize in building complex backend applications. Always eager to tackle challenging problems and aim to deliver reliable, scalable, and impactful solutions.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

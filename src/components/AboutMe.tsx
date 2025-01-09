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
        Web Developer based in Pune Maharashtra, eager to solve real-world problems through technology. Open to hybrid or remote and on-site roles, focused on contributing to impactful projects while growing professionally.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from 'react';
import profile from '@/assets/profile.jpeg'
const AboutMe: React.FC = () => {
  const name = 'John Doe';
  const profilePicture = profile;

  return (                                  
    <div className="w-dvw p-6 ">
      <div className="justify-items-center mb-6">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-36 h-36 rounded-full object-cover mb-4 "
        />
      </div>
    </div>
  );
};

export default AboutMe;

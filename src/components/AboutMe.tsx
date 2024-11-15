import React from 'react';

const AboutMe: React.FC = () => {
  const name = 'John Doe';
  const age = 30;
  const bio =
    "I'm a passionate web developer with a love for building scalable and responsive applications. Always learning and growing in this fast-paced tech world.";
  const hobbies = ['Coding', 'Reading', 'Traveling', 'Photography'];
  const profilePicture = 'https://www.example.com/profile.jpg';

  return (
    <div className="w-full p-6 border-b border-gray-200 bg-white shadow-md">
      <div className="text-center mb-6">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-xl text-gray-600">Age: {age}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">{bio}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Hobbies</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {hobbies.map((hobby, index) => (
            <li key={index} className="text-lg">
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

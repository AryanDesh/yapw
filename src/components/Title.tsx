import React from 'react';
import { SocialIcon } from 'react-social-icons'
import { Toaster, toast } from "sonner" 
interface TitleProps {
  onScrollToProjects : () => void;
  onScrollToProfile : () => void
  onScrollToSkills : () => void

}
const Title: React.FC<TitleProps> = ({ onScrollToProjects , onScrollToProfile, onScrollToSkills }) => {
  return (
    <div className="md:sticky top-0 left-0 md:w-1/2 w-full h-screen border-2 border-cyan-600 ">
            <Toaster position="top-right" richColors /> 
      <div className='mx-32 my-32'>
        <h1 className='text-zinc-950 text-3xl font-bold font-serif'>
          Aryan Deshmukh
        </h1>
        <h2 className='pl-9'> Full-Stack Developer</h2>
        <button onClick={onScrollToProjects}
          className='mt-4 px-4 py-2 text-black rounded hover:motion-preset-expand'
        >
          Projects
        </button>
        <br />
        <button onClick={onScrollToProfile}
          className='mt-4 px-4 py-2 text-black rounded hover:motion-preset-expand'
        >
          Profile
        </button>
        <button onClick={onScrollToSkills}
          className='mt-4 px-4 py-2 text-black rounded hover:motion-preset-expand'
        >
          Skills
        </button>
        <div className='mt-72 items-center'>
          <span className='pr-4'>
            <SocialIcon url='https://github.com/AryanDesh' />
          </span>
          <span className='px-4'>
            <SocialIcon url='https://www.linkedin.com/in/aryandeshmukh-profile/' />
          </span>
          <span 
            className="md:px-2 px-4 text-l underline cursor-pointer text-blue-500 hover:motion-preset-blur-left"
            onClick={() => {
              navigator.clipboard.writeText('adeshmukh843@gmail.com')
              toast.success('Email copied to clipboard!');
            } 
          }
          >
            adeshmukh843@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};


export default Title;

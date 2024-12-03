import React from 'react';
import { SocialIcon } from 'react-social-icons'
interface TitleProps {
  onScrollToProjects : () => void;
  onScrollToProfile : () => void

}
const Title: React.FC<TitleProps> = ({ onScrollToProjects , onScrollToProfile }) => {
  return (
    <div className="lg:sticky top-0 lg:w-1/2 w-full h-screen">
      <div className='mt-32 flex flex-col items-center'>
        <div className='flex w-fit flex-col items-center justify-center'>
          <h1 className='text-zinc-950 text-4xl font-bold font-serif'>
            Aryan Deshmukh
          </h1>
          <h2 className='bg-gradient-to-r from-[#002a32] to-accent bg-clip-text text-transparent text-xl font-mono '> Full-Stack Developer</h2>
      </div>
        <button onClick={onScrollToProfile}
          className='mt-20 w-full text-black underline underline-offset-2 font-semibold font-sans text-lg hover:motion-preset-expand'
          >
          Profile
        </button>
        <br />
        <button onClick={onScrollToProjects}
          className='my-8 text-black underline underline-offset-2 font-semibold font-sans text-lg rounded hover:motion-preset-expand'
        >
          Projects
        </button>
        <br />
        <div className='flex mt-40 z-30 '>
          <div className='pr-4'>
            <SocialIcon url='https://github.com/AryanDesh' />
          </div>
          <div className='px-4 z-30'>
            <SocialIcon url='https://www.linkedin.com/in/aryandeshmukh-profile/' />
          </div>
          <div className='px-4 z-30' 
          onClick={() => {
            navigator.clipboard.writeText('adeshmukh843@gmail.com')
          } 
        }
          >
            <SocialIcon url='mailto:adeshmukh843@gmail.com' />
            </div>
        </div>
      </div>
    </div>
  );
};


export default Title;

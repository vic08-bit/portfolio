// file: components/Hero.tsx
'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { HeroBackground } from './HeroBackground';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Security Analyst.', 'Security Engineer.'],
    loop: true, typeSpeed: 90, deleteSpeed: 60, delaySpeed: 1500,
  });

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden">
      <HeroBackground />
      
      {/* 
         "Merged" Container: 
         - Removed heavy borders and shadows.
         - Extremely subtle background so text is readable but feels part of the scene.
      */}
      <div className="z-10 px-6 py-12 max-w-4xl mx-4">
        <h1 className="mb-6 font-mono text-lg md:text-xl font-medium text-light-text-secondary dark:text-gray-400 tracking-wider">
          Hi, my name is
        </h1>
        
        {/* Name is now ALWAYS Accent Blue */}
        <h2 className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter text-accent mb-6 drop-shadow-sm">
          Vignesh R.
        </h2>
        
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-light-text-primary dark:text-white">
          I'm a <span className="text-light-text-secondary dark:text-gray-300">{text}</span>
          <Cursor cursorStyle='|' cursorColor="#2563eb" />
        </h3>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-light-text-secondary dark:text-gray-400">
          I specialize in transforming security operations from reactive to proactive, utilizing automation and threat intelligence to build and defend resilient digital architectures.
        </p>
        
        <div className="mt-12">
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-accent px-8 font-medium text-white transition-all duration-300 hover:w-40 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <span className="mr-2">View Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
// file: components/Hero.tsx
'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Security Analyst.', 'Security Engineer.', 'Cloud Security Engineer.'],
    loop: true, typeSpeed: 90, deleteSpeed: 60, delaySpeed: 1500,
  });

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center">
      <h1 className="mb-4 font-mono text-xl text-accent">Hi, my name is</h1>
      <h2 className="text-5xl font-extrabold text-light-text-primary dark:text-dark-text-primary sm:text-7xl">Vignesh R.</h2>
      <h3 className="mt-2 text-4xl font-extrabold text-light-text-secondary dark:text-dark-text-secondary sm:text-6xl">
        I'm a {text}
        <Cursor cursorStyle='_' cursorColor="#1520a6" />
      </h3>
      <p className="mt-8 max-w-xl text-lg">I specialize in transforming security operations from reactive to proactive, utilizing automation and threat intelligence to build and defend resilient digital architectures.</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-12 w-fit rounded-md border-2 border-accent px-8 py-4 font-mono text-lg text-accent transition-all duration-300 hover:bg-accent hover:text-white">
        View My Resume
      </a>
    </section>
  );
};
export default Hero;
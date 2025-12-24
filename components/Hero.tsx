// file: components/Hero.tsx
'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Security Analyst.', 'Security Engineer.', 'Cloud Security Engineer.'],
    loop: true, typeSpeed: 90, deleteSpeed: 60, delaySpeed: 1500,
  });

  return (
    <section id="hero" className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
      <h1 className="mb-4 font-mono text-xl text-accent">Hi, my name is</h1>
      <h2 className="text-6xl font-extrabold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-8xl">Vignesh R.</h2>
      <h3 className="mt-4 text-4xl font-bold tracking-tight text-light-text-secondary dark:text-dark-text-secondary sm:text-6xl">
        I'm a {text}
        <Cursor cursorStyle='|' cursorColor="#3b82f6" />
      </h3>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-light-text-secondary dark:text-dark-text-secondary">
        I specialize in transforming security operations from reactive to proactive, utilizing automation and threat intelligence to build and defend resilient digital architectures.
      </p>
    </section>
  );
};
export default Hero;
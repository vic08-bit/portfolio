'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

// ... (rest of the Navbar code from the previous working version, it will automatically use the new colors)
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!mounted) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ hasScrolled ? 'shadow-md bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm' : 'bg-transparent' }`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">VR.</Link>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-accent transition-colors">{link.name}</a>
          ))}
          <button onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
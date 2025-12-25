// file: components/Projects.tsx
'use client';
import { SectionWrapper } from './SectionWrapper';
import { useRef } from 'react';

const projectsData = [
  {
    title: 'EDR/XDR Analysis',
    subtitle: 'Benchmark the new status quo.',
    description: 'Developed a custom script to systematically benchmark the detection and prevention capabilities of a leading XDR solution.',
    imgSrc: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=EDR+Project',
    githubLink: '#',
  },
  {
    title: 'Secure Enterprise Lab',
    subtitle: 'Unfold extraordinary security.',
    description: 'Designed and implemented a multi-segment virtual network in GNS3 to simulate and secure critical services like DMVPN.',
    imgSrc: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=Secure+Lab',
    githubLink: '#',
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="projects">
      {/* Header + Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary">
            Things I've Built
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-accent mx-auto md:mx-0"></div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-4">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-light-border dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-light-text-primary dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-light-border dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-light-text-primary dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-8">
        {projectsData.map((project, index) => (
          // Card Container
          <div key={index} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[900px] flex-shrink-0 snap-center rounded-3xl bg-light-card dark:bg-[#0a0a0a] border border-light-border dark:border-white/10 overflow-hidden shadow-sm flex flex-col lg:flex-row">
            
            {/* Image Content - ORDER 1 (Top) */}
            {/* FIX: h-48 is approx 200px. Good balance for mobile. */}
            <div className="relative h-48 md:h-64 lg:h-auto lg:w-[45%] bg-gray-200 dark:bg-gray-800 lg:order-2">
                <img src={project.imgSrc} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Text Content - ORDER 2 (Bottom) */}
            {/* FIX: Reduced padding (p-6) and gap to make it compact vertically */}
            <div className="p-6 lg:p-12 flex-1 flex flex-col justify-center lg:order-1">
              <h3 className="text-xl md:text-3xl font-bold text-light-text-primary dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-accent mb-3">
                {project.subtitle}
              </p>
              
              {/* FIX: line-clamp-3 ensures text doesn't push the button off screen */}
              <p className="text-sm md:text-lg text-light-text-secondary dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none">
                {project.description}
              </p>
              
              <div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-accent px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md">
                  View Project
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Projects;
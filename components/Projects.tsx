// file: components/Projects.tsx
'use client';
import { SectionWrapper } from './SectionWrapper';
import { useRef } from 'react';

const projectsData = [
  {
    title: 'EDR/XDR Detection Analysis',
    subtitle: 'Benchmark the new status quo.',
    description: 'Developed a custom script to systematically benchmark the detection and prevention capabilities of a leading XDR solution, validating its effectiveness against simulated adversary techniques.',
    imgSrc: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=EDR+Project',
    githubLink: '#',
  },
  {
    title: 'Secure Enterprise Lab',
    subtitle: 'Unfold extraordinary security.',
    description: 'Designed and implemented a multi-segment virtual network in GNS3 to simulate and secure critical services like DMVPN, Client-to-Site VPN, and Router Redundancy Protocols.',
    imgSrc: 'https://placehold.co/1200x800/1a1a1a/ffffff?text=Secure+Lab',
    githubLink: '#',
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by one card width
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="projects">
      <div className="flex items-center justify-between mb-12 px-4">
        <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary">
          Things I've Built
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-light-border dark:border-dark-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-light-border dark:border-dark-border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-12">
        {projectsData.map((project, index) => (
          // Adjusted width to be responsive (85vw on mobile, 900px max on desktop)
          // Removed rigid min-width that caused cutoff
          <div key={index} className="w-[85vw] md:w-[80vw] lg:w-[900px] flex-shrink-0 snap-center rounded-[2.5rem] bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row h-full">
              
              {/* Text Content */}
              <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-base font-semibold text-accent mb-6">
                  {project.subtitle}
                </p>
                {/* Added max-width to text to prevent horizontal overflow within flex item */}
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-10 leading-relaxed max-w-md">
                  {project.description}
                </p>
                
                <div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-accent px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105 shadow-md hover:shadow-lg">
                    View Project
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative h-64 lg:h-auto lg:w-[45%] bg-gray-100 dark:bg-gray-800 order-1 lg:order-2">
                 <img 
                   src={project.imgSrc} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>

            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Projects;
// file: components/Projects.tsx
import  SectionWrapper  from './SectionWrapper';

const projectsData = [
  { title: 'EDR/XDR Detection Capability Analysis', description: 'Developed a custom installer script to systematically benchmark the detection and prevention capabilities of a leading XDR solution.', technologies: ['PowerShell', 'Windows Internals', 'Endpoint Security', 'Cortex XDR'], githubLink: '#' },
  { title: 'Secure Enterprise Infrastructure Lab', description: 'Designed and implemented a multi-segment virtual network to simulate and secure critical services.', technologies: ['GNS3/EVE-NG', 'Cisco IOS', 'Windows Server', 'Linux (DNS)'], githubLink: '#' },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">Things I've Built</h2>
      <div className="mx-auto mt-6 mb-16 h-1.5 w-24 rounded-full bg-accent"></div>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
      {projectsData.map((project) => (
        <div key={project.title} className="group flex flex-col rounded-2xl bg-glass-light dark:bg-glass-dark shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-glass-border backdrop-blur-2xl">
          <div className="flex-grow p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
            </div>
            <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">{project.description}</p>
          </div>
          <div className="border-t border-glass-border p-6">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full bg-accent/10 px-4 py-1.5 font-mono text-sm text-accent">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);
export default Projects;
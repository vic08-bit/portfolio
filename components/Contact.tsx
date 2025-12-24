// file: components/Contact.tsx
import SectionWrapper  from './SectionWrapper';

const Contact = () => (
  <SectionWrapper id="contact" className="text-center">
    <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">Let's Connect</h2>
    <div className="mx-auto mt-6 mb-12 h-1 w-24 rounded-full bg-accent"></div>
    <p className="mx-auto max-w-xl text-lg text-light-text-secondary dark:text-dark-text-secondary">I'm currently seeking new opportunities for a Security Engineer role and am open to connecting with fellow professionals. My inbox is always open!</p>
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href="mailto:vigneshvickyswt@gmail.com" className="w-full sm:w-auto rounded-md border-2 border-accent bg-accent px-8 py-4 font-mono text-lg text-white transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover">Email Me</a>
      <a href="https://www.linkedin.com/in/vigneshr898" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-md border-2 border-accent px-8 py-4 font-mono text-lg text-accent transition-all duration-300 hover:bg-accent hover:text-white">LinkedIn</a>
    </div>
  </SectionWrapper>
);
export default Contact;
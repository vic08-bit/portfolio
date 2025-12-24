// file: components/Contact.tsx
import { SectionWrapper } from './SectionWrapper';

const Contact = () => (
  <SectionWrapper id="contact">
    <div className="rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-8 text-center shadow-2xl sm:p-16">
      <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">Let's Connect</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-light-text-secondary dark:text-dark-text-secondary">
        I'm currently seeking new opportunities for a Security Engineer role and am open to connecting with fellow professionals. My inbox is always open!
      </p>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="mailto:vigneshvickyswt@gmail.com" className="w-full sm:w-auto rounded-full bg-light-text-primary px-8 py-4 font-semibold text-light-bg dark:bg-dark-text-primary dark:text-dark-bg transition-transform hover:scale-105">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/vigneshr898" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-full px-8 py-4 font-semibold text-light-text-primary dark:text-dark-text-primary ring-2 ring-inset ring-light-text-primary dark:ring-dark-text-primary transition-transform hover:scale-105">
          LinkedIn
        </a>
      </div>
    </div>
  </SectionWrapper>
);
export default Contact;

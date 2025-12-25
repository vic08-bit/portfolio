// file: components/Contact.tsx
import { SectionWrapper } from './SectionWrapper';
    
const Contact = () => (
  <SectionWrapper id="contact">
    <div className="rounded-[2.5rem] bg-light-card dark:bg-[#0a0a0a] border border-light-border dark:border-white/10 p-8 md:p-16 text-center shadow-sm">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text-primary dark:text-white">
        Let's Connect
      </h2>
      {/* Standard Blue Line */}
      <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-accent"></div>

      <p className="mx-auto mt-8 max-w-xl text-lg text-light-text-secondary dark:text-gray-300">
        I'm currently seeking new opportunities for a Security Engineer role and am open to connecting with fellow professionals. My inbox is always open!
      </p>
      
      {/* Mobile-friendly button stack */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="mailto:vigneshvickyswt@gmail.com" className="w-full sm:w-auto rounded-full bg-accent px-8 py-4 font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-blue-500/25">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/vigneshr898" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-full px-8 py-4 font-bold text-light-text-primary dark:text-white border border-light-border dark:border-white/20 hover:bg-light-bg dark:hover:bg-white/5 transition-transform hover:scale-105">
          LinkedIn
        </a>
      </div>
    </div>
  </SectionWrapper>
);
export default Contact;
// file: components/About.tsx
import { SectionWrapper } from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text-primary dark:text-white">
        About Me
      </h2>
      {/* The Standard Blue Line */}
      <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-accent"></div>
    </div>
    
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-lg md:text-xl leading-relaxed text-light-text-secondary dark:text-gray-300">
        As a seasoned Cybersecurity Analyst with over two years of experience in enterprise environments, I specialize in hardening systems and automating incident response. My hands-on experience with Cortex XSIAM/XDR, PAN-OS Firewalls, and Prisma SASE allows me to design and implement robust, threat-aware defenses.
      </p>
      <br />
      <p className="text-lg md:text-xl leading-relaxed text-light-text-secondary dark:text-gray-300">
        I am driven by the challenge of implementing Zero Trust principles to build resilient security architectures. My goal is to leverage my skills in a Security Engineer role to proactively protect enterprise assets.
      </p>
    </div>
  </SectionWrapper>
);
export default About;
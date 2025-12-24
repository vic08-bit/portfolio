// file: components/About.tsx
import { SectionWrapper } from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about">
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">About Me</h2>
      <div className="mx-auto mt-6 mb-12 h-1.5 w-24 rounded-full bg-accent"></div>
    </div>
    <div className="mx-auto max-w-3xl space-y-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
      <p>As a seasoned Cybersecurity Analyst with over two years of experience, I specialize in hardening systems and automating incident response. My hands-on experience with Cortex XSIAM/XDR, PAN-OS Firewalls, and Prisma SASE allows me to design and implement robust, threat-aware defenses.</p>
      <p>I am driven by the challenge of implementing Zero Trust principles to build resilient security architectures. My goal is to leverage my skills in a Security Engineer role to proactively protect enterprise assets.</p>
    </div>
  </SectionWrapper>
);
export default About;
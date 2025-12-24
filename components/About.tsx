// file: components/About.tsx
import { SectionWrapper } from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about">
    <div className="rounded-2xl bg-light-card dark:bg-dark-card shadow-2xl p-8 sm:p-16 border border-light-border dark:border-dark-border">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">
          About Me
        </h2>
        <div className="mx-auto mt-6 mb-12 h-1.5 w-24 rounded-full bg-accent"></div>
      </div>
      <div className="mx-auto max-w-3xl space-y-4 text-center text-lg text-light-text-secondary dark:text-dark-text-secondary">
        <p>As a seasoned Cybersecurity Analyst with over two years of experience, I specialize in hardening systems and automating incident response. My hands-on experience with Cortex XSIAM/XDR, PAN-OS Firewalls, and Prisma SASE allows me to design and implement robust, threat-aware defenses.</p>
      </div>
    </div>
  </SectionWrapper>
);
export default About;
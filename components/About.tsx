// file: components/About.tsx
const About = () => (
  <section id="about" className="py-24">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">About Me</h2>
      <div className="mx-auto mt-4 mb-12 h-1 w-24 bg-accent"></div>
    </div>
    <div className="max-w-3xl mx-auto space-y-4">
      <p>As a seasoned Cybersecurity Analyst with over two years of experience in enterprise environments, I specialize in hardening systems and automating incident response. My hands-on experience with Cortex XSIAM/XDR, PAN-OS Firewalls, and Prisma SASE allows me to design and implement robust, threat-aware defenses.</p>
      <p>I am driven by the challenge of implementing Zero Trust principles to build resilient security architectures. My goal is to leverage my skills in a Security Engineer role to proactively protect enterprise assets.</p>
    </div>
  </section>
);
export default About;
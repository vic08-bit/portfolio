// file: components/Skills.tsx
import { SectionWrapper } from './SectionWrapper';
const skillsData = [ { category: 'Security Operations', skills: ['Cortex XDR/XSIAM', 'Incident Response', 'Threat Hunting', 'Playbook Automation', 'XQL Queries', 'Vulnerability Assessment'] }, { category: 'Network Security', skills: ['PAN-OS Firewalls', 'IPSec & SSL VPNs', 'URL Filtering', 'DNS Security', 'WildFire', 'User-ID', 'High Availability'] }, { category: 'Networking', skills: ['TCP/IP & UDP', 'IPv4 Subnetting', 'DHCP & DNS', 'OSPF & BGP', 'VLANs', 'Cisco Switches', 'NAT'] }, { category: 'Cloud & Access', skills: ['Prisma Access', 'Prisma SD-WAN', 'VMware ESXi', 'Zero Trust Security', 'Attack Surface Mgmt', 'Threat Intel Mgmt'] }, ];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl">
          Skills & Expertise
        </h2>
        {/* Changed underline to a small dot for cleaner look */}
        <div className="mx-auto mt-4 h-1.5 w-1.5 rounded-full bg-accent"></div>
      </div>
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((group) => (
          <div key={group.category} className="rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-8 shadow-sm">
            {/* Category Title - Kept Blue/Accent for hierarchy */}
            <h3 className="mb-6 text-lg font-bold text-accent">{group.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                // FIX: Changed from blue text to "Glass" style
                // Light Mode: Gray background, Dark text
                // Dark Mode: White/Transparent background, White text. MUCH more readable.
                <span key={skill} className="rounded-lg bg-gray-100 dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-light-text-primary dark:text-dark-text-primary border border-transparent dark:border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Skills;
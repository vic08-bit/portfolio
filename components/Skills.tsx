// file: components/Skills.tsx
import  SectionWrapper  from './SectionWrapper';
const skillsData = [ { category: 'Security Operations', skills: ['Cortex XDR/XSIAM', 'Incident Response', 'Threat Hunting', 'Playbook Automation', 'XQL Queries', 'Vulnerability Assessment'] }, { category: 'Network Security', skills: ['PAN-OS Firewalls', 'IPSec & SSL VPNs', 'URL Filtering', 'DNS Security', 'WildFire', 'User-ID', 'High Availability'] }, { category: 'Networking', skills: ['TCP/IP & UDP', 'IPv4 Subnetting', 'DHCP & DNS', 'OSPF & BGP', 'VLANs', 'Cisco Switches', 'NAT'] }, { category: 'Cloud & Access', skills: ['Prisma Access', 'Prisma SD-WAN', 'VMware ESXi', 'Zero Trust Security', 'Attack Surface Mgmt', 'Threat Intel Mgmt'] }, ];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-5xl"><span className="text-accent">#</span> Skills & Expertise</h2>
        <div className="mx-auto mt-6 mb-16 h-1.5 w-24 rounded-full bg-accent"></div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((group) => (
          <div key={group.category} className="rounded-2xl bg-glass-light dark:bg-glass-dark border border-glass-border backdrop-blur-2xl p-8 shadow-2xl">
            <h3 className="mb-6 text-xl font-bold text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-lg bg-white/50 dark:bg-black/50 px-4 py-2 text-sm font-medium border border-glass-border shadow-md">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default Skills;
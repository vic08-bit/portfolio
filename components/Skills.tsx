// file: components/Skills.tsx
import { SectionWrapper } from './SectionWrapper';
const skillsData = [ { category: 'Security Operations', skills: ['Cortex XDR/XSIAM', 'Incident Response', 'Threat Hunting', 'Playbook Automation', 'XQL Queries', 'Vulnerability Assessment'] }, { category: 'Network Security', skills: ['PAN-OS Firewalls', 'IPSec & SSL VPNs', 'URL Filtering', 'DNS Security', 'WildFire', 'User-ID', 'High Availability'] }, { category: 'Networking', skills: ['TCP/IP & UDP', 'IPv4 Subnetting', 'DHCP & DNS', 'OSPF & BGP', 'VLANs', 'Cisco Switches', 'NAT'] }, { category: 'Cloud & Access', skills: ['Prisma Access', 'Prisma SD-WAN', 'VMware ESXi', 'Zero Trust Security', 'Attack Surface Mgmt', 'Threat Intel Mgmt'] }, ];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-light-text-primary dark:text-white">
          Skills & Expertise
        </h2>
        {/* Standard Blue Line (Replaces the dot) */}
        <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-accent"></div>
      </div>
      
      {/* Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((group) => (
          <div key={group.category} className="rounded-2xl bg-light-card dark:bg-[#0a0a0a] border border-light-border dark:border-white/10 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="mb-6 text-lg font-bold text-accent">{group.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-lg bg-white dark:bg-white/5 px-3 py-1.5 text-xs md:text-sm font-medium text-light-text-primary dark:text-gray-200 border border-light-border dark:border-white/10">
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
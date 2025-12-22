// file: components/Skills.tsx
const skillsData = [
  { category: 'Security Operations', skills: ['Cortex XDR/XSIAM', 'Incident Response', 'Threat Hunting', 'Playbook Automation', 'XQL Queries', 'Vulnerability Assessment', 'Malware Protection', 'CVE Mitigation'] },
  { category: 'Network Security', skills: ['PAN-OS Firewalls', 'IPSec & SSL VPNs', 'URL Filtering', 'DNS Security', 'WildFire', 'User-ID', 'High Availability', 'Zone Protection'] },
  { category: 'Networking', skills: ['TCP/IP & UDP', 'IPv4 Subnetting', 'DHCP & DNS', 'OSPF & BGP', 'VLANs', 'Cisco Switches', 'NAT', 'Access Lists'] },
  { category: 'Cloud & Access', skills: ['Prisma Access', 'Prisma SD-WAN', 'VMware ESXi', 'Zero Trust Security', 'Attack Surface Mgmt', 'Threat Intel Mgmt', 'RMM Tools', 'SASE'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary"><span className="text-accent">#</span> Skills & Expertise</h2>
        <div className="mx-auto mt-4 mb-12 h-1 w-24 bg-accent"></div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((group) => (
          <div key={group.category} className="rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border p-6 shadow-lg">
            <h3 className="mb-6 text-lg font-bold text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-light-bg dark:bg-dark-bg px-3 py-2 text-sm font-medium border border-light-border dark:border-dark-border shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
// file: components/SectionWrapper.tsx
'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export const SectionWrapper = ({ children, id, className }: { children: React.ReactNode; id: string; className?: string }) => (
  <motion.section
    id={id}
    // Mobile: py-16, Desktop: py-24. px-4 ensures no edge-touching on phones.
    className={`w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className || ''}`}
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  </motion.section>
);
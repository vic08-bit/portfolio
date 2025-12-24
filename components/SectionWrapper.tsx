// file: components/SectionWrapper.tsx
'use client';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const SectionWrapper = ({ children, id }: { children: React.ReactNode; id: string; }) => (
  <motion.section
    id={id}
    className="w-full py-24 sm:py-32"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);
// components/SectionWrapper.tsx
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion"; // <--- 1. Import Variants

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

// 2. Add the ": Variants" type annotation here
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" // Now TS knows this is a valid Easing type, not just a string
    }
  }
};

export const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className || ''}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
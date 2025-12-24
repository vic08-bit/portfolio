// components/SectionWrapper.tsx

import { ReactNode } from "react";

// 1. Update the interface to include className
interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string; // <--- ADD THIS LINE
}

const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <section 
      id={id} 
      // 2. Append the passed className to your existing classes
      className={`mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 ${className || ""}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
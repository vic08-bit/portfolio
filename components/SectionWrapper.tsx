import { ReactNode } from "react";

// 1. Add className? to the interface
interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string; 
}

// 2. Add className to the props destructuring and the HTML tag
export const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <section 
      id={id} 
      // 3. Merge the passed className with your default classes
      className={`mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 ${className || ""}`}
    >
      {children}
    </section>
  );
};
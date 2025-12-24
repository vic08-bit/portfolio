// file: app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { SectionWrapper } from '@/components/SectionWrapper'

export default function Home() {
  return (
    <>
      {/* HERO SECTION - No background class here, so it uses the Hero's internal background */}
      <div className="w-full">
        <Hero />
      </div>

      <SectionWrapper id="about" className="bg-light-bg-alt dark:bg-dark-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><About /></div>
      </SectionWrapper>
      
      <SectionWrapper id="projects" className="bg-light-bg dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Projects /></div>
      </SectionWrapper>

      <SectionWrapper id="skills" className="bg-light-bg-alt dark:bg-dark-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Skills /></div>
      </SectionWrapper>
      
      <SectionWrapper id="contact" className="bg-light-bg dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Contact /></div>
      </SectionWrapper>
    </>
  )
}
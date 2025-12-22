// file: app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* Section 1: Standard Background */}
      <div className="bg-light-bg dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </div>

      {/* Section 2: Alternate Background */}
      <div className="bg-light-bg-alt dark:bg-dark-bg-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </div>

      {/* Section 3: Standard Background */}
      <div className="bg-light-bg dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
      </div>

      {/* Section 4: Alternate Background */}
      <div className="bg-light-bg-alt dark:bg-dark-bg-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skills />
        </div>
      </div>
      
      {/* Section 5: Standard Background */}
      <div className="bg-light-bg dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </div>
    </>
  )
}
// file: app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <div className="bg-light-bg dark:bg-dark-bg"><Hero /></div>
      <div className="bg-light-bg-alt dark:bg-dark-bg-alt"><About /></div>
      <div className="bg-light-bg dark:bg-dark-bg"><Projects /></div>
      <div className="bg-light-bg-alt dark:bg-dark-bg-alt"><Skills /></div>
      <div className="bg-light-bg dark:bg-dark-bg"><Contact /></div>
    </>
  )
}
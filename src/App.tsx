import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Clients from './components/Clients'
import Learning from './components/Learning'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import PageGrid from './components/PageGrid'
import { useLang } from './lib/i18n'
import { ui } from './content/cv'

export default function App() {
  const { t } = useLang()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-solid focus:px-4 focus:py-2 focus:text-white">
        {t(ui.skip)}
      </a>
      <PageGrid />
      <ProgressBar />
      <Header />
      <main id="main" className="relative z-[1]">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Clients />
        <Learning />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}

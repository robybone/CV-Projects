import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLang } from '../lib/i18n'
import { profile, ui } from '../content/cv'

const NAV = ['about', 'experience', 'clients', 'training', 'skills', 'contact'] as const

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const toggleLang = () => setLang(lang === 'it' ? 'en' : 'it')

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold tracking-tight" aria-label="Roberto Bonetti — home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-black/5 bg-white p-1"><img src={profile.mark} alt="" className="h-full w-full object-contain" /></span>
          <span className="hidden sm:inline lg:hidden xl:inline">{profile.name}</span>
        </a>

        <nav aria-label="Principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm transition-colors ${active === id ? 'bg-accent-soft text-accent-ink' : 'text-muted hover:text-ink'}`}
                >
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t(ui.langSwitch)}
            title={t(ui.langSwitch)}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3 font-mono text-xs font-medium hover:border-accent"
          >
            <Languages className="h-3.5 w-3.5" aria-hidden="true" />
            <span className={lang === 'it' ? 'text-accent-ink' : 'text-muted'}>IT</span>
            <span className="text-line" aria-hidden="true">/</span>
            <span className={lang === 'en' ? 'text-accent-ink' : 'text-muted'}>EN</span>
          </button>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t(ui.menu)}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-line bg-bg lg:hidden"
          >
            <ul className="container-x grid gap-1 py-4">
              {NAV.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-base hover:bg-accent-soft">
                    {t(ui.nav[id])}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

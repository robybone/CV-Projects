import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useLang } from '../lib/i18n'
import { hero, profile, ui } from '../content/cv'

const fade = (d: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.2, 0.7, 0.2, 1] as const },
})

function Portrait() {
  const { t } = useLang()
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
      {/* quote di disegno tecnico attorno al ritratto */}
      <div aria-hidden="true" className="absolute -left-6 top-0 bottom-0 hidden w-px bg-accent/40 sm:block">
        <span className="absolute -left-1 top-0 h-px w-2.5 bg-accent/60" />
        <span className="absolute -left-1 bottom-0 h-px w-2.5 bg-accent/60" />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[10px] tracking-widest text-accent-ink">H 1:1</span>
      </div>
      <div aria-hidden="true" className="absolute -bottom-6 left-0 right-0 hidden h-px bg-accent/40 sm:block">
        <span className="absolute left-0 -top-1 h-2.5 w-px bg-accent/60" />
        <span className="absolute right-0 -top-1 h-2.5 w-px bg-accent/60" />
        <span className="absolute left-1/2 top-1.5 -translate-x-1/2 font-mono text-[10px] tracking-widest text-accent-ink">RB · ENG</span>
      </div>
      <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-accent-soft shadow-xl shadow-accent/10">
        {!failed ? (
          <img src={profile.photo} alt={t(profile.photoAlt)} onError={() => setFailed(true)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="font-display text-6xl font-semibold text-accent-ink" aria-label={profile.name}>RB</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
            <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.h1 {...fade(0.08)} id="hero-title" className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-4 font-display text-xl font-medium text-ink sm:text-2xl">
            {t(hero.title)}
            <span className="block text-accent-ink">{t(hero.subtitleTag)}</span>
          </motion.p>
          <motion.p {...fade(0.24)} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t(hero.intro)}
          </motion.p>
          <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="btn-primary"><ArrowDown className="h-4 w-4" aria-hidden="true" />{t(ui.seeProjects)}</a>
            <a href="#contact" className="btn-ghost"><Mail className="h-4 w-4" aria-hidden="true" />{t(ui.contactMe)}</a>
          </motion.div>
          <motion.ul {...fade(0.4)} className="mt-8 flex flex-wrap gap-2" aria-label="Focus">
            {hero.badges.map((b) => <li key={b.it} className="chip-accent">{t(b)}</li>)}
          </motion.ul>
          <motion.p {...fade(0.46)} className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {t(profile.location)}
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <Portrait />
        </motion.div>
      </div>
    </section>
  )
}

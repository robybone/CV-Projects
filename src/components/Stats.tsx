import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '../lib/i18n'
import { stats, ui, type Stat } from '../content/cv'
import { Reveal } from './ui'

function Counter({ s }: { s: Stat }) {
  const { lang } = useLang()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(s.value); return }
    const c = animate(0, s.value, { duration: 1.6, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, s.value])
  const fmt = new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-GB')
  return (
    <span ref={ref} className="font-display text-5xl font-bold tabular-nums tracking-tight text-ink sm:text-6xl">
      <span aria-hidden="true">{fmt.format(n)}{s.suffix}</span>
      <span className="sr-only">{fmt.format(s.value)}{s.suffix}</span>
    </span>
  )
}

export default function Stats() {
  const { t } = useLang()
  return (
    <section aria-labelledby="numbers-title" className="border-y border-line bg-surface/70 backdrop-blur-[2px]">
      <div className="container-x py-14 sm:py-16">
        <h2 id="numbers-title" className="sr-only">{t(ui.sections.numbers)}</h2>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
          {stats.map((s, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06}>
                <span className="tag-code" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="mt-2 border-t border-line pt-3"><Counter s={s} /></div>
                <p className="mt-2 text-sm leading-snug text-muted">{t(s.label)}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

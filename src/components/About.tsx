import { Building2, Network, Gauge } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { about, pillars, ui } from '../content/cv'
import { Reveal, SectionHeading } from './ui'

const icons = [Building2, Network, Gauge]

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeading code="§ 01" id="about-title" title={t(ui.sections.about)} />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {about.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-ink' : ''}>{t(p)}</p>
            ))}
          </Reveal>
          <ul className="grid gap-4">
            {pillars.map((p, i) => {
              const Icon = icons[i % icons.length]
              return (
                <li key={i}>
                  <Reveal delay={i * 0.08} className="card flex gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold">{t(p.title)}</h3>
                      <p className="mt-1 text-sm text-muted">{t(p.text)}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

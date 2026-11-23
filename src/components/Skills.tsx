import { Bot, Cpu, Workflow, Languages } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { languages, skills, ui } from '../content/cv'
import { Rich } from './Rich'
import { Reveal, SectionHeading } from './ui'

const icons = [Cpu, Bot, Workflow]

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="skills" aria-labelledby="skills-title" className="section bg-surface/60">
      <div className="container-x">
        <SectionHeading code="§ 05" id="skills-title" title={t(ui.sections.skills)} />
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((col, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={i} delay={i * 0.08} className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent-ink"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="font-display text-lg font-semibold">{t(col.title)}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {col.items.map((s) => <li key={t(s)} className="chip">{t(s)}</li>)}
                </ul>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="mt-6 flex flex-wrap items-center gap-3">
          <Languages className="h-5 w-5 text-accent-ink" aria-hidden="true" />
          <span className="font-display font-semibold">{t(ui.languages)}:</span>
          {languages.map((l) => <span key={l.it} className="chip"><Rich text={t(l)} /></span>)}
        </Reveal>
      </div>
    </section>
  )
}

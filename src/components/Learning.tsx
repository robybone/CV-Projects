import { GraduationCap, Presentation } from 'lucide-react'
import { useLang } from '../lib/i18n'
import { education, teaching, ui } from '../content/cv'
import LogoTile from './LogoTile'
import { Reveal, SectionHeading } from './ui'

export default function Learning() {
  const { t } = useLang()
  return (
    <section id="training" aria-labelledby="training-title" className="section">
      <div className="container-x">
        <SectionHeading code="§ 04" id="training-title" title={t(ui.sections.training)} />
        <ul className="grid gap-4 md:grid-cols-3">
          {teaching.map((x, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06} className="card h-full p-6">
                <Presentation className="h-5 w-5 text-accent-ink" aria-hidden="true" />
                <p className="mt-4 font-display font-semibold leading-snug">{t(x.title)}</p>
                {x.meta && <p className="mt-2 font-mono text-xs text-muted">{t(x.meta)}</p>}
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className="mt-20 mb-6 font-display text-2xl font-semibold tracking-tight">{t(ui.sections.education)}</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((x, i) => (
            <li key={i}>
              <Reveal delay={i * 0.06} className="card flex h-full gap-4 p-5">
                {x.logo ? (
                  <LogoTile id={x.logo} className="h-16 w-36 shrink-0 p-2" />
                ) : (
                  <span className="grid h-16 w-36 shrink-0 place-items-center rounded-xl border border-line bg-bg"><GraduationCap className="h-5 w-5 text-accent-ink" aria-hidden="true" /></span>
                )}
                <div className="min-w-0 self-center">
                  <p className="font-display font-semibold leading-snug">{t(x.title)}</p>
                  {x.institution && <p className="mt-1 text-sm text-muted">{t(x.institution)}</p>}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

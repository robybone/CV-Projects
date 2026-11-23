import { MapPin, RotateCcw, RotateCw } from 'lucide-react'
import { useRef, useState } from 'react'
import { useLang } from '../lib/i18n'
import { experiences, ui, type CardBlock, type Experience as Exp } from '../content/cv'
import LogoTile from './LogoTile'
import { Reveal, SectionHeading, TagList } from './ui'

function Block({ b }: { b: CardBlock }) {
  const { t } = useLang()
  return (
    <div className="space-y-5">
      {b.paragraphs?.map((p, i) => <p key={i} className="text-sm leading-relaxed sm:text-base">{t(p)}</p>)}
      {b.bullets && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {b.bullets.map((x, i) => (
            <li key={i} className="rounded-xl border border-line bg-bg p-4">
              <p className="font-display text-sm font-semibold">{t(x.title)}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t(x.text)}</p>
            </li>
          ))}
        </ul>
      )}
      {b.projects && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {b.projects.map((p) => (
            <li key={p.acronym} className="rounded-xl border border-accent/25 bg-surface p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-xl font-bold tracking-tight">{p.acronym}</span>
                <span className="font-mono text-[11px] text-muted">{p.program}{p.period && ` · ${p.period}`}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t(p.name)}</p>
            </li>
          ))}
        </ul>
      )}
      {b.topics && (
        <div>
          {b.topicsTitle && <p className="tag-code mb-2">{t(b.topicsTitle)}</p>}
          <ul className="flex flex-wrap gap-1.5">
            {b.topics.map((x) => <li key={x.it} className="chip">{t(x)}</li>)}
          </ul>
        </div>
      )}
      {b.results && (
        <div>
          <p className="tag-code mb-1.5">{t(ui.results)}</p>
          <p className="text-sm leading-relaxed sm:text-base">{t(b.results)}</p>
        </div>
      )}
      {b.learned && (
        <div>
          <p className="tag-code mb-1.5">{t(ui.learned)}</p>
          <p className="text-sm leading-relaxed sm:text-base">{t(b.learned)}</p>
        </div>
      )}
    </div>
  )
}

function Item({ e }: { e: Exp }) {
  const { t } = useLang()
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped((f) => !f)
  // Su dispositivi con mouse la scheda si gira al passaggio (con un piccolo ritardo
  // per evitare giri accidentali mentre si scorre la pagina).
  const timer = useRef<number>()
  const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const hover = (on: boolean) => {
    if (!canHover()) return
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setFlipped(on), on ? 180 : 120)
  }
  const backTitle = e.backTitle ?? ui.myContribution
  return (
    <li className="relative pl-10 sm:pl-16">
      {/* tacca sulla linea di quota */}
      <span aria-hidden="true" className={`absolute left-[11px] top-8 h-3 w-3 -translate-x-1/2 rotate-45 border-2 border-accent transition-colors sm:left-[19px] ${flipped ? 'bg-accent' : 'bg-bg'}`} />
      <span aria-hidden="true" className="absolute left-[11px] top-[38px] h-px w-6 bg-accent/50 sm:left-[19px] sm:w-10" />

      <div
        className="flip cursor-pointer"
        data-flipped={flipped}
        onMouseEnter={() => hover(true)}
        onMouseLeave={() => hover(false)}
        onClick={(ev) => { if (!canHover() && !(ev.target as HTMLElement).closest('button')) toggle() }}
      >
        <div className="flip-inner">
          {/* FRONTE */}
          <article className="card flex flex-col p-5 transition-shadow hover:shadow-md sm:p-6" aria-hidden={flipped}>
            <div className="flex items-start gap-4">
              {e.logo && <LogoTile id={e.logo} className="hidden h-14 w-24 shrink-0 p-2 sm:flex" />}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="tag-code">{e.code}</span>
                  {e.period && <span className="font-mono text-xs text-muted">{t(e.period)}</span>}
                </div>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug sm:text-xl">
                  {t(e.role)} <span className="text-muted">—</span> <span className="text-accent-ink">{e.org}</span>
                </h3>
                {e.location && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{t(e.location)}</p>
                )}
              </div>
            </div>
            <div className="mt-4 space-y-5 sm:pl-28">
              <p className="text-sm leading-relaxed text-muted sm:text-base">{t(e.context)}</p>
              {e.front && <Block b={e.front} />}
              <TagList tags={e.tags.map(t)} />
            </div>
            <div className="mt-auto flex justify-end pt-5">
              <button type="button" onClick={toggle} tabIndex={flipped ? -1 : 0} aria-label={`${t(backTitle)} — ${e.org}`} className="btn-ghost px-4 py-2 text-xs">
                <RotateCw className="h-3.5 w-3.5" aria-hidden="true" /> {t(backTitle)}
              </button>
            </div>
          </article>

          {/* RETRO */}
          <div className="flip-back flex flex-col rounded-2xl border border-accent/40 bg-accent-soft p-5 sm:p-6" aria-hidden={!flipped}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="tag-code">{e.code} · {e.org}</span>
            </div>
            <h3 className="mt-1.5 font-display text-lg font-semibold sm:text-xl">{t(backTitle)}</h3>
            <div className="mt-4"><Block b={e.back} /></div>
            <div className="flex justify-end pt-5">
              <button type="button" onClick={toggle} tabIndex={flipped ? 0 : -1} className="btn-ghost px-4 py-2 text-xs">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> {t(ui.flipBack)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  const { t } = useLang()
  return (
    <section id="experience" aria-labelledby="exp-title" className="section bg-surface/60">
      <div className="container-x">
        <SectionHeading code="§ 02" id="exp-title" title={t(ui.sections.experience)} lead={t(ui.sectionLeads.experience)} />
        <Reveal>
          <ol className="relative space-y-6">
            {/* linea di quota verticale */}
            <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-px bg-accent/40 sm:left-[19px]">
              <span className="absolute -left-1.5 top-0 h-px w-3 bg-accent" />
              <span className="absolute -left-1.5 bottom-0 h-px w-3 bg-accent" />
            </span>
            {experiences.map((e) => <Item key={e.code} e={e} />)}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '../lib/i18n'
import { engagements, logos, marqueeLogos, ui, type Sector } from '../content/cv'
import LogoTile from './LogoTile'
import { Rich } from './Rich'
import { Reveal, SectionHeading } from './ui'

type Filter = 'all' | Sector
const FILTERS: Filter[] = ['all', 'manifattura', 'costruzioni', 'ai']

function Marquee() {
  const { t } = useLang()
  const items = [...marqueeLogos, ...marqueeLogos]
  return (
    <div className="marquee relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <p className="sr-only">{t(ui.workedWith)}: {marqueeLogos.map((k) => logos[k].name).join(', ')}</p>
      <ul className="marquee-track flex w-max animate-marquee gap-4" aria-hidden="true">
        {items.map((k, i) => (
          <li key={i} className="group">
            <LogoTile id={k} grayscale className="h-16 w-32 p-2.5" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Clients() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const list = engagements.filter((e) => filter === 'all' || e.sectors.includes(filter))
  return (
    <section id="clients" aria-labelledby="clients-title" className="section bg-surface/60">
      <div className="container-x">
        <SectionHeading code="§ 03" id="clients-title" title={t(ui.sections.clients)} lead={t(ui.sectionLeads.clients)} />
      </div>
      <Reveal className="mb-14">
        <p className="container-x tag-code mb-4">{t(ui.workedWith)}</p>
        <Marquee />
      </Reveal>
      <div className="container-x">
        <h3 className="mb-6 font-display text-2xl font-semibold tracking-tight">{t(ui.keyProjects)}</h3>
        <div role="group" aria-label="Filtro settore" className="mb-8 flex flex-wrap gap-2">
          <LayoutGroup>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? 'text-white' : 'border border-line bg-surface text-muted hover:text-ink'}`}
              >
                {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-solid" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="relative">{t(ui.filters[f])}</span>
              </button>
            ))}
          </LayoutGroup>
          <span className="ml-auto self-center font-mono text-xs text-muted" aria-live="polite">{String(list.length).padStart(2, '0')} / {String(engagements.length).padStart(2, '0')}</span>
        </div>
        <motion.ul layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((e) => (
              <motion.li
                key={e.name}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <article className="card flex h-full flex-col p-6">
                  <div className="flex items-start gap-4">
                    <LogoTile id={e.logo} className="h-14 w-24 shrink-0 p-2" />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold leading-tight">{e.name}</h3>
                      <p className="mt-0.5 text-xs text-muted">{t(e.industry)}</p>
                    </div>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {e.sectors.map((s) => <li key={s} className="chip-accent">{t(ui.filters[s])}</li>)}
                    {e.extraTags?.map((x) => <li key={x} className="chip">{x}</li>)}
                  </ul>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                    {([['whoTheyAre', e.about], ['challenge', e.challenge], ['intervention', e.intervention], ['outcome', e.result]] as const).map(([k, v]) =>
                      v ? (
                        <div key={k}>
                          <dt className="tag-code">{t(ui[k])}</dt>
                          <dd className="mt-1 text-muted"><Rich text={t(v)} /></dd>
                        </div>
                      ) : null,
                    )}
                  </dl>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Rich } from './Rich'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

/** Titolo di sezione con codice in stile "tavola" e linea di quota. */
export function SectionHeading({ code, title, lead, id }: { code: string; title: string; lead?: string; id?: string }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="tag-code">{code}</span>
        <span className="relative h-px flex-1 bg-line">
          <span className="absolute -top-1 left-0 h-2.5 w-px bg-line" />
          <span className="absolute -top-1 right-0 h-2.5 w-px bg-line" />
        </span>
      </div>
      <h2 id={id} className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg"><Rich text={lead} /></p>}
    </Reveal>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tg) => (
        <li key={tg} className="chip">{tg}</li>
      ))}
    </ul>
  )
}

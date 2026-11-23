import { useState } from 'react'
import { logos, type Logo } from '../content/cv'

type Props = { id?: keyof typeof logos; logo?: Logo; className?: string; grayscale?: boolean }

/** Logo dentro un contenitore chiaro (o scuro per i loghi bianchi), leggibile in entrambi i temi. */
export default function LogoTile({ id, logo, className = '', grayscale = false }: Props) {
  const l = logo ?? (id ? logos[id] : undefined)
  const [failed, setFailed] = useState(false)
  if (!l) return null
  const tone = l.onDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-black/5'
  const gray = grayscale ? 'grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100' : ''
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-xl border ${tone} ${className}`}>
      {l.src && !failed ? (
        <img src={l.src} alt={`Logo ${l.name}`} loading="lazy" onError={() => setFailed(true)} className={`max-h-full max-w-full object-contain ${gray}`} />
      ) : (
        <span className={`px-2 text-center font-display text-sm font-semibold leading-tight tracking-tight ${l.onDark ? 'text-white' : 'text-slate-700'}`}>{l.name}</span>
      )}
    </div>
  )
}

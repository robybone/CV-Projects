import { useEffect, useRef } from 'react'

/**
 * Carta millimetrata viva, fissa dietro tutta la pagina:
 * - la griglia scorre lentamente;
 * - una "lente" più luminosa segue il mouse (o vaga da sola se il mouse non c'è);
 * - un mirino CAD con coordinate segue il puntatore.
 * Con prefers-reduced-motion resta statica.
 */
export default function PageGrid() {
  const root = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const vp = () => ({ width: window.innerWidth, height: window.innerHeight })
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let tx = 0, ty = 0, x = 0, y = 0 // target / current (px)
    let pointer = false, lastMove = 0, t0 = performance.now()

    const set = () => {
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
      if (label.current) label.current.textContent = `X ${String(Math.round(x / 5)).padStart(4, '0')} · Y ${String(Math.round(y / 5)).padStart(4, '0')}`
    }
    const tick = (now: number) => {
      const r = vp()
      if (!pointer || now - lastMove > 4000) {
        // percorso automatico lento (curva di Lissajous) quando il mouse è fermo o assente
        pointer = false
        const s = (now - t0) / 1000
        tx = r.width * (0.62 + 0.26 * Math.sin(s * 0.23))
        ty = r.height * (0.45 + 0.3 * Math.sin(s * 0.31 + 1))
      }
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      set()
      el.dataset.pointer = pointer ? 'on' : 'off'
      raf = requestAnimationFrame(tick)
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      tx = e.clientX
      ty = e.clientY
      pointer = true
      lastMove = performance.now()
    }
    const r = vp()
    x = tx = r.width * 0.7; y = ty = r.height * 0.4
    set()
    if (reduce) return
    const onLeave = () => { lastMove = 0 }
    const onVis = () => { cancelAnimationFrame(raf); raf = document.hidden ? 0 : requestAnimationFrame(tick) }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.addEventListener('visibilitychange', onVis)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <div ref={root} aria-hidden="true" className="group/grid pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="graph-lines graph-drift absolute inset-0" />
      <div className="graph-paper-strong graph-drift absolute inset-0" />
      {/* mirino CAD: visibile solo quando il mouse è nell'hero */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-data-[pointer=on]/grid:opacity-100">
        <div className="absolute inset-x-0 h-px bg-accent/25" style={{ top: 'var(--my)' }} />
        <div className="absolute inset-y-0 w-px bg-accent/25" style={{ left: 'var(--mx)' }} />
        <div className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/70" style={{ left: 'var(--mx)', top: 'var(--my)' }} />
        <span ref={label} className="absolute ml-3 mt-3 font-mono text-[10px] tracking-widest text-accent-ink/80" style={{ left: 'var(--mx)', top: 'var(--my)' }} />
      </div>
    </div>
  )
}

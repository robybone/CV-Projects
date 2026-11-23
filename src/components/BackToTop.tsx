import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLang } from '../lib/i18n'
import { ui } from '../content/cv'

export default function BackToTop() {
  const { t } = useLang()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t(ui.backToTop)}
          title={t(ui.backToTop)}
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-solid text-white shadow-lg shadow-accent/30 hover:bg-solid-hover"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

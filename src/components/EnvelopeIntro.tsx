import { motion, useReducedMotion } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'

type EnvelopeIntroProps = {
  isOpen: boolean
  onOpen: () => void
}

export const EnvelopeIntro = ({ isOpen, onOpen }: EnvelopeIntroProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-ivory px-5"
      aria-label="Invitation introduction"
      initial={false}
      animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.75, delay: isOpen && !reduceMotion ? 0.75 : 0 }}
    >
      <div className="absolute inset-0 floral-mist" aria-hidden="true" />
      <motion.div
        className="relative w-full max-w-xl text-center"
        animate={isOpen && !reduceMotion ? { y: -36, scale: 0.94 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-script text-4xl text-champagne">A Special Invitation</p>
        <div className="relative mx-auto mt-8 h-72 max-w-md">
          <motion.div
            className="envelope-flap"
            animate={isOpen && !reduceMotion ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
          <motion.div
            className="invitation-card"
            animate={isOpen && !reduceMotion ? { y: -96, opacity: 1 } : { y: 0, opacity: 0.72 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-serif text-5xl text-olive">{weddingDetails.couple.initials}</span>
            <span className="mt-3 block text-xs uppercase tracking-[0.35em] text-charcoal/60">
              {weddingDetails.displayDate}
            </span>
          </motion.div>
          <div className="envelope-body">
            <div className="wax-seal">{weddingDetails.couple.initials.replace(/\s/g, '')}</div>
          </div>
        </div>
        <button type="button" className="gold-button mt-8" onClick={onOpen} aria-label="Open invitation">
          <MailOpen className="h-4 w-4" aria-hidden="true" />
          Open Invitation
        </button>
      </motion.div>
    </motion.section>
  )
}

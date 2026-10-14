import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'

export const HeroSection = () => (
  <section id="hero" className="relative min-h-svh overflow-hidden">
    <img
      src={weddingDetails.heroImage}
      alt="Romantic wedding celebration"
      className="absolute inset-0 h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.display = 'none'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/30 to-charcoal/65" />
    <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-5 pb-20 pt-28 md:px-8">
      <motion.div
        className="max-w-3xl text-ivory"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-script text-5xl text-blush md:text-7xl">Together with their families</p>
        <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
          {weddingDetails.couple.displayNames}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/90 md:text-xl">{weddingDetails.invitationMessage}</p>
        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-blush">{weddingDetails.displayDate}</p>
        <a href="#details" className="gold-button mt-10">
          Explore Invitation
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  </section>
)

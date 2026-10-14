import { motion } from 'framer-motion'
import { ArrowDown, CalendarDays } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'
import { downloadCalendarInvite } from '../utils/calendar'

export const HeroSection = () => (
  <section id="hero" className="classic-hero relative overflow-hidden">
    <div className="hero-line-art" aria-hidden="true" />
    <div className="hero-flowerwash" aria-hidden="true" />

    <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-5 pb-20 pt-28 md:grid-cols-[0.92fr_1.08fr] md:px-8">
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-script text-5xl text-champagne md:text-6xl">Together with their families</p>
        <h1 className="mt-5 font-serif text-6xl font-semibold leading-[0.92] text-charcoal md:text-7xl lg:text-8xl">
          {weddingDetails.couple.partnerOne}
          <span className="block font-script text-5xl font-normal leading-none text-champagne md:text-7xl">&</span>
          {weddingDetails.couple.partnerTwo}
        </h1>
        <p className="mt-7 max-w-md text-base leading-8 text-charcoal/72">{weddingDetails.invitationMessage}</p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-olive/75">{weddingDetails.displayDate}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#details" className="gold-button">
            View Details
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <button type="button" className="outline-button" onClick={downloadCalendarInvite}>
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Save Date
          </button>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="classic-invite-card">
          <div className="preview-floral left" aria-hidden="true" />
          <div className="preview-floral right" aria-hidden="true" />
          <p className="text-[0.62rem] uppercase tracking-[0.34em] text-charcoal/50">You are warmly invited</p>
          <h2 className="mt-7 font-serif text-5xl leading-none text-charcoal md:text-7xl">
            {weddingDetails.couple.partnerOne}
            <span className="block font-script text-5xl text-champagne md:text-6xl">&</span>
            {weddingDetails.couple.partnerTwo}
          </h2>
          <div className="mx-auto mt-8 grid w-44 grid-cols-[1fr_auto_1fr] items-center text-charcoal/70">
            <span className="text-xs uppercase tracking-[0.22em]">June</span>
            <span className="border-x border-champagne/35 px-4 font-serif text-5xl text-champagne">20</span>
            <span className="text-xs uppercase tracking-[0.22em]">2027</span>
          </div>
          <p className="mx-auto mt-8 max-w-sm text-sm uppercase tracking-[0.22em] text-charcoal/55">
            Ceremony at {weddingDetails.ceremonyTime}
          </p>
        </div>

        <div className="hero-photo-strip" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  </section>
)

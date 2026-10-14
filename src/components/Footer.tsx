import { weddingDetails } from '../data/weddingDetails'

export const Footer = () => (
  <footer className="relative overflow-hidden bg-ivory px-5 py-20 text-center md:px-8">
    <div className="floral-corner left-0 top-0" aria-hidden="true" />
    <div className="floral-corner bottom-0 right-0 rotate-180" aria-hidden="true" />
    <div className="mx-auto max-w-3xl">
      <p className="font-script text-5xl text-champagne">With love and gratitude</p>
      <h2 className="mt-4 font-serif text-5xl text-olive md:text-7xl">{weddingDetails.couple.initials}</h2>
      <p className="mt-5 text-sm uppercase tracking-[0.35em] text-charcoal/60">{weddingDetails.displayDate}</p>
      <p className="mx-auto mt-8 max-w-2xl leading-8 text-charcoal/70">{weddingDetails.guestMessage}</p>
    </div>
  </footer>
)

import { CalendarDays, Clock, Heart, MapPin, Shirt } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'
import { downloadCalendarInvite } from '../utils/calendar'

const detailItems = [
  { icon: CalendarDays, label: 'Date', value: weddingDetails.displayDate },
  { icon: Clock, label: 'Ceremony', value: weddingDetails.ceremonyTime },
  { icon: Heart, label: 'Reception', value: weddingDetails.receptionTime },
  { icon: MapPin, label: 'Venue', value: weddingDetails.venue.name },
  { icon: Shirt, label: 'Dress Code', value: weddingDetails.dressCode },
]

export const WeddingDetails = () => (
  <section id="details" className="section-padding bg-ivory" aria-labelledby="details-heading">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Wedding details</p>
        <h2 id="details-heading" className="section-title">
          An evening made for love and celebration
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {detailItems.map((item) => (
          <article key={item.label} className="detail-panel">
            <item.icon className="h-5 w-5 text-champagne" aria-hidden="true" />
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-charcoal/55">{item.label}</p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-olive">{item.value}</h3>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-4xl border-y border-champagne/35 py-10 text-center">
        <p className="font-serif text-3xl leading-snug text-charcoal md:text-4xl">{weddingDetails.guestMessage}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" className="gold-button" onClick={downloadCalendarInvite}>
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Add to Calendar
          </button>
          {weddingDetails.rsvpUrl ? (
            <a className="outline-button" href={weddingDetails.rsvpUrl} target="_blank" rel="noreferrer">
              RSVP
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </section>
)

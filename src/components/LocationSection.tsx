import { ExternalLink, MapPin } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'

export const LocationSection = () => (
  <section id="location" className="section-padding bg-blush/60" aria-labelledby="location-heading">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
      <div>
        <p className="eyebrow">Location</p>
        <h2 id="location-heading" className="section-title">
          A sample venue awaiting your real details
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/75">
          This prototype uses placeholder venue information. Replace the name, address, and directions link in the central
          configuration file before sharing the invitation with guests.
        </p>
      </div>
      <div className="border border-champagne/35 bg-ivory p-8 shadow-soft">
        <MapPin className="h-8 w-8 text-champagne" aria-hidden="true" />
        <h3 className="mt-6 font-serif text-4xl text-olive">{weddingDetails.venue.name}</h3>
        <p className="mt-4 leading-8 text-charcoal/75">{weddingDetails.venue.address}</p>
        <a className="gold-button mt-8" href={weddingDetails.venue.directionsUrl} target="_blank" rel="noreferrer">
          Get Directions
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
)

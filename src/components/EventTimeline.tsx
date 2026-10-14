import { Camera, Gem, GlassWater, Music, Sparkles } from 'lucide-react'
import { weddingDetails, type TimelineEvent } from '../data/weddingDetails'

const icons: Record<TimelineEvent['icon'], typeof Sparkles> = {
  sparkles: Sparkles,
  rings: Gem,
  camera: Camera,
  glass: GlassWater,
  music: Music,
}

export const EventTimeline = () => (
  <section id="timeline" className="section-padding bg-olive text-ivory" aria-labelledby="timeline-heading">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="max-w-2xl">
        <p className="eyebrow text-champagne">Wedding day</p>
        <h2 id="timeline-heading" className="section-title text-ivory">
          The rhythm of the celebration
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-5">
        {weddingDetails.timeline.map((event) => {
          const Icon = icons[event.icon]

          return (
            <article key={`${event.time}-${event.title}`} className="timeline-panel">
              <div className="grid h-12 w-12 place-items-center border border-champagne/50 text-champagne">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-champagne">{event.time}</p>
              <h3 className="mt-3 font-serif text-3xl">{event.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/75">{event.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

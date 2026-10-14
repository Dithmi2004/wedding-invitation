import { weddingDetails } from '../data/weddingDetails'
import { useCountdown } from '../hooks/useCountdown'

export const Countdown = () => {
  const countdown = useCountdown(weddingDetails.weddingDate)
  const units = [
    ['Days', countdown.days],
    ['Hours', countdown.hours],
    ['Minutes', countdown.minutes],
    ['Seconds', countdown.seconds],
  ] as const

  return (
    <section className="section-padding bg-ivory" aria-labelledby="countdown-heading">
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow">The celebration begins in</p>
        <h2 id="countdown-heading" className="section-title">
          {countdown.isExpired ? 'Today is the day' : 'Counting every golden moment'}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {units.map(([label, value]) => (
            <div key={label} className="border border-champagne/30 bg-white/55 px-4 py-7 shadow-soft">
              <span className="block font-serif text-5xl text-olive md:text-7xl">{String(value).padStart(2, '0')}</span>
              <span className="mt-3 block text-xs uppercase tracking-[0.35em] text-charcoal/60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

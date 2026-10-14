import { motion } from 'framer-motion'
import { weddingDetails } from '../data/weddingDetails'

export const CoupleStory = () => (
  <section id="story" className="section-padding bg-blush/60" aria-labelledby="story-heading">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
      <div className="md:sticky md:top-28 md:self-start">
        <p className="eyebrow">Our story</p>
        <h2 id="story-heading" className="section-title">
          A few chapters before the aisle
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/75">{weddingDetails.storyIntro}</p>
      </div>
      <div className="space-y-10">
        {weddingDetails.storyMilestones.map((milestone, index) => (
          <motion.article
            key={milestone.title}
            className="grid gap-6 border-l border-champagne/40 pl-6 md:grid-cols-[190px_1fr] md:pl-9"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
          >
            <div className="overflow-hidden border border-white/70 shadow-soft">
              <img
                src={milestone.imageUrl}
                alt=""
                className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="pt-2">
              <p className="font-script text-4xl text-champagne">{milestone.year}</p>
              <h3 className="mt-2 font-serif text-4xl text-olive">{milestone.title}</h3>
              <p className="mt-4 leading-8 text-charcoal/75">{milestone.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { weddingDetails } from '../data/weddingDetails'

export const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : weddingDetails.gallery[activeIndex]

  useEffect(() => {
    if (activeIndex === null) {
      return undefined
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index === null ? index : (index + 1) % weddingDetails.gallery.length))
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + weddingDetails.gallery.length) % weddingDetails.gallery.length,
        )
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex])

  const showPrevious = () =>
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + weddingDetails.gallery.length) % weddingDetails.gallery.length,
    )

  const showNext = () =>
    setActiveIndex((index) => (index === null ? index : (index + 1) % weddingDetails.gallery.length))

  return (
    <section id="gallery" className="section-padding bg-ivory" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="section-title">
            Soft details and treasured glimpses
          </h2>
        </div>
        <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weddingDetails.gallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`gallery-item ${image.orientation === 'landscape' ? 'lg:col-span-2' : ''} ${
                image.orientation === 'portrait' ? 'lg:row-span-2' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </button>
          ))}
        </div>
      </div>
      {activeImage ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-charcoal/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button type="button" className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close gallery">
            <X aria-hidden="true" />
          </button>
          <button type="button" className="lightbox-nav left-4" onClick={showPrevious} aria-label="Previous image">
            <ChevronLeft aria-hidden="true" />
          </button>
          <img src={activeImage.src} alt={activeImage.alt} className="max-h-[82vh] max-w-[90vw] object-contain shadow-soft" />
          <button type="button" className="lightbox-nav right-4" onClick={showNext} aria-label="Next image">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </section>
  )
}

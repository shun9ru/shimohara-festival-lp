import { useState } from 'react'
import { festivalData } from '../data/festivalData'
import { ImageModal } from './ImageModal'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function PhotoGallery() {
  const { gallery } = festivalData
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-cream scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="GALLERY" title={gallery.title} lead={gallery.description} />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
          {gallery.images.map((img, i) => (
            <Reveal key={`${img.src}-${i}`} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`${img.caption ?? img.alt} を拡大表示`}
                className="group outline-primary block aspect-square w-full cursor-pointer overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <SmartImage
                  image={img}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ImageModal
          images={gallery.images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}

import { useState } from 'react'
import { Camera } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { ImageModal } from './ImageModal'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function PhotoGallery() {
  const { gallery } = festivalData
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  // 写真が1枚も登録されていない間は「準備中」の案内を表示する
  const hasImages = gallery.images.length > 0

  return (
    <section id="gallery" className="bg-cream scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            kicker="GALLERY"
            title={gallery.title}
            lead={hasImages ? gallery.description : gallery.preparingDescription}
          />
        </Reveal>

        {hasImages ? (
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
        ) : (
          <Reveal className="mt-10 md:mt-14">
            <div className="ring-ink/5 mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl bg-white px-6 py-14 text-center shadow-sm ring-1 md:py-16">
              <span className="bg-primary-soft text-primary flex size-16 items-center justify-center rounded-full">
                <Camera className="size-8" aria-hidden="true" />
              </span>
              <p className="text-ink text-lg font-bold">{gallery.preparingLabel}</p>
              <p className="text-ink-soft max-w-md text-sm leading-relaxed">
                {gallery.preparingNote}
              </p>
            </div>
          </Reveal>
        )}
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

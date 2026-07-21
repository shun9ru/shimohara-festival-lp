import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { MediaImage } from '../data/festivalData'
import { MediaPlaceholder } from './MediaPlaceholder'

interface ImageModalProps {
  images: MediaImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

/** ギャラリー画像の拡大表示モーダル。左右ボタン・矢印キー・Escに対応 */
export function ImageModal({ images, index, onClose, onNavigate }: ImageModalProps) {
  const image = images[index]
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({})
  const containerRef = useRef<HTMLDivElement | null>(null)

  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate],
  )
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, goPrev, goNext])

  // モーダル表示中は背景のスクロールを止める
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    containerRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  if (!image) return null
  const failed = !image.src || failedSrcs[image.src]
  const caption = image.caption ?? image.alt

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 outline-none"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="閉じる"
        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <div
        className="flex w-full max-w-4xl items-center gap-2 md:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="前の写真へ"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>

        <figure className="min-w-0 flex-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-video">
            {failed ? (
              <MediaPlaceholder type="image" label={image.label} note={image.src || undefined} />
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                onError={() => setFailedSrcs((prev) => ({ ...prev, [image.src]: true }))}
                className="h-full w-full bg-black/40 object-contain"
              />
            )}
          </div>
          <figcaption className="mt-3 text-center text-sm text-white/85">
            {caption}
            <span className="ml-3 text-white/50">
              {index + 1} / {images.length}
            </span>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={goNext}
          aria-label="次の写真へ"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

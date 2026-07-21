import { useRef, useState } from 'react'
import type { MediaImage } from '../data/festivalData'
import { SmartImage } from './SmartImage'

interface ImageCarouselProps {
  images: MediaImage[]
}

/**
 * 複数の写真を横並びにして、スワイプ（横スクロール）で見られるようにする。
 * 写真が1枚だけのときは、通常の画像として表示する。
 */
export function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // 写真が1枚だけ（または未設定）のときは、スクロールUIを使わずそのまま表示
  if (images.length <= 1) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <SmartImage image={images[0]} />
      </div>
    )
  }

  // 横スクロールの位置から、いま何枚目を見ているかを求めてドットに反映する
  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / el.clientWidth))
  }

  // ドットをタップしたら、その写真までスクロールする
  const scrollTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl shadow-md"
      >
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="aspect-[4/3] w-full flex-none snap-center overflow-hidden"
          >
            <SmartImage image={img} />
          </div>
        ))}
      </div>

      {/* いま何枚目かを示すドット（タップで移動できる） */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={`dot-${img.src}-${i}`}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`${i + 1}枚目の写真を表示`}
            aria-current={active === i}
            className={`h-2 rounded-full transition-all ${
              active === i ? 'bg-primary w-5' : 'bg-primary/30 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

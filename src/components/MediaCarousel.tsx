import { useRef, useState } from 'react'
import type { TimelineMedia } from '../data/festivalData'
import { SmartImage } from './SmartImage'
import { SmartVideo } from './SmartVideo'

interface MediaCarouselProps {
  items: TimelineMedia[]
}

/** 1つ分の写真または動画を表示する */
function Slide({ item }: { item: TimelineMedia }) {
  if (item.type === 'video') {
    return <SmartVideo video={item} />
  }
  return <SmartImage image={item} />
}

/**
 * 写真・動画を横並びにして、スワイプ（横スクロール）で見られるようにする。
 * 1つだけのときは、通常の写真／動画として表示する。
 */
export function MediaCarousel({ items }: MediaCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // 写真・動画が1つだけ（または未設定）のときは、スクロールUIを使わずそのまま表示
  if (items.length <= 1) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Slide item={items[0]} />
      </div>
    )
  }

  // 横スクロールの位置から、いま何枚目を見ているかを求めてドットに反映する
  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / el.clientWidth))
  }

  // ドットをタップしたら、そのメディアまでスクロールする
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
        {items.map((item, i) => (
          <div
            key={i}
            className="aspect-[4/3] w-full flex-none snap-center overflow-hidden"
          >
            <Slide item={item} />
          </div>
        ))}
      </div>

      {/* いま何枚目かを示すドット（タップで移動できる） */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`${i + 1}件目を表示`}
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

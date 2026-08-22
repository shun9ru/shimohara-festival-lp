import { useRef, useState } from 'react'
import type { TimelineMedia } from '../data/festivalData'
import { SmartImage } from './SmartImage'
import { SmartVideo } from './SmartVideo'

interface MediaCarouselProps {
  items: TimelineMedia[]
}

/** 1つ分の写真または動画を表示する */
function Slide({ item, onUnavailable }: { item: TimelineMedia; onUnavailable: () => void }) {
  if (item.type === 'video') {
    return <SmartVideo video={item} onUnavailable={onUnavailable} />
  }
  return <SmartImage image={item} onUnavailable={onUnavailable} />
}

/**
 * 写真・動画を横並びにして、スワイプ（横スクロール）で見られるようにする。
 * 1つだけのときは、通常の写真／動画として表示する。
 *
 * パスが未設定のもの・ファイルが無く読み込みに失敗したものは表示しません
 * （プレースホルダーも出しません）。ファイルを置けば自動で表示されます。
 */
export function MediaCarousel({ items }: MediaCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  // 読み込みに失敗した写真・動画のパス一覧
  const [failedSrcs, setFailedSrcs] = useState<ReadonlySet<string>>(new Set())

  const visibleItems = items.filter((item) => item.src && !failedSrcs.has(item.src))
  const markUnavailable = (src: string) =>
    setFailedSrcs((prev) => new Set(prev).add(src))

  // 表示できる写真・動画がないときは、この枠ごと表示しない
  if (visibleItems.length === 0) {
    return null
  }

  // 写真・動画が1つだけのときは、スクロールUIを使わずそのまま表示
  if (visibleItems.length === 1) {
    const item = visibleItems[0]
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
        <Slide item={item} onUnavailable={() => markUnavailable(item.src)} />
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
        {visibleItems.map((item) => (
          <div
            key={item.src}
            className="aspect-[4/3] w-full flex-none snap-center overflow-hidden"
          >
            <Slide item={item} onUnavailable={() => markUnavailable(item.src)} />
          </div>
        ))}
      </div>

      {/* いま何枚目かを示すドット（タップで移動できる） */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {visibleItems.map((_, i) => {
          // 表示中に枚数が減っても、はみ出した位置を指さないように丸める
          const current = Math.min(active, visibleItems.length - 1)
          return (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`${i + 1}件目を表示`}
              aria-current={current === i}
              className={`h-2 rounded-full transition-all ${
                current === i ? 'bg-primary w-5' : 'bg-primary/30 w-2'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

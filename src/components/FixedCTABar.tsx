import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { festivalData } from '../data/festivalData'

/**
 * スマートフォン専用の画面下部固定CTAバー。
 * 最終CTA・フッターが画面に入ったら、重ならないように自動で隠れる。
 */
export function FixedCTABar() {
  const { links } = festivalData
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const targets = ['cta', 'footer']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (targets.length === 0) return

    const visibleIds = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (entry.isIntersecting) visibleIds.add(id)
          else visibleIds.delete(id)
        }
        setHidden(visibleIds.size > 0)
      },
      { threshold: 0 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const formReady = Boolean(links.applicationForm)

  return (
    <div
      aria-hidden={hidden}
      className={`border-ink/10 fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex gap-2">
        {formReady ? (
          <a
            href={links.applicationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary flex flex-1 items-center justify-center gap-1.5 rounded-full py-3 text-sm font-bold text-white shadow-sm"
          >
            <FileText className="size-4.5" aria-hidden="true" />
            参加申込みフォーム
          </a>
        ) : (
          <span className="bg-primary flex flex-1 cursor-default items-center justify-center gap-1.5 rounded-full py-3 text-sm font-bold text-white opacity-75">
            <FileText className="size-4.5" aria-hidden="true" />
            申込み
            <span className="text-ink-soft rounded-full bg-white px-2 py-0.5 text-[10px] font-bold">
              準備中
            </span>
          </span>
        )}
        <a
          href="#join"
          className="border-primary text-primary flex flex-1 items-center justify-center rounded-full border-2 bg-white py-3 text-sm font-bold"
        >
          参加方法を見る
        </a>
      </div>
    </div>
  )
}

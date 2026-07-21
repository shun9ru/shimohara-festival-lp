import { useEffect, useRef, useState } from 'react'

/**
 * 要素が画面内に入ったかどうかを判定するフック。
 * スクロール時のフェードイン演出や、動画の遅延読み込みに使用する。
 * 一度表示されたら true のまま保持する。
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // IntersectionObserver 非対応環境ではそのまま表示する
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(element)
    return () => observer.disconnect()
    // options はリテラルで渡す想定のため依存に含めない
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}

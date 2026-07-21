import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  /** 表示開始を遅らせるミリ秒（カードを順番に表示したいときに使用） */
  delay?: number
}

/**
 * スクロールして画面内に入ったときに、ふわっとフェードインさせるラッパー。
 * prefers-reduced-motion 設定時は CSS 側で演出を無効化している。
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-shown' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

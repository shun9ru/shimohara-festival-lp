import { useState } from 'react'
import type { MediaImage } from '../data/festivalData'
import { MediaPlaceholder } from './MediaPlaceholder'

interface SmartImageProps {
  image: MediaImage
  className?: string
  /** ファーストビューなど、すぐ表示したい画像は true（遅延読み込みしない） */
  eager?: boolean
  /**
   * 画像の表示方法。
   * 'cover'（既定）は枠いっぱいに切り抜き、'contain' は切り抜かず全体を収めます。
   * ポスターなど全体を見せたい画像は 'contain' を指定してください。
   */
  fit?: 'cover' | 'contain'
  /**
   * 読み込みに失敗したときに呼ばれます。
   * これを渡すと、失敗時にプレースホルダーを出す代わりに親側で非表示にできます。
   */
  onUnavailable?: () => void
}

/**
 * 画像を表示するコンポーネント。
 * パスが未設定、またはファイルが存在せず読み込みに失敗した場合は、
 * レイアウトを崩さずプレースホルダーを表示する。
 * （onUnavailable を渡した場合は、プレースホルダーの代わりに親へ通知する）
 */
export function SmartImage({
  image,
  className = '',
  eager = false,
  fit = 'cover',
  onUnavailable,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (!image.src || failed) {
    return (
      <MediaPlaceholder
        type="image"
        label={image.label}
        note={image.src || undefined}
        className={className}
      />
    )
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => (onUnavailable ? onUnavailable() : setFailed(true))}
      className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
    />
  )
}

import { useState } from 'react'
import type { MediaImage } from '../data/festivalData'
import { MediaPlaceholder } from './MediaPlaceholder'

interface SmartImageProps {
  image: MediaImage
  className?: string
  /** ファーストビューなど、すぐ表示したい画像は true（遅延読み込みしない） */
  eager?: boolean
}

/**
 * 画像を表示するコンポーネント。
 * パスが未設定、またはファイルが存在せず読み込みに失敗した場合は、
 * レイアウトを崩さずプレースホルダーを表示する。
 */
export function SmartImage({ image, className = '', eager = false }: SmartImageProps) {
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
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

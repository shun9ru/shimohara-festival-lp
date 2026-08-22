import { useState } from 'react'
import type { VideoItem } from '../data/festivalData'
import { useInView } from '../hooks/useInView'
import { mediaUrl } from '../lib/mediaUrl'
import { MediaPlaceholder } from './MediaPlaceholder'

interface SmartVideoProps {
  video: VideoItem
  className?: string
  /**
   * 読み込みに失敗したときに呼ばれます。
   * これを渡すと、失敗時にプレースホルダーを出す代わりに親側で非表示にできます。
   */
  onUnavailable?: () => void
}

/**
 * ファーストビュー以外で使う動画コンポーネント。
 * ・画面に近づいてから読み込む（遅延読み込み・preload="metadata"）
 * ・ファイルが未設定/存在しない場合はプレースホルダーを表示
 * ・エラーを画面に出さない
 */
export function SmartVideo({ video, className = '', onUnavailable }: SmartVideoProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '200px 0px', threshold: 0 })
  const [failed, setFailed] = useState(false)

  return (
    <div ref={ref} className={`h-full w-full ${className}`}>
      {!video.src || failed ? (
        <MediaPlaceholder type="video" label={video.label} note={video.src || undefined} />
      ) : inView ? (
        <video
          src={mediaUrl(video.src)}
          controls
          preload="metadata"
          playsInline
          poster={video.poster || undefined}
          onError={() => (onUnavailable ? onUnavailable() : setFailed(true))}
          className="h-full w-full bg-black/5 object-cover"
          aria-label={video.title}
        />
      ) : (
        <div className="bg-beige h-full w-full animate-pulse" aria-hidden="true" />
      )}
    </div>
  )
}

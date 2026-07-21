import { Image as ImageIcon, Map as MapIcon, Video } from 'lucide-react'

interface MediaPlaceholderProps {
  type?: 'image' | 'video' | 'map'
  /** どの写真・動画を入れる場所かを示すラベル（例: '山車の写真を配置'） */
  label: string
  /** 配置するファイルのパスなど、補足情報 */
  note?: string
  className?: string
}

/**
 * 画像・動画・地図が未設定のときに表示するプレースホルダー。
 * どのファイルをどこに置けばよいか分かるよう、ラベルとパスを表示する。
 */
export function MediaPlaceholder({ type = 'image', label, note, className = '' }: MediaPlaceholderProps) {
  const Icon = type === 'video' ? Video : type === 'map' ? MapIcon : ImageIcon

  return (
    <div
      role="img"
      aria-label={label}
      className={`from-beige via-cream to-primary-soft border-primary/30 flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-[inherit] border-2 border-dashed bg-gradient-to-br p-4 text-center ${className}`}
    >
      <span className="text-primary flex size-12 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <p className="text-ink text-sm font-bold">{label}</p>
      {note && <p className="text-ink-soft max-w-full text-[11px] leading-tight break-all">{note}</p>}
    </div>
  )
}

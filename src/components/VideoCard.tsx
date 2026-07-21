import type { VideoItem } from '../data/festivalData'
import { SmartVideo } from './SmartVideo'

/** 「動画で見る祭り」セクションの短い動画カード */
export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="ring-ink/5 flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1">
      <div className="aspect-video overflow-hidden">
        <SmartVideo video={video} />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="text-ink text-sm font-bold">{video.title}</h3>
        <p className="text-ink-soft text-xs leading-relaxed">{video.description}</p>
      </div>
    </article>
  )
}

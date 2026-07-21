import { festivalData } from '../data/festivalData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartVideo } from './SmartVideo'
import { VideoCard } from './VideoCard'

export function VideoSection() {
  const { videoSection } = festivalData

  return (
    <section id="video" className="bg-cream scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="MOVIE" title={videoSection.title} lead={videoSection.description} />
        </Reveal>

        {/* メインのダイジェスト動画 */}
        <Reveal className="mt-10 md:mt-14">
          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl shadow-lg">
            <SmartVideo video={videoSection.digest} />
          </div>
        </Reveal>

        {/* 短い動画カード（スマホは横スクロール、PCは4列） */}
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-12 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {videoSection.clips.map((clip, i) => (
            <Reveal key={clip.title} delay={i * 80} className="w-64 flex-none snap-start md:w-auto">
              <VideoCard video={clip} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

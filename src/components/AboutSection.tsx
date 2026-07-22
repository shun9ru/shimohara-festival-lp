import { useState } from 'react'
import { festivalData } from '../data/festivalData'
import { mediaUrl } from '../lib/mediaUrl'
import { iconMap } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function AboutSection() {
  const { about } = festivalData
  // 動画の読み込みに失敗（未配置など）したら、写真の表示に切り替える
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = Boolean(about.video.src) && !videoFailed

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="ABOUT" title={about.title} lead={about.description} />
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl bg-black/5 shadow-lg">
            {showVideo ? (
              <video
                src={mediaUrl(about.video.src)}
                controls
                preload="metadata"
                playsInline
                poster={about.image.src || undefined}
                onError={() => setVideoFailed(true)}
                className="h-full w-full object-cover"
                aria-label={about.video.title}
              />
            ) : (
              <SmartImage image={about.image} />
            )}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {about.features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <Reveal key={feature.title} delay={i * 100} className="h-full">
                <article className="bg-cream ring-ink/5 h-full rounded-2xl p-6 text-center shadow-sm ring-1">
                  <span className="bg-primary-soft text-primary mx-auto flex size-14 items-center justify-center rounded-full">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-ink mt-4 font-bold">{feature.title}</h3>
                  <p className="text-ink-soft mt-2 text-sm leading-relaxed">{feature.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

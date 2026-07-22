import { festivalData } from '../data/festivalData'
import { MediaCarousel } from './MediaCarousel'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/**
 * 夏祭りの一日（タイムライン）。
 * PCでは中央線をはさんで左右交互、スマホでは左の線に沿って縦一列に表示する。
 */
export function FestivalTimeline() {
  const { timeline } = festivalData

  return (
    <section id="timeline" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading kicker="SCHEDULE" title={timeline.title} lead={timeline.description} />
        </Reveal>

        <ol className="relative mt-12 space-y-12 md:mt-16 md:space-y-20">
          {/* 縦線 */}
          <span
            aria-hidden="true"
            className="bg-primary/20 absolute top-2 bottom-2 left-4 w-0.5 md:left-1/2 md:-translate-x-1/2"
          />

          {timeline.steps.map((step, i) => {
            const even = i % 2 === 0
            return (
              <li key={step.title} className="relative md:grid md:grid-cols-2 md:items-center md:gap-14">
                {/* タイムラインの点 */}
                <span
                  aria-hidden="true"
                  className="border-cream bg-primary absolute top-1.5 left-4 size-4 -translate-x-1/2 rounded-full border-4 shadow md:left-1/2"
                />

                {/* テキスト */}
                <Reveal
                  className={`pl-12 md:pl-0 ${even ? 'md:order-1 md:pr-14 md:text-right' : 'md:order-2 md:pl-14'}`}
                >
                  <div>
                    <span className="bg-primary inline-block rounded-full px-3.5 py-1 text-xs font-bold text-white">
                      {step.time}
                    </span>
                    <h3 className="text-ink mt-3 text-lg font-bold md:text-xl">{step.title}</h3>
                    <p className="text-ink-soft mt-2.5 text-sm leading-relaxed whitespace-pre-line md:text-base">
                      {step.description}
                    </p>
                  </div>
                </Reveal>

                {/* 写真 */}
                <Reveal
                  delay={100}
                  className={`mt-4 pl-12 md:mt-0 md:pl-0 ${even ? 'md:order-2 md:pl-14' : 'md:order-1 md:pr-14'}`}
                >
                  <MediaCarousel items={step.media} />
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

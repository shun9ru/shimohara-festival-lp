import { CalendarDays, Clock, ExternalLink, Music } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { iconMap } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function EventInformation() {
  const { information, links, nextEvent } = festivalData

  return (
    <section id="info" className="bg-cream scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            kicker="INFORMATION"
            title={information.title}
            lead={information.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:items-start">
          {/* 開催情報の一覧（次回開催が未定のときはお知らせ文を表示） */}
          <Reveal>
            {nextEvent.scheduled ? (
              <div className="ring-ink/5 rounded-3xl bg-white p-6 shadow-sm ring-1 md:p-8">
                <dl className="divide-ink/10 divide-y">
                  {information.items.map((item) => {
                    const Icon = iconMap[item.icon]
                    return (
                      <div key={item.label} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                        <dt className="text-ink flex w-28 shrink-0 items-center gap-2 text-sm font-bold">
                          <Icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                          {item.label}
                        </dt>
                        <dd className="text-ink-soft flex-1 text-sm leading-relaxed whitespace-pre-line">
                          {item.value}
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            ) : (
              <div className="ring-ink/5 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 md:p-10">
                <span className="bg-primary-soft text-primary mx-auto flex size-14 items-center justify-center rounded-full">
                  <CalendarDays className="size-7" aria-hidden="true" />
                </span>
                <p className="text-ink-soft mt-5 leading-relaxed whitespace-pre-line">
                  {nextEvent.tbaMessage}
                </p>
              </div>
            )}
          </Reveal>

          {/* 次回開催のポスター＋地図 */}
          <Reveal delay={120}>
            <div className="ring-ink/5 aspect-[3/4] overflow-hidden rounded-3xl bg-white shadow-sm ring-1">
              <SmartImage image={nextEvent.poster} fit="contain" />
            </div>

            {links.googleMapEmbed && (
              <div className="ring-ink/5 mt-6 aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1">
                <iframe
                  src={links.googleMapEmbed}
                  title="会場周辺の地図（Googleマップ）"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            )}
            {links.googleMapLink && (
              <a
                href={links.googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent mt-4 inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Googleマップで開く
              </a>
            )}
          </Reveal>
        </div>

        {/* 当日のタイムスケジュールと練習日程 */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <Reveal>
            <div className="ring-ink/5 rounded-3xl bg-white p-6 shadow-sm ring-1 md:p-8">
              <h3 className="text-ink flex items-center gap-2.5 text-base font-bold md:text-lg">
                <Clock className="text-primary size-5 shrink-0" aria-hidden="true" />
                {information.daySchedule.title}
              </h3>
              <ol className="divide-ink/10 mt-5 divide-y">
                {information.daySchedule.items.map((item) => (
                  <li key={item.time} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="text-primary w-28 shrink-0 text-sm font-bold">
                      {item.time}
                    </span>
                    <span className="text-ink-soft flex-1 text-sm leading-relaxed">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-ink-soft bg-cream mt-5 rounded-xl p-4 text-sm leading-relaxed">
                {information.daySchedule.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ring-ink/5 rounded-3xl bg-white p-6 shadow-sm ring-1 md:p-8">
              <h3 className="text-ink flex items-center gap-2.5 text-base font-bold md:text-lg">
                <Music className="text-primary size-5 shrink-0" aria-hidden="true" />
                {information.practice.title}
              </h3>
              <p className="text-ink-soft mt-4 text-sm leading-relaxed">
                {information.practice.description}
              </p>
              <dl className="divide-ink/10 mt-5 divide-y">
                {information.practice.items.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <div key={item.label} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                      <dt className="text-ink flex w-28 shrink-0 items-center gap-2 text-sm font-bold">
                        <Icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </dt>
                      <dd className="text-ink-soft flex-1 text-sm leading-relaxed">{item.value}</dd>
                    </div>
                  )
                })}
              </dl>
              <p className="text-ink-soft bg-cream mt-5 rounded-xl p-4 text-sm leading-relaxed">
                {information.practice.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { CalendarDays, ExternalLink } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { iconMap } from './icons'
import { MediaPlaceholder } from './MediaPlaceholder'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

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

          {/* 地図 */}
          <Reveal delay={120}>
            <div className="ring-ink/5 aspect-[4/3] overflow-hidden rounded-3xl shadow-sm ring-1">
              {links.googleMapEmbed ? (
                <iframe
                  src={links.googleMapEmbed}
                  title="会場周辺の地図（Googleマップ）"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              ) : (
                <MediaPlaceholder
                  type="map"
                  label="Googleマップを配置"
                  note="festivalData.ts の links.googleMapEmbed に埋め込み用URLを設定してください"
                />
              )}
            </div>
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
      </div>
    </section>
  )
}

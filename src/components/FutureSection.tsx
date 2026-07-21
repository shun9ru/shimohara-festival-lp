import { festivalData } from '../data/festivalData'
import { iconMap } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/**
 * 「夏祭りを未来へつなぐために」。
 * 他セクションと印象を変えるため、紺色の背景で表示する。
 */
export function FutureSection() {
  const { future } = festivalData

  return (
    <section id="future" className="from-accent to-accent-dark scroll-mt-20 bg-gradient-to-b py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading kicker="FUTURE" title={future.title} tone="light" />
        </Reveal>

        <Reveal className="mt-8">
          <p className="mx-auto max-w-2xl text-center text-sm leading-loose whitespace-pre-line text-white/85 md:text-base md:leading-loose">
            {future.body}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="text-center text-sm font-bold tracking-wide text-white/70">
            {future.actionsLead}
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {future.actions.map((action, i) => {
            const Icon = iconMap[action.icon]
            return (
              <Reveal key={action.label} delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-center md:p-6">
                  <span className="flex size-12 items-center justify-center rounded-full bg-white/15">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold">{action.label}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <p className="text-center text-lg leading-relaxed font-bold md:text-xl">
            {future.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

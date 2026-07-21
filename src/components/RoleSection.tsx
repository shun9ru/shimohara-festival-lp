import { Check } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { iconMap } from './icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function RoleSection() {
  const { roles } = festivalData

  return (
    <section id="roles" className="bg-cream scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading kicker="ROLES" title={roles.title} lead={roles.description} />
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {roles.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            const isPrimary = i === 0
            return (
              <Reveal key={card.title} delay={i * 120} className="h-full">
                <article
                  className={`ring-ink/5 h-full rounded-3xl border-t-4 bg-white p-7 shadow-md ring-1 md:p-8 ${
                    isPrimary ? 'border-primary' : 'border-accent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-full ${
                        isPrimary ? 'bg-primary-soft text-primary' : 'bg-accent/10 text-accent'
                      }`}
                    >
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-ink text-xl font-bold">{card.title}</h3>
                      <p className="text-ink-soft mt-0.5 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm md:text-base">
                        <Check
                          className={`mt-0.5 size-4.5 shrink-0 ${isPrimary ? 'text-primary' : 'text-accent'}`}
                          aria-hidden="true"
                        />
                        <span className="text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* 強調メッセージ */}
        <Reveal className="mt-10 md:mt-14">
          <div className="from-primary to-primary-dark rounded-3xl bg-gradient-to-r p-8 text-center text-white shadow-lg md:p-10">
            <p className="text-lg leading-relaxed font-bold whitespace-pre-line md:text-2xl">
              {roles.message.main}
            </p>
            <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-white/90 md:text-base">
              {roles.message.sub}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

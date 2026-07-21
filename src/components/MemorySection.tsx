import { festivalData } from '../data/festivalData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function MemorySection() {
  const { memories } = festivalData

  return (
    <section id="memories" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading kicker="MEMORIES" title={memories.title} lead={memories.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {memories.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 100} className="h-full">
              <article className="bg-cream ring-ink/5 flex h-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1">
                <div className="aspect-[3/2] overflow-hidden">
                  <SmartImage image={card.image} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-ink font-bold">{card.title}</h3>
                  <p className="text-ink-soft mt-2 text-sm leading-relaxed">{card.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* セクション中央のメッセージ */}
        <Reveal className="mt-14 md:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="bg-primary mx-auto block h-1 w-10 rounded-full" aria-hidden="true" />
            <p className="text-ink mt-8 text-base leading-loose font-medium whitespace-pre-line md:text-xl md:leading-loose">
              {memories.quote}
            </p>
            <span className="bg-primary mx-auto mt-8 block h-1 w-10 rounded-full" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

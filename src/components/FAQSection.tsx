import { ChevronDown } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function FAQSection() {
  const { faq } = festivalData

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeading kicker="FAQ" title={faq.title} lead={faq.description} />
        </Reveal>

        <div className="mt-10 space-y-3 md:mt-14">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={Math.min(i, 4) * 50}>
              <details className="group border-ink/10 bg-cream open:bg-white rounded-2xl border transition open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-5 font-bold [&::-webkit-details-marker]:hidden">
                  <span className="text-primary shrink-0 text-lg font-bold" aria-hidden="true">
                    Q
                  </span>
                  <span className="text-ink flex-1 text-sm md:text-base">{item.question}</span>
                  <ChevronDown
                    className="text-ink-soft size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="flex gap-3 px-5 pb-5">
                  <span className="text-accent shrink-0 text-lg font-bold" aria-hidden="true">
                    A
                  </span>
                  <p className="text-ink-soft flex-1 text-sm leading-relaxed whitespace-pre-line md:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

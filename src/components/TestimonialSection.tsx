import { Quote } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { avatarIllustrations } from './illustrations'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function TestimonialSection() {
  const { testimonials } = festivalData

  return (
    <section id="voices" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading
            kicker="VOICES"
            title={testimonials.title}
            lead={testimonials.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14">
          {testimonials.items.map((item, i) => {
            const Avatar = avatarIllustrations[i % avatarIllustrations.length]
            return (
            <Reveal key={item.comment} delay={(i % 2) * 100} className="h-full">
              <article className="bg-cream ring-ink/5 relative flex h-full flex-col rounded-2xl p-6 shadow-sm ring-1 md:p-7">
                <Quote
                  className="text-primary/25 absolute top-5 right-5 size-8"
                  aria-hidden="true"
                />
                <p className="text-ink flex-1 pr-8 leading-relaxed">{item.comment}</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="size-11 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                    <Avatar className="h-full w-full" />
                  </span>
                  <ul className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-ink-soft ring-ink/10 rounded-full bg-white px-2.5 py-1 text-xs ring-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </footer>
              </article>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

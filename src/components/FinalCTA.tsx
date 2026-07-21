import { FileText } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'

export function FinalCTA() {
  const { finalCta, links } = festivalData

  return (
    <section
      id="cta"
      className="from-primary via-primary-dark relative scroll-mt-20 overflow-hidden bg-gradient-to-br to-[#7f2314] py-20 text-white md:py-28"
    >
      {/* 装飾（うっすらとした円） */}
      <div className="pointer-events-none absolute -top-20 -left-20 size-72 rounded-full bg-white/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-white/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-2xl leading-snug font-bold [text-shadow:0_2px_12px_rgba(0,0,0,0.25)] md:text-4xl">
            {finalCta.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-7 text-sm leading-loose whitespace-pre-line text-white/90 md:text-base md:leading-loose">
            {finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href={links.applicationForm} variant="white" size="lg" className="w-full sm:w-auto">
              <FileText className="size-5" aria-hidden="true" />
              夏祭りに参加してみる
            </CTAButton>
            <CTAButton href="#join" variant="outline-white" size="lg" className="w-full sm:w-auto">
              参加方法を見る
            </CTAButton>
            <CTAButton href={links.contact} variant="outline-white" size="lg" className="w-full sm:w-auto">
              見学について問い合わせる
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

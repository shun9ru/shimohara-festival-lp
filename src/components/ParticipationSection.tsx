import { FileText, Phone } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { CTAButton } from './CTAButton'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ParticipationSection() {
  const { participation, links, contact } = festivalData

  return (
    <section id="join" className="bg-primary-soft scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeading
            kicker="JOIN"
            title={participation.title}
            lead={participation.description}
          />
        </Reveal>

        {/* 3ステップ */}
        <ol className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {participation.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="h-full">
              <li className="ring-ink/5 relative h-full rounded-2xl bg-white p-6 pt-9 text-center shadow-sm ring-1">
                <span
                  className="bg-primary absolute -top-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full text-lg font-bold text-white shadow-md"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="text-ink font-bold">{step.title}</h3>
                <p className="text-ink-soft mt-2.5 text-sm leading-relaxed">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* ボタン */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href={links.applicationForm} variant="primary" size="lg" className="w-full sm:w-auto">
              <FileText className="size-5" aria-hidden="true" />
              参加申込みフォームを開く
            </CTAButton>
            <CTAButton href={links.contact} variant="outline" size="lg" className="w-full sm:w-auto">
              問い合わせる
            </CTAButton>
          </div>
        </Reveal>

        {/* LINEを使わない方向け */}
        <Reveal className="mt-10">
          <div className="border-ink/10 mx-auto max-w-2xl rounded-2xl border bg-white p-6 md:p-7">
            <h3 className="text-ink flex items-center gap-2 font-bold">
              <Phone className="text-primary size-5" aria-hidden="true" />
              {participation.analog.title}
            </h3>
            <p className="text-ink-soft mt-3 text-sm leading-relaxed">
              {participation.analog.description}
            </p>
            <dl className="text-ink mt-4 space-y-1.5 text-sm">
              <div className="flex gap-3">
                <dt className="text-ink-soft w-20 shrink-0">電話</dt>
                <dd className="font-medium">{contact.tel || '準備中'}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-soft w-20 shrink-0">メール</dt>
                <dd className="font-medium break-all">{contact.email || '準備中'}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-ink-soft w-20 shrink-0">担当</dt>
                <dd className="font-medium">{contact.organization}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

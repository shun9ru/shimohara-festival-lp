import { useState } from 'react'
import { CalendarDays, ChevronDown, Clock, MapPin, Video } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { CTAButton } from './CTAButton'
import { HeroFestivalIllustration } from './illustrations'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * ファーストビューの背景。
 * 動画 → 画像 → 祭りらしいグラデーション の順にフォールバックする。
 * prefers-reduced-motion 設定時は動画を自動再生せず画像を表示する。
 */
function HeroBackground() {
  const { heroVideo, heroImage } = festivalData.media
  const [videoFailed, setVideoFailed] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const [reduceMotion] = useState(prefersReducedMotion)

  const showVideo = Boolean(heroVideo) && !videoFailed && !reduceMotion
  const showImage = !showVideo && Boolean(heroImage.src) && !imageFailed

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {showVideo ? (
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={heroImage.src || undefined}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        />
      ) : showImage ? (
        <img
          className="h-full w-full object-cover"
          src={heroImage.src}
          alt=""
          onError={() => setImageFailed(true)}
        />
      ) : (
        // 動画・画像が未設定の間は、夜祭りのイラストを表示する
        <HeroFestivalIllustration className="h-full w-full" />
      )}
    </div>
  )
}

export function HeroSection() {
  const { catchphrase, subCopy, heroBadge, nextEvent, media } = festivalData

  return (
    <section id="hero" className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <HeroBackground />
      {/* 文字を読みやすくするための暗めのオーバーレイ */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65"
        aria-hidden="true"
      />

      {/* メイン動画・画像が未配置のときの案内チップ */}
      <p className="absolute top-20 left-1/2 z-10 flex max-w-[92%] -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/40 px-4 py-1.5 text-[11px] whitespace-nowrap text-white/80 backdrop-blur">
        <Video className="size-3.5 shrink-0" aria-hidden="true" />
        <span className="truncate">メイン動画を配置：{media.heroVideo || '（未設定）'}</span>
      </p>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pt-32 pb-32 text-center text-white">
        <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest backdrop-blur">
          {heroBadge}
        </p>

        <h1 className="mt-6 text-[2rem] leading-[1.4] font-bold whitespace-pre-line [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] md:text-5xl">
          {catchphrase}
        </h1>

        <p className="mt-6 text-sm leading-loose whitespace-pre-line text-white/90 md:text-base">
          {subCopy}
        </p>

        {/* 次回の開催予定（scheduled が false のときはお知らせ文を表示） */}
        {nextEvent.scheduled ? (
          <div className="mt-8 inline-flex flex-col items-center gap-2.5 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur">
            <span className="bg-primary rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest text-white">
              次回開催
            </span>
            {'name' in nextEvent && nextEvent.name && (
              <p className="text-base font-bold tracking-wide md:text-lg">{nextEvent.name}</p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4 text-white/80" aria-hidden="true" />
                {nextEvent.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-white/80" aria-hidden="true" />
                {nextEvent.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-white/80" aria-hidden="true" />
                {nextEvent.place}
              </span>
            </div>
          </div>
        ) : (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm backdrop-blur">
            <CalendarDays className="size-4 shrink-0 text-white/80" aria-hidden="true" />
            {nextEvent.tbaMessage}
          </p>
        )}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="#video" variant="primary" size="lg" className="w-full sm:w-auto">
            祭りを見てみる
          </CTAButton>
          <CTAButton href="#join" variant="white" size="lg" className="w-full sm:w-auto">
            参加方法を見る
          </CTAButton>
        </div>
      </div>

      {/* スクロールを促すアイコン */}
      <a
        href="#about"
        aria-label="下へスクロール"
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white md:bottom-8"
      >
        <span className="flex flex-col items-center gap-1 text-[10px] tracking-[0.25em]">
          SCROLL
          <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
        </span>
      </a>
    </section>
  )
}

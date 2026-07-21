interface SectionHeadingProps {
  /** 見出し上の小さな英字ラベル（例: 'ABOUT'） */
  kicker?: string
  title: string
  /** 見出し下の説明文（\n で改行できます） */
  lead?: string
  /** 'light' は紺背景など暗い背景用 */
  tone?: 'default' | 'light'
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  lead,
  tone = 'default',
  className = '',
}: SectionHeadingProps) {
  const light = tone === 'light'
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {kicker && (
        <p
          className={`text-xs font-bold tracking-[0.3em] ${light ? 'text-white/60' : 'text-primary'}`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 text-2xl leading-snug font-bold md:text-4xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      <span
        className={`mx-auto mt-4 block h-1 w-12 rounded-full ${light ? 'bg-white/50' : 'bg-primary'}`}
        aria-hidden="true"
      />
      {lead && (
        <p
          className={`mt-5 leading-relaxed whitespace-pre-line ${light ? 'text-white/85' : 'text-ink-soft'}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

import type { ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'white' | 'outline' | 'outline-white' | 'line'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/25',
  accent: 'bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/25',
  white: 'bg-white text-primary hover:bg-cream shadow-md shadow-black/10',
  outline: 'border-2 border-primary bg-white text-primary hover:bg-primary-soft',
  'outline-white': 'border-2 border-white/80 text-white hover:bg-white/10',
  line: 'bg-line text-white hover:opacity-90 shadow-md shadow-line/25',
}

interface CTAButtonProps {
  /** リンク先。空文字 '' の場合は「準備中」と表示される */
  href: string
  children: ReactNode
  variant?: Variant
  size?: 'md' | 'lg'
  className?: string
}

/**
 * CTAボタン。URLが未設定（空文字）の場合は、無効ボタンではなく
 * 「準備中」ラベル付きで表示する。
 */
export function CTAButton({ href, children, variant = 'primary', size = 'md', className = '' }: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200'
  const sizeClass = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${sizeClass} ${variantClasses[variant]} cursor-default opacity-75 ${className}`}
      >
        {children}
        <span className="text-ink-soft ring-ink/10 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold ring-1">
          準備中
        </span>
      </span>
    )
  }

  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${sizeClass} ${variantClasses[variant]} hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {children}
    </a>
  )
}

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { festivalData } from '../data/festivalData'
import { MobileMenu } from './MobileMenu'

const NAV_ITEMS = [
  { label: '祭りについて', href: '#about' },
  { label: '祭りの一日', href: '#timeline' },
  { label: '参加方法', href: '#join' },
  { label: 'よくある質問', href: '#faq' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-ink/5 fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#hero" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span
            className="bg-primary flex size-9 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm"
            aria-hidden="true"
          >
            祭
          </span>
          <span className="text-ink text-base font-bold tracking-wide md:text-lg">
            {festivalData.festivalName}
          </span>
        </a>

        {/* PCナビゲーション */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink hover:text-primary text-sm font-medium transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="bg-primary shadow-primary/25 hover:bg-primary-dark inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5"
          >
            参加する
          </a>
        </nav>

        {/* スマホ用メニューボタン */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="text-ink hover:bg-beige flex size-11 items-center justify-center rounded-full transition md:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={NAV_ITEMS} />
    </header>
  )
}

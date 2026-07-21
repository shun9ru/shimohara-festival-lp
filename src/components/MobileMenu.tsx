interface MobileMenuProps {
  open: boolean
  onClose: () => void
  items: { label: string; href: string }[]
}

/** スマートフォン用のハンバーガーメニュー（ヘッダー直下に展開） */
export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <div
      inert={!open}
      className={`border-ink/5 overflow-hidden bg-white transition-[max-height] duration-300 ease-out md:hidden ${
        open ? 'max-h-96 border-t shadow-lg' : 'max-h-0'
      }`}
    >
      <nav className="flex flex-col px-4 py-3" aria-label="モバイルナビゲーション">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-ink hover:bg-cream rounded-xl px-3 py-3 text-sm font-medium transition"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#join"
          onClick={onClose}
          className="bg-primary shadow-primary/25 mt-2 mb-1 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white shadow-md"
        >
          参加する
        </a>
      </nav>
    </div>
  )
}

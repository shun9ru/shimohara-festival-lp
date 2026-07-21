import { festivalData } from '../data/festivalData'

/** URLが設定されていればリンク、なければ「（準備中）」のテキストを表示 */
function FooterLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return <span className="text-white/40">{label}（準備中）</span>
  }
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="transition hover:text-white hover:underline"
    >
      {label}
    </a>
  )
}

export function Footer() {
  const { festivalName, contact, links, copyright } = festivalData

  return (
    <footer id="footer" className="bg-accent-dark py-12 text-sm text-white/75">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 地区・祭り名 */}
          <div>
            <p className="flex items-center gap-2.5">
              <span
                className="bg-primary flex size-9 items-center justify-center rounded-full text-lg font-bold text-white"
                aria-hidden="true"
              >
                祭
              </span>
              <span className="text-base font-bold text-white">{festivalName}</span>
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              下原地区｜子どもも大人も、地域のみんなでつくる祭りです。
            </p>
          </div>

          {/* 祭り運営・問い合わせ先 */}
          <div>
            <h2 className="font-bold text-white">祭り運営</h2>
            <ul className="mt-4 space-y-2.5">
              <li>{contact.organization}</li>
              <li>電話：{contact.tel || '準備中'}</li>
              <li className="break-all">メール：{contact.email || '準備中'}</li>
            </ul>
          </div>

          {/* リンク */}
          <div>
            <h2 className="font-bold text-white">リンク</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <FooterLink href={links.lineOpenChat} label="LINEオープンチャット" />
              </li>
              <li>
                <FooterLink href={links.privacyPolicy} label="プライバシーポリシー" />
              </li>
              <li>
                <FooterLink href={links.mediaPolicy} label="写真・動画掲載について" />
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          {copyright}
        </p>
      </div>
    </footer>
  )
}

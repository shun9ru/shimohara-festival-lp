import type { MemoryIllustrationKey } from '../data/festivalData'

// =====================================================================
// 祭りのカラーパレットに合わせたオリジナルSVGイラスト集
// ・思い出カード用イラスト（memoryIllustrations）
// ・ファーストビュー背景の夜祭りイラスト（HeroFestivalIllustration）
// ・参加者の声のアバター（avatarIllustrations）
// すべて装飾目的のため aria-hidden で出力する。
// =====================================================================

export interface IllustrationProps {
  className?: string
}

/* ---- 共通パーツ ---- */

/** 提灯 */
function Lantern({ x, y, scale = 1, glow = false }: { x: number; y: number; scale?: number; glow?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {glow && <circle r={30} fill="#e9b949" opacity={0.2} />}
      <line y1={-27} y2={-17} stroke="#8a6f52" strokeWidth={2.5} />
      <rect x={-8} y={-20} width={16} height={5} rx={2} fill="#e9b949" />
      <ellipse rx={13} ry={16} fill="#d8442e" />
      <path d="M-5 -14 C-8 0 -8 0 -5 14 M5 -14 C8 0 8 0 5 14" stroke="#faf6ec" strokeWidth={1.5} fill="none" opacity={0.4} />
      <rect x={-7} y={14} width={14} height={4} rx={2} fill="#e9b949" />
    </g>
  )
}

/** 花火 */
function Burst({ cx, cy, r, color, strokeWidth = 3 }: { cx: number; cy: number; r: number; color: string; strokeWidth?: number }) {
  const angles = [0, 30, 60, 90, 120, 150]
  return (
    <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
      {angles.map((a) => (
        <g key={a} transform={`translate(${cx} ${cy}) rotate(${a})`}>
          <line x1={r * 0.35} y1={0} x2={r} y2={0} />
          <line x1={-r * 0.35} y1={0} x2={-r} y2={0} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={strokeWidth * 1.3} fill={color} stroke="none" />
    </g>
  )
}

/* ---- 思い出カード用イラスト（6点） ---- */

/** 親子で共通の思い出ができる：手をつなぐ親子と提灯 */
function ParentChildIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width={400} height={267} fill="#faf6ec" />
      <circle cx={200} cy={145} r={115} fill="#f1e9d7" />
      <path d="M-5 15 Q60 55 135 35" stroke="#c9bda3" strokeWidth={2.5} fill="none" />
      <path d="M405 15 Q340 55 265 35" stroke="#c9bda3" strokeWidth={2.5} fill="none" />
      <Lantern x={60} y={70} />
      <Lantern x={340} y={70} />
      <circle cx={95} cy={105} r={4} fill="#e9b949" />
      <circle cx={305} cy={95} r={3.5} fill="#d8442e" />
      <circle cx={70} cy={185} r={3.5} fill="#24406b" />
      <circle cx={330} cy={180} r={4} fill="#e9b949" />
      <rect x={118} y={62} width={7} height={7} rx={2} fill="#d8442e" transform="rotate(20 121 65)" />
      <rect x={282} y={148} width={7} height={7} rx={2} fill="#24406b" transform="rotate(-15 285 151)" />
      <ellipse cx={200} cy={233} rx={95} ry={10} fill="#e3d9c0" />
      {/* 親 */}
      <circle cx={168} cy={78} r={9} fill="#4a3b32" />
      <circle cx={168} cy={104} r={24} fill="#f5cba7" />
      <path d="M144 104 a24 24 0 0 1 48 0 z" fill="#4a3b32" />
      <circle cx={160} cy={109} r={2.3} fill="#37332d" />
      <circle cx={176} cy={109} r={2.3} fill="#37332d" />
      <path d="M162 116 q6 5 12 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={152} cy={114} r={3.5} fill="#f2a19a" opacity={0.55} />
      <circle cx={184} cy={114} r={3.5} fill="#f2a19a" opacity={0.55} />
      <path d="M146 134 q22 -9 44 0 l7 58 q-29 8 -58 0 z" fill="#d8442e" />
      <path d="M158 132 l10 26 l10 -26" stroke="#faf6ec" strokeWidth={4} fill="none" strokeLinejoin="round" />
      <rect x={148} y={172} width={42} height={7} rx={3.5} fill="#16294a" />
      <path d="M192 148 q12 12 15 24" stroke="#d8442e" strokeWidth={10} fill="none" strokeLinecap="round" />
      {/* 子ども */}
      <circle cx={234} cy={143} r={18} fill="#f5cba7" />
      <path d="M216 143 a18 18 0 0 1 36 0 z" fill="#4a3b32" />
      <circle cx={228} cy={147} r={2} fill="#37332d" />
      <circle cx={240} cy={147} r={2} fill="#37332d" />
      <path d="M229 152 q5 4 10 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={222} cy={151} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={246} cy={151} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M218 163 q16 -7 32 0 l5 44 q-21 6 -42 0 z" fill="#24406b" />
      <path d="M228 162 l7 20 l7 -20" stroke="#faf6ec" strokeWidth={3.5} fill="none" strokeLinejoin="round" />
      <rect x={219} y={192} width={34} height={6} rx={3} fill="#d8442e" />
      <path d="M219 172 q-8 2 -12 1" stroke="#24406b" strokeWidth={8} fill="none" strokeLinecap="round" />
      {/* つないだ手 */}
      <circle cx={207} cy={173} r={5.5} fill="#f5cba7" />
    </svg>
  )
}

/** 子どもの成長を近くで感じられる：太鼓を叩く子ども */
function TaikoIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width={400} height={267} fill="#faf6ec" />
      <circle cx={185} cy={142} r={112} fill="#fceee9" />
      <ellipse cx={200} cy={235} rx={110} ry={10} fill="#e8dfc8" />
      {/* 台 */}
      <path d="M118 200 L96 236 M182 200 L204 236" stroke="#8a6f52" strokeWidth={9} strokeLinecap="round" />
      {/* 太鼓 */}
      <circle cx={150} cy={152} r={54} fill="#b23520" />
      <circle cx={150} cy={152} r={45} fill="#f6ead8" />
      <circle cx={150} cy={152} r={20} stroke="#d8442e" strokeWidth={3} fill="none" opacity={0.5} />
      <circle cx={150} cy={152} r={11} fill="#d8442e" />
      {[
        [199.5, 152],
        [185, 187],
        [150, 201.5],
        [115, 187],
        [100.5, 152],
        [115, 117],
        [150, 102.5],
        [185, 117],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.6} fill="#16294a" />
      ))}
      {/* 音の演出 */}
      <path d="M196 108 l10 -8 M202 120 l12 -4" stroke="#e9b949" strokeWidth={3.5} strokeLinecap="round" />
      <circle cx={322} cy={66} r={5} fill="#24406b" />
      <path d="M327 66 V44 q8 2 10 8" stroke="#24406b" strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx={348} cy={100} r={4} fill="#d8442e" />
      <path d="M352 100 V84" stroke="#d8442e" strokeWidth={2.5} strokeLinecap="round" />
      {/* 子ども */}
      <circle cx={270} cy={116} r={20} fill="#f5cba7" />
      <path d="M250 116 a20 20 0 0 1 40 0 z" fill="#4a3b32" />
      <path d="M250 112 h40" stroke="#d8442e" strokeWidth={6} />
      <path d="M291 110 l9 -5 M291 114 l10 2" stroke="#d8442e" strokeWidth={4} strokeLinecap="round" />
      <circle cx={263} cy={121} r={2.2} fill="#37332d" />
      <circle cx={277} cy={121} r={2.2} fill="#37332d" />
      <path d="M264 128 q6 4 12 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={256} cy={126} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={284} cy={126} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M252 138 q18 -8 36 0 l6 50 q-24 7 -48 0 z" fill="#d8442e" />
      <path d="M264 137 l8 22 l8 -22" stroke="#faf6ec" strokeWidth={4} fill="none" strokeLinejoin="round" />
      <rect x={253} y={170} width={40} height={7} rx={3.5} fill="#16294a" />
      {/* 腕とバチ */}
      <path d="M253 146 q-14 -8 -20 -22" stroke="#d8442e" strokeWidth={9} fill="none" strokeLinecap="round" />
      <line x1={232} y1={122} x2={206} y2={133} stroke="#c9a86b" strokeWidth={5} strokeLinecap="round" />
      <circle cx={232} cy={122} r={5.5} fill="#f5cba7" />
      <path d="M289 146 q12 -12 12 -26" stroke="#d8442e" strokeWidth={9} fill="none" strokeLinecap="round" />
      <line x1={301} y1={118} x2={278} y2={102} stroke="#c9a86b" strokeWidth={5} strokeLinecap="round" />
      <circle cx={301} cy={118} r={5.5} fill="#f5cba7" />
    </svg>
  )
}

/** 近所に顔見知りが増える：あいさつを交わすご近所さん */
function NeighborsIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width={400} height={267} fill="#faf6ec" />
      <circle cx={350} cy={42} r={17} fill="#e9b949" opacity={0.85} />
      <ellipse cx={85} cy={45} rx={22} ry={13} fill="#f1e9d7" />
      <ellipse cx={112} cy={50} rx={16} ry={10} fill="#f1e9d7" />
      <rect y={180} width={400} height={87} fill="#efe6d0" />
      {/* 左の家 */}
      <rect x={52} y={120} width={86} height={62} fill="#fdfaf2" />
      <polygon points="38,120 95,76 152,120" fill="#24406b" />
      <rect x={66} y={132} width={20} height={18} rx={3} fill="#fceee9" stroke="#c9bda3" strokeWidth={2} />
      <rect x={104} y={142} width={20} height={40} rx={3} fill="#c9a86b" />
      {/* 右の家 */}
      <rect x={262} y={120} width={86} height={62} fill="#fdfaf2" />
      <polygon points="248,120 305,76 362,120" fill="#d8442e" />
      <rect x={312} y={132} width={20} height={18} rx={3} fill="#fceee9" stroke="#c9bda3" strokeWidth={2} />
      <rect x={276} y={142} width={20} height={40} rx={3} fill="#c9a86b" />
      {/* ハート */}
      <path
        d="M200 156 c-3 -7 -14 -5 -14 3 c0 6 8 9 14 14 c6 -5 14 -8 14 -14 c0 -8 -11 -10 -14 -3 z"
        fill="#d8442e"
        opacity={0.9}
      />
      <ellipse cx={163} cy={230} rx={30} ry={6} fill="#e0d6ba" />
      <ellipse cx={237} cy={230} rx={30} ry={6} fill="#e0d6ba" />
      {/* 左の人 */}
      <circle cx={163} cy={168} r={17} fill="#f5cba7" />
      <path d="M146 168 a17 17 0 0 1 34 0 z" fill="#4a3b32" />
      <circle cx={157} cy={171} r={2} fill="#37332d" />
      <circle cx={169} cy={171} r={2} fill="#37332d" />
      <path d="M158 177 q5 4 10 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={151} cy={175} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={175} cy={175} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M148 186 q15 -7 30 0 l4 40 q-19 6 -38 0 z" fill="#d8442e" />
      <path d="M149 194 q-12 -10 -14 -26" stroke="#d8442e" strokeWidth={8} fill="none" strokeLinecap="round" />
      <circle cx={134} cy={166} r={5} fill="#f5cba7" />
      <path d="M124 158 q-3 -6 -1 -12 M118 168 q-5 -4 -6 -10" stroke="#e9b949" strokeWidth={3} fill="none" strokeLinecap="round" />
      {/* 右の人 */}
      <circle cx={237} cy={170} r={17} fill="#f5cba7" />
      <path d="M220 170 a17 17 0 0 1 34 0 z" fill="#4a3b32" />
      <rect x={219} y={170} width={6} height={13} rx={3} fill="#4a3b32" />
      <rect x={249} y={170} width={6} height={13} rx={3} fill="#4a3b32" />
      <circle cx={231} cy={173} r={2} fill="#37332d" />
      <circle cx={243} cy={173} r={2} fill="#37332d" />
      <path d="M232 179 q5 4 10 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={225} cy={177} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={249} cy={177} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M222 188 q15 -7 30 0 l4 38 q-19 6 -38 0 z" fill="#24406b" />
      <path d="M266 196 q12 -10 14 -26" stroke="#24406b" strokeWidth={8} fill="none" strokeLinecap="round" />
      <circle cx={281} cy={167} r={5} fill="#f5cba7" />
      <path d="M290 158 q3 -6 1 -12 M297 168 q5 -4 6 -10" stroke="#e9b949" strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** 普段話さない人ともつながれる：世代を超えたおしゃべり */
function TalkIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width={400} height={267} fill="#faf6ec" />
      <circle cx={200} cy={150} r={112} fill="#f1e9d7" />
      <ellipse cx={200} cy={236} rx={100} ry={9} fill="#e3d9c0" />
      {/* 吹き出し */}
      <rect x={112} y={46} width={80} height={46} rx={16} fill="#d8442e" />
      <path d="M140 92 l-6 14 l16 -12 z" fill="#d8442e" />
      <circle cx={134} cy={69} r={4.5} fill="#faf6ec" />
      <circle cx={152} cy={69} r={4.5} fill="#faf6ec" />
      <circle cx={170} cy={69} r={4.5} fill="#faf6ec" />
      <rect x={208} y={36} width={80} height={46} rx={16} fill="#24406b" />
      <path d="M262 82 l8 13 l-18 -11 z" fill="#24406b" />
      <path
        d="M248 66 c-3 -6 -12 -4 -12 3 c0 5 7 8 12 12 c5 -4 12 -7 12 -12 c0 -7 -9 -9 -12 -3 z"
        fill="#faf6ec"
      />
      {/* 年配の方 */}
      <circle cx={140} cy={126} r={7} fill="#b9b3a8" />
      <circle cx={140} cy={152} r={21} fill="#f5cba7" />
      <path d="M119 152 a21 21 0 0 1 42 0 z" fill="#b9b3a8" />
      <circle cx={132} cy={155} r={6} stroke="#37332d" strokeWidth={2} fill="none" />
      <circle cx={148} cy={155} r={6} stroke="#37332d" strokeWidth={2} fill="none" />
      <path d="M138 155 h4" stroke="#37332d" strokeWidth={2} />
      <path d="M134 164 q6 4 12 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={124} cy={161} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={156} cy={161} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M122 176 q18 -8 36 0 l6 52 q-25 7 -48 0 z" fill="#4f6486" />
      <path d="M132 175 l8 22 l8 -22" stroke="#faf6ec" strokeWidth={3.5} fill="none" strokeLinejoin="round" />
      {/* 若い世代 */}
      <circle cx={258} cy={150} r={19} fill="#f5cba7" />
      <path d="M239 150 a19 19 0 0 1 38 0 z" fill="#4a3b32" />
      <rect x={238} y={150} width={6} height={14} rx={3} fill="#4a3b32" />
      <rect x={272} y={150} width={6} height={14} rx={3} fill="#4a3b32" />
      <circle cx={252} cy={154} r={2.2} fill="#37332d" />
      <circle cx={264} cy={154} r={2.2} fill="#37332d" />
      <path d="M253 161 q5 4 10 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={246} cy={158} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={270} cy={158} r={3} fill="#f2a19a" opacity={0.55} />
      <path d="M242 172 q16 -7 32 0 l5 54 q-22 7 -44 0 z" fill="#d8442e" />
      <path d="M251 171 l7 20 l7 -20" stroke="#faf6ec" strokeWidth={3.5} fill="none" strokeLinejoin="round" />
    </svg>
  )
}

/** 自分たちの地域を少し好きになる：まちなみとハート */
function TownIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width={400} height={267} fill="#fdf7ea" />
      <ellipse cx={80} cy={225} rx={150} ry={55} fill="#ece1c4" />
      <ellipse cx={330} cy={230} rx={160} ry={60} fill="#e6dabb" />
      <ellipse cx={60} cy={58} rx={22} ry={12} fill="#f1e9d7" />
      {/* ハート */}
      <path
        d="M200 96 c-9 -19 -37 -13 -37 6 c0 15 20 24 37 37 c17 -13 37 -22 37 -37 c0 -19 -28 -25 -37 -6 z"
        fill="#d8442e"
      />
      <path
        d="M145 56 c-3 -7 -14 -5 -14 3 c0 5 7 8 14 13 c7 -5 14 -8 14 -13 c0 -8 -11 -10 -14 -3 z"
        fill="#e9b949"
      />
      <path
        d="M262 70 c-2 -5 -10 -4 -10 2 c0 4 5 6 10 10 c5 -4 10 -6 10 -10 c0 -6 -8 -7 -10 -2 z"
        fill="#24406b"
      />
      <rect y={210} width={400} height={57} fill="#efe6d0" />
      {/* 家並み */}
      <rect x={48} y={160} width={64} height={50} fill="#fdfaf2" />
      <polygon points="40,160 80,132 120,160" fill="#24406b" />
      <rect x={68} y={176} width={16} height={14} rx={2} fill="#e9b949" opacity={0.8} />
      <rect x={128} y={170} width={58} height={40} fill="#fceee9" />
      <polygon points="122,170 157,146 192,170" fill="#b23520" />
      <rect x={146} y={182} width={14} height={12} rx={2} fill="#e9b949" opacity={0.8} />
      <rect x={214} y={170} width={58} height={40} fill="#fdfaf2" />
      <polygon points="208,170 243,146 278,170" fill="#4f6486" />
      <rect x={232} y={182} width={14} height={12} rx={2} fill="#e9b949" opacity={0.8} />
      <rect x={292} y={160} width={64} height={50} fill="#f1e9d7" />
      <polygon points="284,160 324,132 364,160" fill="#d8442e" />
      <rect x={312} y={176} width={16} height={14} rx={2} fill="#e9b949" opacity={0.8} />
      {/* 木 */}
      <rect x={27} y={192} width={6} height={18} fill="#8a6f52" />
      <circle cx={30} cy={186} r={16} fill="#9aae8d" />
      <rect x={203} y={196} width={5} height={14} fill="#8a6f52" />
      <circle cx={205} cy={190} r={13} fill="#9aae8d" />
      {/* 鳥居 */}
      <rect x={366} y={182} width={6} height={28} fill="#d8442e" />
      <rect x={386} y={182} width={6} height={28} fill="#d8442e" />
      <rect x={360} y={176} width={38} height={6} rx={2} fill="#d8442e" />
      <rect x={364} y={188} width={30} height={5} fill="#d8442e" />
    </svg>
  )
}

/** 子どもたちに地域の思い出を残せる：花火を見上げる親子（後ろ姿） */
function NightMemoryIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 267" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="illust-night-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16294a" />
          <stop offset="100%" stopColor="#2c4a78" />
        </linearGradient>
      </defs>
      <rect width={400} height={267} fill="url(#illust-night-sky)" />
      {[
        [40, 40],
        [90, 25],
        [140, 55],
        [250, 30],
        [310, 60],
        [370, 35],
        [60, 90],
        [350, 95],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={1.8} fill="#faf6ec" opacity={0.6} />
      ))}
      <Burst cx={110} cy={72} r={30} color="#e9b949" />
      <Burst cx={300} cy={58} r={26} color="#f2a19a" />
      <Burst cx={215} cy={100} r={18} color="#faf6ec" strokeWidth={2.5} />
      <path d="M-5 130 Q200 165 405 118" stroke="#e9b949" strokeWidth={2.5} fill="none" opacity={0.5} />
      <Lantern x={60} y={165} scale={0.9} glow />
      <Lantern x={155} y={185} scale={0.9} glow />
      <Lantern x={255} y={182} scale={0.9} glow />
      <Lantern x={350} y={158} scale={0.9} glow />
      <rect y={218} width={400} height={49} fill="#101d33" />
      {/* 親（後ろ姿） */}
      <circle cx={168} cy={140} r={7} fill="#4a3b32" />
      <circle cx={168} cy={164} r={20} fill="#4a3b32" />
      <circle cx={149} cy={166} r={4} fill="#f5cba7" />
      <circle cx={187} cy={166} r={4} fill="#f5cba7" />
      <path d="M150 184 q18 -8 36 0 l6 48 q-25 6 -48 0 z" fill="#24406b" />
      {/* 子ども（後ろ姿） */}
      <circle cx={215} cy={180} r={15} fill="#4a3b32" />
      <circle cx={201} cy={182} r={3.5} fill="#f5cba7" />
      <circle cx={229} cy={182} r={3.5} fill="#f5cba7" />
      <path d="M201 195 q14 -6 28 0 l4 36 q-18 5 -36 0 z" fill="#d8442e" />
      <path d="M228 202 q10 -10 12 -22" stroke="#d8442e" strokeWidth={7} fill="none" strokeLinecap="round" />
      <circle cx={240} cy={178} r={4.5} fill="#f5cba7" />
    </svg>
  )
}

/** 思い出カードのイラスト対応表（festivalData.ts の illustration キーと対応） */
export const memoryIllustrations: Record<MemoryIllustrationKey, (props: IllustrationProps) => React.JSX.Element> = {
  parentChild: ParentChildIllustration,
  taiko: TaikoIllustration,
  neighbors: NeighborsIllustration,
  talk: TalkIllustration,
  town: TownIllustration,
  nightMemory: NightMemoryIllustration,
}

/* ---- ファーストビュー背景の夜祭りイラスト ---- */

/** 動画・写真が未設定のときに表示する、提灯と花火と山車の夜祭りイラスト */
export function HeroFestivalIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hero-festival-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131f3a" />
          <stop offset="55%" stopColor="#24406b" />
          <stop offset="100%" stopColor="#4a4468" />
        </linearGradient>
      </defs>
      <rect width={1600} height={900} fill="url(#hero-festival-sky)" />
      {[
        [120, 120],
        [260, 60],
        [380, 160],
        [560, 90],
        [700, 170],
        [900, 70],
        [1010, 150],
        [1240, 90],
        [1330, 170],
        [1480, 60],
        [1550, 150],
        [80, 260],
        [1520, 300],
        [640, 40],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.5} fill="#faf6ec" opacity={0.5} />
      ))}
      {/* 花火 */}
      <Burst cx={430} cy={250} r={95} color="#e9b949" strokeWidth={5} />
      <circle cx={430} cy={250} r={60} stroke="#e9b949" strokeWidth={2} fill="none" opacity={0.35} />
      <Burst cx={1170} cy={190} r={80} color="#e57366" strokeWidth={5} />
      <circle cx={1170} cy={190} r={50} stroke="#e57366" strokeWidth={2} fill="none" opacity={0.35} />
      <Burst cx={820} cy={300} r={55} color="#faf6ec" strokeWidth={4} />
      {/* 提灯の列 */}
      <path d="M-20 180 Q400 320 820 230" stroke="#e9b949" strokeWidth={5} fill="none" opacity={0.5} />
      <path d="M780 230 Q1200 130 1620 260" stroke="#e9b949" strokeWidth={5} fill="none" opacity={0.5} />
      <Lantern x={140} y={290} scale={2} glow />
      <Lantern x={400} y={352} scale={2.2} glow />
      <Lantern x={660} y={330} scale={2} glow />
      <Lantern x={940} y={252} scale={2} glow />
      <Lantern x={1180} y={240} scale={2.2} glow />
      <Lantern x={1420} y={263} scale={2} glow />
      {/* 町の明かり */}
      <ellipse cx={800} cy={790} rx={560} ry={170} fill="#d8442e" opacity={0.12} />
      {/* 町並みのシルエット */}
      <g fill="#0d1830">
        <rect y={770} width={1600} height={130} />
        <rect x={60} y={700} width={140} height={70} />
        <polygon points="50,700 130,650 210,700" />
        <rect x={300} y={720} width={120} height={50} />
        <polygon points="292,720 360,676 428,720" />
        <rect x={1150} y={710} width={130} height={60} />
        <polygon points="1142,710 1215,662 1288,710" />
        <rect x={1400} y={690} width={140} height={80} />
        <polygon points="1392,690 1470,636 1548,690" />
        {/* 山車 */}
        <circle cx={740} cy={765} r={34} />
        <circle cx={860} cy={765} r={34} />
        <rect x={690} y={700} width={220} height={60} />
        <rect x={715} y={640} width={170} height={60} />
        <path d="M680 648 Q800 580 920 648 Z" />
        <rect x={796} y={565} width={8} height={28} />
      </g>
      {/* 山車の明かり */}
      <g fill="#e9b949" opacity={0.85}>
        <rect x={735} y={712} width={24} height={20} rx={3} />
        <rect x={775} y={712} width={24} height={20} rx={3} />
        <rect x={815} y={712} width={24} height={20} rx={3} />
        <rect x={855} y={712} width={24} height={20} rx={3} />
        <rect x={745} y={655} width={20} height={16} rx={3} />
        <rect x={790} y={655} width={20} height={16} rx={3} />
        <rect x={835} y={655} width={20} height={16} rx={3} />
      </g>
      {[720, 760, 800, 840, 880].map((x) => (
        <g key={x}>
          <circle cx={x} cy={660} r={12} fill="#e9b949" opacity={0.25} />
          <circle cx={x} cy={660} r={6} fill="#d8442e" />
        </g>
      ))}
      {/* 人々のシルエット */}
      <g fill="#0a1426">
        {[30, 130, 240, 330, 450, 560, 1050, 1160, 1270, 1380, 1500].map((x, i) => (
          <circle key={x} cx={x} cy={800} r={i % 2 === 0 ? 22 : 17} />
        ))}
        <rect y={795} width={1600} height={105} />
      </g>
    </svg>
  )
}

/* ---- 参加者の声のアバター（4種類） ---- */

function AvatarBase({
  hair,
  body,
  children,
}: {
  hair: React.ReactNode
  body: string
  children?: React.ReactNode
}) {
  return (
    <>
      <circle cx={40} cy={40} r={40} fill="#fceee9" />
      <path d="M12 80 q28 -20 56 0 z" fill={body} />
      <circle cx={40} cy={46} r={18} fill="#f5cba7" />
      {hair}
      <circle cx={34} cy={49} r={2.2} fill="#37332d" />
      <circle cx={46} cy={49} r={2.2} fill="#37332d" />
      <path d="M35 56 q5 4 10 0" stroke="#37332d" strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={28} cy={54} r={3} fill="#f2a19a" opacity={0.55} />
      <circle cx={52} cy={54} r={3} fill="#f2a19a" opacity={0.55} />
      {children}
    </>
  )
}

function AvatarA({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <AvatarBase
        body="#d8442e"
        hair={
          <>
            <path d="M22 46 a18 18 0 0 1 36 0 z" fill="#4a3b32" />
            <rect x={20} y={44} width={6} height={16} rx={3} fill="#4a3b32" />
            <rect x={54} y={44} width={6} height={16} rx={3} fill="#4a3b32" />
          </>
        }
      />
    </svg>
  )
}

function AvatarB({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <AvatarBase body="#24406b" hair={<path d="M22 46 a18 18 0 0 1 36 0 z" fill="#37332d" />} />
    </svg>
  )
}

function AvatarC({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <AvatarBase
        body="#4f6486"
        hair={
          <>
            <circle cx={40} cy={22} r={7} fill="#4a3b32" />
            <path d="M22 46 a18 18 0 0 1 36 0 z" fill="#4a3b32" />
          </>
        }
      />
    </svg>
  )
}

function AvatarD({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <AvatarBase body="#8a6f52" hair={<path d="M22 46 a18 18 0 0 1 36 0 z" fill="#b9b3a8" />}>
        <circle cx={33} cy={50} r={5.5} stroke="#37332d" strokeWidth={1.8} fill="none" />
        <circle cx={47} cy={50} r={5.5} stroke="#37332d" strokeWidth={1.8} fill="none" />
        <path d="M38 50 h4" stroke="#37332d" strokeWidth={1.8} />
      </AvatarBase>
    </svg>
  )
}

/** 参加者の声で順番に使うアバターイラスト */
export const avatarIllustrations = [AvatarA, AvatarB, AvatarC, AvatarD]

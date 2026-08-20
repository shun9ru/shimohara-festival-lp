// =====================================================================
// 下原地区の夏祭り LP 設定ファイル
// ---------------------------------------------------------------------
// このファイルを編集すると、ページ内の文章・画像・動画・URL・開催情報を
// まとめて変更できます。詳しい編集方法は README.md をご覧ください。
//
// ・画像/動画のパスは public フォルダ基準で「/images/...」のように書きます
// ・src を空文字 '' にすると、その場所にはプレースホルダーが表示されます
// ・URL（LINE・申込みフォームなど）を空文字 '' にすると「準備中」と表示されます
// =====================================================================

/** 画像1枚分の設定 */
export interface MediaImage {
  /** 画像ファイルのパス（例: '/images/festival/hero-main.jpg'）。空文字ならプレースホルダー表示 */
  src: string
  /** 画像の説明（alt属性。アクセシビリティ・SEO用） */
  alt: string
  /** 画像が未設定のとき、プレースホルダーに表示するラベル */
  label: string
  /** ギャラリーなどで表示するキャプション */
  caption?: string
}

/** 動画1本分の設定 */
export interface VideoItem {
  /** 動画ファイルのパス（例: '/videos/festival/hero-movie.mp4'）。空文字ならプレースホルダー表示 */
  src: string
  /** 動画読み込み前に表示するポスター画像のパス（任意） */
  poster?: string
  title: string
  /** 動画の説明（任意） */
  description?: string
  /** 動画が未設定のとき、プレースホルダーに表示するラベル */
  label: string
}

/** アイコン名（src/components/icons.ts で実際のアイコンに変換されます） */
export type IconKey =
  | 'backpack'
  | 'calendar'
  | 'camera'
  | 'clock'
  | 'drum'
  | 'eye'
  | 'hand'
  | 'heartHandshake'
  | 'lightbulb'
  | 'mapPin'
  | 'music'
  | 'phone'
  | 'rain'
  | 'route'
  | 'share'
  | 'shirt'
  | 'smile'
  | 'store'
  | 'users'
  | 'wallet'

export interface FeatureCard {
  icon: IconKey
  title: string
  description: string
}

/**
 * タイムラインの各時間帯に表示する「写真または動画」1つ分の設定。
 * ・写真: { src: '/images/...jpg', alt: '説明', label: '配置ラベル' }
 * ・動画: { type: 'video', src: '/videos/...mp4', title: '動画のタイトル', label: '配置ラベル', poster?: '/images/...jpg' }
 */
export type TimelineMedia =
  | (MediaImage & { type?: 'image' })
  | (VideoItem & { type: 'video' })

export interface ScheduleStep {
  /** タイムラインに表示する時間帯ラベル（例: '朝'） */
  time: string
  title: string
  description: string
  /**
   * この時間帯に表示する写真・動画。複数並べると、横スクロール（スワイプ）で
   * 写真も動画も一緒に見られるようになります。1つだけの場合は通常表示です。
   * 例: media: [
   *       { src: '/images/festival/schedule-morning.jpg', alt: '...', label: '...' },
   *       { type: 'video', src: '/videos/festival/preparation.mp4', title: '...', label: '...' },
   *     ]
   */
  media: TimelineMedia[]
}

export interface RoleCard {
  icon: IconKey
  title: string
  subtitle: string
  items: string[]
}

/** 思い出カードのイラスト名（src/components/illustrations.tsx で定義） */
export type MemoryIllustrationKey =
  | 'parentChild' // 手をつなぐ親子と提灯
  | 'taiko' // 太鼓を叩く子ども
  | 'neighbors' // あいさつを交わすご近所さん
  | 'talk' // 世代を超えたおしゃべり
  | 'town' // まちなみとハート
  | 'nightMemory' // 花火を見上げる親子

export interface MemoryCard {
  title: string
  description: string
  /** カードに表示するイラスト */
  illustration: MemoryIllustrationKey
  /** image.src に写真のパスを設定すると、イラストの代わりに写真が表示されます */
  image?: MediaImage
}

export interface Testimonial {
  comment: string
  /** 属性タグ（例: '小学生の保護者' '初参加'） */
  tags: string[]
}

export interface FutureAction {
  icon: IconKey
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ParticipationStep {
  title: string
  description: string
}

export interface InfoItem {
  icon: IconKey
  label: string
  value: string
}

export const festivalData = {
  // ===== 基本情報 =====
  festivalName: '下原地区の夏祭り',
  catchphrase: '子どもも、大人も、\nみんなが主役。',
  subCopy:
    '見るだけじゃない。一緒につくるから、思い出になる。\n地域みんなでつくる、下原地区の夏祭り。',
  heroBadge: '下原地区のみんなでつくる夏祭り',

  // ===== 次回の夏祭りの開催予定 =====
  // このLPは「どんな夏祭りか」を紹介することが主目的です。
  // 次回の開催が決まっている場合はここに設定すると、
  // ファーストビューと「次回の開催情報」セクションに表示されます。
  nextEvent: {
    /**
     * 開催予定が決まっていれば true。
     * false にすると日付は表示されず、tbaMessage の文言が表示されます。
     */
    scheduled: true,
    /** 次回参加する夏祭り・イベントの名称（ファーストビューに表示されます） */
    name: '神立逆西まつり',
    date: '2026年10月3日（土）',
    time: '11:00〜19:00',
    place: '神立駅前',
    /** scheduled が false のときに表示するお知らせ文 */
    tbaMessage: '次回の開催日程は、決まり次第このページでお知らせします。',
    /**
     * 次回開催のポスター画像。
     * public/images/festival/ に画像ファイルを置き、下記 src にパスを設定してください。
     * 未設定の間はプレースホルダーが表示されます。
     */
    poster: {
      src: '/images/festival/next-event-poster.jpg',
      alt: '神立逆西まつり 2026年10月3日（土）11時〜19時 神立駅前 開催のポスター',
      label: '次回開催（神立逆西まつり）のポスターを配置',
    } satisfies MediaImage,
  },

  // ===== セクションの表示・非表示 =====
  // false にすると、そのセクションはページに表示されなくなります。
  sections: {
    about: true, // この夏祭りについて
    timeline: true, // 夏祭りの一日（写真・動画つき）
    roles: true, // 子どもも大人も、みんなが主役
    memories: true, // 参加すると、こんな思い出ができます
    gallery: true, // フォトギャラリー
    testimonials: true, // 参加者の声
    future: true, // 夏祭りを未来へつなぐために
    faq: true, // 初めて参加する方へ（FAQ）
    participation: true, // 参加方法
    information: true, // 開催情報
    finalCta: true, // 最終CTA
  },

  // ===== メインの動画・画像 =====
  media: {
    /** ファーストビューの背景動画。空文字ならメイン画像→プレースホルダーの順に表示 */
    heroVideo: '/videos/festival/hero-movie.mp4',
    heroVideoLabel: 'メイン動画を配置',
    /** ファーストビューの背景画像（動画がない場合や動画読み込み前に表示） */
    heroImage: {
      src: '/images/festival/hero-main.jpg',
      alt: '下原地区の夏祭りで山車を囲む子どもたちと大人たち',
      label: 'メイン画像を配置',
    } satisfies MediaImage,
  },

  // ===== この夏祭りについて =====
  about: {
    title: 'この夏祭りについて',
    description:
      '下原地区の夏祭りでは、地域の山車が地区内を巡ります。\n子どもたちは山車に乗って笛や太鼓を演奏し、大人たちは準備や運行、安全確認などを支えます。\n子どもから大人まで、地域のみんなで協力してつくる夏祭りです。',
    /**
     * 冒頭に表示するダイジェスト動画。
     * public/videos/festival/ に動画を置き、src にパスを設定すると動画が表示されます。
     * src が空文字 '' のときや動画ファイルが無いときは、下の image（写真）が表示されます。
     */
    video: {
      src: '/videos/festival/festival-digest.mp4',
      title: '下原地区の夏祭り ダイジェスト',
      label: 'ダイジェスト動画を配置',
    } satisfies VideoItem,
    /** 動画が無いときに冒頭に表示する写真（動画のポスターにも使われます） */
    image: {
      src: '/images/festival/about-festival.jpg',
      alt: '地区内を巡る山車と、山車を囲む地域の人たち',
      label: '山車の写真を配置',
    } satisfies MediaImage,
    features: [
      {
        icon: 'route',
        title: '山車が地区内を巡回',
        description:
          '地域の山車が、下原地区の中をゆっくりと巡ります。沿道からの見学も大歓迎です。',
      },
      {
        icon: 'music',
        title: '子どもたちが笛や太鼓を演奏',
        description:
          '山車に乗った子どもたちが、練習してきた笛や太鼓の音色を地域に響かせます。',
      },
      {
        icon: 'heartHandshake',
        title: '地域のみんなで準備・運営',
        description:
          '飾り付けから運行、安全確認まで。地域の大人たちみんなで夏祭りを支えています。',
      },
    ] satisfies FeatureCard[],
  },

  // ===== 夏祭りの一日（タイムライン） =====
  timeline: {
    title: '夏祭りの一日',
    description: '初めての方も安心してご参加いただけるよう、当日の流れをご紹介します。',
    steps: [
      {
        time: '朝',
        title: 'みんなで準備',
        description:
          '山車の飾り付けや、笛・太鼓、道具の確認を行います。\n初めての方も、周りの人と一緒に準備できます。',
        // 写真や動画を追加したいときは、この配列に並べてください。
        // 複数並べると、横スクロール（スワイプ）で見られるようになります。
        // 動画は { type: 'video', src, title, label } の形で追加します。
        media: [
          {
            type: 'video',
            src: '/videos/festival/preparation.mp4',
            title: 'みんなで準備',
            label: '当日の準備風景の動画を配置',
          },
          {
            src: '/images/festival/schedule-morning.jpg',
            alt: '朝、山車の飾り付けをする地域の人たち',
            label: '当日の準備風景を配置',
          },
        ],
      },
      {
        time: '祈願',
        title: '安全祈願',
        description:
          '出発の前に、夏祭りの無事と地域の安全を願って、みんなで祈願を行います。\n一年の感謝を込めて、静かに手を合わせるひとときです。',
        media: [
          {
            type: 'video',
            src: '/videos/festival/prayer.mp4',
            title: '安全祈願',
            label: '安全祈願の動画を配置',
          },
          {
            src: '/images/festival/schedule-prayer.jpg',
            alt: '出発前に安全祈願をする参加者たち',
            label: '安全祈願の写真を配置',
          },
        ],
      },
      {
        time: '出発',
        title: '山車の巡回スタート',
        description:
          '子どもたちが笛や太鼓を演奏し、地域のみんなで山車と一緒に歩きます。',
        media: [
          {
            type: 'video',
            src: '/videos/festival/children-performance-1.mp4',
            title: '子どもたちの演奏',
            label: '子どもたちの演奏動画を配置',
          },
          {
            type: 'video',
            src: '/videos/festival/children-performance-2.mp4',
            title: '子どもたちの演奏',
            label: '子どもたちの演奏動画を配置',
          },
          {
            src: '/images/festival/schedule-start.jpg',
            alt: '笛や太鼓を演奏しながら出発する山車と子どもたち',
            label: '子どもたちの演奏写真を配置',
          },
        ],
      },
      {
        time: '巡回中',
        title: '地域のみんなと交流',
        description:
          '途中で休憩を取りながら、地域の人たちとの交流を楽しみます。',
        media: [
          {
            type: 'video',
            src: '/videos/festival/parade-1.mp4',
            title: '山車の巡回',
            label: '山車の巡回動画を配置',
          },
          {
            type: 'video',
            src: '/videos/festival/parade-2.mp4',
            title: '山車の巡回',
            label: '山車の巡回動画を配置',
          },
          {
            src: '/images/festival/schedule-parade.jpg',
            alt: '休憩しながら地域の人たちと交流する参加者',
            label: '山車の巡回写真を配置',
          },
        ],
      },
      {
        time: '共演',
        title: '逆西地区との共演',
        description:
          '逆西地区の山車と合流し、たくさんの地域の人たちが集まります。\n何台もの山車が並び、笛や太鼓の音が重なり合う、一日でいちばん賑やかなひとときです。',
        media: [
          {
            type: 'video',
            src: '/videos/festival/joint-performance.mp4',
            title: '逆西地区との共演',
            label: '逆西地区との共演の動画を配置',
          },
        ],
      },
      {
        time: '終了',
        title: 'みんなで片付け',
        description:
          '最後はみんなで協力して片付けます。\n一日を終えたあとの達成感も、夏祭りの大切な思い出です。',
        media: [
          {
            type: 'video',
            src: '/videos/festival/after-smiles.mp4',
            title: '夏祭りを終えたあとの笑顔',
            label: '夏祭り後の笑顔の動画を配置',
          },
          {
            src: '/images/festival/schedule-finish.jpg',
            alt: '夏祭りを終えて笑顔で集まる参加者たち',
            label: '参加者の集合写真を配置',
          },
        ],
      },
    ] satisfies ScheduleStep[],
  },

  // ===== 子どもも大人も、みんなが主役 =====
  roles: {
    title: '子どもも大人も、みんなが主役',
    description:
      '夏祭りは一部の役員や経験者だけのものではありません。\nそれぞれができることを持ち寄って、みんなでつくっています。',
    cards: [
      {
        icon: 'smile',
        title: '子どもたち',
        subtitle: '夏祭りの主役として楽しむ',
        items: [
          '山車に乗る',
          '笛や太鼓を演奏する',
          '山車と一緒に歩く',
          '地域の人たちと交流する',
          '夏祭りを思い切り楽しむ',
        ],
      },
      {
        icon: 'users',
        title: '大人たち',
        subtitle: 'できる範囲で夏祭りを支える',
        items: [
          '山車の準備や運行',
          '子どもたちの見守り',
          '安全確認',
          '休憩や飲み物の準備',
          '写真や動画の撮影',
          'できる時間だけのお手伝い',
        ],
      },
    ] satisfies RoleCard[],
    /** 強調メッセージ */
    message: {
      main: 'できる人が、できることを、できる範囲で。\n特別な経験がなくても大丈夫です。',
      sub: '一日中の参加が難しい方も、短時間のお手伝いから参加できます。',
    },
  },

  // ===== 参加すると、こんな思い出ができます =====
  memories: {
    title: '参加すると、こんな思い出ができます',
    description:
      '夏祭りで過ごす一日は、活動そのものよりも、\nあとから思い返す「思い出」として残っていきます。',
    // 初期状態ではイラストが表示されます。
    // 写真に差し替えたい場合は image.src にパスを設定してください。
    // 例: image: { src: '/images/festival/memory-01.jpg', alt: '夏祭りを楽しむ親子', label: '親子の写真を配置' },
    cards: [
      {
        title: '親子で共通の思い出ができる',
        description: '同じ一日を一緒に過ごすことで、家族の共通の話題と思い出が生まれます。',
        illustration: 'parentChild',
      },
      {
        title: '子どもの成長を近くで感じられる',
        description: '練習や本番をやりきる姿に、普段は見られない成長を感じられます。',
        illustration: 'taiko',
      },
      {
        title: '近所に顔見知りが増える',
        description: 'あいさつできるご近所さんが増えると、毎日の暮らしが少し心強くなります。',
        illustration: 'neighbors',
      },
      {
        title: '普段話さない人ともつながれる',
        description: '世代を超えて、地域の人と自然に話せるきっかけになります。',
        illustration: 'talk',
      },
      {
        title: '自分たちの地域を少し好きになる',
        description: '一緒に夏祭りをつくった経験が、地域への愛着につながります。',
        illustration: 'town',
      },
      {
        title: '子どもたちに地域の思い出を残せる',
        description: 'ふるさとの記憶として、子どもたちの心にずっと残ります。',
        illustration: 'nightMemory',
      },
    ] satisfies MemoryCard[] as MemoryCard[],
    /** セクション中央に表示する文章 */
    quote:
      '太鼓を叩いたこと。\nみんなで山車と一緒に歩いたこと。\n地域の人たちに声をかけてもらったこと。\nその一日が、子どもたちの大切な思い出になります。',
  },

  // ===== フォトギャラリー =====
  gallery: {
    title: 'フォトギャラリー',
    /** 写真が1枚以上あるときに見出しの下に表示する文 */
    description: '過去の夏祭りの様子をご紹介します。写真をタップすると拡大表示できます。',
    /** 写真がまだ1枚も無いときに、上の description の代わりに表示する文 */
    preparingDescription: '過去の夏祭りの写真を準備しています。公開まで少しお待ちください。',
    /** 写真がまだ1枚も無いときに、ギャラリー枠に表示する見出し */
    preparingLabel: '写真は準備中です',
    /** 上の preparingLabel の下に小さく表示する補足文 */
    preparingNote: '写真が揃いましたら、こちらで順次公開していきます。',
    /**
     * ここに写真を追加するだけでギャラリーが表示されます。
     * 空の配列 [] のままなら「準備中」の案内が表示されます。
     *
     * 【写真を追加する手順】
     * 1. 写真を public/images/festival/ に置く（例: gallery-01.jpg）
     * 2. 下のコメントを参考に、この配列に項目を追加する
     *
     * 【書き方の例】
     *   {
     *     src: '/images/festival/gallery-01.jpg', // 置いた写真のパス
     *     alt: '地区内を巡回する山車',            // 画像の説明（読み上げ・SEO用）
     *     label: '山車の写真を配置',              // 読み込めなかったときの表示ラベル
     *     caption: '地区内を巡回する山車',        // 拡大表示したときのキャプション
     *   },
     */
    images: [] as MediaImage[],
  },

  // ===== 参加者の声 =====
  testimonials: {
    title: '参加者の声',
    description: '実際に参加した地域の皆さんの声をご紹介します。',
    items: [
      {
        comment: '最初は見るだけのつもりでしたが、親子で楽しめました。',
        tags: ['小学生の保護者', '初参加'],
      },
      {
        comment: '子どもが太鼓を叩く姿を見られてうれしかったです。',
        tags: ['小学生の保護者', '地域在住5年'],
      },
      {
        comment: '初参加でも、皆さんが優しく教えてくれました。',
        tags: ['幼児の保護者', '初参加'],
      },
      {
        comment: '近所に知り合いが増え、地域を身近に感じるようになりました。',
        tags: ['中学生の保護者', '転入2年目'],
      },
    ] satisfies Testimonial[],
  },

  // ===== 夏祭りを未来へつなぐために =====
  future: {
    title: 'この夏祭りを、これからも続けていくために。',
    body:
      '下原地区の夏祭りは、子どもたちの笑顔と、地域の皆さんの協力によって受け継がれてきました。\n\n一方で、近年は参加者や運営を支える人が少なくなり、今までと同じ形で続けることが少しずつ難しくなっています。\n\nだからこそ今、子どもたちの思い出と地域のつながりを、みんなで未来へつないでいきたいと考えています。',
    actionsLead: 'たとえば、こんな関わり方があります。',
    actions: [
      { icon: 'eye', label: 'まずは夏祭りを見に来る' },
      { icon: 'users', label: '親子で参加してみる' },
      { icon: 'hand', label: '当日少しだけ手伝う' },
      { icon: 'camera', label: '写真や動画を撮影する' },
      { icon: 'share', label: '情報を家族や近所の人に伝える' },
      { icon: 'lightbulb', label: '次回の企画を一緒に考える' },
    ] satisfies FutureAction[],
    closing: 'その一つひとつが、夏祭りを未来へつなぐ力になります。',
  },

  // ===== FAQ =====
  faq: {
    title: '初めて参加する方へ',
    description: 'よくいただく質問をまとめました。このほかの疑問も、お気軽にお問い合わせください。',
    items: [
      {
        question: '初めてでも参加できますか？',
        answer:
          'はい、大歓迎です。毎年、初参加の方がたくさんいらっしゃいます。当日は運営スタッフや経験者がそばにいますので、分からないことはいつでも聞いてください。',
      },
      {
        question: '子どもは何歳から参加できますか？',
        answer:
          '明確な年齢制限はありません。小さなお子さんは保護者の方と一緒に、無理のない範囲でご参加ください。心配な点があれば事前にご相談いただけます。',
      },
      {
        question: '笛や太鼓の経験がなくても大丈夫ですか？',
        answer:
          '大丈夫です。ほとんどの子どもたちが未経験からのスタートです。夏祭りの前に練習の機会もあり、経験者がやさしく教えます。',
      },
      {
        question: '保護者も一緒に参加しますか？',
        answer:
          'お子さんの見守りを兼ねて、一緒に歩いてくださる保護者の方が多いです。もちろん、付き添いや見学だけでも構いません。',
      },
      {
        question: '途中からの参加でも大丈夫ですか？',
        answer:
          'はい。ご都合に合わせて、途中参加・途中退出していただけます。事前にひとことご連絡いただけるとスムーズです。',
      },
      {
        question: '短時間のお手伝いでも大丈夫ですか？',
        answer:
          'もちろんです。「1時間だけ」「準備だけ」「片付けだけ」といった参加も大歓迎です。できる範囲でのご協力が大きな力になります。',
      },
      {
        question: 'どのような服装で参加すればよいですか？',
        answer:
          '動きやすく、歩きやすい服装・靴でお越しください。季節に合わせて、帽子・飲み物・タオルなどの暑さ寒さ対策もお願いします。',
      },
      {
        question: '雨天時はどうなりますか？',
        answer:
          '小雨の場合は、内容を変更して実施することがあります。中止・変更の際は、お申込み時にご記入いただいた連絡先などへ事前にお知らせします。',
      },
      {
        question: 'ケガや事故が発生した場合はどうなりますか？',
        answer:
          '万が一、祭り参加中にケガや事故が発生した場合、下原地区自治会の会員は自治会加入の保険が適用されます。\n自治会に加入されていない方は、自治会の保険の適用対象外となりますので、あらかじめご了承ください。\n安全に十分配慮して運営いたしますが、ご参加の際は保険の適用範囲をご確認のうえ、ご参加くださいますようお願いいたします。',
      },
      {
        question: '見学だけでも大丈夫ですか？',
        answer:
          'はい、見学だけでも大歓迎です。沿道から気軽にご覧ください。雰囲気を見てから、次回の参加を考えていただくのもうれしいです。',
      },
      {
        question: '地区外の家族や友人も見に行けますか？',
        answer:
          'はい、どなたでもご覧いただけます。おじいちゃん・おばあちゃんやお友達も、ぜひお誘いあわせのうえお越しください。',
      },
    ] satisfies FaqItem[],
  },

  // ===== 参加方法 =====
  participation: {
    title: '参加方法',
    description:
      '次回の夏祭りに参加してみたい方は、Googleフォームからお申込みください。\nスマートフォンから1〜2分で完了します。',
    steps: [
      {
        title: '参加申込みフォームを開く',
        description:
          '下の「参加申込みフォームを開く」ボタンから、Googleフォームを開きます。',
      },
      {
        title: '必要事項を入力して送信',
        description:
          'お名前や参加したい内容など、いくつかの質問に答えて送信してください。',
      },
      {
        title: '申込み完了',
        description:
          'お申込みはこれで完了です。当日の詳しい案内は、ご記入いただいた連絡先へお知らせします。',
      },
    ] satisfies ParticipationStep[],
    /** LINEオープンチャットでの問い合わせ案内 */
    lineContact: {
      title: 'お気軽にお問い合わせください',
      description:
        'わからないことや気になることは、LINEのオープンチャットでお気軽にご質問ください。\n「参加してみたいけれど迷っている」という段階のご相談も歓迎です。地域の担当者がお答えします。',
      /** オープンチャットの名前 */
      chatName: '下原区お祭りオープンチャット',
      /** ボタンの文字 */
      buttonLabel: 'オープンチャットで質問する',
    },
  },

  // ===== 開催情報 =====
  information: {
    title: '次回の開催情報',
    description:
      '次回は、神立駅前で開催される「神立逆西まつり」に出演します。\n地域みんなでつくるお祭りです。内容は変更になる場合があります。',
    items: [
      { icon: 'drum', label: 'イベント名', value: '神立逆西まつり' },
      { icon: 'calendar', label: '開催日', value: '2026年10月3日（土）〔令和8年〕' },
      { icon: 'clock', label: '開催時間', value: '11:00〜19:00' },
      { icon: 'mapPin', label: '開催地', value: '神立駅前' },
      { icon: 'store', label: '出店', value: 'キッチンカー他 50店舗以上が出店' },
      { icon: 'heartHandshake', label: '主催', value: '神立逆西共演実行委員会' },
      {
        icon: 'users',
        label: '後援',
        value: 'かすみがうら市観光協会／神立商工振興会',
      },
      { icon: 'share', label: '最新情報', value: '公式Instagramをご確認ください' },
    ] satisfies InfoItem[],
  },

  // ===== 最終CTA =====
  finalCta: {
    title: '今年は、見る側から、一緒につくる側へ。',
    body:
      'この夏祭りは、一部の人だけでつくるものではありません。\n子どもたちの笑顔も、大人たちの支えも、地域の皆さんの応援も、すべてが夏祭りの一部です。\n\n下原地区の夏祭りで、新しい思い出をつくりませんか。',
  },

  // ===== 各種URL =====
  // 空文字 '' のままにすると、ボタンに「準備中」と表示されます。
  links: {
    /** LINEオープンチャットの招待URL */
    lineOpenChat:
      'https://line.me/ti/g2/mWu0dLz4hcc8mCxe47ngqMb-LK1dU8UVy02TTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
    /** 参加申込みフォームのURL（Googleフォームなど） */
    applicationForm: 'https://forms.gle/BgMdXwSjWX3xbrCf9',
    /** Googleマップ「埋め込み用」URL（README参照） */
    googleMapEmbed: '',
    /** Googleマップの共有リンク（「Googleマップで開く」ボタン用） */
    googleMapLink: '',
    /** プライバシーポリシーのURL */
    privacyPolicy: '',
    /** 写真・動画掲載についての案内ページURL */
    mediaPolicy: '',
    /** SNSのURL */
    sns: {
      instagram: '',
      x: '',
      facebook: '',
    },
  },

  // ===== 問い合わせ先 =====
  // 問い合わせ窓口は LINEオープンチャット（links.lineOpenChat）に一本化しています。
  contact: {
    organization: '下原地区夏祭り運営委員会',
  },

  copyright: '© 2026 下原地区夏祭り運営委員会',
}

export type FestivalData = typeof festivalData

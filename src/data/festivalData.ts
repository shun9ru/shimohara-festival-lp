// =====================================================================
// 下原地区の祭り LP 設定ファイル
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
  description: string
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
  | 'users'
  | 'wallet'

export interface FeatureCard {
  icon: IconKey
  title: string
  description: string
}

export interface ScheduleStep {
  /** タイムラインに表示する時間帯ラベル（例: '朝'） */
  time: string
  title: string
  description: string
  image: MediaImage
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
  festivalName: '下原地区の祭り',
  catchphrase: '子どもも、大人も、\nみんなが主役。',
  subCopy:
    '見るだけじゃない。一緒につくるから、思い出になる。\n地域みんなでつくる、下原地区の祭り。',
  heroBadge: '下原地区のみんなでつくる祭り',

  /** 開催概要（ファーストビューに表示。※初期値は仮の内容です） */
  event: {
    date: '2026年10月18日（日）',
    time: '9:00〜15:00',
    place: '下原公民館前 広場',
  },

  // ===== セクションの表示・非表示 =====
  // false にすると、そのセクションはページに表示されなくなります。
  sections: {
    about: true, // この祭りについて
    video: true, // 動画で見る祭り
    timeline: true, // 祭りの一日
    roles: true, // 子どもも大人も、みんなが主役
    memories: true, // 参加すると、こんな思い出ができます
    gallery: true, // フォトギャラリー
    testimonials: true, // 参加者の声
    future: true, // 祭りを未来へつなぐために
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
      alt: '下原地区の祭りで山車を囲む子どもたちと大人たち',
      label: 'メイン画像を配置',
    } satisfies MediaImage,
  },

  // ===== この祭りについて =====
  about: {
    title: 'この祭りについて',
    description:
      '下原地区の祭りでは、地域の山車が地区内を巡ります。\n子どもたちは山車に乗って笛や太鼓を演奏し、大人たちは準備や運行、安全確認などを支えます。\n子どもから大人まで、地域のみんなで協力してつくる祭りです。',
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
          '飾り付けから運行、安全確認まで。地域の大人たちみんなで祭りを支えています。',
      },
    ] satisfies FeatureCard[],
  },

  // ===== 動画で見る祭り =====
  videoSection: {
    title: 'まずは、祭りの雰囲気を動画でご覧ください',
    description:
      '朝の準備から山車の巡回、子どもたちの演奏、祭りを終えたあとの笑顔まで。\n下原地区の祭りの一日を、動画で感じてください。',
    /** メインのダイジェスト動画 */
    digest: {
      src: '/videos/festival/festival-digest.mp4',
      poster: '',
      title: '下原地区の祭り ダイジェスト',
      description: '祭りの一日をぎゅっとまとめたダイジェスト動画です。',
      label: '過去の祭り動画を配置',
    } satisfies VideoItem,
    /** ダイジェストの下に並べる短い動画 */
    clips: [
      {
        src: '/videos/festival/preparation.mp4',
        title: 'みんなで準備',
        description: '朝から集まって、山車の飾り付けや道具の準備をします。',
        label: '当日の準備風景を配置',
      },
      {
        src: '/videos/festival/children-performance.mp4',
        title: '子どもたちの演奏',
        description: '練習の成果を披露する、笛と太鼓の演奏です。',
        label: '子どもたちの演奏動画を配置',
      },
      {
        src: '/videos/festival/parade.mp4',
        title: '山車の巡回',
        description: '地域のみんなで、山車と一緒に地区内を歩きます。',
        label: '山車の巡回動画を配置',
      },
      {
        src: '/videos/festival/after-smiles.mp4',
        title: '祭りを終えたあとの笑顔',
        description: 'やりきった子どもたちと大人たちの、いい表情が並びます。',
        label: '祭り後の笑顔の動画を配置',
      },
    ] satisfies VideoItem[],
  },

  // ===== 祭りの一日（タイムライン） =====
  timeline: {
    title: '祭りの一日',
    description: '初めての方も安心してご参加いただけるよう、当日の流れをご紹介します。',
    steps: [
      {
        time: '朝',
        title: 'みんなで準備',
        description:
          '山車の飾り付けや、笛・太鼓、道具の確認を行います。\n初めての方も、周りの人と一緒に準備できます。',
        image: {
          src: '/images/festival/schedule-morning.jpg',
          alt: '朝、山車の飾り付けをする地域の人たち',
          label: '当日の準備風景を配置',
        },
      },
      {
        time: '出発',
        title: '山車の巡回スタート',
        description:
          '子どもたちが笛や太鼓を演奏し、地域のみんなで山車と一緒に歩きます。',
        image: {
          src: '/images/festival/schedule-start.jpg',
          alt: '笛や太鼓を演奏しながら出発する山車と子どもたち',
          label: '子どもたちの演奏写真を配置',
        },
      },
      {
        time: '巡回中',
        title: '地域のみんなと交流',
        description:
          '途中で休憩を取りながら、地域の人たちとの交流を楽しみます。',
        image: {
          src: '/images/festival/schedule-parade.jpg',
          alt: '休憩しながら地域の人たちと交流する参加者',
          label: '山車の巡回写真を配置',
        },
      },
      {
        time: '終了',
        title: 'みんなで片付け',
        description:
          '最後はみんなで協力して片付けます。\n一日を終えたあとの達成感も、祭りの大切な思い出です。',
        image: {
          src: '/images/festival/schedule-finish.jpg',
          alt: '祭りを終えて笑顔で集まる参加者たち',
          label: '参加者の集合写真を配置',
        },
      },
    ] satisfies ScheduleStep[],
  },

  // ===== 子どもも大人も、みんなが主役 =====
  roles: {
    title: '子どもも大人も、みんなが主役',
    description:
      '祭りは一部の役員や経験者だけのものではありません。\nそれぞれができることを持ち寄って、みんなでつくっています。',
    cards: [
      {
        icon: 'smile',
        title: '子どもたち',
        subtitle: '祭りの主役として楽しむ',
        items: [
          '山車に乗る',
          '笛や太鼓を演奏する',
          '山車と一緒に歩く',
          '地域の人たちと交流する',
          '祭りを思い切り楽しむ',
        ],
      },
      {
        icon: 'users',
        title: '大人たち',
        subtitle: 'できる範囲で祭りを支える',
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
      '祭りで過ごす一日は、活動そのものよりも、\nあとから思い返す「思い出」として残っていきます。',
    // 初期状態ではイラストが表示されます。
    // 写真に差し替えたい場合は image.src にパスを設定してください。
    // 例: image: { src: '/images/festival/memory-01.jpg', alt: '祭りを楽しむ親子', label: '親子の写真を配置' },
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
        description: '一緒に祭りをつくった経験が、地域への愛着につながります。',
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
    description: '過去の祭りの様子をご紹介します。写真をタップすると拡大表示できます。',
    // 写真はこの配列に追加・削除するだけで反映されます。
    images: [
      {
        src: '/images/festival/gallery-01.jpg',
        alt: '地区内を巡回する山車',
        label: '山車の写真を配置',
        caption: '地区内を巡回する山車',
      },
      {
        src: '/images/festival/gallery-02.jpg',
        alt: '太鼓を演奏する子どもたち',
        label: '子どもたちの演奏写真を配置',
        caption: '太鼓を演奏する子どもたち',
      },
      {
        src: '/images/festival/gallery-03.jpg',
        alt: '朝の準備風景',
        label: '当日の準備風景を配置',
        caption: '朝の準備風景',
      },
      {
        src: '/images/festival/gallery-04.jpg',
        alt: '笛を練習する子どもたち',
        label: '練習風景の写真を配置',
        caption: '本番に向けた練習の様子',
      },
      {
        src: '/images/festival/gallery-05.jpg',
        alt: '休憩中に交流する参加者たち',
        label: '休憩・交流の写真を配置',
        caption: '休憩中のひとこま',
      },
      {
        src: '/images/festival/gallery-06.jpg',
        alt: '祭りを終えた参加者の集合写真',
        label: '参加者の集合写真を配置',
        caption: '祭りを終えて、みんなで一枚',
      },
    ] satisfies MediaImage[],
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

  // ===== 祭りを未来へつなぐために =====
  future: {
    title: 'この祭りを、これからも続けていくために。',
    body:
      '下原地区の祭りは、子どもたちの笑顔と、地域の皆さんの協力によって受け継がれてきました。\n\n一方で、近年は参加者や運営を支える人が少なくなり、今までと同じ形で続けることが少しずつ難しくなっています。\n\nだからこそ今、子どもたちの思い出と地域のつながりを、みんなで未来へつないでいきたいと考えています。',
    actionsLead: 'たとえば、こんな関わり方があります。',
    actions: [
      { icon: 'eye', label: 'まずは祭りを見に来る' },
      { icon: 'users', label: '親子で参加してみる' },
      { icon: 'hand', label: '当日少しだけ手伝う' },
      { icon: 'camera', label: '写真や動画を撮影する' },
      { icon: 'share', label: '情報を家族や近所の人に伝える' },
      { icon: 'lightbulb', label: '次回の企画を一緒に考える' },
    ] satisfies FutureAction[],
    closing: 'その一つひとつが、祭りを未来へつなぐ力になります。',
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
          '大丈夫です。ほとんどの子どもたちが未経験からのスタートです。祭りの前に練習の機会もあり、経験者がやさしく教えます。',
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
      '参加申込みは、Googleフォームに回答するだけ。\nスマートフォンから1〜2分で完了します。',
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
    /** フォームでの申込みが難しい方向けの案内 */
    analog: {
      title: 'フォームでの申込みが難しい方へ',
      description:
        'お電話や、回覧板・公民館に設置している申込み用紙でもお申込みいただけます。ご不明な点は、下記の問い合わせ先までお気軽にご連絡ください。',
    },
  },

  // ===== 開催情報 =====
  information: {
    title: '開催情報',
    description:
      '当日の詳しい情報です。変更がある場合は、お申込み時にご記入いただいた連絡先などへお知らせします。',
    items: [
      { icon: 'calendar', label: '開催日', value: '2026年10月18日（日）' },
      { icon: 'clock', label: '開催時間', value: '9:00〜15:00' },
      { icon: 'mapPin', label: '集合場所', value: '下原公民館前 広場' },
      { icon: 'route', label: '巡回エリア', value: '下原地区内一円' },
      {
        icon: 'users',
        label: '対象',
        value: '下原地区にお住まいの方（見学はどなたでも歓迎）',
      },
      { icon: 'wallet', label: '参加費', value: '無料' },
      { icon: 'backpack', label: '持ち物', value: '飲み物、タオル、帽子など' },
      { icon: 'shirt', label: '服装', value: '動きやすい服装・歩きやすい靴' },
      {
        icon: 'rain',
        label: '雨天時',
        value: '小雨決行・荒天中止\n（中止・変更は事前にお知らせします）',
      },
      { icon: 'phone', label: '問い合わせ', value: '下原地区祭り運営委員会' },
    ] satisfies InfoItem[],
  },

  // ===== 最終CTA =====
  finalCta: {
    title: '今年は、見る側から、一緒につくる側へ。',
    body:
      'この祭りは、一部の人だけでつくるものではありません。\n子どもたちの笑顔も、大人たちの支えも、地域の皆さんの応援も、すべてが祭りの一部です。\n\n下原地区の祭りで、新しい思い出をつくりませんか。',
  },

  // ===== 各種URL =====
  // 空文字 '' のままにすると、ボタンに「準備中」と表示されます。
  links: {
    /** LINEオープンチャットの招待URL */
    lineOpenChat: '',
    /** 参加申込みフォームのURL（Googleフォームなど） */
    applicationForm: 'https://forms.gle/BgMdXwSjWX3xbrCf9',
    /** 問い合わせ先URL（フォームのURL または 'mailto:xxx@example.com'） */
    contact: '',
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
  contact: {
    organization: '下原地区祭り運営委員会',
    /** 電話番号（例: '090-0000-0000'）。空文字なら「準備中」と表示 */
    tel: '',
    /** メールアドレス。空文字なら「準備中」と表示 */
    email: '',
  },

  copyright: '© 2026 下原地区祭り運営委員会',
}

export type FestivalData = typeof festivalData

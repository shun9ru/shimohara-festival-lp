# 下原地区の夏祭り ランディングページ

「見る夏祭りから、一緒につくる夏祭りへ」をコンセプトにした、下原地区の夏祭りを紹介するランディングページ（LP）です。

- React + TypeScript + Vite + Tailwind CSS 製
- スマートフォンファースト・レスポンシブ対応
- 文章・画像・動画・URL・開催情報は **`src/data/festivalData.ts` の1ファイル**で管理
- 画像・動画が未配置でも、プレースホルダーが表示されてレイアウトは崩れません

> **注意：** 初期状態の開催日・場所・参加者の声などは**すべて仮の内容（ダミーデータ）**です。
> 公開前に必ず `src/data/festivalData.ts` を実際の内容に書き換えてください。

---

## 1. 動かし方

### 必要なもの

- [Node.js](https://nodejs.org/ja)（バージョン 20 以上を推奨）

### 手順

```bash
# 1. このフォルダでコマンドプロンプト（またはターミナル）を開き、依存パッケージをインストール
npm install

# 2. 開発用サーバーを起動（http://localhost:5173 で確認できます）
npm run dev

# 3. 公開用ファイルを作成（dist フォルダに出力されます）
npm run build

# 4. 公開用ファイルの動作確認
npm run preview
```

公開するときは、`npm run build` でできた **`dist` フォルダの中身**をサーバー（レンタルサーバー、Netlify、Vercel、GitHub Pages など）にアップロードします。

---

## 2. 画像の差し替え方法

### 手順（例：メイン画像）

1. 用意した写真のファイル名を `hero-main.jpg` に変更する
2. `public/images/festival/` フォルダに置く
3. これだけで表示されます（`festivalData.ts` の初期設定がこのファイル名になっているため）

別のファイル名を使いたい場合は、`src/data/festivalData.ts` の該当する `src:` のパスを書き換えてください。

```ts
// 例：src/data/festivalData.ts
heroImage: {
  src: '/images/festival/hero-main.jpg', // ← ここをファイル名に合わせて変更
  alt: '下原地区の夏祭りで山車を囲む子どもたちと大人たち', // 画像の説明（SEO・読み上げ用）
  label: 'メイン画像を配置', // 画像が無いときに表示されるラベル
},
```

### 用意する画像の一覧

すべて `public/images/festival/` に置きます。横長（16:9 または 4:3 程度）の写真がきれいに表示されます。

| ファイル名 | 表示される場所 |
| --- | --- |
| `hero-main.jpg` | ファーストビューの背景（動画が無いとき） |
| `about-festival.jpg` | 「この夏祭りについて」の大きな写真 |
| `schedule-morning.jpg` | 夏祭りの一日「朝｜みんなで準備」 |
| `schedule-prayer.jpg` | 夏祭りの一日「祈願｜安全祈願」 |
| `schedule-start.jpg` | 夏祭りの一日「出発｜山車の巡回スタート」 |
| `schedule-parade.jpg` | 夏祭りの一日「巡回中｜地域のみんなと交流」 |
| `schedule-finish.jpg` | 夏祭りの一日「終了｜みんなで片付け」 |
| `gallery-01.jpg` 〜 `gallery-06.jpg` | フォトギャラリー |
| `next-event-poster.jpg` | 「次回の開催情報」に表示するポスター画像（縦長のチラシ推奨） |

- ギャラリーの写真は `festivalData.ts` の `gallery.images` 配列に**追加・削除するだけ**で枚数を変えられます。
- 夏祭りの一日（タイムライン）の各時間帯は、`festivalData.ts` の `timeline.steps` の `media` 配列に**写真や動画を複数並べられます**。2つ以上並べると、横スクロール（スワイプ）で見られるようになります。写真は `{ src, alt, label }`、動画は `{ type: 'video', src, title, label }` の形で追加します。
- 画像が無い場所には「◯◯の写真を配置」というプレースホルダーが表示されるので、どこに何を置けばよいか画面上でも確認できます。

### イラストが表示される場所（写真がなくても成立する場所）

以下の場所は、写真の代わりに**夏祭りの雰囲気に合わせたオリジナルイラスト**が表示されます。写真を用意しなくてもそのまま公開できます。

| 場所 | 内容 |
| --- | --- |
| ファーストビューの背景 | 動画・写真が未設定の間、提灯と花火の夜祭りイラストを表示 |
| 「参加すると、こんな思い出ができます」の6枚のカード | 親子・太鼓・ご近所交流などのイラスト |
| 「参加者の声」のアイコン | 4種類の顔イラストを順番に表示 |

思い出カードをイラストから写真に切り替えたい場合は、`festivalData.ts` の `memories.cards` に `image` を追加します。

```ts
{
  title: '親子で共通の思い出ができる',
  description: '...',
  illustration: 'parentChild', // イラストの指定（写真が無いときに表示）
  image: {                      // ← これを追加すると写真が優先されます
    src: '/images/festival/memory-01.jpg',
    alt: '夏祭りを楽しむ親子',
    label: '親子の写真を配置',
  },
},
```

イラスト自体を編集したい場合は `src/components/illustrations.tsx` を編集してください。

---

## 3. 動画の差し替え方法

### 手順（例：メイン動画）

1. 用意した動画のファイル名を `hero-movie.mp4` に変更する
2. `public/videos/festival/` フォルダに置く
3. これだけで表示されます

### 用意する動画の一覧

すべて `public/videos/festival/` に置きます。**mp4形式（H.264）**を推奨します。

| ファイル名 | 表示される場所 |
| --- | --- |
| `hero-movie.mp4` | ファーストビューの背景（自動再生・音なし・ループ） |
| `preparation.mp4` | 夏祭りの一日「朝｜みんなで準備」の動画 |
| `children-performance.mp4` | 夏祭りの一日「出発｜山車の巡回スタート」の動画 |
| `parade.mp4` | 夏祭りの一日「巡回中｜地域のみんなと交流」の動画 |
| `after-smiles.mp4` | 夏祭りの一日「終了｜みんなで片付け」の動画 |

- スマートフォンの通信量に配慮し、背景動画は**短め（15〜30秒程度）・軽め（数MB〜10MB程度）**に圧縮するのがおすすめです。
- ファーストビュー以外の動画は、画面に近づいてから読み込む遅延読み込みになっています。
- 動画ファイルが無くてもエラーは表示されず、プレースホルダーが表示されます。

---

## 4. 文章・開催情報・URLの変更方法

**すべて `src/data/festivalData.ts` で変更できます。** メモ帳でも編集できますが、[VS Code](https://code.visualstudio.com/) を使うと編集しやすいです。

### 次回の開催予定

このLPは「どんな夏祭りか」を紹介することが主目的で、次回の開催予定はその中でお知らせする形になっています。

```ts
// 次回の夏祭りの開催予定（ファーストビューと「次回の開催情報」に表示）
nextEvent: {
  scheduled: true,               // 開催予定が決まっていれば true
  name: '神立逆西まつり',        // 次回参加する夏祭り・イベントの名称
  date: '2026年10月3日（土）',  // 開催日
  time: '11:00〜19:00',          // 開催時間
  place: '神立駅前',             // 開催場所
  tbaMessage: '次回の開催日程は、決まり次第このページでお知らせします。',
  poster: {                      // 次回開催のポスター画像
    src: '/images/festival/next-event-poster.jpg',
    alt: '神立逆西まつり 2026年10月3日（土）11時〜19時 神立駅前 開催のポスター',
    label: '次回開催（神立逆西まつり）のポスターを配置',
  },
},
```

- **夏祭りが終わって次回が未定になったら、`scheduled: false` にするだけ**で、日付の表示が消えて `tbaMessage` のお知らせ文に切り替わります（LPは夏祭りの紹介ページとしてそのまま公開し続けられます）。
- 次回の日程が決まったら、`date` などを更新して `scheduled: true` に戻してください。
- `name` はファーストビューの「次回開催」欄に夏祭り・イベント名として表示されます。
- `poster` は「次回の開催情報」セクションの右側にポスター画像として表示されます。`public/images/festival/next-event-poster.jpg` に画像を置くと表示され、無い間はプレースホルダーが表示されます。

「次回の開催情報」セクションの詳細（開催日・出店・主催・問い合わせ先など）は、同じファイルの `information.items` を編集してください。

### 各種URL

`links` の `''`（空文字）の部分にURLを貼り付けます。**空文字のままだと、ボタンには「準備中」と表示されます。**

```ts
links: {
  lineOpenChat: '',      // LINEオープンチャットの招待URL
  applicationForm: '',   // 参加申込みフォーム（GoogleフォームなどのURL）
  contact: '',           // 問い合わせ先（フォームURL または 'mailto:xxx@example.com'）
  googleMapEmbed: '',    // Googleマップ埋め込み用URL（下記参照）
  googleMapLink: '',     // Googleマップの共有リンク
  privacyPolicy: '',     // プライバシーポリシーのURL
  mediaPolicy: '',       // 写真・動画掲載についての案内URL
  ...
},
```

**Googleマップの埋め込み方法：**

1. [Googleマップ](https://www.google.com/maps)で会場を検索
2. 「共有」→「地図を埋め込む」タブを選択
3. 表示されたHTMLの中の `src="https://www.google.com/maps/embed?..."` の **URL部分だけ**をコピー
4. `googleMapEmbed: 'コピーしたURL'` のように貼り付け

### 文章・FAQ・参加者の声など

- キャッチコピー：`catchphrase` / `subCopy`
- この夏祭りについて：`about`
- 夏祭りの一日：`timeline.steps`
- 子ども・大人の役割：`roles`
- 思い出カード：`memories`
- 参加者の声：`testimonials.items`（コメントと属性タグを配列で管理）
- FAQ：`faq.items`（質問と回答を配列で管理。追加・削除も自由です）
- 未来へつなぐメッセージ：`future`
- 問い合わせ先（電話・メール）：`contact`

`\n` と書いた場所で改行されます。

---

## 5. セクションの表示・非表示

`festivalData.ts` の `sections` で、各セクションを丸ごと表示・非表示にできます。

```ts
sections: {
  about: true,        // この夏祭りについて
  timeline: true,     // 夏祭りの一日（写真・動画つき）
  roles: true,        // 子どもも大人も、みんなが主役
  memories: true,     // 参加すると、こんな思い出ができます
  gallery: true,      // フォトギャラリー
  testimonials: false, // ← false にすると「参加者の声」が非表示になる
  future: true,       // 夏祭りを未来へつなぐために
  faq: true,          // 初めて参加する方へ（FAQ）
  participation: true, // 参加方法
  information: true,  // 開催情報
  finalCta: true,     // 最終CTA
},
```

例えば、実際の参加者の声が集まるまで `testimonials: false` にしておく、といった使い方ができます。

---

## 6. 色（カラーパレット）の変更

`src/index.css` の `@theme` にCSS変数としてまとめてあります。ここを変えるとサイト全体の色が変わります。

```css
--color-primary: #d8442e;      /* メインカラー：朱色 */
--color-accent: #24406b;       /* アクセントカラー：紺 */
--color-cream: #faf6ec;        /* 背景：生成り */
...
```

---

## 7. SEO・OGP の変更

### 公開URLの設定（`.env` ファイル）

LINEやSNSでシェアしたときに使われるURL（OGP）は、プロジェクト直下の **`.env` ファイルの1行**で管理しています。

```bash
# .env
VITE_SITE_URL=https://shimohara-matsuri.vercel.app
```

Vercelで公開して実際のURLが決まったら、この1行を書き換えて再ビルド（再デプロイ）するだけで、`og:url`・`og:image`・Twitterカード・構造化データのURLがすべて更新されます。**末尾に `/` は付けないでください。**

### その他のSEO設定（`index.html`）

- `<title>` と `<meta name="description">`：ページタイトルと説明文
- 構造化データ（`<script type="application/ld+json">`）：開催日時・場所を実際の内容に変更
- ファビコン：`public/favicon.svg` を差し替え（現在は「祭」マークの仮アイコン）

---

## 7-2. Vercelでの公開手順

1. このプロジェクトを [GitHub](https://github.com/) のリポジトリにプッシュする
2. [Vercel](https://vercel.com/) にGitHubアカウントでログインする
3. 「Add New...」→「Project」から、手順1のリポジトリを「Import」する
4. Framework Preset に「Vite」が自動で選ばれていることを確認し、そのまま「Deploy」
   （ビルドコマンド `npm run build`、出力先 `dist` も自動で設定されます）
5. デプロイ完了後に表示されるURL（例: `https://プロジェクト名.vercel.app`）を確認する
6. そのURLを `.env` の `VITE_SITE_URL` に設定し、コミット＆プッシュする
   （プッシュすると自動で再デプロイされ、OGPに反映されます）

以降は、GitHubにプッシュするたびに自動で再デプロイされます。

---

## 8. フォルダ構成

```
LP_aisaikai/
├── public/
│   ├── favicon.svg              # ファビコン（仮）
│   ├── images/festival/         # ★ 写真をここに置く
│   └── videos/festival/         # ★ 動画をここに置く
├── src/
│   ├── data/
│   │   └── festivalData.ts      # ★ 文章・開催情報・URLはすべてここで編集
│   ├── components/              # 各セクションの部品
│   │   ├── Header.tsx           # ヘッダー（PCナビ）
│   │   ├── MobileMenu.tsx       # スマホ用メニュー
│   │   ├── HeroSection.tsx      # ファーストビュー
│   │   ├── AboutSection.tsx     # この夏祭りについて
│   │   ├── FestivalTimeline.tsx # 夏祭りの一日（写真・動画の横スクロール）
│   │   ├── MediaCarousel.tsx    # 写真・動画の横スクロール表示
│   │   ├── RoleSection.tsx      # 子どもと大人の役割
│   │   ├── MemorySection.tsx    # 参加してできる思い出
│   │   ├── PhotoGallery.tsx     # フォトギャラリー
│   │   ├── TestimonialSection.tsx # 参加者の声
│   │   ├── FutureSection.tsx    # 夏祭りを未来へつなぐために
│   │   ├── FAQSection.tsx       # よくある質問
│   │   ├── ParticipationSection.tsx # 参加方法
│   │   ├── EventInformation.tsx # 開催情報・地図
│   │   ├── FinalCTA.tsx         # 最終CTA
│   │   ├── Footer.tsx           # フッター
│   │   ├── FixedCTABar.tsx      # スマホ下部の固定CTAバー
│   │   ├── MediaPlaceholder.tsx # 画像・動画が無いときの表示
│   │   ├── SmartImage.tsx       # 画像（自動でプレースホルダーに切替）
│   │   ├── SmartVideo.tsx       # 動画（遅延読み込み対応）
│   │   ├── ImageModal.tsx       # ギャラリーの拡大表示
│   │   ├── SectionHeading.tsx   # セクション見出し
│   │   ├── CTAButton.tsx        # ボタン（URL未設定なら「準備中」表示）
│   │   ├── Reveal.tsx           # スクロール時のフェードイン
│   │   └── icons.ts             # アイコン名とアイコンの対応表
│   ├── hooks/
│   │   └── useInView.ts         # 画面内に入ったかを判定する処理
│   ├── App.tsx                  # ページ全体の組み立て
│   ├── main.tsx                 # エントリーポイント
│   └── index.css                # ★ 色の設定はここ
├── index.html                   # ★ SEO・OGPの設定はここ
└── package.json
```

---

## 9. その他の仕様

- **アクセシビリティ：** 文字サイズ・コントラストを確保し、alt属性・aria属性を設定済み。`prefers-reduced-motion`（視差効果を減らす設定）の環境ではアニメーションと背景動画の自動再生を無効化します。
- **パフォーマンス：** 画像・動画は遅延読み込み。ファーストビュー以外の動画は画面に近づくまで読み込みません（`preload="metadata"`）。
- **固定CTAバー：** スマートフォンでは画面下部に「参加申込みフォーム」「参加方法を見る」ボタンが固定表示され、最終CTA・フッターが見えると自動で隠れます。
- **個人情報への配慮：** 参加者の声は実名・顔写真なしで成立するデザインです。写真を掲載する際は、写っている方の同意を得て、必要に応じて「写真・動画掲載について」のページを用意することをおすすめします。

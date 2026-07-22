/**
 * 動画などのメディアURLを解決する。
 *
 * ・環境変数 `VITE_MEDIA_BASE_URL` が未設定なら、これまで通り public/ 配下の
 *   ローカルパス（例: /videos/festival/xxx.mp4）をそのまま使う。開発時に便利。
 * ・`VITE_MEDIA_BASE_URL` が設定されていれば、/videos/... のパスをそのベースURL
 *   （Cloudflare R2 など）に差し替える。
 *   例) VITE_MEDIA_BASE_URL=https://pub-xxxx.r2.dev
 *       /videos/festival/xxx.mp4 → https://pub-xxxx.r2.dev/videos/festival/xxx.mp4
 *
 * R2 には public/videos/ と同じ videos/festival/... の構造でアップロードすること。
 * そうすれば festivalData.ts のパス文字列は変更不要。
 */
const BASE = (import.meta.env.VITE_MEDIA_BASE_URL ?? '').replace(/\/$/, '')

export function mediaUrl(src: string | undefined): string {
  if (!src) return ''
  // すでに絶対URL（http/https）ならそのまま
  if (/^https?:\/\//.test(src)) return src
  // ベースURLが設定されていて、動画パスなら差し替える
  if (BASE && src.startsWith('/videos/')) return BASE + src
  return src
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** サイトの公開URL（OGP等に使用）。末尾に / は付けない。 */
  readonly VITE_SITE_URL?: string
  /** 動画の配信ベースURL（Cloudflare R2 など）。未設定ならローカルの public/videos を使う。末尾に / は付けない。 */
  readonly VITE_MEDIA_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

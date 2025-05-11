/// <reference types="vite/client" />

// https://vite.dev/guide/env-and-mode#intellisense-for-typescript
interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  SITE_DOMAIN: string
  SERVER_API: string
  AI_SERVER_API: string
  S3_SERVER_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

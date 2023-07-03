import type { ViteImportMeta } from './vite'
import type { WebpackImportMeta } from './webpack'

export type BundlerImportMeta = ViteImportMeta & WebpackImportMeta

interface MetaVersions extends Record<string, string> {
  nuxt: string
}

declare global {
  interface ImportMeta extends BundlerImportMeta {
    /** the `file:` url of the current file (similar to `__filename` but as file url) */
    url: string

    dev: boolean
    server: boolean
    client: boolean
    nuxt: boolean
    versions?: MetaVersions

    readonly env: Record<string, string | boolean | undefined>
  }
}

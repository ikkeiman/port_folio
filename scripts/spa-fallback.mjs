// GitHub Pages は SPA のルーティングを知らないので、404.html を index.html のコピーにして
// /port_folio/projects などへ直接アクセスしても Vue Router が処理できるようにする。
import { copyFileSync, existsSync } from 'node:fs'

const src = new URL('../dist/index.html', import.meta.url)
const dest = new URL('../dist/404.html', import.meta.url)

if (existsSync(src)) {
  copyFileSync(src, dest)
  console.log('created dist/404.html for SPA fallback')
}

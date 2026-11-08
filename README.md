# Ikkei Miyata — Portfolio

宮田一慶のポートフォリオサイト。Vue 3 + Vite のみで構築し（UIフレームワーク不使用）、GitHub Pages で公開しています。

公開URL: https://ikkeiman.github.io/port_folio/

## 構成

```
src/
  data/site.js            全コンテンツ（文章・実績・スキル・年表）。更新はここだけ
  components/
    SiteHeader.vue        固定ヘッダー、セクション連動ナビ、テーマ切替
    HeroSection.vue       自己紹介と実績の数字
    WorkSection.vue       プロジェクト（課題 / やったこと / 結果）
    ArchitectureDiagram.vue  インラインSVGの構成図（テーマ色に追従）
    SkillsSection.vue     スキル・資格・受賞
    TimelineSection.vue   年表
    ContactSection.vue    連絡先
  composables/
    useReveal.js          IntersectionObserver によるスクロール表示
    useTheme.js           OS設定に追従するダーク/ライト切替（localStorage保存）
  assets/styles.css       デザイントークンとベーススタイル
```

## 構成図

```mermaid
flowchart LR
  subgraph src[src/]
    D[data/site.js<br/>全コンテンツ] --> A[App.vue]
    A --> H[SiteHeader]
    A --> S1[HeroSection]
    A --> S2[WorkSection] --> AD[ArchitectureDiagram<br/>インライン SVG]
    A --> S3[SkillsSection]
    A --> S4[TimelineSection]
    A --> S5[ContactSection]
    T[composables/useTheme.js<br/>ダーク/ライト] -.-> H
    V[composables/useReveal.js<br/>スクロール表示] -.-> S1 & S2 & S3 & S4 & S5
  end
  C[assets/styles.css<br/>デザイントークン] -.-> src
```

文章・実績・スキル・年表はすべて `src/data/site.js` に集め、各セクションはそれを表示するだけにしています。内容の更新で触るファイルを1つに限定するためです。

### デプロイの流れ

```mermaid
flowchart LR
  P[git push main] --> GA[GitHub Actions<br/>deploy.yml]
  GA --> B[npm ci<br/>vite build]
  B --> F[scripts/spa-fallback.mjs<br/>404.html を生成]
  F --> U[upload-pages-artifact]
  U --> GP[GitHub Pages<br/>ikkeiman.github.io/port_folio/]
```

- 外部ライブラリは Vue 本体のみ。フォントは Google Fonts（Inter / Noto Sans JP / JetBrains Mono）
- `prefers-reduced-motion` を尊重し、アニメーションを無効化できる
- 採用担当者にURLを直接渡す前提のため、`noindex` で検索エンジンには載せていない

## 開発

```sh
npm install
npm run dev
```

## ビルドとデプロイ

```sh
npm run build
```

`dist/` に出力されます。`main` ブランチに push すると GitHub Actions（`.github/workflows/deploy.yml`）が自動でビルドして GitHub Pages に公開します。

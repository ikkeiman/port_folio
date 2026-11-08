<template>
  <figure class="diagram">
    <svg viewBox="0 0 760 300" role="img" aria-labelledby="arch-title">
      <title id="arch-title">営業支援システムの構成図</title>

      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>

      <!-- client -->
      <g class="node">
        <rect x="20" y="110" width="170" height="80" rx="10" />
        <text x="105" y="143" class="t-title">Vue 3 SPA</text>
        <text x="105" y="165" class="t-sub">地図 / 活動記録 / レポート</text>
      </g>

      <!-- api -->
      <g class="node">
        <rect x="295" y="110" width="170" height="80" rx="10" />
        <text x="380" y="143" class="t-title">FastAPI</text>
        <text x="380" y="165" class="t-sub">API 約35本 / 認証 / 集計</text>
      </g>

      <!-- db -->
      <g class="node">
        <rect x="570" y="110" width="170" height="80" rx="10" />
        <text x="655" y="143" class="t-title">PostgreSQL + PostGIS</text>
        <text x="655" y="165" class="t-sub">テーブル 18 / 位置情報</text>
      </g>

      <!-- externals -->
      <g class="node ext">
        <rect x="295" y="20" width="170" height="50" rx="10" />
        <text x="380" y="50" class="t-title">kintone / 地図サービス</text>
      </g>
      <g class="node ext">
        <rect x="295" y="230" width="170" height="50" rx="10" />
        <text x="380" y="260" class="t-title">LLM（分析レポート生成）</text>
      </g>
      <g class="node ext">
        <rect x="20" y="230" width="170" height="50" rx="10" />
        <text x="105" y="260" class="t-title">GPS（スマホ端末）</text>
      </g>

      <!-- edges -->
      <g class="edge">
        <line x1="190" y1="150" x2="293" y2="150" marker-end="url(#arrow)" marker-start="url(#arrow)" />
        <line x1="465" y1="150" x2="568" y2="150" marker-end="url(#arrow)" marker-start="url(#arrow)" />
        <line x1="380" y1="110" x2="380" y2="72" marker-end="url(#arrow)" marker-start="url(#arrow)" />
        <line x1="380" y1="190" x2="380" y2="228" marker-end="url(#arrow)" />
        <line x1="105" y1="230" x2="105" y2="192" marker-end="url(#arrow)" />
      </g>

      <text x="242" y="140" class="t-edge">JSON / REST</text>
      <text x="517" y="140" class="t-edge">SQL</text>
    </svg>
    <figcaption>構成の概要。画面・API・DB・外部連携を一人で設計し、約30,000行を実装。</figcaption>
  </figure>
</template>

<style scoped>
.diagram {
  margin: 0;
  padding: clamp(16px, 3vw, 28px);
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--bg-elev);
  color: var(--fg);
}

svg {
  display: block;
  width: 100%;
  height: auto;
  font-family: var(--font-sans);
}

.node rect {
  fill: var(--bg);
  stroke: var(--fg);
  stroke-width: 1.2;
}

.node.ext rect {
  stroke: var(--fg-faint);
  stroke-dasharray: 4 4;
}

.t-title {
  font-size: 13px;
  font-weight: 600;
  text-anchor: middle;
  fill: var(--fg);
}

.node.ext .t-title {
  font-weight: 500;
  fill: var(--fg-muted);
}

.t-sub {
  font-size: 11px;
  text-anchor: middle;
  fill: var(--fg-muted);
}

.t-edge {
  font-family: var(--font-mono);
  font-size: 10px;
  text-anchor: middle;
  fill: var(--fg-faint);
}

.edge line {
  stroke: var(--fg-muted);
  stroke-width: 1.2;
}

.edge {
  color: var(--fg-muted);
}

figcaption {
  margin-top: 12px;
  font-size: 12px;
  color: var(--fg-faint);
}
</style>

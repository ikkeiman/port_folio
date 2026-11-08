<template>
  <figure class="diagram">
    <svg
      :viewBox="`0 0 ${spec.width || 760} ${spec.height || 300}`"
      role="img"
      :aria-labelledby="titleId"
    >
      <title :id="titleId">{{ spec.title }}</title>
      <defs>
        <marker
          :id="markerId"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>

      <g v-for="n in spec.nodes" :key="n.id" class="node" :class="{ ext: n.ext }">
        <rect :x="n.x" :y="n.y" :width="n.w" :height="n.h" rx="10" />
        <text :x="n.x + n.w / 2" :y="titleY(n)" class="t-title">{{ n.title }}</text>
        <text
          v-for="(line, i) in subLines(n)"
          :key="i"
          :x="n.x + n.w / 2"
          :y="titleY(n) + 18 + i * 14"
          class="t-sub"
        >
          {{ line }}
        </text>
      </g>

      <g class="edge">
        <template v-for="(e, i) in edges" :key="i">
          <polyline
            v-if="e.points"
            :points="e.points.map((p) => p.join(',')).join(' ')"
            fill="none"
            :marker-end="`url(#${markerId})`"
            :marker-start="e.both ? `url(#${markerId})` : undefined"
            :stroke-dasharray="e.dashed ? '4 4' : undefined"
          />
          <line
            v-else
            :x1="e.x1"
            :y1="e.y1"
            :x2="e.x2"
            :y2="e.y2"
            :marker-end="`url(#${markerId})`"
            :marker-start="e.both ? `url(#${markerId})` : undefined"
            :stroke-dasharray="e.dashed ? '4 4' : undefined"
          />
        </template>
      </g>

      <text v-for="(l, i) in spec.labels || []" :key="'l' + i" :x="l.x" :y="l.y" class="t-edge">
        {{ l.text }}
      </text>
    </svg>
    <figcaption v-if="spec.caption">{{ spec.caption }}</figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ spec: { type: Object, required: true } })

// 複数の図が同じページに並ぶので、marker の id を図ごとに分ける
const uid = Math.random().toString(36).slice(2, 8)
const markerId = `arrow-${uid}`
const titleId = `diagram-title-${uid}`

const byId = computed(() => Object.fromEntries(props.spec.nodes.map((n) => [n.id, n])))

function subLines(n) {
  if (!n.sub) return []
  return Array.isArray(n.sub) ? n.sub : [n.sub]
}

function titleY(n) {
  const lines = subLines(n).length
  // タイトルと補足行を箱の縦中央に寄せる
  const block = 13 + lines * 14
  return n.y + n.h / 2 - block / 2 + 11
}

// 2つの箱の位置関係から、辺の中点どうしを結ぶ直線を作る
function connect(a, b) {
  const ac = { x: a.x + a.w / 2, y: a.y + a.h / 2 }
  const bc = { x: b.x + b.w / 2, y: b.y + b.h / 2 }
  const gap = 2
  if (Math.abs(bc.x - ac.x) >= Math.abs(bc.y - ac.y)) {
    const dir = bc.x > ac.x ? 1 : -1
    const y1 = ac.y + (bc.y - ac.y) * 0.25
    const y2 = bc.y - (bc.y - ac.y) * 0.25
    return {
      x1: dir > 0 ? a.x + a.w + gap : a.x - gap,
      y1,
      x2: dir > 0 ? b.x - gap : b.x + b.w + gap,
      y2,
    }
  }
  const dir = bc.y > ac.y ? 1 : -1
  return {
    x1: ac.x + (bc.x - ac.x) * 0.25,
    y1: dir > 0 ? a.y + a.h + gap : a.y - gap,
    x2: bc.x - (bc.x - ac.x) * 0.25,
    y2: dir > 0 ? b.y - gap : b.y + b.h + gap,
  }
}

const edges = computed(() =>
  (props.spec.edges || []).map((e) => {
    if (e.points) return e
    return { ...e, ...connect(byId.value[e.from], byId.value[e.to]) }
  }),
)
</script>

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

.edge line,
.edge polyline {
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

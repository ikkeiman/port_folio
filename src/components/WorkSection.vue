<template>
  <section id="work" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="num">01</span>
        <h2>Work</h2>
        <p>企画・要件定義から設計・開発・運用まで、一人で通して担当したものを中心に。課題、やったこと、結果の順に書いています。</p>
      </div>

      <article v-for="w in works" :key="w.id" class="work reveal">
        <header class="work-head">
          <span class="index">{{ w.index }}</span>
          <div>
            <h3>{{ w.title }}</h3>
            <p class="meta">
              <span>{{ w.period }}</span>
              <span class="sep" aria-hidden="true">/</span>
              <span>{{ w.role }}</span>
            </p>
          </div>
        </header>

        <div class="work-body">
          <div class="col">
            <span class="eyebrow">課題</span>
            <p>{{ w.problem }}</p>
          </div>
          <div class="col">
            <span class="eyebrow">やったこと</span>
            <p>{{ w.approach }}</p>
          </div>
          <div class="col">
            <span class="eyebrow">結果</span>
            <p>{{ w.result }}</p>
          </div>
        </div>

        <ArchitectureDiagram v-if="w.diagram" class="work-diagram" />

        <footer class="work-foot">
          <ul class="stack">
            <li v-for="s in w.stack" :key="s" class="chip">{{ s }}</li>
          </ul>
          <a v-if="w.link" :href="w.link" target="_blank" rel="noopener" class="more">GitHub ↗</a>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { works } from '@/data/site'
import ArchitectureDiagram from '@/components/ArchitectureDiagram.vue'
</script>

<style scoped>
.work {
  padding-block: clamp(32px, 5vw, 48px);
  border-top: 1px solid var(--line);
}

.work:last-child {
  padding-bottom: 0;
}

.work-head {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;
  align-items: start;
}

.index {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--fg-faint);
  letter-spacing: 0.08em;
  padding-top: 6px;
}

h3 {
  font-size: clamp(20px, 2.4vw, 26px);
}

.meta {
  margin-top: 8px;
  font-size: 13px;
  color: var(--fg-muted);
}

.sep {
  margin-inline: 8px;
  color: var(--fg-faint);
}

.work-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 28px;
  margin-left: 144px;
}

.col p {
  margin-top: 8px;
  font-size: 14.5px;
  color: var(--fg);
}

.work-diagram {
  margin-top: 28px;
  margin-left: 144px;
}

.work-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
  margin-left: 144px;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.more {
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
}

@media (max-width: 860px) {
  .work-body {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 720px) {
  .work-head {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .work-body,
  .work-diagram,
  .work-foot {
    margin-left: 0;
  }
}
</style>

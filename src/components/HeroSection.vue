<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="eyebrow reveal">{{ profile.role }}</p>

      <h1 class="reveal">
        現場の困りごとを、<br />
        <em>使われる仕組み</em>に変える。
      </h1>

      <p class="lead reveal">{{ profile.statement }}</p>

      <div class="actions reveal">
        <a class="btn primary" href="#work">プロジェクトを見る</a>
        <a class="btn" :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      </div>

      <dl class="stats reveal">
        <div v-for="s in stats" :key="s.label">
          <dt>{{ s.label }}</dt>
          <dd>
            <span class="value">{{ s.value }}</span>
            <span class="unit">{{ s.unit }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { profile, stats } from '@/data/site'
</script>

<style scoped>
.hero {
  padding-block: clamp(72px, 12vw, 140px) var(--section);
}

h1 {
  margin-top: 16px;
  font-size: clamp(34px, 6vw, 68px);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

h1 em {
  font-style: normal;
  color: var(--accent);
}

.lead {
  max-width: 680px;
  margin-top: 28px;
  font-size: clamp(15px, 1.6vw, 17px);
  color: var(--fg-muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: clamp(56px, 8vw, 96px) 0 0;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}

.stats dt {
  order: 2;
  font-size: 13px;
  color: var(--fg-muted);
}

.stats dd {
  margin: 0 0 6px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.value {
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.unit {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--fg-faint);
}

.stats > div {
  display: flex;
  flex-direction: column;
}

@media (max-width: 720px) {
  .stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

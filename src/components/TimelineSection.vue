<template>
  <section id="timeline" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="num">03</span>
        <h2>Timeline</h2>
        <p>営業の現場から、仕組みを作る側へ。働きながら学び、DX推進部門の責任者になるまで。</p>
      </div>

      <ol class="timeline">
        <li v-for="t in timeline" :key="t.year + t.title" class="reveal">
          <span class="year">{{ t.year }}</span>
          <div>
            <h3>{{ t.title }}</h3>
            <p>{{ t.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { timeline } from '@/data/site'
</script>

<style scoped>
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline li {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;
  padding: 18px 0;
  border-top: 1px solid var(--line);
}

.year {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--fg-faint);
  padding-top: 3px;
}

h3 {
  font-size: 16px;
  font-weight: 600;
}

p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--fg-muted);
}

@media (max-width: 720px) {
  .timeline li {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>

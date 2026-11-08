<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="num">02</span>
        <h2>Skills</h2>
        <p>画面からサーバー、データベース、AIまで。業務システムを一人で形にできる範囲と、それをどう使ってきたかを書いています。</p>
      </div>

      <div class="groups">
        <div v-for="g in skillGroups" :key="g.name" class="group reveal">
          <h3>{{ g.name }}</h3>
          <ul>
            <li v-for="item in g.items" :key="item.name">
              <span class="skill">{{ item.name }}</span>
              <span class="note">{{ item.note }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="extras">
        <div class="reveal">
          <h3>資格</h3>
          <ul class="list">
            <li v-for="c in certifications" :key="c.name">
              <span>{{ c.name }}</span>
              <span class="year">{{ c.year }}</span>
            </li>
          </ul>
        </div>
        <div class="reveal">
          <h3>受賞</h3>
          <ul class="list">
            <li v-for="a in awards" :key="a">
              <span>{{ a }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { awards, certifications, skillGroups } from '@/data/site'
</script>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 48px;
}

h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--fg-muted);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}

.group li {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.skill {
  font-weight: 500;
}

.note {
  font-size: 13px;
  color: var(--fg-muted);
}

.extras {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 48px;
  margin-top: 56px;
}

.list li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  font-size: 14.5px;
}

.year {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--fg-faint);
}

@media (max-width: 720px) {
  .groups,
  .extras {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>

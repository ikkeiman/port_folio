<template>
  <SiteHeader />

  <main ref="main">
    <HeroSection />
    <WorkSection />
    <SkillsSection />
    <TimelineSection />
    <ContactSection />
  </main>

  <footer class="footer">
    <div class="container">
      <span>© {{ year }} Ikkei Miyata</span>
      <span class="built">Vue 3 + Vite / GitHub Pages / no UI framework</span>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import { useReveal } from '@/composables/useReveal'

const main = ref(null)
const year = new Date().getFullYear()

useReveal(main)
</script>

<style scoped>
.footer {
  padding: 32px 0 48px;
  border-top: 1px solid var(--line);
  font-size: 13px;
  color: var(--fg-faint);
}

.footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.built {
  font-family: var(--font-mono);
  font-size: 12px;
}
</style>

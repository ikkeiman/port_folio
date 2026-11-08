<template>
  <header class="header" :class="{ scrolled }">
    <div class="container inner">
      <a href="#top" class="brand">
        <span class="mark">IM</span>
        <span class="name">Ikkei Miyata</span>
      </a>

      <nav class="nav" aria-label="セクション">
        <a v-for="item in nav" :key="item.href" :href="item.href" :class="{ active: active === item.href }">
          {{ item.label }}
        </a>
      </nav>

      <button class="theme" type="button" :aria-label="theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'" @click="toggle">
        <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
]

const { theme, toggle } = useTheme()
const scrolled = ref(false)
const active = ref('')

let observer = null

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // 現在見ているセクションをナビに反映する
  const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean)
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) active.value = `#${visible[0].target.id}`
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
  )
  sections.forEach((s) => observer.observe(s))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s var(--ease);
}

.header.scrolled {
  border-bottom-color: var(--line);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 64px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--fg);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 4px;
}

.nav a {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 14px;
  color: var(--fg-muted);
  transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.nav a:hover,
.nav a.active {
  color: var(--fg);
  background: var(--accent-soft);
}

.theme {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg-elev);
  color: var(--fg);
  cursor: pointer;
}

@media (max-width: 560px) {
  .name {
    display: none;
  }

  .nav a {
    padding: 6px 9px;
    font-size: 13px;
  }
}
</style>

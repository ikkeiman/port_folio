<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="num">04</span>
        <h2>Contact</h2>
        <p>採用のご相談、経歴やプロジェクトについてのご質問は、メールかGitHubからお気軽にどうぞ。</p>
      </div>

      <div class="links reveal">
        <a class="link" :href="`mailto:${profile.email}`">
          <span class="label">Email</span>
          <span class="value">{{ profile.email }}</span>
        </a>
        <a class="link" :href="profile.github" target="_blank" rel="noopener">
          <span class="label">GitHub</span>
          <span class="value">github.com/ikkeiman</span>
        </a>
        <button class="link copy" type="button" @click="copy">
          <span class="label">{{ copied ? 'コピーしました' : 'メールアドレスをコピー' }}</span>
          <span class="value">{{ copied ? '✓' : 'copy' }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { profile } from '@/data/site'

const copied = ref(false)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<style scoped>
.links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.link {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--bg-elev);
  text-align: left;
  font: inherit;
  color: var(--fg);
  cursor: pointer;
  transition: border-color 0.2s var(--ease), transform 0.2s var(--ease);
}

.link:hover {
  border-color: var(--fg);
  transform: translateY(-2px);
  color: var(--fg);
}

.label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  color: var(--fg-faint);
}

.value {
  font-weight: 500;
  word-break: break-all;
}

@media (max-width: 720px) {
  .links {
    grid-template-columns: 1fr;
  }
}
</style>

import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'theme'

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(readStored() ?? systemTheme())

/** OSの設定に追従しつつ、ユーザーが切り替えたら localStorage に保存する */
export function useTheme() {
  watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
  })

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch {
      /* private mode などで保存できなくても動作は続ける */
    }
  }

  return { theme, toggle }
}

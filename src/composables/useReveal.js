import { onBeforeUnmount, onMounted } from 'vue'

/**
 * `.reveal` 要素が画面に入ったら `.is-in` を付ける。
 * 一度表示したら監視を外すので、スクロールのたびに再計算しない。
 */
export function useReveal(rootRef) {
  let observer = null

  onMounted(() => {
    const root = rootRef?.value ?? document
    const targets = root.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}

// Progressive-enhancement scroll-in reveal.
// Content is visible by default (see main.css). To avoid any flash-of-hidden
// content, we only hide elements that START below the fold, then fade them in
// as they scroll into view. Above-the-fold elements are left untouched.
export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  // Respect reduced-motion and older browsers: just leave everything visible.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!('IntersectionObserver' in window)) return

  const start = () => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const vh = window.innerHeight || document.documentElement.clientHeight

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => {
      // Only hide (and animate) what the visitor hasn't reached yet.
      const rect = el.getBoundingClientRect()
      const belowFold = rect.top > vh * 0.92
      if (belowFold) {
        el.classList.add('reveal-hidden')
        io.observe(el)
      }
    })
  }

  // Run after first paint so measurements are accurate.
  if (document.readyState === 'complete') {
    requestAnimationFrame(start)
  } else {
    window.addEventListener('load', () => requestAnimationFrame(start), { once: true })
  }
})

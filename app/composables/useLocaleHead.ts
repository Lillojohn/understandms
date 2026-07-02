import { messages, localeMap, availableLocales, defaultLocale } from '~/locales'

// Sets all per-language <head> data for a page: html lang/dir, title,
// description, Open Graph / Twitter text, canonical, and hreflang alternates
// for every language that currently has a translation.
export function useLocaleHead(code: string) {
  const siteUrl = String(useRuntimeConfig().public.siteUrl || '').replace(/\/$/, '')
  const info = localeMap[code] ?? localeMap[defaultLocale]
  const m = messages[code] ?? messages[defaultLocale]

  const pathFor = (c: string) => (c === defaultLocale ? '/' : `/${c}`)
  const url = `${siteUrl}${pathFor(code)}`

  const alternates = availableLocales.map((l) => ({
    rel: 'alternate',
    hreflang: l.code,
    href: `${siteUrl}${pathFor(l.code)}`,
  }))
  alternates.push({ rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}/` })

  useHead({
    htmlAttrs: { lang: code, dir: info.dir },
    title: m.meta.title,
    link: [{ rel: 'canonical', href: url }, ...alternates],
    meta: [
      { name: 'description', content: m.meta.description },
      { property: 'og:title', content: m.meta.ogTitle },
      { property: 'og:description', content: m.meta.ogDescription },
      { property: 'og:locale', content: info.ogLocale },
      { property: 'og:url', content: url },
      { name: 'twitter:title', content: m.meta.ogTitle },
      { name: 'twitter:description', content: m.meta.ogDescription },
    ],
  })
}

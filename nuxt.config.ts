import tailwindcss from '@tailwindcss/vite'

// The public URL where this site is hosted.
// Used to build absolute URLs for social sharing (og:image), the canonical
// link and hreflang alternates.
const siteUrl = 'https://understandms.org'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  devtools: { enabled: false },
  ssr: true,

  runtimeConfig: {
    public: { siteUrl },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Only truly global <head> data lives here. Everything language-specific
  // (lang, dir, title, description, canonical, og:title/url/locale, hreflang
  // alternates) is set per page via composables/useLocaleHead.ts. The values
  // below act as sensible fallbacks (e.g. for the prerendered 404 page).
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Understanding MS: a clear guide for the people around someone living with it',
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A clear, calm explanation of what multiple sclerosis (MS) means in everyday and working life, written for employers, family and partners.',
        },
        { name: 'theme-color', content: '#fdf8f4' },

        // Shared Open Graph / Twitter image + type (text is set per language).
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${siteUrl}/og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'MS' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${siteUrl}/og-image.png` },
      ],
    },
  },

  // Prerender everything so `nuxi generate` outputs a fully static site.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})

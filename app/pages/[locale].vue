<template>
  <IndexPage :code="code" />
</template>

<script setup lang="ts">
import { isSupported, defaultLocale } from '~/locales'

const route = useRoute()
const code = String(route.params.locale)

// Unknown language, or the default (which lives at `/`, not `/nl`) → 404.
if (!isSupported(code) || code === defaultLocale) {
  throw createError({ statusCode: 404, statusMessage: 'Taal niet gevonden', fatal: true })
}

useLocaleHead(code)
</script>

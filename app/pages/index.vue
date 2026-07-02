<template>
  <IndexPage :code="code" />
</template>

<script setup lang="ts">
import { defaultLocale } from '~/locales'

// The default language lives at the site root (`/`).
const code = defaultLocale
useLocaleHead(code)
</script>

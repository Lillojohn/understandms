<template>
  <div class="print-hide fixed right-3 top-3 z-50 text-left">
    <details class="group relative">
      <summary
        class="flex cursor-pointer list-none items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md"
      >
        <span aria-hidden="true">🌐</span>
        <span>{{ current.name }}</span>
        <span aria-hidden="true" class="text-[var(--color-ink-soft)] transition group-open:rotate-180">▾</span>
      </summary>
      <ul
        class="absolute right-0 mt-2 max-h-[70vh] w-56 overflow-auto rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/10"
        role="listbox"
        :aria-label="switcherLabel"
      >
        <li v-for="l in availableLocales" :key="l.code">
          <a
            :href="hrefFor(l.code)"
            :hreflang="l.code"
            :dir="l.dir"
            :aria-current="l.code === code ? 'true' : undefined"
            class="block rounded-xl px-3 py-2 text-sm transition hover:bg-[var(--color-sand)]"
            :class="l.code === code
              ? 'bg-[var(--color-sand)] font-semibold text-[var(--color-ink)]'
              : 'text-[var(--color-ink-soft)]'"
          >
            {{ l.name }}
          </a>
        </li>
      </ul>
    </details>
  </div>
</template>

<script setup lang="ts">
import { availableLocales, localeMap, defaultLocale, messages } from '~/locales'

const props = defineProps<{ code: string }>()

const current = computed(() => localeMap[props.code] ?? localeMap[defaultLocale])
const switcherLabel = computed(
  () =>
    (messages[props.code] ?? messages[defaultLocale])?.hero?.languageSwitcherLabel ??
    'Choose a language',
)
const hrefFor = (c: string) => (c === defaultLocale ? '/' : `/${c}`)
</script>

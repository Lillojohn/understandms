<template>
  <article
    :id="anchor"
    class="reveal flex h-full scroll-mt-8 flex-col rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:p-7"
  >
    <div
      class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
      :style="{ backgroundColor: tint }"
      aria-hidden="true"
    >
      {{ emoji }}
    </div>
    <h3 class="text-xl font-bold tracking-tight text-[var(--color-ink)]">{{ title }}</h3>
    <p class="mt-1 text-sm font-medium text-[var(--color-warm-700)]">{{ subtitle }}</p>

    <ul class="mt-4 space-y-3 text-[var(--color-ink-soft)]">
      <li v-for="(point, i) in points" :key="i" class="flex gap-3">
        <svg
          class="mt-1 h-4 w-4 shrink-0 text-[var(--color-calm-500)]"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="leading-relaxed">{{ point }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  emoji: string
  title: string
  subtitle: string
  points: string[]
  anchor?: string
  tint?: string
}>()
</script>

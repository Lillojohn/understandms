<template>
  <article
    class="reveal flex flex-col gap-6 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5 sm:p-8 md:flex-row md:items-center md:gap-10"
    :class="flip ? 'md:flex-row-reverse' : ''"
  >
    <!-- Illustration -->
    <div class="w-full shrink-0 md:w-2/5">
      <div class="rounded-2xl bg-[var(--color-sand)]/60 p-4 sm:p-6">
        <slot name="illustration" />
      </div>
    </div>

    <!-- Text -->
    <div class="md:w-3/5">
      <div class="mb-2 flex items-center gap-3">
        <span class="text-2xl" aria-hidden="true">{{ emoji }}</span>
        <h3 class="text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
          {{ title }}
        </h3>
      </div>
      <p class="text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
        <slot />
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  emoji: string
  title: string
  /** Place the illustration on the right instead of the left (for alternating rows). */
  flip?: boolean
}>()
</script>

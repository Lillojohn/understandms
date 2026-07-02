<template>
  <svg
    viewBox="0 0 240 160"
    aria-hidden="true"
    class="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- "Most days" battery: full. (Labels are intentionally text-free so the
         illustration stays language-neutral across all locales.) -->
    <g stroke="var(--color-calm-500)" stroke-width="3" fill="none">
      <rect x="16" y="44" width="64" height="86" rx="10" fill="var(--color-cream)" />
      <rect x="36" y="38" width="24" height="8" rx="3" fill="var(--color-calm-500)" />
    </g>
    <rect x="23" y="60" width="50" height="63" rx="5" fill="var(--color-calm-300)" />

    <!-- "With MS" battery: starts lower and drains faster -->
    <g stroke="var(--color-warm-600)" stroke-width="3" fill="none">
      <rect x="128" y="44" width="64" height="86" rx="10" fill="var(--color-cream)" />
      <rect x="148" y="38" width="24" height="8" rx="3" fill="var(--color-warm-600)" />
    </g>
    <!-- only partly filled -->
    <rect x="135" y="98" width="50" height="25" rx="5" fill="var(--color-warm-400)" />

    <!-- arrow showing faster drain -->
    <g stroke="var(--color-warm-600)" stroke-width="2.5" fill="none" stroke-linecap="round">
      <path d="M204 64 v40" />
      <path d="M198 96 l6 9 6 -9" stroke-linejoin="round" />
    </g>
  </svg>
</template>

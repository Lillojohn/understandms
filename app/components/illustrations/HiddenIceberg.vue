<template>
  <svg
    viewBox="0 0 240 160"
    aria-hidden="true"
    class="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Water line -->
    <line x1="0" y1="62" x2="240" y2="62" stroke="var(--color-calm-300)" stroke-width="2" />
    <rect x="0" y="62" width="240" height="98" fill="var(--color-calm-100)" opacity="0.7" />

    <!-- Tip above water: what people see -->
    <path
      d="M120 18 L150 62 L90 62 Z"
      fill="var(--color-cream)"
      stroke="var(--color-warm-500)"
      stroke-width="2.5"
      stroke-linejoin="round"
    />
    <!-- Mass below water: the hidden part -->
    <path
      d="M90 62 L150 62 L168 100 L150 132 L96 140 L70 108 Z"
      fill="var(--color-calm-300)"
      stroke="var(--color-calm-500)"
      stroke-width="2.5"
      stroke-linejoin="round"
      opacity="0.92"
    />  </svg>
</template>

<template>
  <svg
    viewBox="0 0 240 160"
    aria-hidden="true"
    class="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Three "days" in a row: sunny, cloudy, rainy -->

    <!-- Day 1: sun -->
    <g>
      <circle cx="44" cy="60" r="16" fill="var(--color-warm-300)" stroke="var(--color-warm-500)" stroke-width="2" />
      <g stroke="var(--color-warm-500)" stroke-width="2.5" stroke-linecap="round">
        <line x1="44" y1="30" x2="44" y2="38" />
        <line x1="44" y1="82" x2="44" y2="90" />
        <line x1="14" y1="60" x2="22" y2="60" />
        <line x1="66" y1="60" x2="74" y2="60" />
        <line x1="23" y1="39" x2="29" y2="45" />
        <line x1="59" y1="75" x2="65" y2="81" />
      </g>
    </g>

    <!-- Day 2: cloud -->
    <g>
      <path
        d="M104 70 a16 16 0 0 1 30 -6 a13 13 0 0 1 6 25 h-34 a13 13 0 0 1 -2 -19 z"
        fill="var(--color-sand)"
        stroke="var(--color-ink-soft)"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </g>

    <!-- Day 3: rain cloud -->
    <g>
      <path
        d="M180 64 a16 16 0 0 1 30 -6 a13 13 0 0 1 6 25 h-34 a13 13 0 0 1 -2 -19 z"
        fill="var(--color-calm-200)"
        stroke="var(--color-calm-500)"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <g stroke="var(--color-calm-500)" stroke-width="2.5" stroke-linecap="round">
        <line x1="188" y1="92" x2="184" y2="102" />
        <line x1="200" y1="92" x2="196" y2="102" />
        <line x1="212" y1="92" x2="208" y2="102" />
      </g>
    </g>

    <!-- baseline -->
    <line x1="16" y1="134" x2="224" y2="134" stroke="var(--color-warm-200)" stroke-width="2" stroke-dasharray="4 6" />
  </svg>
</template>

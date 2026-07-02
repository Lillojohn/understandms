<template>
  <svg
    viewBox="0 0 240 160"
    aria-hidden="true"
    class="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- The inner nerve (the wire core) -->
    <line
      x1="16"
      y1="80"
      x2="224"
      y2="80"
      stroke="var(--color-warm-500)"
      stroke-width="6"
      stroke-linecap="round"
    />

    <!-- Healthy insulation segments (myelin) -->
    <g fill="var(--color-calm-300)" stroke="var(--color-calm-500)" stroke-width="2">
      <rect x="22" y="64" width="34" height="32" rx="9" />
      <rect x="64" y="64" width="34" height="32" rx="9" />
      <!-- gap where insulation is damaged (no sheath) -->
      <rect x="150" y="64" width="34" height="32" rx="9" />
      <rect x="192" y="64" width="26" height="32" rx="9" />
    </g>

    <!-- Damaged / frayed section highlighted -->
    <g stroke="var(--color-warm-600)" stroke-width="2.5" stroke-linecap="round">
      <path d="M112 70 l6 -10" />
      <path d="M122 64 l3 -12" />
      <path d="M132 70 l7 -9" />
      <path d="M116 92 l5 11" />
      <path d="M128 92 l3 12" />
      <path d="M138 90 l8 10" />
    </g>

    <!-- Warning spark over the damaged gap -->
    <path
      d="M124 40 l-8 14 h9 l-6 16 16 -20 h-9 z"
      fill="var(--color-warm-400)"
      stroke="var(--color-warm-600)"
      stroke-width="1.5"
      stroke-linejoin="round"
    />

    <!-- Signal travelling: bright before the gap, faded after -->
    <circle cx="40" cy="80" r="4.5" fill="var(--color-warm-700)" />
    <circle cx="82" cy="80" r="4.5" fill="var(--color-warm-700)" />
    <circle cx="167" cy="80" r="4.5" fill="var(--color-warm-300)" opacity="0.6" />
    <circle cx="205" cy="80" r="4.5" fill="var(--color-warm-200)" opacity="0.4" />
  </svg>
</template>

<template>
  <div class="overflow-x-hidden">
    <LanguageSwitcher :code="code" />

    <!-- ============ HERO ============ -->
    <header class="relative">
      <!-- soft decorative blobs -->
      <div aria-hidden="true" class="print-hide pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-warm-100)] blur-3xl opacity-60"></div>
        <div class="absolute -right-20 top-32 h-72 w-72 rounded-full bg-[var(--color-calm-100)] blur-3xl opacity-70"></div>
      </div>

      <div class="relative mx-auto max-w-3xl px-5 pt-20 pb-14 text-center sm:pt-28">
        <p class="mb-4 inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-[var(--color-warm-700)] ring-1 ring-[var(--color-warm-200)]">
          {{ m.hero.badge }}
        </p>
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {{ m.hero.h1 }}
        </h1>
        <p class="mt-4 text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
          {{ m.hero.intro }}
        </p>

        <!-- audience chips -->
        <nav class="mt-8 flex flex-wrap justify-center gap-3" :aria-label="m.hero.navLabel">
          <a
            v-for="chip in chips"
            :key="chip.href"
            :href="chip.href"
            class="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--color-ink)] shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {{ m.chips[chip.key] }}
          </a>
        </nav>
      </div>
    </header>

    <!-- ============ CORE IDEA ============ -->
    <section class="mx-auto max-w-3xl px-5 py-10">
      <div class="reveal print-light rounded-3xl bg-[var(--color-ink)] p-7 text-center text-[var(--color-cream)] sm:p-10">
        <h2 class="text-sm font-semibold uppercase tracking-widest text-[var(--color-warm-300)]">
          {{ m.core.heading }}
        </h2>
        <p class="mt-3 text-xl leading-relaxed sm:text-2xl">
          {{ m.core.body }}
        </p>
        <p class="mt-4 text-base text-[var(--color-cream)]/70">
          {{ m.core.note }}
        </p>
      </div>
    </section>

    <!-- ============ METAPHORS ============ -->
    <section class="mx-auto max-w-5xl px-5 py-8">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {{ m.metaphorsIntro.heading }}
        </h2>
        <p class="mt-2 text-[var(--color-ink-soft)]">
          {{ m.metaphorsIntro.sub }}
        </p>
      </div>

      <div class="space-y-6">
        <MetaphorCard
          v-for="(meta, i) in metaphorMeta"
          :key="i"
          :emoji="meta.emoji"
          :title="m.metaphors[i].title"
          :flip="meta.flip"
        >
          <template #illustration><component :is="meta.illustration" /></template>
          {{ m.metaphors[i].body }}
        </MetaphorCard>
      </div>
    </section>

    <!-- ============ DAY TO DAY ============ -->
    <section class="mx-auto max-w-5xl px-5 py-12">
      <div class="reveal rounded-3xl bg-[var(--color-sand)]/70 p-7 sm:p-10">
        <h2 class="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {{ m.dayToDay.heading }}
        </h2>
        <p class="mt-2 max-w-2xl text-[var(--color-ink-soft)]">
          {{ m.dayToDay.intro }}
        </p>
        <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(item, i) in m.dayToDay.items"
            :key="i"
            class="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5"
          >
            <p class="font-semibold text-[var(--color-ink)]">
              <span class="mr-2" aria-hidden="true">{{ dayEmojis[i] }}</span>{{ item.title }}
            </p>
            <p class="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ AUDIENCES ============ -->
    <section class="mx-auto max-w-6xl px-5 py-8">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          {{ m.audiences.heading }}
        </h2>
        <p class="mt-2 text-[var(--color-ink-soft)]">
          {{ m.audiences.sub }}
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <AudienceCard
          v-for="a in audienceMeta"
          :key="a.anchor"
          :anchor="a.anchor"
          :emoji="a.emoji"
          :title="m.audiences[a.key].title"
          :subtitle="m.audiences[a.key].subtitle"
          :tint="a.tint"
          :points="m.audiences[a.key].points"
        />
      </div>
    </section>

    <!-- ============ TAKEAWAYS ============ -->
    <section class="mx-auto max-w-3xl px-5 py-12">
      <div class="reveal print-light rounded-3xl bg-[var(--color-calm-500)] p-7 text-[var(--color-cream)] sm:p-10">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">{{ takeawaysHeading }}</h2>
        <ul class="mt-6 space-y-4">
          <li v-for="(t, i) in m.takeaways.items" :key="i" class="flex items-start gap-4">
            <span
              class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold"
              aria-hidden="true"
            >{{ i + 1 }}</span>
            <span class="text-lg leading-relaxed">{{ t }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ MORE INFO / SOURCES ============ -->
    <section class="mx-auto max-w-3xl px-5 pb-4">
      <div class="reveal rounded-3xl bg-white/70 p-7 ring-1 ring-black/5 sm:p-8">
        <h2 class="text-xl font-bold tracking-tight text-[var(--color-ink)]">{{ m.more.heading }}</h2>
        <p class="mt-2 text-[var(--color-ink-soft)]">
          {{ m.more.intro }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-3">
          <li v-for="source in sources" :key="source.href">
            <a
              :href="source.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-[var(--color-sand)]/70 px-4 py-2 text-sm font-semibold text-[var(--color-warm-800)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              {{ source.label }}
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="mx-auto max-w-3xl px-5 pb-16 pt-8 text-center">
      <p class="text-[var(--color-ink-soft)]">
        {{ m.footer.disclaimer }}
      </p>
      <div class="print-hide mt-6">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2 text-sm font-semibold text-[var(--color-cream)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          @click="printPage"
        >
          <span aria-hidden="true">🖨️</span> {{ m.footer.printButton }}
        </button>
      </div>
      <p class="mt-6 text-sm text-[var(--color-ink-soft)]">
        {{ m.footer.madeToShare }} · {{ m.footer.updated }}
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { messages, defaultLocale } from '~/locales'
import DamagedWire from '~/components/illustrations/DamagedWire.vue'
import DrainingBattery from '~/components/illustrations/DrainingBattery.vue'
import HiddenIceberg from '~/components/illustrations/HiddenIceberg.vue'
import ChangingWeather from '~/components/illustrations/ChangingWeather.vue'

const props = withDefaults(defineProps<{ code?: string }>(), { code: defaultLocale })

// Resolve messages for the active language, falling back to the default locale.
const m = computed(() => messages[props.code] ?? messages[defaultLocale])

// Language-independent bits (emojis, illustrations, colours, anchors, links).
const chips = [
  { key: 'employers', href: '#werkgevers' },
  { key: 'family', href: '#familie' },
  { key: 'partners', href: '#partners' },
] as const

const metaphorMeta = [
  { emoji: '🔌', illustration: DamagedWire, flip: false },
  { emoji: '🔋', illustration: DrainingBattery, flip: true },
  { emoji: '🧊', illustration: HiddenIceberg, flip: false },
  { emoji: '🌦️', illustration: ChangingWeather, flip: true },
]

const dayEmojis = ['😴', '🌡️', '🧠', '🦵', '👁️', '🔁']

const audienceMeta = [
  { anchor: 'werkgevers', emoji: '💼', tint: 'var(--color-warm-100)', key: 'employers' },
  { anchor: 'familie', emoji: '🏡', tint: 'var(--color-calm-100)', key: 'family' },
  { anchor: 'partners', emoji: '💞', tint: 'var(--color-warm-100)', key: 'partners' },
] as const

// Trusted MS resources per language (labels are proper nouns, left untranslated).
// Every language gets the international federation; languages where we know a
// solid national organization get that one too. MSIF's site lists national
// member organizations for everyone else.
const MSIF = { label: 'MS International Federation', href: 'https://www.msif.org' }
const sourcesByLocale: Record<string, { label: string; href: string }[]> = {
  en: [
    MSIF,
    { label: 'National MS Society (US)', href: 'https://www.nationalmssociety.org' },
    { label: 'MS Society (UK)', href: 'https://www.mssociety.org.uk' },
  ],
  nl: [
    { label: 'MS Vereniging Nederland', href: 'https://www.msvereniging.nl' },
    { label: 'Nationaal MS Fonds', href: 'https://nationaalmsfonds.nl' },
    { label: 'Stichting MS Research', href: 'https://www.msresearch.nl' },
  ],
  de: [{ label: 'DMSG', href: 'https://www.dmsg.de' }, MSIF],
  fr: [{ label: 'Fondation ARSEP', href: 'https://www.arsep.org' }, MSIF],
  it: [{ label: 'AISM', href: 'https://www.aism.it' }, MSIF],
  es: [{ label: 'Esclerosis Múltiple España', href: 'https://esclerosismultiple.com' }, MSIF],
}
const sources = computed(() => sourcesByLocale[props.code] ?? [MSIF])

const takeawaysHeading = computed(() =>
  m.value.takeaways.headingTemplate.replace('{count}', String(m.value.takeaways.items.length)),
)

const printPage = () => {
  if (typeof window !== 'undefined') window.print()
}
</script>

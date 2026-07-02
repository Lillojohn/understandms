// Registry of the 40 supported languages plus a loader that picks up every
// translation JSON present in this folder. A language only appears in the UI
// once its `<code>.json` file exists (see `availableLocales`), so partial
// rollouts never link to missing pages.

export interface LocaleInfo {
  /** BCP-47 language subtag, also the route segment (e.g. `/de`). */
  code: string
  /** Endonym shown in the language switcher. */
  name: string
  /** Text direction. */
  dir: 'ltr' | 'rtl'
  /** Value for the `og:locale` meta tag. */
  ogLocale: string
}

export const defaultLocale = 'en'

export const locales: LocaleInfo[] = [
  { code: 'en', name: 'English', dir: 'ltr', ogLocale: 'en_US' },
  { code: 'nl', name: 'Nederlands', dir: 'ltr', ogLocale: 'nl_NL' },
  { code: 'zh', name: '中文', dir: 'ltr', ogLocale: 'zh_CN' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', ogLocale: 'hi_IN' },
  { code: 'es', name: 'Español', dir: 'ltr', ogLocale: 'es_ES' },
  { code: 'fr', name: 'Français', dir: 'ltr', ogLocale: 'fr_FR' },
  { code: 'ar', name: 'العربية', dir: 'rtl', ogLocale: 'ar_AR' },
  { code: 'bn', name: 'বাংলা', dir: 'ltr', ogLocale: 'bn_BD' },
  { code: 'pt', name: 'Português', dir: 'ltr', ogLocale: 'pt_PT' },
  { code: 'ru', name: 'Русский', dir: 'ltr', ogLocale: 'ru_RU' },
  { code: 'ur', name: 'اردو', dir: 'rtl', ogLocale: 'ur_PK' },
  { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr', ogLocale: 'id_ID' },
  { code: 'de', name: 'Deutsch', dir: 'ltr', ogLocale: 'de_DE' },
  { code: 'ja', name: '日本語', dir: 'ltr', ogLocale: 'ja_JP' },
  { code: 'sw', name: 'Kiswahili', dir: 'ltr', ogLocale: 'sw_KE' },
  { code: 'mr', name: 'मराठी', dir: 'ltr', ogLocale: 'mr_IN' },
  { code: 'te', name: 'తెలుగు', dir: 'ltr', ogLocale: 'te_IN' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr', ogLocale: 'tr_TR' },
  { code: 'ta', name: 'தமிழ்', dir: 'ltr', ogLocale: 'ta_IN' },
  { code: 'vi', name: 'Tiếng Việt', dir: 'ltr', ogLocale: 'vi_VN' },
  { code: 'ko', name: '한국어', dir: 'ltr', ogLocale: 'ko_KR' },
  { code: 'it', name: 'Italiano', dir: 'ltr', ogLocale: 'it_IT' },
  { code: 'fa', name: 'فارسی', dir: 'rtl', ogLocale: 'fa_IR' },
  { code: 'ha', name: 'Hausa', dir: 'ltr', ogLocale: 'ha_NG' },
  { code: 'gu', name: 'ગુજરાતી', dir: 'ltr', ogLocale: 'gu_IN' },
  { code: 'th', name: 'ไทย', dir: 'ltr', ogLocale: 'th_TH' },
  { code: 'pl', name: 'Polski', dir: 'ltr', ogLocale: 'pl_PL' },
  { code: 'uk', name: 'Українська', dir: 'ltr', ogLocale: 'uk_UA' },
  { code: 'ro', name: 'Română', dir: 'ltr', ogLocale: 'ro_RO' },
  { code: 'el', name: 'Ελληνικά', dir: 'ltr', ogLocale: 'el_GR' },
  { code: 'cs', name: 'Čeština', dir: 'ltr', ogLocale: 'cs_CZ' },
  { code: 'sv', name: 'Svenska', dir: 'ltr', ogLocale: 'sv_SE' },
  { code: 'hu', name: 'Magyar', dir: 'ltr', ogLocale: 'hu_HU' },
  { code: 'he', name: 'עברית', dir: 'rtl', ogLocale: 'he_IL' },
  { code: 'ms', name: 'Bahasa Melayu', dir: 'ltr', ogLocale: 'ms_MY' },
  { code: 'tl', name: 'Filipino', dir: 'ltr', ogLocale: 'tl_PH' },
  { code: 'da', name: 'Dansk', dir: 'ltr', ogLocale: 'da_DK' },
  { code: 'fi', name: 'Suomi', dir: 'ltr', ogLocale: 'fi_FI' },
  { code: 'no', name: 'Norsk', dir: 'ltr', ogLocale: 'nb_NO' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', dir: 'ltr', ogLocale: 'pa_IN' },
]

export const localeMap: Record<string, LocaleInfo> = Object.fromEntries(
  locales.map((l) => [l.code, l]),
)

// Eagerly bundle every translation file that exists in this folder.
const files = import.meta.glob('./*.json', { eager: true }) as Record<string, { default: unknown }>
export const messages: Record<string, any> = {}
for (const path in files) {
  const code = path.replace(/^\.\//, '').replace(/\.json$/, '')
  messages[code] = files[path].default
}

/** Languages that have both a registry entry and a translation file. */
export const availableLocales: LocaleInfo[] = locales.filter((l) => l.code in messages)

export function isSupported(code: string): boolean {
  return code in localeMap && code in messages
}

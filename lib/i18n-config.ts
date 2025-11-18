// Configuración centralizada de internacionalización
export const SUPPORTED_LANGUAGES = ['es', 'en', 'ru'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

// Información de idiomas para UI
export const LANGUAGE_INFO = {
  es: {
    name: 'Español',
    flag: '🇪🇸',
    code: 'ES',
    region: 'España y Latinoamérica'
  },
  en: {
    name: 'English', 
    flag: '🇺🇸',
    code: 'EN',
    region: 'United States & International'
  },
  ru: {
    name: 'Русский',
    flag: '🇷🇺', 
    code: 'RU',
    region: 'Россия и СНГ'
  }
} as const

// Nombres de idiomas en su propio idioma
export const LANGUAGE_NAMES = {
  es: 'Español',
  en: 'English',
  ru: 'Русский'
} as const

// Storage keys
export const STORAGE_KEYS = {
  LANGUAGE: 'firstclass-language',
  LANGUAGE_SUGGESTION_DISMISSED: 'language-suggestion-dismissed'
} as const

// Configuración de detección de idioma
export const LANGUAGE_DETECTION = {
  // Códigos de idioma del navegador que mapean a nuestros idiomas
  BROWSER_LANGUAGE_MAP: {
    'es': 'es',
    'es-ES': 'es',
    'es-MX': 'es',
    'es-AR': 'es',
    'es-CO': 'es',
    'en': 'en',
    'en-US': 'en',
    'en-GB': 'en',
    'ru': 'ru',
    'ru-RU': 'ru'
  } as Record<string, SupportedLanguage>,
  
  // Idioma por defecto
  DEFAULT_LANGUAGE: 'es' as SupportedLanguage,
  
  // Timeout para detección (ms)
  DETECTION_TIMEOUT: 3000
} as const
import { headers } from 'next/headers'
import { translations } from './translations'

export async function getLanguageFromHeaders(): Promise<string> {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || 'es'
  
  // Detectar idioma principal del navegador
  const browserLang = acceptLanguage.split(',')[0].split('-')[0]
  
  // Validar que sea uno de nuestros idiomas soportados
  const supportedLanguages = ['es', 'en', 'ru']
  return supportedLanguages.includes(browserLang) ? browserLang : 'es'
}

export function getTranslations(lang: string = 'es') {
  return (key: string): string => {
    try {
      const translationSet = translations[lang as keyof typeof translations]
      
      if (!translationSet) {
        console.warn(`Language '${lang}' not found, falling back to Spanish`)
        const fallbackSet = translations['es']
        return fallbackSet?.[key] || key
      }
      
      const result = translationSet[key]
      
      if (result === undefined) {
        console.warn(`Translation key '${key}' not found in language '${lang}'`)
        return key // Return the key if translation not found
      }
      
      return result
    } catch (error) {
      console.error(`Error getting translation for key '${key}' in language '${lang}':`, error)
      return key // Return the key as fallback
    }
  }
}
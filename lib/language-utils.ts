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
    const keys = key.split('.')
    let result: any = translations[lang as keyof typeof translations]
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key // Retornar la clave si no se encuentra la traducción
      }
    }
    
    return typeof result === 'string' ? result : key
  }
}
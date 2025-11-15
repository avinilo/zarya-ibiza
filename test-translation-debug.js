const { translations } = require('./lib/translations.ts')

// Test the translation function
const lang = 'en'
const testKey = 'privacy.title'

console.log('Testing translation function...')
console.log('Language:', lang)
console.log('Test key:', testKey)
console.log('Available languages:', Object.keys(translations))

// Test the function
function getTranslations(lang = 'es') {
  return (key) => {
    try {
      const translationSet = translations[lang]
      
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

const t = getTranslations('en')
console.log('Testing t("privacy.title"):', t('privacy.title'))
console.log('Testing t("privacy.section1.title"):', t('privacy.section1.title'))
console.log('Testing t("nav.home"):', t('nav.home'))
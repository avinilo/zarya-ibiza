'use client'

import { useEffect, useState } from 'react'
import { Globe, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguageNew'
import { useBrowserLanguageDetection, getDetectedLanguageInfo } from '@/hooks/useBrowserLanguageDetection'
import { Language } from '@/lib/translations'

const getSuggestionMessage = (currentLang: Language, suggestedLang: Language): string => {
  const messages = {
    es: {
      es: 'Estás viendo la web en Español',
      en: '¿Prefieres ver la web en Inglés?',
      ru: '¿Prefieres ver la web en Ruso?'
    },
    en: {
      es: 'You are viewing the website in Spanish',
      en: 'You are viewing the website in English',
      ru: 'Would you prefer to view the website in Russian?'
    },
    ru: {
      es: 'Вы просматриваете сайт на испанском',
      en: 'Вы просматриваете сайт на английском',
      ru: 'Вы просматриваете сайт на русском'
    }
  }
  
  // Si el idioma actual es diferente al sugerido, mostrar sugerencia
  if (currentLang !== suggestedLang) {
    return messages[currentLang]?.[suggestedLang] || messages['en']?.[suggestedLang] || 'Would you like to switch language?'
  }
  
  // Si ya está en el idioma correcto, no mostrar nada
  return ''
}

const getSwitchButtonText = (currentLang: Language): string => {
  const texts = {
    es: 'Cambiar',
    en: 'Switch',
    ru: 'Переключить'
  }
  return texts[currentLang] || 'Switch'
}

export default function LanguageSuggestion() {
  const [isVisible, setIsVisible] = useState(false)
  const { language: currentLang, changeLanguage } = useLanguage()
  const { language: detectedLang } = useBrowserLanguageDetection()
  
  // Verificar si ya se descartó esta sugerencia
  const getDismissKey = (lang: Language) => `language-suggestion-dismissed-${lang}`
  
  useEffect(() => {
    if (currentLang === detectedLang) {
      // Ya está en el idioma correcto, no mostrar sugerencia
      setIsVisible(false)
      return
    }
    
    // Verificar si el usuario ya descartó esta sugerencia
    const dismissed = localStorage.getItem(getDismissKey(detectedLang))
    if (dismissed) {
      setIsVisible(false)
      return
    }
    
    // Mostrar sugerencia con delay para no ser intrusivo
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [currentLang, detectedLang])
  
  const handleSwitch = () => {
    changeLanguage(detectedLang)
    setIsVisible(false)
  }
  
  const handleDismiss = () => {
    // Guardar que el usuario descartó esta sugerencia para este idioma
    localStorage.setItem(getDismissKey(detectedLang), 'true')
    setIsVisible(false)
  }
  
  if (!isVisible || currentLang === detectedLang) return null
  
  const detectedInfo = getDetectedLanguageInfo(detectedLang)
  const message = getSuggestionMessage(currentLang, detectedLang)
  
  return (
    <div className="fixed top-20 left-4 z-40 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-yellow-600/20 p-4 animate-fade-in max-w-xs">
      <div className="flex items-start space-x-3">
        <Globe className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-3">
          <div className="text-sm text-yellow-700">
            <p className="font-medium mb-1 font-body">{message}</p>
            <p className="text-xs opacity-75">
              Detectado: {detectedInfo.name} {detectedInfo.flag}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSwitch}
              className="text-xs bg-yellow-600 text-white px-3 py-1.5 rounded-md hover:bg-yellow-600/90 transition-colors duration-200 font-medium font-body"
            >
              {getSwitchButtonText(currentLang)} a {detectedInfo.name}
            </button>
            <button
              onClick={handleDismiss}
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200 px-2 py-1.5"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
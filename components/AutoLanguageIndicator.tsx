'use client'

import { useEffect, useState } from 'react'
import { Globe, X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguageOptimized'
import { Language } from '@/lib/translations'

const getLanguageName = (lang: string): string => {
  const names: { [key: string]: string } = {
    'es': 'Español',
    'en': 'Inglés', 
    'ru': 'Ruso'
  }
  return names[lang] || lang
}

const getSuggestedLanguage = (currentLang: Language, locationLang: Language): Language | null => {
  // Si el idioma de ubicación es diferente del actual, sugerir el de ubicación
  if (locationLang !== currentLang) {
    return locationLang
  }
  return null
}

const getMessageText = (suggestedLang: Language, currentLang: Language): string => {
  // MENSAJES MINIMALISTAS - MAXIMA SENCILLEZ
  const messages = {
    es: 'Español?',  // 1 palabra
    en: 'English?',  // 1 palabra  
    ru: 'Русский?'   // 1 palabra
  }
  return messages[suggestedLang] || 'Switch?'
}

const getButtonText = (suggestedLang: Language): string => {
  // BOTONES ULTRA SIMPLIFICADOS
  const buttons = {
    es: 'Sí',
    en: 'Yes',
    ru: 'Да'
  }
  return buttons[suggestedLang] || 'Yes'
}

export default function AutoLanguageIndicator() {
  const [isVisible, setIsVisible] = useState(false)
  const [suggestedLang, setSuggestedLang] = useState<Language | null>(null)
  const { language: currentLang, changeLanguage, detectedLanguage } = useLanguage()

  useEffect(() => {
    const dismissed = localStorage.getItem(`language-suggestion-dismissed-${detectedLanguage}`)
    if (dismissed === 'true') return

    const suggested = getSuggestedLanguage(currentLang, detectedLanguage)
    
    if (suggested) {
      setSuggestedLang(suggested)
      setIsVisible(true)
      
      // Ocultar automáticamente después de 4 segundos (antes eran 8)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [detectedLanguage, currentLang])

  // Escuchar cambios de idioma
  useEffect(() => {
    const suggested = getSuggestedLanguage(currentLang, detectedLanguage)
    if (suggested) {
      setSuggestedLang(suggested)
    } else {
      setSuggestedLang(null)
    }
  }, [currentLang, detectedLanguage])

  const handleAccept = () => {
    if (!suggestedLang) return
    changeLanguage(suggestedLang)
    setIsVisible(false)
  }

  const handleClose = () => {
    localStorage.setItem(`language-suggestion-dismissed-${detectedLanguage}`, 'true')
    setIsVisible(false)
  }

  // Texto para el botón de cerrar ULTRA SIMPLIFICADO
  const getCloseButtonText = (suggestedLang: Language): string => {
    const texts = {
      es: 'No',
      en: 'No',
      ru: 'Нет'
    }
    return texts[suggestedLang] || 'No'
  }

  if (!isVisible || !suggestedLang) return null

  const detectedInfo = getLanguageName(suggestedLang)
  const message = getMessageText(suggestedLang, currentLang)
  const buttonText = getButtonText(suggestedLang)
  const closeButtonText = getCloseButtonText(suggestedLang)

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-sm rounded-full shadow-lg px-3 py-1.5 animate-fade-in">
      <div className="flex items-center space-x-2">
        <span className="text-xs font-medium text-white font-body">
          {message}
        </span>
        <div className="flex items-center space-x-1">
          <button
            onClick={handleAccept}
            className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded-full hover:bg-gray-200 transition-colors duration-150 font-medium font-body"
          >
            {buttonText}
          </button>
          <button
            onClick={handleClose}
            className="text-[10px] text-gray-300 hover:text-white transition-colors duration-150 px-1"
            title={closeButtonText}
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

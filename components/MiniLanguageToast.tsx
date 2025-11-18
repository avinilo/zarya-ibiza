'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguageOptimized'
import { Language } from '@/lib/translations'

const getSuggestedLanguage = (currentLang: Language, detectedLang: Language): Language | null => {
  if (detectedLang !== currentLang) {
    return detectedLang
  }
  return null
}

// MENSAJES MINIMALISTAS - MAXIMA SENCILLEZ
const getMiniMessage = (suggestedLang: Language): string => {
  const messages = {
    es: 'Español?',  // 1 palabra
    en: 'English?',  // 1 palabra  
    ru: 'Русский?'   // 1 palabra
  }
  return messages[suggestedLang] || 'Switch?'
}

// BOTONES MINIMALISTAS
const getMiniButtons = (suggestedLang: Language) => {
  return {
    accept: suggestedLang === 'es' ? 'Sí' : suggestedLang === 'en' ? 'Yes' : 'Да',
    dismiss: suggestedLang === 'es' ? 'No' : suggestedLang === 'en' ? 'No' : 'Нет'
  }
}

export default function MiniLanguageToast() {
  const [isVisible, setIsVisible] = useState(false)
  const { language: currentLang, changeLanguage, detectedLanguage } = useLanguage()
  
  // Verificar si ya se descartó esta sugerencia
  const getDismissKey = (lang: Language) => `mini-lang-dismissed-${lang}`
  
  useEffect(() => {
    if (currentLang === detectedLanguage) {
      setIsVisible(false)
      return
    }
    
    const dismissed = localStorage.getItem(getDismissKey(detectedLanguage))
    if (dismissed) {
      setIsVisible(false)
      return
    }
    
    // Mostrar con delay muy corto
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    
    // Auto-ocultar después de 4 segundos
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [currentLang, detectedLanguage])
  
  const handleAccept = () => {
    changeLanguage(detectedLanguage)
    setIsVisible(false)
  }
  
  const handleDismiss = () => {
    localStorage.setItem(getDismissKey(detectedLanguage), 'true')
    setIsVisible(false)
  }
  
  if (!isVisible) return null
  
  const suggestedLang = getSuggestedLanguage(currentLang, detectedLanguage)
  if (!suggestedLang) return null
  
  const message = getMiniMessage(suggestedLang)
  const buttons = getMiniButtons(suggestedLang)
  
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
            {buttons.accept}
          </button>
          <button
            onClick={handleDismiss}
            className="text-[10px] text-gray-300 hover:text-white transition-colors duration-150 px-1"
            title={buttons.dismiss}
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
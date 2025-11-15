'use client'

import { useEffect, useState } from 'react'
import { Globe, X } from 'lucide-react'

const getLanguageName = (lang: string): string => {
  const names: { [key: string]: string } = {
    'es': 'Español',
    'en': 'Inglés', 
    'ru': 'Ruso'
  }
  return names[lang] || lang
}

export default function AutoLanguageIndicator() {
  const [isVisible, setIsVisible] = useState(false)
  const [detectedLang, setDetectedLang] = useState<string | null>(null)

  useEffect(() => {
    // Detección simple basada en el navegador
    const browserLang = navigator.language.substring(0, 2)
    const supportedLangs = ['es', 'en', 'ru']
    const detected = supportedLangs.includes(browserLang) ? browserLang : 'en'
    
    // Obtener idioma actual del localStorage o usar 'es' por defecto
    const currentLang = localStorage.getItem('language') || 'es'
    
    // Mostrar solo si el idioma detectado es diferente del actual
    if (detected !== currentLang) {
      setDetectedLang(detected)
      setIsVisible(true)
      
      // Ocultar automáticamente después de 8 segundos
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    if (detectedLang) {
      localStorage.setItem('language', detectedLang)
      window.dispatchEvent(new CustomEvent('languageChange', { detail: detectedLang }))
    }
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible || !detectedLang) return null

  return (
    <div className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-firstclass-primary/20 px-4 py-2 animate-fade-in">
      <div className="flex items-center space-x-3">
        <Globe className="w-4 h-4 text-firstclass-primary flex-shrink-0" />
        <div className="flex items-center space-x-2">
          <span className="text-xs text-firstclass-secondary font-medium">
            ¿Ver en {getLanguageName(detectedLang)}?
          </span>
          <button
            onClick={handleAccept}
            className="text-xs bg-firstclass-primary text-white px-3 py-1 rounded-full hover:bg-firstclass-primary/90 transition-colors duration-200"
          >
            Cambiar
          </button>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'

export function LanguageDetectionLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Ocultar el loader después de 3 segundos máximo
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-yellow-500/20 animate-fade-in">
      <div className="flex items-center space-x-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <span className="text-sm text-yellow-700 font-medium font-body">
          Detectando ubicación...
        </span>
      </div>
    </div>
  )
}
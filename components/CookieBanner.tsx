'use client'

import { useState, useEffect } from 'react'
import { Cookie, Settings, X, Shield, Eye, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  tracking: boolean
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    tracking: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('firstclass-cookie-consent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      tracking: true
    }
    savePreferences(allPreferences)
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      tracking: false
    }
    savePreferences(necessaryOnly)
    setIsVisible(false)
  }

  const handleSaveSettings = () => {
    savePreferences(preferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('firstclass-cookie-consent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString()
    }))

    // Here you would typically initialize/disable tracking services
    // based on the user's preferences
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Google Analytics enabled')
    }
    if (prefs.tracking) {
      // Initialize tracking services
      console.log('Tracking services enabled')
    }
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="container-custom py-4">
          {!showSettings ? (
            // Main banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-firstclass-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cookie className="w-5 h-5 text-firstclass-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-firstclass-secondary mb-2">
                    Utilizamos cookies para mejorar su experiencia
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Utilizamos cookies técnicas necesarias para el funcionamiento del sitio, 
                    y cookies analíticas (Google Analytics) y de tracking para mejorar nuestros servicios. 
                    Puede gestionar sus preferencias o consultar más información en nuestra{' '}
                    <Link 
                      href="/politica-privacidad" 
                      className="text-firstclass-primary hover:text-firstclass-secondary underline"
                    >
                      política de privacidad
                    </Link>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-nowrap gap-1 xs:gap-2 lg:flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-1 xs:gap-2 px-2 xs:px-3 sm:px-4 py-2 text-xs xs:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-1 sm:flex-none min-w-0"
                >
                  <Settings className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                  <span className="truncate">Configurar</span>
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-2 xs:px-3 sm:px-4 py-2 text-xs xs:text-sm border border-firstclass-primary text-firstclass-primary rounded-lg hover:bg-firstclass-light transition-colors flex-1 sm:flex-none min-w-0"
                >
                  <span className="truncate">Solo necesarias</span>
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-2 xs:px-3 sm:px-4 py-2 text-xs xs:text-sm bg-firstclass-primary text-white rounded-lg hover:bg-firstclass-secondary transition-colors flex-1 sm:flex-none min-w-0"
                >
                  <span className="truncate">Aceptar todas</span>
                </button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-firstclass-secondary">
                  Configuración de cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-firstclass-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-firstclass-secondary">Cookies necesarias</h4>
                      <div className="w-12 h-6 bg-firstclass-primary rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-firstclass-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-firstclass-secondary">Cookies analíticas</h4>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics 
                            ? 'bg-firstclass-primary justify-end' 
                            : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Google Analytics para analizar el uso del sitio web y mejorar nuestros servicios.
                    </p>
                  </div>
                </div>

                {/* Tracking Cookies */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Eye className="w-5 h-5 text-firstclass-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-firstclass-secondary">Cookies de seguimiento</h4>
                      <button
                        onClick={() => handlePreferenceChange('tracking')}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.tracking 
                            ? 'bg-firstclass-primary justify-end' 
                            : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Seguimiento de comportamiento para personalizar y mejorar la experiencia de usuario.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Solo necesarias
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 text-sm bg-firstclass-primary text-white rounded-lg hover:bg-firstclass-secondary transition-colors"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

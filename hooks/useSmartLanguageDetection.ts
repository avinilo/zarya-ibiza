'use client'

import { useState, useEffect } from 'react'
import { Language } from '@/lib/translations'

// Sistema mejorado de detección de idioma basado en ubicación

// Países de habla hispana (España y Latinoamérica)
const SPANISH_SPEAKING_COUNTRIES = [
  'ES', // España
  'MX', // México
  'AR', // Argentina
  'CO', // Colombia
  'PE', // Perú
  'VE', // Venezuela
  'CL', // Chile
  'EC', // Ecuador
  'GT', // Guatemala
  'CU', // Cuba
  'BO', // Bolivia
  'DO', // República Dominicana
  'HN', // Honduras
  'PY', // Paraguay
  'SV', // El Salvador
  'NI', // Nicaragua
  'CR', // Costa Rica
  'PA', // Panamá
  'UY', // Uruguay
  'PR', // Puerto Rico
  'GQ', // Guinea Ecuatorial
]

// Países de habla rusa
const RUSSIAN_SPEAKING_COUNTRIES = [
  'RU', // Rusia
  'BY', // Bielorrusia
  'KZ', // Kazajistán
  'KG', // Kirguistán
  'TJ', // Tayikistán
  'TM', // Turkmenistán
  'UZ', // Uzbekistán
  'AM', // Armenia
  'AZ', // Azerbaiyán
  'GE', // Georgia
  'UA', // Ucrania
  'MD', // Moldavia
]

export interface LocationDetectionResult {
  country: string | null
  language: Language
  isLoading: boolean
  error: string | null
  isDetected: boolean
}

export function useSmartLanguageDetection(): LocationDetectionResult {
  const [result, setResult] = useState<LocationDetectionResult>({
    country: null,
    language: 'en',
    isLoading: true,
    error: null,
    isDetected: false
  })

  useEffect(() => {
    let isMounted = true

    const detectLocation = async () => {
      try {
        // Primero intentar con la API de IP
        const response = await fetch('https://ipapi.co/json/')
        
        if (!response.ok) {
          throw new Error('No se pudo detectar la ubicación')
        }

        const data = await response.json()
        const countryCode = data.country_code

        // Determinar idioma basado en el país
        let detectedLanguage: Language = 'en'

        if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
          detectedLanguage = 'es'
        } else if (RUSSIAN_SPEAKING_COUNTRIES.includes(countryCode)) {
          detectedLanguage = 'ru'
        }

        if (isMounted) {
          setResult({
            country: countryCode,
            language: detectedLanguage,
            isLoading: false,
            error: null,
            isDetected: true
          })
        }

      } catch (error) {
        console.warn('Error detectando ubicación por IP:', error)
        
        // Fallback: usar el idioma del navegador
        if (isMounted) {
          const browserLanguage = detectBrowserLanguage()
          setResult({
            country: null,
            language: browserLanguage,
            isLoading: false,
            error: 'Usando idioma del navegador',
            isDetected: false
          })
        }
      }
    }

    // Función para detectar idioma del navegador
    const detectBrowserLanguage = (): Language => {
      if (typeof window === 'undefined') return 'en'
      
      const browserLang = navigator.language || navigator.languages[0] || 'en'
      const langCode = browserLang.toLowerCase().split('-')[0]
      
      switch (langCode) {
        case 'es':
          return 'es'
        case 'ru':
          return 'ru'
        case 'en':
        default:
          return 'en'
      }
    }

    // Iniciar detección
    detectLocation()

    // Cleanup
    return () => {
      isMounted = false
    }
  }, [])

  return result
}

// Función auxiliar para obtener información del país
export function getCountryInfo(countryCode: string) {
  const countries: { [key: string]: { name: string; flag: string } } = {
    'ES': { name: 'España', flag: '🇪🇸' },
    'MX': { name: 'México', flag: '🇲🇽' },
    'AR': { name: 'Argentina', flag: '🇦🇷' },
    'CO': { name: 'Colombia', flag: '🇨🇴' },
    'PE': { name: 'Perú', flag: '🇵🇪' },
    'VE': { name: 'Venezuela', flag: '🇻🇪' },
    'CL': { name: 'Chile', flag: '🇨🇱' },
    'EC': { name: 'Ecuador', flag: '🇪🇨' },
    'GT': { name: 'Guatemala', flag: '🇬🇹' },
    'CU': { name: 'Cuba', flag: '🇨🇺' },
    'BO': { name: 'Bolivia', flag: '🇧🇴' },
    'DO': { name: 'República Dominicana', flag: '🇩🇴' },
    'HN': { name: 'Honduras', flag: '🇭🇳' },
    'PY': { name: 'Paraguay', flag: '🇵🇾' },
    'SV': { name: 'El Salvador', flag: '🇸🇻' },
    'NI': { name: 'Nicaragua', flag: '🇳🇮' },
    'CR': { name: 'Costa Rica', flag: '🇨🇷' },
    'PA': { name: 'Panamá', flag: '🇵🇦' },
    'UY': { name: 'Uruguay', flag: '🇺🇾' },
    'PR': { name: 'Puerto Rico', flag: '🇵🇷' },
    'GQ': { name: 'Guinea Ecuatorial', flag: '🇬🇶' },
    'RU': { name: 'Rusia', flag: '🇷🇺' },
    'BY': { name: 'Bielorrusia', flag: '🇧🇾' },
    'KZ': { name: 'Kazajistán', flag: '🇰🇿' },
    'UA': { name: 'Ucrania', flag: '🇺🇦' },
    'US': { name: 'Estados Unidos', flag: '🇺🇸' },
    'GB': { name: 'Reino Unido', flag: '🇬🇧' },
    'FR': { name: 'Francia', flag: '🇫🇷' },
    'DE': { name: 'Alemania', flag: '🇩🇪' },
    'IT': { name: 'Italia', flag: '🇮🇹' },
    'PT': { name: 'Portugal', flag: '🇵🇹' },
    'BR': { name: 'Brasil', flag: '🇧🇷' },
  }
  
  return countries[countryCode] || { name: countryCode, flag: '🌍' }
}
'use client'

import { useState, useEffect } from 'react'
import { Language } from '@/lib/translations'

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
  'UA', // Ucrania (aunque oficialmente ucraniano, muchos hablan ruso)
  'MD', // Moldavia
]

export interface LocationInfo {
  country: string | null
  language: Language
  isLoading: boolean
  error: string | null
}

export function useLocationDetection(): LocationInfo {
  const [location, setLocation] = useState<LocationInfo>({
    country: null,
    language: 'en', // Default to English
    isLoading: true,
    error: null
  })

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Intentar obtener la ubicación mediante la API de IP
        const response = await fetch('https://ipapi.co/json/')
        
        if (!response.ok) {
          throw new Error('No se pudo detectar la ubicación')
        }

        const data = await response.json()
        const countryCode = data.country_code

        let detectedLanguage: Language = 'en' // Default

        if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
          detectedLanguage = 'es'
        } else if (RUSSIAN_SPEAKING_COUNTRIES.includes(countryCode)) {
          detectedLanguage = 'ru'
        } else {
          detectedLanguage = 'en'
        }

        setLocation({
          country: countryCode,
          language: detectedLanguage,
          isLoading: false,
          error: null
        })

      } catch (error) {
        console.warn('Error detectando ubicación:', error)
        // En caso de error, usar inglés como default
        setLocation({
          country: null,
          language: 'en',
          isLoading: false,
          error: 'No se pudo detectar la ubicación automáticamente'
        })
      }
    }

    detectLocation()
  }, [])

  return location
}

// Función auxiliar para detectar idioma desde el navegador como fallback
export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  
  const browserLang = navigator.language || navigator.languages[0]
  const langCode = browserLang?.toLowerCase().split('-')[0]
  
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
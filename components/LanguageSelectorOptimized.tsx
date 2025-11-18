'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'
import { useLanguage } from '@/hooks/useLanguageOptimized'
import { SUPPORTED_LANGUAGES, LANGUAGE_INFO } from '@/lib/i18n-config'

interface LanguageSelectorProps {
  isScrolled?: boolean
  isMenuOpen?: boolean
}

const languages = [
  { code: 'es', countryCode: 'ES' },
  { code: 'en', countryCode: 'GB' },
  { code: 'ru', countryCode: 'RU' }
]

export default function LanguageSelectorOptimized({ isScrolled, isMenuOpen }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language: currentLanguage, changeLanguage, languageInfo } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  if (!mounted) {
    // Renderizar versión simplificada durante SSR/hidratación
    return (
      <div className="relative">
        <button className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg w-full md:w-auto font-body ${
          isScrolled || isMenuOpen 
            ? 'text-firstclass-secondary' 
            : 'text-white'
        }`}>
          <ReactCountryFlag
            countryCode={currentLang.countryCode}
            svg
            style={{ width: '1.25rem', height: '1.25rem' }}
            title={currentLang.code.toUpperCase()}
          />
          <span>{currentLang.code.toUpperCase()}</span>
          <ChevronDown className={`w-4 h-4 ${isScrolled || isMenuOpen ? 'text-firstclass-secondary' : 'text-white'}`} />
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg w-full md:w-auto font-body ${
          isScrolled || isMenuOpen 
            ? 'text-firstclass-secondary hover:text-firstclass-primary hover:bg-firstclass-secondary/10' 
            : 'text-white hover:text-white/80 hover:bg-white/10'
        }`}
        aria-label={`Select language - Current: ${languageInfo.name}`}
      >
        <ReactCountryFlag
          countryCode={currentLang.countryCode}
          svg
          style={{
            width: '1.25rem',
            height: '1.25rem',
          }}
          title={languageInfo.name}
        />
        <span>{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
          isScrolled || isMenuOpen ? 'text-firstclass-secondary' : 'text-white'
        }`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100 font-body">
              Select Language
            </div>
            {languages.map((lang) => {
              const langInfo = LANGUAGE_INFO[lang.code as keyof typeof LANGUAGE_INFO]
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code as any)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                    currentLanguage === lang.code ? 'bg-yellow-50 text-yellow-600' : 'text-gray-700'
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                    }}
                    title={langInfo.name}
                  />
                  <div className="flex-1">
                    <div className="font-medium font-body">{lang.code.toUpperCase()}</div>
                    <div className="text-xs text-gray-500">{langInfo.name}</div>
                  </div>
                  {currentLanguage === lang.code && (
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
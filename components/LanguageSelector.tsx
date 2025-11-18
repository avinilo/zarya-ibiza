'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'
import { Language } from '@/lib/translations'

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  isScrolled?: boolean
  isMenuOpen?: boolean
}

const languages = [
  { code: 'es' as Language, name: 'ES', countryCode: 'ES' },
  { code: 'en' as Language, name: 'EN', countryCode: 'GB' },
  { code: 'ru' as Language, name: 'RU', countryCode: 'RU' }
]

export default function LanguageSelector({ currentLanguage, onLanguageChange, isScrolled, isMenuOpen }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg w-full md:w-auto font-body ${
          isScrolled || isMenuOpen 
            ? 'text-yellow-700 hover:text-yellow-600 hover:bg-yellow-700/10' 
            : 'text-white hover:text-white/80 hover:bg-white/10'
        }`}
        aria-label="Select language"
      >
        <ReactCountryFlag
          countryCode={currentLang.countryCode}
          svg
          style={{
            width: '1.25rem',
            height: '1.25rem',
          }}
          title={currentLang.name}
        />
        <span>{currentLang.name}</span>
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
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  onLanguageChange(language.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                  currentLanguage === language.code ? 'bg-yellow-50 text-yellow-600' : 'text-gray-700'
                }`}
              >
                <ReactCountryFlag
                  countryCode={language.countryCode}
                  svg
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                  }}
                  title={language.name}
                />
                <span className="font-medium font-body">{language.name}</span>
                {currentLanguage === language.code && (
                  <div className="ml-auto w-2 h-2 bg-yellow-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
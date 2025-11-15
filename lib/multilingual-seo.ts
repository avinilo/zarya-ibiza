/**
 * Configuración SEO multilingüe para First Class Sensations
 * Incluye configuración de idiomas, hreflang, y traducciones de metadata
 */

import { Metadata } from 'next'

// Definición de idiomas soportados
export const SUPPORTED_LANGUAGES = {
  es: {
    code: 'es',
    name: 'Español',
    locale: 'es_ES',
    country: 'España',
    flag: '🇪🇸',
    url: 'https://firstclassensations.com',
    description: 'Servicios concierge de lujo en Ibiza: yates privados, beach clubs exclusivos, restaurantes Michelin y transporte VIP'
  },
  en: {
    code: 'en', 
    name: 'English',
    locale: 'en_US',
    country: 'International',
    flag: '🇬🇧',
    url: 'https://firstclassensations.com/en',
    description: 'Luxury concierge services in Ibiza: private yachts, exclusive beach clubs, Michelin restaurants and VIP transportation'
  },
  ru: {
    code: 'ru',
    name: 'Русский', 
    locale: 'ru_RU',
    country: 'Россия',
    flag: '🇷🇺',
    url: 'https://firstclassensations.com/ru',
    description: 'Роскошные консьерж-услуги в Ибице: частные яхты, эксклюзивные пляжные клубы, рестораны Мишлен и VIP-транспорт'
  }
} as const

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES

// Configuración de páginas por idioma
export const MULTILINGUAL_PAGES = {
  home: {
    es: {
      title: 'First Class Sensations Ibiza - Concierge de Lujo | Yates Privados, Beach Clubs VIP, Michelin',
      description: 'First Class Sensations: servicios concierge exclusivos en Ibiza y Formentera. Alquiler de yates privados, acceso VIP a beach clubs, reservas en restaurantes Michelin y transporte de lujo.',
      keywords: 'concierge Ibiza, yates privados Ibiza, beach clubs exclusivos, restaurantes Michelin Ibiza, transporte VIP Ibiza, servicios de lujo Formentera, First Class Sensations'
    },
    en: {
      title: 'First Class Sensations Ibiza - Luxury Concierge | Private Yachts, VIP Beach Clubs, Michelin',
      description: 'First Class Sensations: exclusive concierge services in Ibiza and Formentera. Private yacht rentals, VIP beach club access, Michelin restaurant reservations and luxury transportation.',
      keywords: 'Ibiza concierge, private yachts Ibiza, exclusive beach clubs, Michelin restaurants Ibiza, VIP transportation Ibiza, luxury services Formentera, First Class Sensations'
    },
    ru: {
      title: 'First Class Sensations Ибица - Роскошный Консьерж | Частные Яхты, VIP-Пляжные Клубы, Мишлен',
      description: 'First Class Sensations: эксклюзивные консьерж-услуги в Ибице и Форментере. Аренда частных яхт, доступ к VIP-пляжным клубам, бронирование ресторанов Мишлен и роскошный транспорт.',
      keywords: 'консьерж Ибица, частные яхты Ибица, эксклюзивные пляжные клубы, рестораны Мишлен Ибица, VIP-транспорт Ибица, роскошные услуги Форментера, First Class Sensations'
    }
  },
  services: {
    es: {
      title: 'Servicios de Concierge de Lujo en Ibiza | First Class Sensations',
      description: 'Descubre nuestros servicios exclusivos: alquiler de yates privados, acceso VIP a beach clubs, reservas en restaurantes Michelin y transporte de lujo en Ibiza.',
      keywords: 'servicios concierge Ibiza, yates privados, beach clubs VIP, restaurantes Michelin, transporte de lujo'
    },
    en: {
      title: 'Luxury Concierge Services in Ibiza | First Class Sensations',
      description: 'Discover our exclusive services: private yacht rentals, VIP beach club access, Michelin restaurant reservations and luxury transportation in Ibiza.',
      keywords: 'concierge services Ibiza, private yachts, VIP beach clubs, Michelin restaurants, luxury transportation'
    },
    ru: {
      title: 'Роскошные Консьерж-Услуги в Ибице | First Class Sensations',
      description: 'Откройте для себя наши эксклюзивные услуги: аренда частных яхт, доступ к VIP-пляжным клубам, бронирование ресторанов Мишлен и роскошный транспорт в Ибице.',
      keywords: 'консьерж-услуги Ибица, частные яхты, VIP-пляжные клубы, рестораны Мишлен, роскошный транспорт'
    }
  }
}

// Función para generar hreflang tags
export function generateHreflangTags(currentPath: string = '') {
  const languages = Object.keys(SUPPORTED_LANGUAGES) as LanguageCode[]
  
  return languages.map(lang => ({
    rel: 'alternate',
    hreflang: lang === 'en' ? 'x-default' : lang, // English as default
    href: `${SUPPORTED_LANGUAGES[lang].url}${currentPath}`
  }))
}

// Función para generar metadata multilingüe completa
export function generateMultilingualMetadata(
  page: keyof typeof MULTILINGUAL_PAGES,
  language: LanguageCode
): Metadata {
  const pageConfig = MULTILINGUAL_PAGES[page][language]
  const langConfig = SUPPORTED_LANGUAGES[language]
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    authors: [{ name: 'First Class Sensations' }],
    creator: 'First Class Sensations',
    publisher: 'First Class Sensations',
    applicationName: 'First Class Sensations',
    referrer: 'origin-when-cross-origin',
    
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    metadataBase: new URL('https://firstclassensations.com'),
    
    // Verification
    verification: {
      ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      }),
      ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
        yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      }),
      ...(process.env.NEXT_PUBLIC_YAHOO_VERIFICATION && {
        yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
      }),
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        other: {
          'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
        },
      }),
    },
    
    category: 'business',
    classification: 'Premium services and experiences',
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    
    manifest: '/manifest.json',
    
    appleWebApp: {
      capable: true,
      title: 'First Class Sensations - Concierge de Lujo Ibiza',
      statusBarStyle: 'default',
    },
    
    // Open Graph
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      type: 'website',
      locale: langConfig.locale,
      siteName: 'First Class Sensations',
      url: langConfig.url,
      images: [
        {
          url: 'https://firstclassensations.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'First Class Sensations - Luxury Concierge Services'
        }
      ]
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: ['https://firstclassensations.com/og-image.png'],
      creator: '@firstclassensations',
      site: '@firstclassensations'
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Alternates
    alternates: {
      canonical: `${langConfig.url}/${page === 'home' ? '' : page}`,
      languages: Object.fromEntries(
        Object.entries(SUPPORTED_LANGUAGES).map(([code, config]) => [
          code,
          `${config.url}/${page === 'home' ? '' : page}`
        ])
      )
    }
  }
}

// Función para detectar el idioma preferido del usuario
export function detectPreferredLanguage(): LanguageCode {
  // 1. Intentar obtener de localStorage (preferencia del usuario)
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('firstclass-language')
    if (savedLanguage && savedLanguage in SUPPORTED_LANGUAGES) {
      return savedLanguage as LanguageCode
    }
  }
  
  // 2. Intentar detectar del navegador
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0]
    if (browserLang in SUPPORTED_LANGUAGES) {
      return browserLang as LanguageCode
    }
  }
  
  // 3. Default: español (porque es Ibiza/España)
  return 'es'
}

// Países por idioma para detección geográfica
export const COUNTRIES_BY_LANGUAGE = {
  es: [
    'ES', // España
    'MX', 'AR', 'CO', 'PE', 'CL', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY' // América Latina
  ],
  en: [
    'US', 'GB', 'CA', 'AU', 'NZ', 'IE', 'ZA', 'IN', 'SG', 'PH', 'MY', 'HK', 'PK', 'BD', 'NG', 'KE', 'GH', 'UG', 'TZ'
  ],
  ru: [
    'RU', 'BY', 'KZ', 'KG', 'TJ', 'TM', 'UZ', 'UA', 'MD', 'EE', 'LV', 'LT' // Países de habla rusa
  ]
} as const

// Función para obtener el idioma basado en el país
export function getLanguageByCountry(countryCode: string): LanguageCode {
  for (const [language, countries] of Object.entries(COUNTRIES_BY_LANGUAGE)) {
    if (countries.includes(countryCode.toUpperCase())) {
      return language as LanguageCode
    }
  }
  return 'en' // Default to English for unknown countries
}
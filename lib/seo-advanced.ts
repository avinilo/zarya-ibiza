/**
 * Utilidades avanzadas de SEO para First Class Sensations
 * Incluye canonical URLs, hreflang, Open Graph avanzado y Schema.org adicionales
 */

import { Metadata } from 'next'

// Configuración base del sitio
export const SITE_CONFIG = {
  name: 'First Class Sensations',
  url: getBaseUrl(),
  description: 'Servicios concierge de lujo en Ibiza: yates privados, beach clubs exclusivos, restaurantes Michelin y transporte VIP',
  locale: 'es_ES',
  type: 'website',
  author: 'First Class Sensations',
  keywords: [
    'concierge lujo Ibiza',
    'yates privados',
    'beach clubs exclusivos',
    'restaurantes Michelin',
    'transporte VIP',
    'experiencias de lujo',
    'Ibiza',
    'servicios concierge'
  ]
}

// Función para detectar URL base automáticamente
function getBaseUrl(): string {
  // 1. Prioridad: Variable de entorno explícita
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  // 2. Vercel: Usar VERCEL_URL automáticamente
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // 3. Fallback: URL de producción
  return 'https://firstclassensations.com'
}

// Tipos para configuración SEO
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogType?: 'website' | 'article'
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  structuredData?: any[]
}

/**
 * Genera canonical URL dinámico
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.url}${cleanPath}`
}

/**
 * Genera hreflang para internacionalización futura
 */
export function generateHreflang(path: string): Record<string, string> {
  const baseUrl = generateCanonicalUrl(path)
  
  return {
    'es': baseUrl,
    'es-ES': baseUrl,
    'x-default': baseUrl
  }
}

/**
 * Genera Open Graph avanzado
 */
export function generateOpenGraph(config: SEOConfig): Metadata['openGraph'] {
  return {
    type: config.ogType || 'website',
    locale: SITE_CONFIG.locale,
    url: config.canonical || SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: config.title,
    description: config.description,
    images: [
      {
        url: config.ogImage || '/og-image.png',
        width: 1200,
        height: 630,
        alt: config.title,
        type: 'image/png'
      }
    ]
  }
}

/**
 * Genera Twitter Cards optimizadas
 */
export function generateTwitterCard(config: SEOConfig): Metadata['twitter'] {
  return {
    card: config.twitterCard || 'summary_large_image',
    site: '@firstclassibiza',
    creator: '@firstclassibiza',
    title: config.title,
    description: config.description,
    images: [config.ogImage || '/og-image.png']
  }
}

/**
 * Schema.org para FAQ
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Schema.org para HowTo (procesos de mantenimiento)
 */
export function generateHowToSchema(title: string, steps: Array<{ name: string; text: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: `Guía paso a paso: ${title}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  }
}

/**
 * Schema.org para Breadcrumbs avanzado
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Schema.org para LocalBusiness (empresa de concierge de lujo)
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'First Class Sensations',
    description: 'Servicios concierge de lujo en Ibiza: yates privados, beach clubs exclusivos, restaurantes Michelin y transporte VIP',
    url: SITE_CONFIG.url,
    telephone: '+34-666-666-666',
    email: 'info@firstclassensations.com',
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de la Virgen 1',
      addressLocality: 'Ibiza',
      addressRegion: 'Islas Baleares',
      postalCode: '07800',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.9067,
      longitude: 1.4206
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Ibiza'
      },
      {
        '@type': 'City',
        name: 'Formentera'
      },
      {
        '@type': 'City',
        name: 'Mallorca'
      },
      {
        '@type': 'City',
        name: 'Menorca'
      }
    ],
    serviceType: [
      'Concierge Services',
      'Luxury Transportation',
      'Yacht Charter',
      'Restaurant Reservations',
      'VIP Experiences'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Concierge de Lujo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alquiler de Yates Privados',
            description: 'Yates de lujo con tripulación profesional en Ibiza y Formentera'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Beach Clubs Exclusivos',
            description: 'Acceso VIP a los mejores beach clubs de Ibiza'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restaurantes Michelin',
            description: 'Reservas garantizadas en restaurantes Michelin'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transporte VIP',
            description: 'Helicópteros privados y vehículos de lujo con chofer'
          }
        }
      ]
    }
  }
}

/**
 * Schema.org para Organization (negocio de lujo)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'First Class Sensations',
    description: 'Servicios concierge de lujo en Ibiza y Formentera',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/og-image.png`,
    telephone: '+34-666-666-666',
    email: 'info@firstclassensations.com',
    sameAs: [
      'https://www.instagram.com/firstclassensations',
      'https://www.facebook.com/firstclassensations',
      'https://www.linkedin.com/company/firstclassensations'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de la Virgen 1',
      addressLocality: 'Ibiza',
      addressRegion: 'Islas Baleares',
      postalCode: '07800',
      addressCountry: 'ES'
    },
    foundingDate: '2014',
    founder: {
      '@type': 'Person',
      name: 'Founder Name'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ibiza'
      },
      {
        '@type': 'City',
        name: 'Formentera'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Concierge de Lujo'
    }
  }
}

/**
 * Schema.org para Service específico
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
  priceRange?: string
  availability?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
      url: SITE_CONFIG.url
    },
    areaServed: {
      '@type': 'Place',
      name: service.areaServed
    },
    serviceType: service.serviceType,
    priceRange: service.priceRange || '€€€€',
    availability: service.availability || 'InStock',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Catálogo de ${service.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name
          }
        }
      ]
    }
  }
}

/**
 * Genera metadata completa para una página
 */
export function generatePageMetadata(config: SEOConfig): Metadata {
  const canonical = config.canonical || SITE_CONFIG.url
  const keywords = config.keywords || SITE_CONFIG.keywords

  return {
    title: config.title,
    description: config.description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
      googleBot: {
        index: !config.noindex,
        follow: !config.nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical,
      languages: generateHreflang(canonical.replace(SITE_CONFIG.url, ''))
    },
    openGraph: generateOpenGraph(config),
    twitter: generateTwitterCard(config),
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
    },
    other: {
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#ffffff'
    }
  }
}

/**
 * Utilidades para preconnect y DNS prefetch
 */
export const PRECONNECT_URLS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com'
]

export const DNS_PREFETCH_URLS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com',
  'https://connect.facebook.net',
  'https://www.linkedin.com'
]

/**
 * Genera structured data JSON-LD
 */
export function generateStructuredDataScript(data: any | any[]): string {
  const structuredData = Array.isArray(data) ? data : [data]
  
  return JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData, null, 0)
}

/**
 * Configuraciones SEO específicas por página
 */
export const PAGE_SEO_CONFIGS = {
  home: {
    title: 'First Class Sensations - Experiencias de Lujo en Ibiza',
    description: 'Servicios concierge de lujo en Ibiza: yates privados, beach clubs exclusivos, restaurantes Michelin y transporte VIP. Experiencias únicas e inolvidables.',
    keywords: ['concierge lujo Ibiza', 'yates privados', 'beach clubs exclusivos', 'restaurantes Michelin', 'transporte VIP', 'experiencias de lujo'],
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const
  },
  'yates-privados': {
    title: 'Alquiler de Yates Privados Ibiza | First Class Sensations',
    description: 'Alquiler de yates de lujo en Ibiza con tripulación profesional. Excursiones privadas por Ibiza y Formentera. Servicio concierge exclusivo.',
    keywords: ['yates privados Ibiza', 'alquiler yates lujo', 'excursiones yate privado', 'Formentera yate'],
    ogType: 'service' as const
  },
  'beach-clubs-exclusivos': {
    title: 'Beach Clubs Exclusivos Ibiza | First Class Sensations VIP',
    description: 'Acceso VIP a los mejores beach clubs de Ibiza. Reservas exclusivas, camas balinesas y servicio premium. Experiencias inolvidables.',
    keywords: ['beach clubs exclusivos Ibiza', 'reservas VIP beach clubs', 'camas balinesas Ibiza', 'beach clubs lujo'],
    ogType: 'service' as const
  },
  'restaurantes-michelin': {
    title: 'Restaurantes Michelin Ibiza | First Class Sensations Gastronomía',
    description: 'Reservas en los mejores restaurantes Michelin de Ibiza. Menús degustación exclusivos y maridaje. Chef privados en villa disponibles.',
    keywords: ['restaurantes Michelin Ibiza', 'reservas restaurantes exclusivos', 'menú degustación Ibiza', 'chef privado villa'],
    ogType: 'service' as const
  }
} as const

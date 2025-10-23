/**
 * Utilidades avanzadas de SEO para Mantexia
 * Incluye canonical URLs, hreflang, Open Graph avanzado y Schema.org adicionales
 */

import { Metadata } from 'next'

// Configuración base del sitio
export const SITE_CONFIG = {
  name: 'Mantexia',
  url: getBaseUrl(),
  description: 'Servicios integrales de mantenimiento industrial en Valencia',
  locale: 'es_ES',
  type: 'website',
  author: 'Mantexia',
  keywords: [
    'mantenimiento industrial',
    'mano de obra especializada',
    'gestión documental',
    'gestora de mantenimientos',
    'Valencia',
    'servicios industriales'
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
  return 'https://mantexia.com'
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
    site: '@mantexia',
    creator: '@mantexia',
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
 * Schema.org para Service específico
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
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
    title: 'Mantexia - Mantenimiento Integral Valencia | Servicios Industriales',
    description: 'Servicios integrales de mantenimiento industrial en Valencia. Mano de obra especializada, gestión documental y gestora de mantenimientos. ¡Contacta ahora!',
    keywords: ['mantenimiento industrial Valencia', 'servicios industriales', 'mano de obra especializada', 'gestión documental', 'gestora mantenimientos'],
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const
  },
  'mano-obra': {
    title: 'Mano de Obra Especializada Valencia | Mantexia',
    description: 'Mano de obra especializada para mantenimiento industrial en Valencia. Técnicos cualificados y experiencia comprobada. Solicita presupuesto.',
    keywords: ['mano de obra Valencia', 'técnicos especializados', 'mantenimiento industrial', 'personal cualificado'],
    ogType: 'service' as const
  },
  'gestion-documental': {
    title: 'Gestión Documental Industrial | Mantexia Valencia',
    description: 'Servicios de gestión documental para empresas industriales en Valencia. Digitalización, archivo y control de documentos técnicos.',
    keywords: ['gestión documental Valencia', 'digitalización documentos', 'archivo técnico', 'control documental'],
    ogType: 'service' as const
  },
  'gestora-mantenimientos': {
    title: 'Gestora de Mantenimientos Valencia | Mantexia',
    description: 'Gestora especializada en mantenimientos industriales en Valencia. Planificación, control y ejecución de mantenimientos preventivos y correctivos.',
    keywords: ['gestora mantenimientos Valencia', 'mantenimiento preventivo', 'mantenimiento correctivo', 'planificación industrial'],
    ogType: 'service' as const
  }
} as const
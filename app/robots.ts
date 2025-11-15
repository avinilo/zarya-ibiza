import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Configuración principal para todos los bots
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/.well-known/',
          '/tmp/',
          '/cache/',
          '/logs/',
          '/*.json$',
          '/*.xml$',
          '/*.txt$',
          '/package.json',
          '/tsconfig.json',
          '/next.config.js',
        ],
      },
      // Configuración específica para Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
      // Configuración específica para Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 2,
      },
      // Configuración específica para otros bots importantes
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 3,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 2,
      },
      // Bloquear bots maliciosos y scrapers
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MegaIndex',
        disallow: '/',
      },
      {
        userAgent: 'BLEXBot',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://firstclassensations.com/sitemap.xml',
      'https://firstclassensations.com/sitemap-pages.xml',
      'https://firstclassensations.com/sitemap-services.xml',
    ],
    host: 'https://firstclassensations.com',
  }
}

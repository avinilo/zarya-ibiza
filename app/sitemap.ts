import { MetadataRoute } from 'next'

// Configuración simplificada de sitemap para one-page
const SITEMAP_CONFIG = {
  baseUrl: 'https://firstclassensations.com',
  frequencies: {
    homepage: 'weekly' as const,
  },
  priorities: {
    homepage: 1.0,
  }
}

// Páginas para one-page + páginas legales
const PAGES_METADATA = [
  {
    path: '',
    type: 'homepage',
    lastModified: new Date('2024-01-15'),
    images: ['/og-image.png', '/hero-image.jpg']
  },
  {
    path: '/politica-privacidad',
    type: 'legal',
    lastModified: new Date('2024-01-15'),
    images: []
  },
  {
    path: '/terminos-condiciones',
    type: 'legal',
    lastModified: new Date('2024-01-15'),
    images: []
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const { baseUrl, frequencies, priorities } = SITEMAP_CONFIG
  
  return PAGES_METADATA.map(page => {
    const url = page.path ? `${baseUrl}${page.path}` : baseUrl
    
    const sitemapEntry: MetadataRoute.Sitemap[0] = {
      url,
      lastModified: page.lastModified,
      changeFrequency: frequencies.homepage,
      priority: priorities.homepage,
    }
    
    return sitemapEntry
  })
}
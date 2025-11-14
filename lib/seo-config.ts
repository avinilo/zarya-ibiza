// Configuración SEO para First Class Sensations Ibiza
// Keywords principales y secundarias por página para servicios concierge de lujo

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    type: 'website' | 'article' | 'book' | 'profile'
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: 'summary' | 'summary_large_image' | 'player' | 'app'
    title: string
    description: string
    images: string[]
  }
}

// Keywords principales de First Class Sensations
export const MAIN_KEYWORDS = [
  'concierge Ibiza',
  'servicios VIP Ibiza',
  'yates privados Ibiza',
  'beach clubs exclusivos',
  'restaurantes Michelin Ibiza',
  'transporte de lujo Ibiza',
  'experiencias exclusivas Ibiza',
  'servicios de lujo Formentera',
  'luxury concierge services Spain',
  'personal concierge Ibiza',
  'premium lifestyle management',
  'exclusive experiences Mediterranean',
  'VIP services Balearic Islands',
  'luxury lifestyle concierge',
  'high-end personal services',
  'bespoke travel experiences',
  'private luxury services',
  'concierge de luxe Espagne',
  'servicios concierge lujo España',
  'experiencias únicas Ibiza'
]

// Configuración SEO por página
export const SEO_PAGES: Record<string, SEOConfig> = {
  // Homepage
  home: {
    title: 'First Class Sensations Ibiza - Servicios Concierge de Lujo | Experiencias VIP Exclusivas',
    description: 'First Class Sensations: servicios concierge exclusivos en Ibiza y Formentera. Alquiler de yates privados, beach clubs VIP, restaurantes Michelin y transporte de lujo. Experiencias únicas e inolvidables en las Islas Baleares.',
    keywords: [
      'concierge Ibiza',
      'servicios VIP Ibiza',
      'yates privados Ibiza',
      'beach clubs exclusivos Ibiza',
      'restaurantes Michelin Ibiza',
      'transporte de lujo Ibiza',
      'First Class Sensations',
      'experiencias de lujo Ibiza',
      'servicios exclusivos Ibiza',
      'concierge de lujo Formentera',
      'luxury concierge services Ibiza',
      'VIP experiences Balearic Islands',
      'premium lifestyle concierge Spain',
      'exclusive services Mediterranean',
      'private yacht charter Ibiza',
      'Michelin restaurants reservations',
      'luxury beach clubs access',
      'VIP transportation services',
      'bespoke travel experiences Ibiza',
      'high-end personal concierge'
    ],
    openGraph: {
      title: 'First Class Sensations Ibiza - Servicios Concierge de Lujo',
      description: 'Servicios concierge exclusivos en Ibiza. Alquiler de yates privados, reservas en beach clubs VIP y restaurantes Michelin.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'First Class Sensations - Concierge de lujo en Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'First Class Sensations Ibiza - Servicios Concierge de Lujo',
      description: 'Servicios concierge exclusivos en Ibiza. Alquiler de yates privados, reservas en beach clubs VIP y restaurantes Michelin.',
      images: ['/og-image.png']
    }
  },

  // Alquiler de Yates
  alquilerYates: {
    title: 'Alquiler de Yates Privados Ibiza - Experiencias Marítimas de Lujo | First Class Sensations',
    description: 'Alquiler de yates de lujo con tripulación profesional en Ibiza. Excursiones privadas por Ibiza y Formentera con catering gourmet y servicios premium.',
    keywords: [
      'alquiler yates Ibiza',
      'yates privados Ibiza',
      'charter yates Formentera',
      'excursiones en yate Ibiza',
      'yates de lujo Mediterráneo',
      'alquiler barcos privados Ibiza',
      'experiencias marítimas VIP',
      'yate con tripulación Ibiza',
      'catering gourmet yates',
      'excursiones privadas mar'
    ],
    openGraph: {
      title: 'Alquiler de Yates Privados Ibiza - Experiencias Marítimas de Lujo',
      description: 'Alquiler de yates de lujo con tripulación profesional en Ibiza. Excursiones privadas con catering gourmet.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alquiler de yates privados en Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Alquiler de Yates Privados Ibiza',
      description: 'Yates de lujo con tripulación profesional y catering gourmet.',
      images: ['/og-image.png']
    }
  },

  // Beach Clubs VIP
  beachClubsVIP: {
    title: 'Beach Clubs Exclusivos Ibiza - Reservas VIP y Acceso Premium | First Class Sensations',
    description: 'Reservas prioritarias en los mejores beach clubs exclusivos de Ibiza. Camas balinesas VIP, servicio de camareros y acceso garantizado a establecimientos premium.',
    keywords: [
      'beach clubs exclusivos Ibiza',
      'reservas VIP beach clubs',
      'camas balinesas Ibiza',
      'beach clubs premium Formentera',
      'acceso VIP playas Ibiza',
      'reservas beach clubs lujo',
      'servicio de camareros privado',
      'experiencias de playa VIP',
      'beach clubs selección Ibiza',
      'acceso garantizado beach clubs'
    ],
    openGraph: {
      title: 'Beach Clubs Exclusivos Ibiza - Reservas VIP y Acceso Premium',
      description: 'Reservas prioritarias en los mejores beach clubs exclusivos de Ibiza.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Beach clubs exclusivos en Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Beach Clubs Exclusivos Ibiza',
      description: 'Reservas VIP en establecimientos premium de playa.',
      images: ['/og-image.png']
    }
  },

  // Restaurantes Michelin
  restaurantesMichelin: {
    title: 'Restaurantes Michelin Ibiza - Reservas Exclusivas | First Class Sensations',
    description: 'Reservas garantizadas en los mejores restaurantes Michelin de Ibiza. Menús degustación, maridaje y experiencias gastronómicas exclusivas.',
    keywords: [
      'restaurantes Michelin Ibiza',
      'reservas restaurantes exclusivos',
      'gastronomía de lujo Ibiza',
      'menús degustación Formentera',
      'restaurantes estrella Michelin',
      'experiencias gastronómicas VIP',
      'maridaje vinos premium',
      'reservas garantizadas restaurantes',
      'chef privado Ibiza',
      'catering gourmet exclusivo'
    ],
    openGraph: {
      title: 'Restaurantes Michelin Ibiza - Reservas Exclusivas',
      description: 'Reservas garantizadas en los mejores restaurantes Michelin con menús degustación.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Restaurantes Michelin en Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Restaurantes Michelin Ibiza',
      description: 'Reservas exclusivas en establecimientos gastronómicos premium.',
      images: ['/og-image.png']
    }
  },

  // Transporte VIP
  transporteVIP: {
    title: 'Transporte VIP Ibiza - Helicópteros y Vehículos de Lujo | First Class Sensations',
    description: 'Servicios de transporte VIP en Ibiza: helicópteros privados, vehículos de lujo con chofer y traslados exclusivos. Servicio 24/7 para clientes premium.',
    keywords: [
      'transporte VIP Ibiza',
      'helicópteros privados Formentera',
      'vehículos de lujo con chofer',
      'traslados aeropuerto Ibiza',
      'transporte ejecutivo premium',
      'helicóptero privado Mediterráneo',
      'servicio de chofer Ibiza',
      'transporte 24/7 VIP',
      'coches de lujo alquiler',
      'traslados exclusivos islas'
    ],
    openGraph: {
      title: 'Transporte VIP Ibiza - Helicópteros y Vehículos de Lujo',
      description: 'Helicópteros privados, vehículos de lujo con chofer y traslados exclusivos.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Transporte VIP en Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Transporte VIP Ibiza',
      description: 'Helicópteros privados y vehículos de lujo con servicio 24/7.',
      images: ['/og-image.png']
    }
  },

  // Sobre Nosotros
  sobreNosotros: {
    title: 'Sobre Nosotros - First Class Sensations Ibiza | Concierge de Lujo',
    description: 'Conoce First Class Sensations, empresa líder en servicios concierge de lujo en Ibiza. Más de 10 años de experiencia en experiencias exclusivas y atención VIP.',
    keywords: [
      'First Class Sensations',
      'empresa concierge Ibiza',
      'experiencias de lujo Ibiza',
      'servicios VIP premium',
      'concierge Ibiza experiencia',
      'empresa de lujo Formentera',
      'servicios exclusivos islas',
      'First Class Sensations historia',
      'equipo concierge profesional',
      'experiencias inolvidables Ibiza'
    ],
    openGraph: {
      title: 'Sobre Nosotros - First Class Sensations Ibiza',
      description: 'Empresa líder en servicios concierge de lujo con más de 10 años de experiencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'First Class Sensations - Empresa concierge de lujo'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre Nosotros - First Class Sensations',
      description: 'Más de 10 años de experiencia en experiencias exclusivas y atención VIP.',
      images: ['/og-image.png']
    }
  },

  // Casos de Éxito
  casosExito: {
    title: 'Casos de Éxito - Experiencias VIP First Class Sensations Ibiza',
    description: 'Descubre nuestros casos de éxito: eventos corporativos exclusivos, fiestas privadas en villas espectaculares, experiencias gastronómicas únicas y servicios VIP inolvidables.',
    keywords: [
      'casos éxito concierge Ibiza',
      'eventos corporativos exclusivos',
      'fiestas privadas villas Ibiza',
      'experiencias VIP inolvidables',
      'clientes First Class Sensations',
      'testimonios concierge lujo',
      'proyectos exclusivos Ibiza',
      'eventos premium Formentera',
      'experiencias personalizadas lujo',
      'casos éxito servicios VIP'
    ],
    openGraph: {
      title: 'Casos de Éxito - Experiencias VIP First Class Sensations Ibiza',
      description: 'Eventos corporativos exclusivos, fiestas privadas y experiencias gastronómicas únicas.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Casos de éxito First Class Sensations'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Casos de Éxito - Experiencias VIP',
      description: 'Eventos corporativos exclusivos y experiencias inolvidables.',
      images: ['/og-image.png']
    }
  },

  // Contacto
  contacto: {
    title: 'Contacto - First Class Sensations Ibiza | Reservas y Presupuestos VIP',
    description: 'Contacta con First Class Sensations para reservas y presupuestos de servicios concierge de lujo en Ibiza. Disponibles 24/7 para clientes VIP.',
    keywords: [
      'contacto First Class Sensations',
      'reservas concierge Ibiza',
      'presupuestos servicios VIP',
      'teléfono First Class Sensations',
      'email concierge Ibiza',
      'reservas yates privados',
      'contacto servicios lujo Formentera',
      'atención 24/7 VIP',
      'consultas experiencias exclusivas',
      'First Class Sensations contacto'
    ],
    openGraph: {
      title: 'Contacto - First Class Sensations Ibiza | Reservas y Presupuestos VIP',
      description: 'Contacta para reservas y presupuestos de servicios concierge de lujo. Disponibles 24/7.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contacto First Class Sensations Ibiza'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contacto - First Class Sensations Ibiza',
      description: 'Reservas y presupuestos de servicios concierge de lujo. Disponibles 24/7.',
      images: ['/og-image.png']
    }
  }
}
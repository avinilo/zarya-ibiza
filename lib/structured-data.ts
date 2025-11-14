// Structured Data Schemas para SEO - First Class Sensations
// Implementación de Schema.org para mejorar la indexación y rich snippets

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "First Class Sensations Ibiza",
  "url": "https://firstclassensations.com",
  "logo": "https://firstclassensations.com/og-image.png",
  "description": "Servicios concierge de lujo en Ibiza. Especialistas en yates privados, beach clubs exclusivos, restaurantes Michelin y transporte VIP.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Marina Botafoch",
    "addressLocality": "Ibiza",
    "addressRegion": "Islas Baleares",
    "postalCode": "07800",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34672123456",
    "contactType": "customer service",
    "email": "concierge@firstclassensations.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://firstclassensations.com"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Ibiza, España"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "First Class Sensations Ibiza",
  "url": "https://firstclassensations.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://firstclassensations.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchemas = {
  conciergeLujo: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios Concierge de Lujo",
    "description": "Servicios concierge exclusivos en Ibiza. Alquiler de yates privados, reservas en beach clubs VIP, restaurantes Michelin y transporte de lujo.",
    "provider": {
      "@type": "Organization",
      "name": "First Class Sensations"
    },
    "areaServed": "Ibiza, España",
    "serviceType": "Servicios concierge de lujo",
    "offers": {
      "@type": "Offer",
      "description": "Experiencias exclusivas personalizadas con atención VIP"
    }
  },
  alquilerYates: {
    "@context": "https://schema.org", 
    "@type": "Service",
    "name": "Alquiler de Yates Privados",
    "description": "Alquiler de yates de lujo con tripulación profesional. Excursiones privadas por Ibiza y Formentera con catering gourmet y servicios premium.",
    "provider": {
      "@type": "Organization", 
      "name": "First Class Sensations"
    },
    "areaServed": "Ibiza y Formentera, España",
    "serviceType": "Charter de yates",
    "offers": {
      "@type": "Offer",
      "description": "Experiencias marítimas exclusivas con servicios completos"
    }
  },
  reservasVIP: {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Reservas VIP Exclusivas",
    "description": "Reservas prioritarias en beach clubs de lujo, restaurantes Michelin y establecimientos exclusivos de Ibiza. Acceso VIP garantizado.",
    "provider": {
      "@type": "Organization",
      "name": "First Class Sensations"
    },
    "areaServed": "Ibiza, España", 
    "serviceType": "Reservas y acceso VIP",
    "offers": {
      "@type": "Offer",
      "description": "Acceso exclusivo a los mejores establecimientos de Ibiza"
    }
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "First Class Sensations Ibiza",
  "image": "https://firstclassensations.com/og-image.png",
  "telephone": "+34672123456",
  "email": "concierge@firstclassensations.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Marina Botafoch",
    "addressLocality": "Ibiza", 
    "addressRegion": "Islas Baleares",
    "postalCode": "07800",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9067", // Coordenadas de Ibiza
    "longitude": "1.4206"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "priceRange": "€€€€",
  "areaServed": "Ibiza y Formentera"
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué servicios ofrece First Class Sensations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First Class Sensations ofrece servicios concierge de lujo en Ibiza: alquiler de yates privados, reservas en beach clubs exclusivos, restaurantes Michelin, transporte VIP en helicóptero o vehículos de lujo, y organización integral de eventos privados."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Dónde está ubicada First Class Sensations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First Class Sensations está ubicada en Marina Botafoch, 07800 Ibiza, Islas Baleares. Prestamos servicios en toda Ibiza y Formentera."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el horario de atención de First Class Sensations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro horario de oficina es de lunes a domingo de 9:00 a 21:00. Para servicios VIP, ofrecemos atención 24/7 para nuestros clientes exclusivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de clientes atiende First Class Sensations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros servicios de concierge están diseñados para clientes exigentes: empresarios, celebridades, grupos privados, ejecutivos de alto nivel, y cualquier persona que busque experiencias exclusivas en Ibiza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo contactar con First Class Sensations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes contactarnos por teléfono al +34 672 123 456, por email a concierge@firstclassensations.com, o a través de nuestro formulario web."
      }
    }
  ]
}

// Función helper para crear schemas específicos por página
export const createServiceSchema = (service: {
  name: string
  description: string
  serviceType: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": organizationSchema,
  "areaServed": "Ibiza y Formentera, España",
  "serviceType": service.serviceType
})

// Función para generar breadcrumb schema
export const createBreadcrumbSchema = (items: Array<{
  name: string
  url: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
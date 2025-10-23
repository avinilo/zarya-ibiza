// Structured Data Schemas para SEO - Mantexia
// Implementación de Schema.org para mejorar la indexación y rich snippets

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mantexia",
  "url": "https://mantexia.com",
  "logo": "https://mantexia.com/og-image.png",
  "description": "Soluciones integrales para obras y fábricas en Valencia. Especialistas en mano de obra, gestión documental y gestora de mantenimientos.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Angelino Soler, 2, bajo 3",
    "addressLocality": "Alcàsser",
    "addressRegion": "Valencia",
    "postalCode": "46290",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34663423034",
    "contactType": "customer service",
    "email": "mantexia@mantexia.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://mantexia.com"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Valencia, España"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mantexia",
  "url": "https://mantexia.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mantexia.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchemas = {
  manoObra: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mano de Obra Especializada",
    "description": "Servicio de mano de obra técnica especializada con más de 15 técnicos cualificados para obras y fábricas. Modelo de subcontratación para instaladores eléctricos.",
    "provider": {
      "@type": "Organization",
      "name": "Mantexia"
    },
    "areaServed": "Valencia, España",
    "serviceType": "Mano de obra industrial",
    "offers": {
      "@type": "Offer",
      "description": "Técnicos especializados disponibles para proyectos industriales"
    }
  },
  gestora: {
    "@context": "https://schema.org", 
    "@type": "Service",
    "name": "Gestora de Mantenimientos",
    "description": "Gestión integral de mantenimientos industriales 24/7. Mantenimiento preventivo, correctivo y de emergencia para obras y fábricas.",
    "provider": {
      "@type": "Organization", 
      "name": "Mantexia"
    },
    "areaServed": "Valencia, España",
    "serviceType": "Mantenimiento industrial",
    "offers": {
      "@type": "Offer",
      "description": "Servicios de mantenimiento integral disponibles 24 horas"
    }
  },
  documental: {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Gestión Documental",
    "description": "Gestión documental especializada para freelancers y pequeñas empresas de hasta 15 trabajadores. Certificados técnicos, documentación PRL, seguros y homologaciones.",
    "provider": {
      "@type": "Organization",
      "name": "Mantexia"
    },
    "areaServed": "Valencia, España", 
    "serviceType": "Gestión documental",
    "offers": {
      "@type": "Offer",
      "description": "Departamento administrativo externo para pequeñas empresas"
    }
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mantexia",
  "image": "https://mantexia.com/og-image.png",
  "telephone": "+34663423034",
  "email": "mantexia@mantexia.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Angelino Soler, 2, bajo 3",
    "addressLocality": "Alcàsser", 
    "addressRegion": "Valencia",
    "postalCode": "46290",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.3456", // Coordenadas reales de Alcàsser
    "longitude": "-0.4302"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "€€",
  "areaServed": "Valencia"
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué servicios ofrece Mantexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mantexia ofrece tres servicios principales: Mano de Obra Especializada con más de 15 técnicos cualificados, Gestora de Mantenimientos 24/7 para mantenimiento integral, y Gestión Documental para freelancers y pequeñas empresas de hasta 15 trabajadores."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Dónde está ubicada Mantexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mantexia está ubicada en Av. Angelino Soler, 2, bajo 3, 46290 Alcàsser, Valencia. Prestamos servicios en toda la Comunidad Valenciana."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el horario de atención de Mantexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro horario de oficina es de lunes a viernes de 8:00 a 18:00. Para emergencias de mantenimiento, ofrecemos servicio 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de empresas pueden usar el servicio de Gestión Documental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro servicio de Gestión Documental está diseñado para freelancers y pequeñas empresas de hasta 15 trabajadores, especialmente en los sectores de construcción y fábricas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo contactar con Mantexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes contactarnos por teléfono al +34 663 423 034, por email a mantexia@mantexia.com, o visitarnos en nuestra oficina en Alcàsser, Valencia."
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
  "areaServed": "Valencia, España",
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
'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Crear structured data para breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://firstclassensations.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.href ? `https://firstclassensations.com${item.href}` : undefined
      }))
    ]
  }

  return (
    <>
      {/* Structured Data para Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
        <Link 
          href="/" 
          className="flex items-center hover:text-yellow-600 transition-colors"
          aria-label="Ir a la página principal"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Inicio</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href} 
                className="hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-firstclass-secondary font-medium font-body" aria-current="page">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}

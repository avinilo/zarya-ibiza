'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface AccessibleBreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function AccessibleBreadcrumbs({ items, className = '' }: AccessibleBreadcrumbsProps) {
  return (
    <nav
      aria-label="Navegación de migas de pan"
      className={`text-sm ${className}`}
      role="navigation"
    >
      <ol className="flex items-center space-x-2 text-firstclass-text/70">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-firstclass-primary transition-colors focus:outline-none focus:ring-2 focus:ring-firstclass-primary focus:ring-offset-2 rounded-sm"
            aria-label="Ir a página de inicio"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-firstclass-text/40" aria-hidden="true" />

            {item.current ? (
              <span
                className="text-firstclass-secondary font-medium font-body"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="hover:text-firstclass-primary transition-colors focus:outline-none focus:ring-2 focus:ring-firstclass-primary focus:ring-offset-2 rounded-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-firstclass-text/50">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

'use client'

import { useAnalytics } from '@/hooks/useAnalytics'
import { reportWebVitals } from '@/lib/gtag'
import { useEffect } from 'react'

// Componente para inicializar Analytics en el cliente
export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Inicializar tracking de rutas
  useAnalytics()

  // Configurar Web Vitals reporting
  useEffect(() => {
    // Solo en el cliente y si tenemos GA configurado
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      // Importar web-vitals dinámicamente para reducir bundle size
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
        onINP(reportWebVitals) // INP reemplaza a FID en versiones recientes
      }).catch(() => {
        // Silenciar errores si web-vitals no está disponible
      })
    }
  }, [])

  return <>{children}</>
}
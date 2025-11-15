'use client'

import { useAnalytics } from '@/hooks/useAnalytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Activar el tracking de Google Analytics
  useAnalytics()
  
  return <>{children}</>
}
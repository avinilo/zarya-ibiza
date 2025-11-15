// Hook personalizado para tracking de eventos de Google Analytics
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

export const useAnalytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      pageview(url)
    }
  }, [pathname, searchParams])
}

// Hook para tracking de eventos específicos
export const useTrackEvent = () => {
  return {
    trackClick: (elementName: string, category: string = 'UI') => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click', {
          event_category: category,
          event_label: elementName,
        })
      }
    },
    
    trackFormSubmit: (formName: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Form',
          event_label: formName,
        })
      }
    },
    
    trackServiceView: (serviceName: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'service_view', {
          event_category: 'Service',
          event_label: serviceName,
        })
      }
    }
  }
}
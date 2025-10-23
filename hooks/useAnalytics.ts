// Hook personalizado para tracking de eventos de Google Analytics
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    // Registrar el evento de cambio de ruta
    router.events.on('routeChangeComplete', handleRouteChange)
    
    // Limpiar el listener cuando el componente se desmonte
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
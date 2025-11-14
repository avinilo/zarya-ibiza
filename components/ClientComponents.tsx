'use client'

import dynamic from 'next/dynamic'

// Lazy loading para componentes no críticos (mejora Core Web Vitals)
export const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
  loading: () => null
})

export const WhatsAppBubble = dynamic(() => import('@/components/WhatsAppBubble'), {
  ssr: false,
  loading: () => null
})
'use client'

import dynamic from 'next/dynamic'

// Client Component wrapper para componentes dinámicos con ssr: false
// Esto resuelve el error de Next.js 15 con Server Components

const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
  loading: () => null
})

const WhatsAppBubble = dynamic(() => import('@/components/WhatsAppBubble'), {
  ssr: false,
  loading: () => null
})

const AutoLanguageIndicator = dynamic(() => import('@/components/AutoLanguageIndicator'), {
  ssr: false,
  loading: () => null
})

export default function ClientComponentsWrapper() {
  return (
    <>
      <CookieBanner />
      <WhatsAppBubble />
      <AutoLanguageIndicator />
    </>
  )
}
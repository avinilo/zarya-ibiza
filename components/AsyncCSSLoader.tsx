'use client'

import { useEffect } from 'react'

export default function AsyncCSSLoader() {
  useEffect(() => {
    // En desarrollo, los archivos CSS ya están cargados por Next.js
    // En producción, el CSS crítico está inline y el resto se carga automáticamente
    
    // Solo activar en producción
    if (process.env.NODE_ENV === 'production') {
      // Cargar fuentes o recursos externos no críticos después de la interacción
      const handleInteraction = () => {
        // Aquí podrías cargar fuentes externas o estilos de terceros si es necesario
        // Por ejemplo, Google Fonts u otros recursos externos
        
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
      }

      document.addEventListener('click', handleInteraction, { once: true })
      document.addEventListener('scroll', handleInteraction, { once: true })
      document.addEventListener('touchstart', handleInteraction, { once: true })
      
      // Cleanup
      return () => {
        document.removeEventListener('click', handleInteraction)
        document.removeEventListener('scroll', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
      }
    }
  }, [])

  return null
}
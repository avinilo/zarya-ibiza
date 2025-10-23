'use client'

import { useEffect, useRef } from 'react'

interface ScreenReaderAnnouncerProps {
  message: string
  priority?: 'polite' | 'assertive'
  clearAfter?: number
}

export default function ScreenReaderAnnouncer({ 
  message, 
  priority = 'polite', 
  clearAfter = 3000 
}: ScreenReaderAnnouncerProps) {
  const announcerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!message) return

    const announcer = announcerRef.current
    if (!announcer) return

    // Limpiar mensaje anterior
    announcer.textContent = ''
    
    // Pequeño delay para asegurar que el screen reader detecte el cambio
    const timer = setTimeout(() => {
      announcer.textContent = message
    }, 100)

    // Limpiar mensaje después del tiempo especificado
    const clearTimer = setTimeout(() => {
      if (announcer.textContent === message) {
        announcer.textContent = ''
      }
    }, clearAfter)

    return () => {
      clearTimeout(timer)
      clearTimeout(clearTimer)
    }
  }, [message, clearAfter])

  return (
    <div
      ref={announcerRef}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role="status"
    />
  )
}

// Hook personalizado para usar el anunciador
export function useScreenReaderAnnouncer() {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Crear elemento temporal para anuncio
    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', priority)
    announcer.setAttribute('aria-atomic', 'true')
    announcer.className = 'sr-only'
    announcer.setAttribute('role', 'status')
    
    document.body.appendChild(announcer)
    
    // Anunciar mensaje
    setTimeout(() => {
      announcer.textContent = message
    }, 100)
    
    // Limpiar después de 3 segundos
    setTimeout(() => {
      if (document.body.contains(announcer)) {
        document.body.removeChild(announcer)
      }
    }, 3000)
  }

  return { announce }
}
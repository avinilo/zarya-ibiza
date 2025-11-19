'use client'

import { useEffect } from 'react'

export default function AsyncCSSLoader() {
  useEffect(() => {
    // Cargar CSS no crítico después del paint inicial
    const loadCSS = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }

    // Cargar CSS después de 100ms para no bloquear el paint
    setTimeout(() => {
      loadCSS('/globals.css')
      loadCSS('/animations.css')
    }, 100)

    // También cargar cuando el usuario interactúa
    const handleInteraction = () => {
      loadCSS('/globals.css')
      loadCSS('/animations.css')
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    document.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('scroll', handleInteraction, { once: true })
    document.addEventListener('touchstart', handleInteraction, { once: true })

    // Cargar después de 5 segundos como fallback
    setTimeout(() => {
      loadCSS('/globals.css')
      loadCSS('/animations.css')
    }, 5000)
  }, [])

  return null
}
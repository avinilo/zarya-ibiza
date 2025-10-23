'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface FocusTrapProps {
  children: ReactNode
  isActive: boolean
  restoreFocus?: boolean
  className?: string
}

export default function FocusTrap({ 
  children, 
  isActive, 
  restoreFocus = true, 
  className = '' 
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive) return

    // Guardar el elemento activo anterior
    previousActiveElement.current = document.activeElement as HTMLElement

    const container = containerRef.current
    if (!container) return

    // Obtener todos los elementos focusables
    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ')

      return Array.from(container.querySelectorAll(focusableSelectors))
        .filter((element) => {
          const htmlElement = element as HTMLElement
          return htmlElement.offsetParent !== null && 
                 !htmlElement.hasAttribute('aria-hidden') &&
                 htmlElement.tabIndex !== -1
        }) as HTMLElement[]
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey) {
        // Shift + Tab: ir hacia atrás
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab: ir hacia adelante
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Enfocar el primer elemento focusable
    const focusableElements = getFocusableElements()
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    // Agregar event listener
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      
      // Restaurar el foco al elemento anterior si está configurado
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [isActive, restoreFocus])

  return (
    <div 
      ref={containerRef} 
      className={className}
      role="dialog"
      aria-modal={isActive ? 'true' : 'false'}
    >
      {children}
    </div>
  )
}
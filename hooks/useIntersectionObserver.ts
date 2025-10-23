'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If already triggered and triggerOnce is true, don't observe
    if (hasTriggered && triggerOnce) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)

        if (isElementIntersecting && triggerOnce) {
          setHasTriggered(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return {
    elementRef,
    isIntersecting: triggerOnce ? (hasTriggered || isIntersecting) : isIntersecting,
  }
}

// Hook for multiple elements with staggered animations
export function useScrollReveal(delay: number = 0) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Add 'js' class to document to enable animations
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('js')
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      element.classList.add('revealed')
      return
    }

    // Check if element is already in viewport on initial load
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    const isInitiallyVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0

    if (isInitiallyVisible) {
      // Add revealed class immediately for elements in initial viewport
      element.classList.add('revealed')
      return
    }

    // Handle intersection-based reveal
    if (isIntersecting) {
      const timer = setTimeout(() => {
        element.classList.add('revealed')
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isIntersecting, delay])

  return elementRef
}
// Componentes optimizados con lazy loading avanzado para Mantexia
// Mejora performance y Core Web Vitals

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, memo, useState, useEffect } from 'react'

// Loading components optimizados
const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
))
LoadingSpinner.displayName = 'LoadingSpinner'

const LoadingCard = memo(() => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-48 w-full mb-4"></div>
    <div className="bg-gray-200 rounded h-4 w-3/4 mb-2"></div>
    <div className="bg-gray-200 rounded h-4 w-1/2"></div>
  </div>
))
LoadingCard.displayName = 'LoadingCard'

const LoadingTestimonial = memo(() => (
  <div className="animate-pulse bg-white rounded-lg p-6 shadow-lg">
    <div className="flex items-center mb-4">
      <div className="bg-gray-200 rounded-full h-12 w-12 mr-4"></div>
      <div>
        <div className="bg-gray-200 rounded h-4 w-24 mb-2"></div>
        <div className="bg-gray-200 rounded h-3 w-16"></div>
      </div>
    </div>
    <div className="bg-gray-200 rounded h-4 w-full mb-2"></div>
    <div className="bg-gray-200 rounded h-4 w-3/4"></div>
  </div>
))
LoadingTestimonial.displayName = 'LoadingTestimonial'

// Lazy loaded components con configuración optimizada
export const LazyTestimonials = dynamic(
  () => import('./Testimonials'),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LoadingTestimonial />
        <LoadingTestimonial />
        <LoadingTestimonial />
      </div>
    ),
    ssr: false, // No SSR para componentes pesados
  }
)

export const LazyChatBot = dynamic(
  () => import('./ChatBot'),
  {
    loading: () => null, // Sin loading para chatbot (aparece cuando se necesita)
    ssr: false,
  }
)

export const LazyCookieBanner = dynamic(
  () => import('./CookieBanner'),
  {
    loading: () => null,
    ssr: false,
  }
)

export const LazyContactForm = dynamic(
  () => import('./ContactForm'),
  {
    loading: () => (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <LoadingSpinner />
        <p className="text-center text-gray-600 mt-4">Cargando formulario...</p>
      </div>
    ),
    ssr: true, // SSR para SEO del formulario
  }
)

// Wrapper con Suspense para mejor control de errores
export const SuspenseWrapper = memo(({ 
  children, 
  fallback = <LoadingSpinner /> 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
))
SuspenseWrapper.displayName = 'SuspenseWrapper'

// HOC para memoización inteligente
export const withMemoization = <P extends object>(
  Component: React.ComponentType<P>,
  displayName?: string
) => {
  const MemoizedComponent = memo(Component)
  if (displayName) {
    MemoizedComponent.displayName = displayName
  }
  return MemoizedComponent
}

// Hook para lazy loading condicional basado en viewport
export const useLazyLoad = (threshold = 0.1) => {
  const [inView, setInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)
  
  useEffect(() => {
    if (typeof window === 'undefined') {
      setInView(true)
      return
    }
    
    if (!ref) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    
    observer.observe(ref)
    
    return () => observer.disconnect()
  }, [ref, threshold])
  
  return { ref: setRef, inView }
}

// Componente para lazy loading de imágenes
export const LazyImage = memo(({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  width,
  height,
  fill = false,
  ...props 
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  fill?: boolean
  [key: string]: any
}) => {
  const { ref, inView } = useLazyLoad()
  
  return (
    <div ref={ref} className={className}>
      {(inView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
    </div>
  )
})
LazyImage.displayName = 'LazyImage'

// Componente para secciones que se cargan bajo demanda
export const LazySection = memo(({ 
  children, 
  className = '',
  threshold = 0.1 
}: {
  children: React.ReactNode
  className?: string
  threshold?: number
}) => {
  const { ref, inView } = useLazyLoad(threshold)
  
  return (
    <div ref={ref} className={className}>
      {inView ? children : <LoadingSpinner />}
    </div>
  )
})
LazySection.displayName = 'LazySection'
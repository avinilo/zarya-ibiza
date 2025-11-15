// Performance utilities for First Class Sensations website
// Utilidades de performance monitoring y optimización

// Tipos para métricas de performance
export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

// Thresholds para Core Web Vitals
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
}

// Función para determinar rating de métrica
export const getMetricRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS]
  if (!threshold) return 'good'
  
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

// Monitor de performance básico
export class PerformanceMonitor {
  private metrics: PerformanceMetric[] = []
  
  // Registrar métrica
  recordMetric(name: string, value: number) {
    const metric: PerformanceMetric = {
      name,
      value,
      rating: getMetricRating(name, value),
      timestamp: Date.now()
    }
    
    this.metrics.push(metric)
    
    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Performance Metric: ${name} = ${value}ms (${metric.rating})`)
    }
  }
  
  // Obtener métricas
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }
  
  // Limpiar métricas antiguas
  clearOldMetrics(maxAge: number = 300000) { // 5 minutos
    const now = Date.now()
    this.metrics = this.metrics.filter(metric => now - metric.timestamp < maxAge)
  }
}

// Instancia global del monitor
export const performanceMonitor = new PerformanceMonitor()

// Utilidades de lazy loading inteligente
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }
  
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Preload de recursos críticos
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof window === 'undefined') return
  
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) link.type = type
  
  document.head.appendChild(link)
}

// Preload de imágenes críticas
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      resolve()
      return
    }
    
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Debounce para optimizar eventos
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle para optimizar scroll/resize
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Medición de tiempo de ejecución
export const measureExecutionTime = async <T>(
  name: string,
  fn: () => Promise<T> | T
): Promise<T> => {
  const start = performance.now()
  
  try {
    const result = await fn()
    const end = performance.now()
    const duration = end - start
    
    performanceMonitor.recordMetric(name, duration)
    
    return result
  } catch (error) {
    const end = performance.now()
    const duration = end - start
    
    performanceMonitor.recordMetric(`${name}_error`, duration)
    throw error
  }
}

// Verificar si el dispositivo tiene conexión lenta
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false
  }
  
  const connection = (navigator as any).connection
  if (!connection) return false
  
  // Considerar lenta si effective type es 'slow-2g' o '2g'
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'
}

// Verificar si el dispositivo prefiere reducir movimiento
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Optimización de imágenes según el dispositivo
export const getOptimalImageSize = (baseWidth: number): number => {
  if (typeof window === 'undefined') return baseWidth
  
  const devicePixelRatio = window.devicePixelRatio || 1
  const screenWidth = window.screen.width
  
  // Ajustar según DPR y ancho de pantalla
  if (screenWidth <= 768) {
    return Math.min(baseWidth, screenWidth * devicePixelRatio)
  }
  
  return baseWidth * Math.min(devicePixelRatio, 2) // Máximo 2x
}

// Hook personalizado para performance monitoring
export const usePerformanceMonitoring = () => {
  if (typeof window === 'undefined') return null
  
  return {
    recordMetric: performanceMonitor.recordMetric.bind(performanceMonitor),
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
    measureTime: measureExecutionTime
  }
}
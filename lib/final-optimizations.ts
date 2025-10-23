/**
 * Final Performance Optimizations for Mantexia
 * Utilities for advanced image optimization, lazy loading, and resource preloading
 */

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image sizes
  generateSrcSet: (src: string, sizes: number[] = [320, 640, 768, 1024, 1280]) => {
    return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
  },

  // Get optimal image format based on browser support
  getOptimalFormat: (): 'webp' | 'avif' | 'jpg' => {
    if (typeof window === 'undefined') return 'jpg';
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Check AVIF support
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return 'avif';
    }
    
    // Check WebP support
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      return 'webp';
    }
    
    return 'jpg';
  },

  // Preload critical images
  preloadImage: (src: string, priority: 'high' | 'low' = 'high') => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = priority;
    document.head.appendChild(link);
  }
};

// Advanced lazy loading utilities
export const lazyLoading = {
  // Intersection Observer for lazy loading
  createObserver: (callback: (entries: IntersectionObserverEntry[]) => void) => {
    if (typeof window === 'undefined') return null;
    
    return new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    });
  },

  // Lazy load component with fade-in animation
  lazyLoadComponent: async <T>(
    importFn: () => Promise<{ default: T }>,
    fallback?: React.ComponentType
  ) => {
    try {
      const componentModule = await importFn();
      return componentModule.default;
    } catch (error) {
      console.warn('Failed to lazy load component:', error);
      return fallback || (() => null);
    }
  },

  // Preload component on hover/focus
  preloadOnInteraction: (importFn: () => Promise<any>) => {
    let preloaded = false;
    
    return {
      onMouseEnter: () => {
        if (!preloaded) {
          preloaded = true;
          importFn().catch(console.warn);
        }
      },
      onFocus: () => {
        if (!preloaded) {
          preloaded = true;
          importFn().catch(console.warn);
        }
      }
    };
  }
};

// Resource preloading utilities
export const resourcePreloading = {
  // Preload critical CSS
  preloadCSS: (href: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  },

  // Preload critical JavaScript
  preloadJS: (src: string, priority: 'high' | 'low' = 'high') => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = src;
    link.fetchPriority = priority;
    document.head.appendChild(link);
  },

  // Preload fonts with optimal settings
  preloadFont: (href: string, type: string = 'font/woff2') => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = type;
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  },

  // DNS prefetch for external domains
  dnsPrefetch: (domain: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  },

  // Preconnect to critical origins
  preconnect: (origin: string, crossorigin: boolean = false) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    if (crossorigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  }
};

// Font optimization utilities
export const fontOptimization = {
  // Load fonts with optimal strategy
  loadFont: (fontFamily: string, src: string, weight?: string, style?: string) => {
    if (typeof window === 'undefined') return;
    
    const font = new FontFace(fontFamily, `url(${src})`, {
      weight: weight || 'normal',
      style: style || 'normal',
      display: 'swap'
    });
    
    font.load().then(() => {
      document.fonts.add(font);
    }).catch(console.warn);
  },

  // Preload critical fonts
  preloadCriticalFonts: () => {
    // No custom fonts to preload - using system fonts via Tailwind CSS
    // This prevents 404 errors for non-existent font files
    console.log('Using system fonts - no custom fonts to preload');
  }
};

// Critical Rendering Path optimization
export const criticalPath = {
  // Inline critical CSS
  inlineCriticalCSS: (css: string) => {
    if (typeof window === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  },

  // Defer non-critical CSS
  deferCSS: (href: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
      link.onload = null;
    };
    document.head.appendChild(link);
  },

  // Remove unused CSS (basic implementation)
  removeUnusedCSS: () => {
    if (typeof window === 'undefined') return;
    
    // This is a simplified version - in production, use tools like PurgeCSS
    const stylesheets = Array.from(document.styleSheets);
    
    stylesheets.forEach(stylesheet => {
      try {
        const rules = Array.from(stylesheet.cssRules || []);
        rules.forEach((rule, index) => {
          if (rule.type === CSSRule.STYLE_RULE) {
            const styleRule = rule as CSSStyleRule;
            if (!document.querySelector(styleRule.selectorText)) {
              stylesheet.deleteRule(index);
            }
          }
        });
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    });
  }
};

// Performance monitoring utilities
export const performanceMonitoring = {
  // Measure and report performance metrics
  measurePerformance: () => {
    if (typeof window === 'undefined') return;
    
    // Wait for page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          // Navigation timing
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          
          // Paint timing
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          
          // Resource timing
          totalResources: performance.getEntriesByType('resource').length
        };
        
        // Report to analytics if available
        if (window.gtag) {
          window.gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metrics.firstContentfulPaint || 0)
          });
        }
        
        console.log('Performance Metrics:', metrics);
      }, 0);
    });
  },

  // Monitor Core Web Vitals
  monitorCoreWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // This would typically use web-vitals library
    // For now, we'll use a simplified version
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', (entry as any).processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};

// Main optimization initializer
export const initializeFinalOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Preload critical fonts
  fontOptimization.preloadCriticalFonts();
  
  // Setup DNS prefetch for external services
  resourcePreloading.dnsPrefetch('//www.google-analytics.com');
  resourcePreloading.dnsPrefetch('//fonts.googleapis.com');
  resourcePreloading.dnsPrefetch('//fonts.gstatic.com');
  
  // Preconnect to critical origins
  resourcePreloading.preconnect('https://fonts.googleapis.com');
  resourcePreloading.preconnect('https://fonts.gstatic.com', true);
  
  // Initialize performance monitoring
  performanceMonitoring.measurePerformance();
  performanceMonitoring.monitorCoreWebVitals();
  
  console.log('Final optimizations initialized');
};

const finalOptimizations = {
  imageOptimization,
  lazyLoading,
  resourcePreloading,
  fontOptimization,
  criticalPath,
  performanceMonitoring,
  initializeFinalOptimizations
};

export default finalOptimizations;
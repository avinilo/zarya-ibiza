'use client';

import { useEffect } from 'react';
import { initializeFinalOptimizations, resourcePreloading } from '@/lib/final-optimizations';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  preloadResources?: string[];
  criticalCSS?: string;
}

/**
 * PerformanceOptimizer Component
 * Handles preloading of critical resources and Critical Rendering Path optimization
 */
export default function PerformanceOptimizer({ 
  children, 
  preloadResources = [],
  criticalCSS 
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Initialize all final optimizations
    initializeFinalOptimizations();

    // Preload additional resources if specified
    preloadResources.forEach(resource => {
      if (resource.endsWith('.css')) {
        resourcePreloading.preloadCSS(resource);
      } else if (resource.endsWith('.js')) {
        resourcePreloading.preloadJS(resource);
      } else if (resource.match(/\.(woff|woff2|ttf|eot)$/)) {
        resourcePreloading.preloadFont(resource);
      }
    });

    // Inline critical CSS if provided
    if (criticalCSS) {
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      style.setAttribute('data-critical', 'true');
      document.head.appendChild(style);
    }

    // Setup resource hints for external services
    const externalServices = [
      'https://www.google-analytics.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalServices.forEach(service => {
      resourcePreloading.preconnect(service, true);
    });

    // Optimize images on page load
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-optimize]');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        
        // Add loading="lazy" if not already present
        if (!imageElement.loading) {
          imageElement.loading = 'lazy';
        }
        
        // Add decoding="async" for better performance
        if (!imageElement.decoding) {
          imageElement.decoding = 'async';
        }
        
        // Add fetchpriority for above-the-fold images
        if (imageElement.getBoundingClientRect().top < window.innerHeight) {
          imageElement.fetchPriority = 'high';
        }
      });
    };

    // Run image optimization after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    // Cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, [preloadResources, criticalCSS]);

  return <>{children}</>;
}

/**
 * ResourcePreloader Component
 * Preloads specific resources on component mount
 */
export function ResourcePreloader({ resources }: { resources: string[] }) {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
        link.onload = () => {
          link.rel = 'stylesheet';
        };
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      } else if (resource.match(/\.(woff|woff2|ttf|eot)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
        link.as = 'image';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);

  return null;
}

/**
 * CriticalResourcesPreloader Component
 * Preloads the most critical resources for the application
 */
export function CriticalResourcesPreloader() {
  useEffect(() => {
    // Critical resources that should be preloaded immediately
    const criticalResources = [
      // Critical CSS (if using external stylesheets)
      // '/styles/critical.css',
      
      // Critical fonts - removed Inter font as it doesn't exist
      // Using system fonts via Tailwind CSS instead
      
      // Critical images (logo, hero images)
      '/logo.webp',
      '/og-image.png',
      
      // Critical JavaScript chunks (if any)
      // '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      if (resource.match(/\.(woff|woff2)$/)) {
        resourcePreloading.preloadFont(resource);
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
        // Preload image using link element
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
      } else if (resource.endsWith('.css')) {
        resourcePreloading.preloadCSS(resource);
      } else if (resource.endsWith('.js')) {
        resourcePreloading.preloadJS(resource, 'high');
      }
    });

    // Setup DNS prefetch for external domains
    const externalDomains = [
      '//www.google-analytics.com',
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      resourcePreloading.dnsPrefetch(domain);
    });

  }, []);

  return null;
}

/**
 * LazyComponentWrapper
 * Wrapper for lazy-loaded components with performance optimizations
 */
export function LazyComponentWrapper({ 
  children, 
  fallback = <div>Cargando...</div>,
  threshold = 0.1,
  rootMargin = '50px'
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}) {
  return (
    <div 
      style={{ 
        minHeight: '100px', // Prevent layout shift
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
}
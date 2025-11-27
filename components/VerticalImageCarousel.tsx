'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface VerticalImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function VerticalImageCarousel({ images, alt, className = '' }: VerticalImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [nextImage])

  if (images.length === 0) return null

  return (
    <div className={`relative ${className}`}>
      {/* Container with aspect ratio for vertical images (9:16) */}
      <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - ${index + 1}`}
              fill
              className="object-contain rounded-2xl"
              loading="lazy"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-firstclass-primary scale-125' 
                : 'bg-firstclass-text/40 hover:bg-firstclass-text/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
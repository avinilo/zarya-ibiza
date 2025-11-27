'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
  height?: number
  objectFit?: 'cover' | 'contain'
}

export default function ImageCarousel({ 
  images, 
  alt, 
  className = '', 
  height = 400, 
  objectFit = 'cover' 
}: ImageCarouselProps) {
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
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <div className="relative w-full" style={{ height: `${height}px` }}>
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
              className={`object-${objectFit}`}
              loading="lazy"
              quality={60}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-firstclass-primary scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
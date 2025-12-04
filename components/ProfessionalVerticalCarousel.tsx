'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProfessionalVerticalCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function ProfessionalVerticalCarousel({ images, alt, className = '' }: ProfessionalVerticalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  if (images.length === 0) return null

  return (
    <div className={`relative ${className}`}>
      {/* Professional 4:5 aspect ratio container - Best practice for vertical images */}
      <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {image.toLowerCase().endsWith('.mp4') ? (
                <video
                  src={image}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={index === 0 ? 'auto' : 'metadata'}
                />
              ) : (
                <Image
                  src={image}
                  alt={`${alt} - ${index + 1}`}
                  fill
                  className="object-cover"
                  loading={index === 0 ? undefined : "lazy"}
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                  priority={index === 0}
                />
              )}
              {/* Subtle gradient overlay for better button visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-firstclass-primary p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-10 backdrop-blur-sm border border-white/30"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-firstclass-primary p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-10 backdrop-blur-sm border border-white/30"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Professional Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ease-out ${
              index === currentIndex 
                ? 'w-10 h-2 bg-firstclass-primary shadow-lg shadow-firstclass-primary/30' 
                : 'w-2 h-2 bg-firstclass-text/40 hover:bg-firstclass-text/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

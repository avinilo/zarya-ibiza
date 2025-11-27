'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface VerticalImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function VerticalImageCarousel({ images, alt, className = '' }: VerticalImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  if (images.length === 0) return null

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <div className="relative w-full h-full">
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
              className="object-cover"
              loading="lazy"
              quality={60}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      
      {/* Vertical Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Imagen anterior"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-firstclass-primary p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
      
      {/* Vertical Dots indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
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
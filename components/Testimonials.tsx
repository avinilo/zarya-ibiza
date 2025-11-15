'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isDesktop, setIsDesktop] = useState(false)
  const testimonialsContainerRef = useRef<HTMLDivElement>(null)
  
  // Generate testimonials with useMemo to prevent re-creation on every render
  const testimonials = useMemo(() => [
    {
      name: t('testimonials.t1.name'),
      position: t('testimonials.t1.position'),
      company: t('testimonials.t1.company'),
      location: t('testimonials.t1.location'),
      rating: 5,
      text: t('testimonials.t1.text'),
      project: t('testimonials.t1.project'),
      year: "2024"
    },
    {
      name: t('testimonials.t2.name'),
      position: t('testimonials.t2.position'),
      company: t('testimonials.t2.company'),
      location: t('testimonials.t2.location'),
      rating: 5,
      text: t('testimonials.t2.text'),
      project: t('testimonials.t2.project'),
      year: "2023"
    },
    {
      name: t('testimonials.t3.name'),
      position: t('testimonials.t3.position'),
      company: t('testimonials.t3.company'),
      location: t('testimonials.t3.location'),
      rating: 5,
      text: t('testimonials.t3.text'),
      project: t('testimonials.t3.project'),
      year: "2024"
    },
    {
      name: t('testimonials.t4.name'),
      position: t('testimonials.t4.position'),
      company: t('testimonials.t4.company'),
      location: t('testimonials.t4.location'),
      rating: 5,
      text: t('testimonials.t4.text'),
      project: t('testimonials.t4.project'),
      year: "2023"
    },
    {
      name: t('testimonials.t5.name'),
      position: t('testimonials.t5.position'),
      company: t('testimonials.t5.company'),
      location: t('testimonials.t5.location'),
      rating: 5,
      text: t('testimonials.t5.text'),
      project: t('testimonials.t5.project'),
      year: "2024"
    },
    {
      name: t('testimonials.t6.name'),
      position: t('testimonials.t6.position'),
      company: t('testimonials.t6.company'),
      location: t('testimonials.t6.location'),
      rating: 5,
      text: t('testimonials.t6.text'),
      project: t('testimonials.t6.project'),
      year: "2023"
    }
  ], [t]) // Only re-create when language changes
  
  // Function to scroll to a specific testimonial card
  const scrollToTestimonial = useCallback((index: number) => {
    if (testimonialsContainerRef.current) {
      const container = testimonialsContainerRef.current
      const cardWidth = 320 // w-80 = 320px + gap
      const scrollPosition = index * (cardWidth + 32) // 32px is gap-8
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }, [])

  // Update current index on scroll
  const handleScroll = () => {
    if (testimonialsContainerRef.current) {
      const container = testimonialsContainerRef.current
      const cardWidth = 320 + 32 // w-80 + gap
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentIndex(Math.min(Math.max(newIndex, 0), testimonials.length - 1))
    }
  }

  // Responsive items per view and desktop detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 768)
      
      if (width < 768) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (width < 1024) {
        setItemsPerView(2) // Tablet: 2 items
      } else {
        setItemsPerView(3) // Desktop: 3 items
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)
  
  // For mobile: use sliding logic, for PC: always show first 3 testimonials statically
  const visibleTestimonials = isDesktop 
    ? testimonials.slice(0, 3) // Always show first 3 testimonials on PC
    : testimonials.slice(currentIndex, currentIndex + itemsPerView)

  // Auto-play functionality - ONLY for mobile, PC is always static
  useEffect(() => {
    // Only auto-play on mobile devices (less than 768px)
    if (window.innerWidth >= 768) return // Don't auto-play on PC at all
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length
        scrollToTestimonial(nextIndex)
        return nextIndex
      })
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, scrollToTestimonial])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 mb-8">
      {/* Testimonials Container */}
      <div className="md:overflow-hidden mx-8 md:mx-12">
        {/* Mobile scrollable container */}
        <div 
          ref={testimonialsContainerRef}
          className="flex md:hidden gap-8 overflow-x-auto pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          onScroll={handleScroll}
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-firstclass-primary hover-lift flex-shrink-0 w-80 snap-center"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-firstclass-light rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-firstclass-secondary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-firstclass-primary text-firstclass-primary" />
                ))}
                <span className="text-sm text-gray-500 ml-2">({testimonial.rating}/5)</span>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Project Info */}
              <div className="mb-4 p-3 bg-firstclass-light rounded-lg">
                <p className="text-sm font-semibold text-firstclass-secondary mb-1">
                  {t('testimonials.project')}: {testimonial.project}
                </p>
                <p className="text-xs text-gray-600">
                  {testimonial.year} • {testimonial.location}
                </p>
              </div>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-firstclass-secondary">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm font-semibold text-firstclass-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid container - ALWAYS STATIC */}
        <div className="hidden md:block">
          {/* Desktop static - no navigation, no transitions */}
          <div className="flex gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-firstclass-primary hover-lift"
                style={{ width: `calc(${100 / 3}% - ${4}rem / 3)` }} // Always 3 columns on PC
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-firstclass-light rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-firstclass-secondary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-firstclass-primary text-firstclass-primary" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({testimonial.rating}/5)</span>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Project Info */}
                <div className="mb-4 p-3 bg-firstclass-light rounded-lg">
                  <p className="text-sm font-semibold text-firstclass-secondary mb-1">
                    {t('testimonials.project')}: {testimonial.project}
                  </p>
                  <p className="text-xs text-gray-600">
                    {testimonial.year} • {testimonial.location}
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-firstclass-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-semibold text-firstclass-primary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicators - Mobile only (NEVER show on PC) */}
      <div className="md:hidden flex justify-center mt-6 gap-2 mb-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentIndex === index ? 'bg-firstclass-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </section>
  )
}

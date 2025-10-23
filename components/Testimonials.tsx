'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const testimonials = [
    {
      name: "María González",
      position: "Directora de Operaciones",
      company: "Fábrica Textil Mediterránea",
      location: "Xàtiva, Valencia",
      rating: 5,
      text: "Mantexia transformó completamente nuestro sistema de mantenimiento. La reducción en paradas no programadas ha sido espectacular, y el equipo siempre ha mostrado la máxima profesionalidad.",
      project: "Mantenimiento Industrial Integral",
      year: "2024"
    },
    {
      name: "Carlos Ruiz",
      position: "Gerente de Facilities",
      company: "Centro Comercial Valencia Plaza",
      location: "Valencia Centro",
      rating: 5,
      text: "La renovación eléctrica se completó sin interrumpir nuestras operaciones. El ahorro energético conseguido ha superado nuestras expectativas. Totalmente recomendable.",
      project: "Renovación Sistema Eléctrico",
      year: "2023"
    },
    {
      name: "Ana Martínez",
      position: "Responsable Técnico",
      company: "Industria Alimentaria ValenFresh",
      location: "Cullera, Valencia",
      rating: 5,
      text: "Su conocimiento en normativas alimentarias y sistemas de refrigeración es excepcional. Cumplieron todos los plazos y requisitos de calidad sin ninguna incidencia.",
      project: "Mantenimiento Especializado",
      year: "2022"
    },
    {
      name: "Roberto Sánchez",
      position: "Director de Proyecto",
      company: "Constructora Los Naranjos",
      location: "Alcàsser, Valencia",
      rating: 5,
      text: "150 viviendas entregadas en plazo y sin una sola incidencia. La instalación domótica ha sido un éxito total. Mantexia es sinónimo de calidad y confianza.",
      project: "Instalaciones Residenciales",
      year: "2023"
    },
    {
      name: "Laura Pérez",
      position: "Jefa de Mantenimiento",
      company: "Grupo Industrial Valencia",
      location: "Sagunto, Valencia",
      rating: 5,
      text: "Llevamos 3 años trabajando con Mantexia y siempre superan nuestras expectativas. Su capacidad de respuesta ante emergencias es excepcional.",
      project: "Mantenimiento Preventivo",
      year: "2024"
    },
    {
      name: "Miguel Torres",
      position: "Administrador",
      company: "Comunidad Residencial Azahar",
      location: "Torrent, Valencia",
      rating: 5,
      text: "Profesionales de confianza que siempre cumplen lo prometido. La modernización de nuestras instalaciones ha mejorado significativamente la eficiencia energética.",
      project: "Modernización Eléctrica",
      year: "2023"
    }
  ]

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // Tablet: 2 items
      } else {
        setItemsPerView(3) // Desktop: 3 items
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView)
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, itemsPerView])

  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView)
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView)
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-mantexia-primary hover:bg-mantexia-primary hover:text-white transition-all duration-300 hover-lift"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-mantexia-primary hover:bg-mantexia-primary hover:text-white transition-all duration-300 hover-lift"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Testimonials Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{ transform: `translateX(0)` }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-mantexia-primary hover-lift flex-shrink-0"
              style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 2}rem / ${itemsPerView})` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-mantexia-light rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-mantexia-secondary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-mantexia-primary text-mantexia-primary" />
                ))}
                <span className="text-sm text-gray-500 ml-2">({testimonial.rating}/5)</span>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Project Info */}
              <div className="mb-4 p-3 bg-mantexia-light rounded-lg">
                <p className="text-sm font-semibold text-mantexia-secondary mb-1">
                  Proyecto: {testimonial.project}
                </p>
                <p className="text-xs text-gray-600">
                  {testimonial.year} • {testimonial.location}
                </p>
              </div>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-mantexia-secondary">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm font-semibold text-mantexia-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-mantexia-primary scale-125' 
                : 'bg-gray-300 hover:bg-mantexia-primary/50'
            }`}
            aria-label={`Ir al grupo de testimonios ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
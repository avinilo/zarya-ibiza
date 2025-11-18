'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Calendar, Star, Car, Shield, Sparkles, CheckCircle, Phone, Mail, MapPin, Users, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/hooks/useLanguageNew'
import LanguageSuggestion from '@/components/LanguageSuggestion'

// Hero Section Component
function HeroSection() {
  const { t, mounted } = useLanguage()
  
  // Renderizar contenido inmediatamente para mejor SEO
  // El hook maneja el cambio de idioma sin necesidad de esperar montaje
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Luxury waterfront view in Ibiza"
          fill
          className="object-cover"
          priority
          loading="eager"
          sizes="100vw"
        />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400/40 rounded-full animate-ping delay-500"></div>
      </div>
      <div className="relative z-20 container-custom mx-auto px-4 text-center text-white pt-24 md:pt-32 lg:pt-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal mb-4 leading-tight animate-slide-up font-hero" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
          {t('hero.title')}
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl mb-8 font-light animate-slide-up animation-delay-200 font-hero" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center animate-slide-up animation-delay-600 mb-8">
          <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-body" style={{letterSpacing: '0.1em'}}>
            {t('hero.cta.plan')}
          </a>
        </div>
        
        {/* Language Selector */}
        <div className="absolute top-6 right-6 z-30">
          <LanguageSelector />
        </div>
      </div>
      
      {/* Language Suggestion Toast */}
      <LanguageSuggestion />
    </section>
  )
}

export default function HomeContent() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)

  // ... resto del componente sin cambios ...

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Resto del contenido... */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-firstclass-primary mb-4 font-hero">
              {t('services.title')}
            </h2>
            <p className="text-xl text-firstclass-secondary max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          {/* ... resto del contenido ... */}
        </div>
      </section>
      
      {/* Más secciones... */}
    </div>
  )
}
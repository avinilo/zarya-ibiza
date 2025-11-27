'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Calendar, Star, Car, Shield, Sparkles, CheckCircle, Phone, Mail, MapPin, Users, ChevronLeft, ChevronRight, Instagram, Anchor } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import ImageCarousel from '@/components/ImageCarousel'
import LanguageSelector from '@/components/LanguageSelectorOptimized'
import { useLanguage } from '@/hooks/useLanguageOptimized'

// Hero Section Component
function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-firstclass-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Luxury waterfront view in Ibiza"
          fill
          className="object-cover opacity-60"
          priority
          loading="eager"
          sizes="100vw"
          fetchPriority="high"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-firstclass-background/80 via-transparent to-firstclass-background/90"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-firstclass-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-firstclass-secondary/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-firstclass-text/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-firstclass-primary/40 rounded-full animate-ping delay-500"></div>
      </div>
      <div className="relative z-20 container-custom mx-auto px-4 text-center text-firstclass-text pt-24 md:pt-32 lg:pt-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal mb-4 leading-tight animate-slide-up font-hero" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          {t('hero.title')}
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl mb-8 font-light animate-slide-up animation-delay-200 font-hero text-firstclass-primary" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center animate-slide-up animation-delay-600 mb-8">
          <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="border-2 border-firstclass-text text-firstclass-text px-8 py-3 rounded-lg font-medium text-lg tracking-wider hover:bg-firstclass-text hover:text-firstclass-background transition-all duration-300 hover:scale-105 font-body" style={{ letterSpacing: '0.1em' }}>
            {t('hero.cta.plan')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomeContent() {
  const { language, changeLanguage, t, mounted } = useLanguage()
  const servicesContainerRef = useRef<HTMLDivElement>(null)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  console.log('HomeContent mounted:', mounted)
  console.log('HomeContent language:', language)

  if (!mounted) {
    return null // Return null until client-side hydration is complete
  }

  // Function to scroll to a specific service card
  const scrollToService = (index: number) => {
    if (servicesContainerRef.current) {
      const container = servicesContainerRef.current
      const cardWidth = 288 // w-72 = 288px + gap
      const scrollPosition = index * (cardWidth + 8) // 8px is gap-2
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
      setCurrentServiceIndex(index)
    }
  }

  // Update current index on scroll
  const handleScroll = () => {
    if (servicesContainerRef.current) {
      const container = servicesContainerRef.current
      const cardWidth = 288 + 8 // w-72 + gap
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentServiceIndex(Math.min(Math.max(newIndex, 0), services.length - 1))
    }
  }

  const services = [
    {
      id: 'luxury-holidays',
      title: t('service1.title'),
      subtitle: t('service1.subtitle'),
      icon: Home,
      description: t('service1.feature1'),
      features: [
        t('service1.feature1'),
        t('service1.feature2'),
        t('service1.feature3')
      ],
      image: '/vacacioneslujo.webp',
      priority: 1
    },
    {
      id: 'vip-tables',
      title: t('service2.title'),
      subtitle: t('service2.subtitle'),
      icon: Star,
      description: t('service2.feature1'),
      features: [
        t('service2.feature1'),
        t('service2.feature2'),
        t('service2.feature3')
      ],
      image: '/mesas-vip.webp',
      priority: 2
    },
    {
      id: 'luxury-villas',
      title: t('service3.title'),
      subtitle: t('service3.subtitle'),
      icon: Home,
      description: t('service3.feature1'),
      features: [
        t('service3.feature1'),
        t('service3.feature2'),
        t('service3.feature3')
      ],
      image: '/villas.webp',
      priority: 3
    },
    {
      id: 'vtc-vans',
      title: t('service4.title'),
      subtitle: t('service4.subtitle'),
      icon: Car,
      description: t('service4.feature1'),
      features: [
        t('service4.feature1'),
        t('service4.feature2'),
        t('service4.feature3')
      ],
      image: '/transporte.webp',
      priority: 4
    },
    {
      id: 'luxury-cars',
      title: t('service7.title'),
      subtitle: t('service7.subtitle'),
      icon: Car,
      description: t('service7.feature1'),
      features: [
        t('service7.feature1'),
        t('service7.feature2'),
        t('service7.feature3')
      ],
      image: '/cocheslujo.webp',
      priority: 7
    },
    {
      id: 'security',
      title: t('service5.title'),
      subtitle: t('service5.subtitle'),
      icon: Shield,
      description: t('service5.feature1'),
      features: [
        t('service5.feature1'),
        t('service5.feature2'),
        t('service5.feature3')
      ],
      image: '/seguridad.webp',
      priority: 5
    },
    {
      id: 'villa-events',
      title: t('service6.title'),
      subtitle: t('service6.subtitle'),
      icon: Sparkles,
      description: t('service6.feature1'),
      features: [
        t('service6.feature1'),
        t('service6.feature2'),
        t('service6.feature3')
      ],
      image: '/fiestaprivada.webp',
      priority: 6
    },
    {
      id: 'yacht-rental',
      title: t('service8.title'),
      subtitle: t('service8.subtitle'),
      icon: Anchor,
      description: t('service8.feature1'),
      features: [
        t('service8.feature1'),
        t('service8.feature2'),
        t('service8.feature3')
      ],
      image: '/yates.webp',
      priority: 8
    },
    {
      id: 'personal-shopping',
      title: t('service9.title'),
      subtitle: t('service9.subtitle'),
      icon: Sparkles,
      description: t('service9.feature1'),
      features: [
        t('service9.feature1'),
        t('service9.feature2'),
        t('service9.feature3')
      ],
      image: '/shopping.webp',
      priority: 9
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-firstclass-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-firstclass-primary font-hero">
              {t('services.title')}
            </h2>
            <p className="text-xl text-firstclass-text/80 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div
            ref={servicesContainerRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 overflow-x-auto md:overflow-visible pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.id} className="bg-firstclass-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80 md:w-auto snap-center border border-firstclass-primary/10 hover:border-firstclass-primary/30">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={60}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-firstclass-background/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-firstclass-text">
                      <Icon className="w-8 h-8 mb-2 text-firstclass-primary" />
                      <h3 className="text-xl font-bold font-hero">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-firstclass-primary font-semibold mb-4 font-body">{service.subtitle}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-firstclass-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-firstclass-text/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dot navigation for mobile */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToService(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentServiceIndex ? 'bg-firstclass-primary w-6' : 'bg-firstclass-text/30 hover:bg-firstclass-text/50'
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-firstclass-light">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-firstclass-primary font-hero">
              {t('process.title')}
            </h2>
            <p className="text-xl text-firstclass-text/80 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-firstclass-primary text-firstclass-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero shadow-lg shadow-firstclass-primary/20">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 text-firstclass-primary font-hero">{t('process.step1.title')}</h3>
              <p className="text-firstclass-text/80">
                {t('process.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-firstclass-primary text-firstclass-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero shadow-lg shadow-firstclass-primary/20">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 text-firstclass-primary font-hero">{t('process.step2.title')}</h3>
              <p className="text-firstclass-text/80">
                {t('process.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-firstclass-primary text-firstclass-background rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero shadow-lg shadow-firstclass-primary/20">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 text-firstclass-primary font-hero">{t('process.step3.title')}</h3>
              <p className="text-firstclass-text/80">
                {t('process.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-firstclass-background">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-firstclass-primary font-hero">
                {t('about.title')}
              </h2>
              <p className="text-lg text-firstclass-text/90 mb-6 leading-relaxed">
                <strong>{t('about.subtitle')}</strong>
              </p>
              <div className="text-firstclass-text/80 mb-6" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
              <div className="text-firstclass-text/80 mb-6" dangerouslySetInnerHTML={{ __html: t('about.feature1') }} />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-firstclass-primary" />
                  <span className="text-firstclass-text/80" dangerouslySetInnerHTML={{ __html: t('about.location') }} />
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-firstclass-primary" />
                  <span className="text-firstclass-text/80">{t('about.clients')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-firstclass-primary" />
                  <span className="text-firstclass-text/80" dangerouslySetInnerHTML={{ __html: t('about.style') }} />
                </div>
              </div>
              <div className="text-firstclass-text/80 mt-6" dangerouslySetInnerHTML={{ __html: t('about.philosophy') }} />
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-firstclass-primary/20 w-full max-w-xs">
                <ImageCarousel
                  images={[
                    '/carrousel sobre/WhatsApp-Image-2025-11-24-at-09.37.46.webp',
                    '/carrousel sobre/WhatsApp-Image-2025-11-24-at-09.37.46-_1_.webp',
                    '/carrousel sobre/WhatsApp-Image-2025-11-24-at-09.37.47.webp',
                    '/carrousel sobre/info.webp'
                  ]}
                  alt="First Class Sensations - Imágenes del equipo y servicios"
                  className="rounded-2xl w-full"
                  height={700}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-firstclass-light">
        <div className="w-full px-4 sm:container-custom sm:mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-hero text-firstclass-primary">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-firstclass-text/80 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
              <div className="bg-firstclass-background rounded-xl p-4 sm:p-6 md:p-8 border border-firstclass-primary/20 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-hero text-firstclass-primary">{t('contact.title')}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-firstclass-primary mt-1" />
                    <div>
                      <p className="font-semibold text-firstclass-primary">{t('contact.email')}</p>
                      <a href="mailto:ivansanchezcamano@gmail.com" className="text-firstclass-text/80 hover:text-firstclass-primary transition-colors">
                        ivansanchezcamano@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-firstclass-primary mt-1" />
                    <div>
                      <p className="font-semibold text-firstclass-primary">{t('contact.whatsapp')}</p>
                      <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="text-firstclass-text/80 hover:text-firstclass-primary transition-colors">
                        +34 600 887 755
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-firstclass-primary mt-1" />
                    <div>
                      <p className="font-semibold text-firstclass-primary">{t('contact.location')}</p>
                      <p className="text-firstclass-text/80">Ibiza, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-firstclass-primary mt-1" />
                    <div>
                      <p className="font-semibold text-firstclass-primary">{t('contact.instagram')}</p>
                      <a href="https://www.instagram.com/ivan_first_class_sensations.co/" target="_blank" rel="noopener noreferrer" className="text-firstclass-text/80 hover:text-firstclass-primary transition-colors">
                        @ivan_first_class_sensations.co
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-firstclass-light rounded-lg border border-firstclass-primary/10">
                  <p className="text-sm text-firstclass-text/70 mb-2">
                    {t('contact.form.hint')}
                  </p>
                </div>
              </div>

              <div className="bg-firstclass-background rounded-xl p-4 sm:p-6 md:p-8 border border-firstclass-primary/20 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Home, Phone, Mail } from '@/components/OptimizedIcons'
import { LazyIcon, Star, Car, Shield, Sparkles, CheckCircle, MapPin, Users, Instagram, Anchor } from '@/components/OptimizedIcons'

// Dynamic imports para componentes no críticos
const ContactForm = dynamic(() => import('@/components/ContactForm'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
const FAQ = dynamic(() => import('@/components/FAQ'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
})
import LanguageSelector from '@/components/LanguageSelectorOptimized'
import { useLanguage } from '@/hooks/useLanguageOptimized'

// Hero Section Component
function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-900">
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
          fetchPriority="high"
          quality={50}
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
        <p className="text-3xl md:text-4xl lg:text-5xl mb-8 font-light animate-slide-up animation-delay-200 font-hero text-yellow-600" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
          {t('hero.subtitle')}
        </p>
        <div className="flex justify-center animate-slide-up animation-delay-600 mb-8">
          <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-body" style={{letterSpacing: '0.1em'}}>
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
      <section id="services" className="py-20 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-600 font-hero">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80 md:w-auto snap-center">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 50vw, 33vw"
                      quality={50}
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="w-8 h-8 mb-2" />
                      <h3 className="text-xl font-bold font-hero">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-yellow-600 font-semibold mb-4 font-body">{service.subtitle}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
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
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentServiceIndex ? 'bg-yellow-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-600 font-hero">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-600 font-hero">{t('process.step1.title')}</h3>
              <p className="text-gray-600">
                {t('process.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-600 font-hero">{t('process.step2.title')}</h3>
              <p className="text-gray-600">
                {t('process.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-hero">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-600 font-hero">{t('process.step3.title')}</h3>
              <p className="text-gray-600">
                {t('process.step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-600 font-hero">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>{t('about.subtitle')}</strong>
              </p>
              <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
              <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: t('about.feature1') }} />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('about.location') }} />
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">{t('about.clients')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('about.style') }} />
                </div>
              </div>
              <div className="text-gray-700 mt-6" dangerouslySetInnerHTML={{ __html: t('about.philosophy') }} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/team.webp"
                alt="Nuestro equipo - First Class Sensations"
                width={600}
                height={400}
                className="rounded-2xl"
                loading="lazy"
                sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 600px, 600px"
                quality={50}
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:container-custom sm:mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-hero text-yellow-600">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
              <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-hero text-yellow-600">{t('contact.title')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-600">{t('contact.email')}</p>
                      <a href="mailto:ivansanchezcamano@gmail.com" className="text-gray-700 hover:text-yellow-600 transition-colors">
                        ivansanchezcamano@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-600">{t('contact.whatsapp')}</p>
                      <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">
                        +34 600 887 755
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-600">{t('contact.location')}</p>
                      <p className="text-gray-700">Ibiza, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-600">{t('contact.instagram')}</p>
                      <a href="https://www.instagram.com/ivan_first_class_sensations.co/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors">
                        @ivan_first_class_sensations.co
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700 mb-2">
                    {t('contact.form.hint')}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

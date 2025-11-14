'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Calendar, Star, Car, Shield, Sparkles, CheckCircle, Phone, Mail, MapPin, Users, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/hooks/useLanguage'

// Hero Section Component
function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://media.istockphoto.com/id/1475622189/es/foto/el-casco-antiguo-y-el-castillo-de-ibiza-vistos-desde-el-mar.jpg?s=1024x1024&w=is&k=20&c=j7qYWqQXwfarLflGJwsYjsFmVwkMuKYMArsS_0T4DQU="
          alt="El casco antiguo y el castillo de Ibiza vistos desde el mar"
          fill
          className="object-cover"
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      <div className="relative z-20 container-custom mx-auto px-4 text-center text-white pt-24 md:pt-32 lg:pt-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-slide-up animation-delay-200">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 animate-slide-up animation-delay-400">
          {t('hero.description')}
        </p>
        <div className="flex justify-center animate-slide-up animation-delay-600 mb-8">
          <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-12 py-5 rounded-lg font-semibold text-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.79.372-.272.297-1.04 1.011-1.04 2.475 0 1.464 1.065 2.875 1.213 3.074.149.198 2.096 3.213 5.077 4.492.71.306 1.262.488 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0024.003 11.89"/>
            </svg>
            {t('hero.cta.whatsapp')}
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70 animate-fade-in animation-delay-800 mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>{t('hero.trust.available')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>{t('hero.trust.exclusive')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>{t('hero.trust.personalized')}</span>
          </div>
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
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop&auto=format',
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
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&auto=format',
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
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format',
      priority: 3
    },
    {
      id: 'luxury-cars',
      title: t('service4.title'),
      subtitle: t('service4.subtitle'),
      icon: Car,
      description: t('service4.feature1'),
      features: [
        t('service4.feature1'),
        t('service4.feature2'),
        t('service4.feature3')
      ],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&auto=format',
      priority: 4
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
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format',
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
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format',
      priority: 6
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <Icon className="w-8 h-8 mb-2" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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
                  index === currentServiceIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('process.step1.title')}</h3>
              <p className="text-gray-600">
                {t('process.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('process.step2.title')}</h3>
              <p className="text-gray-600">
                {t('process.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('process.step3.title')}</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>{t('about.subtitle')}</strong>
              </p>
              <p className="text-gray-700 mb-6">
                {t('about.description')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('about.feature1')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('about.clients')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{t('about.style')}</span>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                {t('about.philosophy')}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop&auto=format"
                alt="First Class Sensations"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t('contact.title')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-400">{t('contact.email')}</p>
                      <a href="mailto:ivansanchezcamano@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                        ivansanchezcamano@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-400">{t('contact.whatsapp')}</p>
                      <a href="https://wa.me/34600887755" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        +34 600 887 755
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-400">{t('contact.location')}</p>
                      <p className="text-gray-300">Ibiza, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-400">{t('contact.instagram')}</p>
                      <a href="https://www.instagram.com/ivan_first_class_sensations.co/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                        @ivan_first_class_sensations.co
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">
                    {t('contact.form.hint')}
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
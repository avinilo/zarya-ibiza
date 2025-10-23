import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Wrench, FileText, CheckCircle, Clock, Shield, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('home')

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type as any,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card as any,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function Home() {

  const services = [
    {
      id: 'mano-obra',
      title: 'Mano de Obra',
      subtitle: 'Técnicos Especializados',
      icon: Users,
      description: 'Equipo de 8 técnicos especializados para subcontratación con instaladoras eléctricas. Cobertura Valencia, Alicante y Castellón.',
      features: [
        '8 técnicos especializados en plantilla',
        'Subcontratación con instaladoras eléctricas',
        'Cobertura Valencia, Alicante y Castellón',
        'Experiencia en grandes proyectos (Nou Mestalla, Roig Arena)',
        'Certificaciones PRL vigentes',
        'Colaboración con instaladoras solares/fotovoltaicas'
      ],
      link: '/mano-obra',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&auto=format',
      priority: 1
    },
    {
      id: 'gestion-documental',
      title: 'Gestión Documental',
      subtitle: 'Trámites y Certificados',
      icon: FileText,
      description: 'Gestión completa de trámites y certificados para autónomos y empresas de hasta 15 trabajadores. Acceso garantizado a obras y fábricas.',
      features: [
        'Especializado en autónomos y empresas hasta 15 trabajadores',
        'Gestión completa de trámites para obras y fábricas',
        'Certificados y permisos necesarios',
        'Documentación preventiva al día',
        'Acceso garantizado a instalaciones industriales',
        'Enfoque en instaladoras eléctricas y fábricas'
      ],
      link: '/gestion-documental',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
      priority: 2
    },
    {
      id: 'gestora',
      title: 'Gestora de Mantenimientos',
      subtitle: 'Mantenimiento Integral Especializado',
      icon: Wrench,
      description: 'Mantenimiento integral para supermercados, hoteles, restaurantes y residencias. Revisiones obligatorias y mantenimiento correctivo.',
      features: [
        'Supermercados, hoteles y restaurantes',
        'Revisiones obligatorias periódicas',
        'Mantenimiento correctivo inmediato',
        'Certificaciones y reparaciones',
        'Respuesta rápida 24-48h',
        'Todas las especialidades: electricidad, clima, albañilería'
      ],
      link: '/gestora-mantenimientos',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop&auto=format',
      priority: 3
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-mantexia overflow-hidden relative -mt-20 pt-20"
      >
        <div className="absolute inset-0 bg-mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&auto=format"
              alt="Instalaciones industriales modernas - Mantexia especializada en obras y fábricas"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-bounce-in">
              Partner Especializado en Subcontratación
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in animate-delay-300">
              <strong>8 técnicos especializados</strong> para instaladoras eléctricas y gestión documental completa
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80 animate-fade-in animate-delay-400">
              Valencia • Alicante • Castellón
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-500">
              <a href="#servicios" className="btn-primary hover-lift hover-glow">
                Ver Servicios Principales
              </a>
              <a href="#contacto" className="btn-secondary hover-lift hover-scale">
                Solicitar Colaboración
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-mantexia-secondary">
              Clientes Objetivo Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Especializados en colaboración con instaladoras eléctricas y servicios para autónomos y pequeñas empresas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-mantexia-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Instaladoras Eléctricas</h3>
              <p className="text-gray-600">Especialmente solares/fotovoltaicas. Subcontratación de mano de obra especializada.</p>
            </div>
            
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-mantexia-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Autónomos y Pequeñas Empresas</h3>
              <p className="text-gray-600">Hasta 15 trabajadores. Gestión completa de trámites y documentación.</p>
            </div>
            
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-mantexia-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Fábricas y Establecimientos</h3>
              <p className="text-gray-600">Supermercados, hoteles, restaurantes. Mantenimiento integral y revisiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="servicios" 
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Nuestros Servicios Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Priorizados según estrategia de negocio y captación de clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link 
                  key={service.id}
                  href={service.link}
                  className={`card-service group animate-scale-in animate-delay-${(index + 1) * 200} hover-lift block cursor-pointer`}
                >
                  
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Servicios profesionales de Mantexia`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-mantexia-primary/20"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-mantexia-secondary">{service.title}</h3>
                  <p className="text-sm text-mantexia-primary font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-mantexia-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-mantexia-primary font-semibold group-hover:gap-3 transition-all group-hover:text-mantexia-secondary">
                    Más información <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>



      {/* About Section */}
      <section 
        id="nosotros" 
        className="section-padding bg-white"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&h=800&fit=crop&auto=format"
                alt="Equipo técnico profesional - Mantexia"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-mantexia-primary/10"></div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-slide-left">
                Partner de Confianza
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                <strong>8 técnicos especializados</strong> trabajando como extensión de su equipo. Nos especializamos en subcontratación para instaladoras eléctricas y gestión documental para autónomos y pequeñas empresas.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8 animate-slide-right animate-delay-500">
                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-mantexia-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-mantexia-secondary">8 Técnicos en Plantilla</h3>
                    <p className="text-sm text-gray-600">Equipo especializado disponible</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-mantexia-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-mantexia-secondary">Certificaciones PRL</h3>
                    <p className="text-sm text-gray-600">Formación y seguridad al día</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-mantexia-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-mantexia-secondary">Cobertura Regional</h3>
                    <p className="text-sm text-gray-600">Valencia, Alicante, Castellón</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-mantexia-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-mantexia-secondary">Grandes Proyectos</h3>
                    <p className="text-sm text-gray-600">Nou Mestalla, Roig Arena</p>
                  </div>
                </div>
              </div>

              <a href="#contacto" className="btn-primary hover-lift">
                Solicitar Colaboración
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacto" 
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
                Contacta con Nosotros
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up animate-delay-200">
                Respuesta rápida garantizada en 24-48 horas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-mantexia-light hover-lift animate-slide-left animate-delay-400">
                <h3 className="text-2xl font-bold mb-6 text-mantexia-secondary">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-mantexia-primary mt-1" />
                    <div>
                      <p className="font-semibold text-mantexia-secondary">Teléfono</p>
                      <a href="tel:663423034" className="text-gray-600 hover:text-mantexia-primary transition-colors">663 423 034</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mantexia-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-mantexia-secondary">Email</p>
                      <a href="mailto:mantexia@mantexia.com" className="text-gray-600 hover:text-mantexia-primary transition-colors">mantexia@mantexia.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mantexia-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-mantexia-secondary">Dirección</p>
                      <p className="text-gray-600">Av. Angelino Soler, 2, bajo 3<br />46290 Alcàsser, Valencia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-mantexia-light hover-lift animate-slide-right animate-delay-600">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

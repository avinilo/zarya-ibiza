import Image from 'next/image'
import Link from 'next/link'
import { Star, Award, TrendingUp, Users, CheckCircle, ArrowRight, MapPin, Clock, Calendar } from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('casosExito')

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function CasosExito() {
  const breadcrumbItems = [
    { name: 'Casos de Éxito' }
  ]
  const successCases = [
    {
      title: "Nou Mestalla - Valencia CF",
      location: "Valencia",
      date: "2024",
      category: "Mano de Obra Especializada",
      description: "Suministro de técnicos electricistas y electromecánicos para las instalaciones del nuevo estadio del Valencia CF",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&h=800&fit=crop&auto=format",
      results: [
        "15+ técnicos especializados desplegados",
        "Instalaciones eléctricas de alta complejidad",
        "Cumplimiento estricto de plazos de obra",
        "Certificaciones PRL y seguridad al 100%"
      ],
      duration: "12 meses",
      teamSize: "15+ técnicos",
      rating: 5
    },
    {
      title: "Roig Arena - Pabellón Deportivo",
      location: "Valencia",
      date: "2023",
      category: "Instalaciones Deportivas",
      description: "Mantenimiento integral y servicios técnicos especializados para el pabellón deportivo Roig Arena",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&auto=format",
      results: [
        "Sistema eléctrico optimizado para eventos",
        "Mantenimiento preventivo continuo",
        "Respuesta 24h para emergencias",
        "Reducción del 30% en incidencias técnicas"
      ],
      duration: "Contrato anual",
      teamSize: "8 técnicos",
      rating: 5
    },
    {
      title: "Hospitales Privados Valencia",
      location: "Valencia y área metropolitana",
      date: "2023-2024",
      category: "Sector Sanitario",
      description: "Gestión documental y servicios de mano de obra para múltiples centros hospitalarios privados",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=800&fit=crop&auto=format",
      results: [
        "Gestión PRL para 200+ trabajadores",
        "Certificaciones sanitarias actualizadas",
        "Técnicos especializados en instalaciones críticas",
        "Cumplimiento normativa sanitaria 100%"
      ],
      duration: "Servicios continuos",
      teamSize: "12 técnicos",
      rating: 5
    },
    {
      title: "Hoteles y Residencias",
      location: "Costa valenciana",
      date: "2022-2024",
      category: "Sector Hotelero",
      description: "Servicios integrales de mantenimiento y gestión documental para cadenas hoteleras y residencias",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&auto=format",
      results: [
        "Mantenimiento preventivo 24/7",
        "Gestión administrativa externa completa",
        "Técnicos especializados en hostelería",
        "Mejora del 40% en eficiencia operativa"
      ],
      duration: "Contratos plurianuales",
      teamSize: "10+ técnicos",
      rating: 5
    }
  ]

  const stats = [
    { number: "200+", label: "Proyectos Completados", icon: Award },
    { number: "98%", label: "Satisfacción Cliente", icon: Star },
    { number: "15+", label: "Años Experiencia", icon: Calendar },
    { number: "50+", label: "Empresas Confían", icon: Users }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&auto=format"
            alt="Casos de éxito de Mantexia - Proyectos realizados"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Casos de Éxito
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Proyectos que demuestran nuestra experiencia y profesionalidad
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index}
                  className={`text-center p-6 bg-mantexia-light rounded-xl animate-scale-in animate-delay-${(index + 1) * 200}`}
                >
                  <IconComponent className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-mantexia-secondary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              Resultados que Hablan por Sí Solos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
              Más de una década de experiencia nos avala. Cada proyecto es una oportunidad de demostrar 
              nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Algunos de nuestros proyectos más representativos en Valencia
            </p>
          </div>

          <div className="space-y-16">
            {successCases.map((project, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-${index % 2 === 0 ? 'left' : 'right'} animate-delay-${(index + 1) * 200}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={`Caso de éxito: ${project.title}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-mantexia-primary/10"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-mantexia-primary bg-mantexia-light px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-mantexia-secondary">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-mantexia-primary" />
                      <span className="text-sm text-gray-600">Duración: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-mantexia-primary" />
                      <span className="text-sm text-gray-600">Equipo: {project.teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-mantexia-secondary">Resultados Obtenidos:</h4>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-mantexia-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">Valoración:</span>
                    <div className="flex gap-1">
                      {[...Array(project.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 fill-mantexia-primary text-mantexia-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({project.rating}/5)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Testimonios reales de empresas que han confiado en Mantexia
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>

       {/* Breadcrumbs */}
       <section className="py-4 bg-gray-50 border-b">
         <div className="container-custom">
           <Breadcrumbs items={breadcrumbItems} />
         </div>
       </section>

       {/* Estadísticas */}
       <section className="section-padding bg-mantexia-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Un proceso probado que garantiza el éxito en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis Inicial",
                description: "Evaluación detallada de necesidades y requisitos específicos"
              },
              {
                step: "02", 
                title: "Planificación",
                description: "Desarrollo de plan de trabajo personalizado con cronograma detallado"
              },
              {
                step: "03",
                title: "Ejecución",
                description: "Implementación con seguimiento continuo y control de calidad"
              },
              {
                step: "04",
                title: "Entrega",
                description: "Finalización con documentación completa y garantía de servicio"
              }
            ].map((phase, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg animate-scale-in animate-delay-${(index + 1) * 200}`}
              >
                <div className="w-16 h-16 bg-mantexia-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              ¿Listo para tu Próximo Proyecto?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-up animate-delay-200">
              Únete a las más de 200 empresas que han confiado en Mantexia para sus proyectos. 
              Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in animate-delay-400">
              <Link href="/contacto" className="btn-primary hover-lift">
                Solicitar Presupuesto
              </Link>
              <Link href="/sobre-nosotros" className="btn-secondary hover-lift">
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
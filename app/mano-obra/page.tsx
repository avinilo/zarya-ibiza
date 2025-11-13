import { Users, CheckCircle, ArrowRight, Wrench, Shield, Clock, MapPin, Building2 } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { serviceSchemas } from '@/lib/structured-data'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('manoObra')

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

export default function ManoObraPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Comunidades' }
  ]

  const successCases = [
    {
      name: 'Comunidad Residencial',
      description: 'Edificio de 50 viviendas',
      type: 'Comunidad urbana'
    },
    {
      name: 'Complejo Moderno',
      description: 'Residencia con piscina y jardines',
      type: 'Comunidad premium'
    },
    {
      name: 'Edificio Clásico',
      description: 'Comunidad histórica restaurada',
      type: 'Patrimonio residencial'
    },
    {
      name: 'Residencial Familiar',
      description: 'Comunidad con zonas infantiles',
      type: 'Familias con niños'
    }
  ]

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas.limpiezaIndustrial),
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Limpieza de comunidades - Smart Clean"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Comunidades Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">
              <strong>Especialistas en limpieza de comunidades</strong> y edificios residenciales
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 animate-slide-up animate-delay-500">
              Mantenimiento integral de limpieza para edificios y comunidades en Valencia
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-smartclean-primary mb-2">100%</div>
              <div className="text-smartclean-secondary font-semibold">Limpieza Garantizada</div>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-smartclean-primary mb-2">24h</div>
              <div className="text-smartclean-secondary font-semibold">Servicio Urgente</div>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-smartclean-primary mb-2">Eco</div>
              <div className="text-smartclean-secondary font-semibold">Productos Verdes</div>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-smartclean-primary mb-2">Flex</div>
              <div className="text-smartclean-secondary font-semibold">Horarios Adaptables</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
                Limpieza de Comunidades: Mantenimiento Integral para Edificios
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
                En Limpiezas SMART CLEAN Valencia nos especializamos en brindar un mantenimiento integral de limpieza para edificios y comunidades en Valencia. 
                Nuestra metodología de trabajo se adapta de manera precisa a las necesidades de nuestros clientes. Las comunidades de vecinos requieren un servicio 
                de limpieza y desinfección que merece especial atención, dado el constante tránsito de residentes.
              </p>
            </div>

            {/* Target Clients */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-smartclean-secondary text-center">
                Comunidades de Vecinos Únicas
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-smartclean-secondary">Edificios Residenciales</h4>
                    <p className="text-gray-600 mb-3">
                      Comunidades de vecinos que requieren limpieza regular de zonas comunes con especial atención al tránsito constante de residentes.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Comunidades de vecinos clásicas</li>
                      <li>• Complejos residenciales modernos</li>
                      <li>• Edificios con zonas comunes amplias</li>
                      <li>• Residencias con múltiples servicios</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-smartclean-secondary">Servicios Completos</h4>
                    <p className="text-gray-600 mb-3">
                      Ofrecemos una amplia gama de servicios adaptados a las necesidades específicas de cada comunidad.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Portal, ascensor/es y papeleras</li>
                      <li>• Cristales y zonas de acceso</li>
                      <li>• Garajes y estacionamientos</li>
                      <li>• Piscinas, jardín/zonas verdes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-smartclean-primary/20 hover-lift animate-scale-in animate-delay-200">
                <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Limpieza de Zonas Comunes</h3>
                <p className="text-gray-600 mb-4">
                  Mantenimiento integral de todas las áreas comunes del edificio con atención especial a los puntos de mayor tránsito.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Portal y zonas de entrada</li>
                  <li>• Ascensores y escaleras</li>
                  <li>• Pasillos y zonas de tránsito</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-smartclean-primary/20 hover-lift animate-scale-in animate-delay-400">
                <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Limpieza de Garajes</h3>
                <p className="text-gray-600 mb-4">
                  Servicio especializado en limpieza de garajes y estacionamientos comunitarios con maquinaria profesional.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Limpieza de suelos de garaje</li>
                  <li>• Eliminación de suciedad acumulada</li>
                  <li>• Mantenimiento preventivo</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-smartclean-primary/20 hover-lift animate-scale-in animate-delay-600">
                <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Servicios Especiales</h3>
                <p className="text-gray-600 mb-4">
                  Servicios complementarios adaptados a las necesidades específicas de cada comunidad y temporada.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Limpieza de cristales</li>
                  <li>• Mantenimiento de jardines</li>
                  <li>• Limpieza de zonas deportivas</li>
                </ul>
              </div>
            </div>

            {/* Success Cases */}
            <div className="bg-smartclean-secondary text-white rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Comunidades Atendidas</h3>
              <p className="text-xl text-center mb-8 text-white/90">
                Ejemplos de comunidades que confían en nuestros servicios de limpieza integral
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {successCases.map((project, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-xl text-center hover-lift">
                    <h4 className="text-lg font-bold mb-2">{project.name}</h4>
                    <p className="text-sm text-white/80 mb-1">{project.description}</p>
                    <p className="text-xs text-white/60">{project.type}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg text-white/90">
                  <strong>Experiencia comprobada</strong> en proyectos de gran envergadura y complejidad técnica
                </p>
              </div>
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary">¿Qué incluye nuestro servicio de limpieza de comunidades?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Frecuencias personalizadas</h4>
                    <p className="text-gray-700">
                      Establecemos las frecuencias necesarias para garantizar que su comunidad se mantenga en óptimas condiciones de limpieza, adaptándonos a sus necesidades específicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Servicios adaptados a cada comunidad</h4>
                    <p className="text-gray-700">
                      Cada comunidad es única, por eso adaptamos nuestros servicios para satisfacer sus requerimientos específicos, desde edificios pequeños hasta complejos residenciales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Limpieza de zonas comunes obligatorias</h4>
                    <p className="text-gray-700">
                      Realizamos la limpieza periódica de todas las zonas comunes que conforman la comunidad: portal, ascensor/es, papeleras, cristales, garaje, piscina, jardín/zonas verdes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Planificación con factores clave</h4>
                    <p className="text-gray-700">
                      Consideramos aspectos como el número de pisos, vecinos, ascensores, áreas comunes, superficie, piscina, gimnasio, garaje, jardines para crear un plan óptimo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Flexibilidad en periodicidad</h4>
                    <p className="text-gray-700">
                      La causística puede llevar desde limpiezas de una vez al mes o cada quince días, a varios días a la semana, incluso comunidades con servicio de limpieza diario.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-smartclean-primary text-white p-8 rounded-xl text-center hover-lift">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Servicio Personalizado</h3>
              </div>
              <p className="text-lg mb-6">
                Entendemos que cada comunidad es única, por eso adaptamos nuestros servicios para satisfacer 
                sus requerimientos específicos. Confíe en nosotros para mantener su comunidad impecable y acogedora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Servicio adaptado
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Comunidad impecable
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Atención personalizada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary">Solicite Servicio de Limpieza</h2>
              <p className="text-xl text-gray-600">
                Contacte con nosotros para mantener su comunidad impecable y acogedora
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover-lift">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


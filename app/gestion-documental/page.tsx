import { FileText, CheckCircle, Clock, Shield, Users, Building, UserCheck, Factory, Briefcase } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Metadata } from 'next'
import { serviceSchemas } from '@/lib/structured-data'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('gestionDocumental')

export const metadata: Metadata = {
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

export default function GestionDocumentalPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Oficinas' }
  ]

  const targetClients = [
    {
      icon: UserCheck,
      title: 'Oficinas y Despachos Profesionales',
      description: 'Espacios de trabajo que requieren limpieza diaria y mantenimiento profesional',
      examples: ['Despachos de abogados', 'Consultorios médicos', 'Agencias de seguros']
    },
    {
      icon: Users,
      title: 'Empresas de Todos los Tamaños',
      description: 'Empresas que necesitan mantener sus oficinas limpias y presentables',
      examples: ['Startups tecnológicas', 'Empresas de servicios', 'Consultoras']
    }
  ]

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas.limpiezaOficinas),
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&auto=format"
            alt="Limpieza profesional de oficinas y despachos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Oficinas Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">
              <strong>Empresa de limpieza</strong> especializada en oficinas y despachos
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 animate-slide-up animate-delay-500">
              En Limpiezas Smart Clean Valencia estamos especializados en la Limpieza de oficinas y despachos. Ofrecemos nuestros servicios en Valencia y alrededores.
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
              <h2 className="text-4xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
                Empresa Limpieza Oficinas Valencia
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
                En Limpiezas Smart Clean Valencia, sabemos que un espacio de trabajo limpio e higiénico es fundamental para la productividad y el bienestar. Por eso, ofrecemos un servicio integral de limpieza de oficinas en Valencia, adaptado a las necesidades de cada empresa.
              </p>
            </div>

            {/* Target Clients Section */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-smartclean-secondary text-center">
                Nuestros Clientes de Oficinas
              </h3>
              <p className="text-lg text-gray-600 text-center mb-8">
                Nos especializamos en oficinas y despachos que necesitan limpieza profesional regular
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {targetClients.map((client, index) => (
                  <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-smartclean-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <client.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-smartclean-secondary">{client.title}</h4>
                      <p className="text-gray-600 mb-3">{client.description}</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {client.examples.map((example, idx) => (
                          <li key={idx}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-smartclean-light rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-smartclean-secondary text-center">
                  ¿Por qué elegir limpieza profesional?
                </h4>
                <p className="text-gray-700 text-center">
                  La limpieza profesional de oficinas no es solo estética, es fundamental para la salud, 
                  productividad y bienestar de los empleados. Un ambiente limpio reduce enfermedades, 
                  mejora la concentración y crea una imagen profesional para sus clientes.
                </p>
              </div>
            </div>

            {/* Problem Statement */}
              <div className="bg-red-50 border-l-4 border-smartclean-primary p-8 mb-12 rounded-r-xl">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-smartclean-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary">
                La importancia de mantener una oficina limpia
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-smartclean-secondary">Beneficios de una oficina limpia:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Mejora la productividad</strong> de los empleados</li>
                        <li>• <strong>Proyecta imagen profesional</strong> ante clientes</li>
                        <li>• <strong>Reduce enfermedades</strong> y absentismo</li>
                        <li>• <strong>Crea ambiente agradable</strong> para trabajar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-smartclean-secondary">Nuestro objetivo:</h4>
                      <p className="text-gray-700">
                        Nuestro objetivo ofreciendo el servicio de limpieza de oficinas es conseguir crear un entorno limpio y saludable que proyecte y potencie la profesionalidad y cuidado del negocio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-smartclean-secondary text-center">
                ¿Qué incluye nuestro servicio de limpieza de oficinas?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Limpieza periódica</h4>
                    <p className="text-gray-600 mb-2">Diaria, cada dos días, semanal… Dependiendo de las necesidades de cada cliente</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Limpieza de todas las estancias</h4>
                    <p className="text-gray-600 mb-2">Limpieza, mantenimiento y desinfección de las superficies, eliminación de polvo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Fregado de suelos</h4>
                    <p className="text-gray-600 mb-2">Mantenimiento completo de todo tipo de suelos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Limpieza y desinfección en baños y cocina</h4>
                    <p className="text-gray-600 mb-2">Zonas críticas con tratamiento especializado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Recogida de basura</h4>
                    <p className="text-gray-600 mb-2">Vaciado papeleras y gestión de residuos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-smartclean-secondary">Plan personalizado</h4>
                    <p className="text-gray-600 mb-2">Nos adaptamos a las necesidades de cada negocio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ahorre Tiempo y Dinero</h3>
                    <p className="text-lg">
                      Evite que su personal dedique tiempo a la limpieza. Nosotros mantenemos su oficina 
                      impecable por una fracción del coste del tiempo de sus empleados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Garantía de Salud</h3>
                    <p className="text-lg">
                      Utilizamos productos ecológicos que protegen la salud de sus empleados 
                      y el medio ambiente, cumpliendo con estándares de calidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-smartclean-secondary text-center">
                Nuestro Proceso de Trabajo
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-smartclean-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2 text-smartclean-secondary">Estudio Inicial</h4>
                  <p className="text-sm text-gray-600">Analizamos sus instalaciones y necesidades específicas de limpieza</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-smartclean-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2 text-smartclean-secondary">Plan Personalizado</h4>
                  <p className="text-sm text-gray-600">Creamos un plan de limpieza adaptado y consensuado con el cliente</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-smartclean-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2 text-smartclean-secondary">Servicio Profesional</h4>
                  <p className="text-sm text-gray-600">Ejecutamos el servicio con nuestro equipo altamente capacitado</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-smartclean-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2 text-smartclean-secondary">Control de Calidad</h4>
                  <p className="text-sm text-gray-600">Realizamos revisiones periódicas para garantizar la excelencia del servicio</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-smartclean-primary text-white p-8 rounded-xl text-center hover-lift">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Briefcase className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Su Socio de Limpieza de Confianza</h3>
              </div>
              <p className="text-lg mb-6">
                La limpieza de una oficina es fundamental para reflejar el compromiso de una empresa 
                tanto con sus empleados como con sus visitantes. Proyecta una imagen de confianza y organización.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Servicio integral
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Productos ecológicos
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Horarios flexibles
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary">Solicite presupuesto para limpieza de oficinas</h2>
              <p className="text-xl text-gray-600">
                Contacte con nosotros y mantenga su oficina impecable
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


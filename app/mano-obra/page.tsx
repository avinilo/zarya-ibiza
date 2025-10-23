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
    { name: 'Mano de Obra' }
  ]

  const successCases = [
    {
      name: 'Nou Mestalla',
      description: 'Estadio del Valencia CF',
      type: 'Instalaciones deportivas'
    },
    {
      name: 'Roig Arena',
      description: 'Pabellón deportivo',
      type: 'Instalaciones deportivas'
    },
    {
      name: 'Hospitales',
      description: 'Instalaciones sanitarias',
      type: 'Sector sanitario'
    },
    {
      name: 'Hoteles y Residencias',
      description: 'Sector hostelero',
      type: 'Instalaciones turísticas'
    }
  ]

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas.manoObra),
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop&auto=format"
            alt="Técnicos electricistas especializados trabajando en instalaciones industriales"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-bounce-in">Electricistas Valencia - Mano de Obra Especializada</h1>
            <p className="text-2xl mb-4 animate-fade-in animate-delay-300">
              <strong>15+ técnicos electricistas especializados</strong> para subcontratación con instaladoras eléctricas
            </p>
            <p className="text-xl text-white/90 mb-6 animate-slide-up animate-delay-500">
              Valencia • Alicante • Castellón
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
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">15+</div>
              <div className="text-mantexia-secondary font-semibold">Técnicos Especializados</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">3</div>
              <div className="text-mantexia-secondary font-semibold">Provincias de Cobertura</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">100%</div>
              <div className="text-mantexia-secondary font-semibold">Certificaciones PRL</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">24h</div>
              <div className="text-mantexia-secondary font-semibold">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
                Electricistas Valencia: Partner Especializado en Subcontratación
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
                Mantexia cuenta con un <strong>equipo de más de 15 electricistas Valencia especializados</strong> que trabajan como extensión de su empresa. 
                Nos especializamos en colaboración con instaladoras eléctricas, especialmente del sector solar y fotovoltaico, 
                proporcionando técnicos especializados con cobertura en Valencia, Alicante y Castellón.
              </p>
            </div>

            {/* Target Clients */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-mantexia-secondary text-center">
                Clientes Objetivo Principales
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-mantexia-secondary">Instaladoras Eléctricas</h4>
                    <p className="text-gray-600 mb-3">
                      Especialmente empresas del sector solar y fotovoltaico que necesitan reforzar su equipo técnico para grandes proyectos.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Instaladoras solares/fotovoltaicas</li>
                      <li>• Empresas de instalaciones eléctricas industriales</li>
                      <li>• Contratistas de grandes obras</li>
                      <li>• Fábricas con necesidades de instalación</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-mantexia-secondary">Cobertura Geográfica</h4>
                    <p className="text-gray-600 mb-3">
                      Servicio disponible en las tres provincias de la Comunidad Valenciana con más de 15 técnicos.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Valencia:</strong> Capital y área metropolitana</li>
                      <li>• <strong>Alicante:</strong> Costa y interior</li>
                      <li>• <strong>Castellón:</strong> Zona norte y litoral</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-mantexia-primary/20 hover-lift animate-scale-in animate-delay-200">
                <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Electricistas Especializados</h3>
                <p className="text-gray-600 mb-4">
                  15+ técnicos electricistas con experiencia en grandes proyectos industriales y instalaciones solares/fotovoltaicas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Instalaciones eléctricas industriales</li>
                  <li>• Sistemas solares y fotovoltaicos</li>
                  <li>• Cuadros eléctricos y automatización</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-mantexia-primary/20 hover-lift animate-scale-in animate-delay-400">
                <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Técnicos Electromecánicos</h3>
                <p className="text-gray-600 mb-4">
                  Profesionales especializados en mantenimiento de equipos industriales para reforzar equipos de instaladoras.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mantenimiento de equipos industriales</li>
                  <li>• Instalación de maquinaria</li>
                  <li>• Puesta en marcha de sistemas</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-mantexia-primary/20 hover-lift animate-scale-in animate-delay-600">
                <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Recursos Preventivos</h3>
                <p className="text-gray-600 mb-4">
                  Personal certificado en prevención de riesgos laborales para supervisión de trabajos en obra e industria.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Certificaciones PRL vigentes</li>
                  <li>• Supervisión de seguridad</li>
                  <li>• Formación específica por sectores</li>
                </ul>
              </div>
            </div>

            {/* Success Cases */}
            <div className="bg-mantexia-secondary text-white rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Casos de Éxito Destacados</h3>
              <p className="text-xl text-center mb-8 text-white/90">
                Proyectos emblemáticos que avalan nuestra experiencia y calidad técnica
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
              <h2 className="text-3xl font-bold mb-6 text-mantexia-secondary">¿Qué incluye nuestro servicio de subcontratación?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Equipo de 15+ técnicos especializados</h4>
                    <p className="text-gray-700">
                      Plantilla de más de 15 técnicos electricistas y electromecánicos con amplia experiencia en proyectos industriales y instalaciones eléctricas de gran envergadura.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Certificaciones PRL actualizadas</h4>
                    <p className="text-gray-700">
                      Todo nuestro personal cuenta con las certificaciones de Prevención de Riesgos Laborales vigentes y específicas para cada sector de actividad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Cobertura Valencia, Alicante y Castellón</h4>
                    <p className="text-gray-700">
                      Servicio disponible en toda la Comunidad Valenciana, adaptándonos a las necesidades geográficas de cada proyecto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Especialización en instaladoras eléctricas</h4>
                    <p className="text-gray-700">
                      Enfoque específico en colaboración con instaladoras eléctricas, especialmente del sector solar y fotovoltaico, conociendo sus necesidades específicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Gestión administrativa completa</h4>
                    <p className="text-gray-700">
                      Nos encargamos de toda la gestión administrativa, seguros y documentación necesaria, liberando a la instaladora de trámites burocráticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-mantexia-primary text-white p-8 rounded-xl text-center hover-lift">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Disponibilidad Inmediata</h3>
              </div>
              <p className="text-lg mb-6">
                Nuestro equipo de 15+ técnicos está listo para integrarse en su próximo proyecto. 
                Contacte con nosotros y refuerce su equipo sin complicaciones administrativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Sin contratación directa
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Personal cualificado
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Cobertura de seguros
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
              <h2 className="text-4xl font-bold mb-4 text-mantexia-secondary">Solicite Colaboración</h2>
              <p className="text-xl text-gray-600">
                Contacte con nosotros para reforzar su equipo técnico con nuestros 15+ especialistas
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

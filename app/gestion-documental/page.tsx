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
    { name: 'Gestión Documental' }
  ]

  const targetClients = [
    {
      icon: UserCheck,
      title: 'Autónomos y Freelancers',
      description: 'Profesionales independientes que necesitan documentación para acceder a obras y proyectos',
      examples: ['Electricistas autónomos', 'Técnicos freelance', 'Instaladores independientes']
    },
    {
      icon: Users,
      title: 'Pequeñas Empresas (hasta 15 trabajadores)',
      description: 'Empresas que requieren gestión administrativa especializada sin departamento propio',
      examples: ['Instaladoras eléctricas pequeñas', 'Empresas de mantenimiento', 'Talleres especializados']
    }
  ]

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas.documental),
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&auto=format"
            alt="Documentación y trámites administrativos para autónomos y pequeñas empresas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-bounce-in">Gestión Documental Empresas - Certificados Técnicos</h1>
            <p className="text-2xl mb-4 animate-fade-in animate-delay-300">
              <strong>Segundo servicio más importante</strong> de Mantexia
            </p>
            <p className="text-xl text-white/90 mb-6 animate-slide-up animate-delay-500">
              Especialistas en gestión documental empresas y certificados técnicos para autónomos hasta 15 trabajadores - Especialidades: Trámites, Certificados PRL, Gestión Administrativa
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
              <div className="text-4xl font-bold text-mantexia-primary mb-2">15</div>
              <div className="text-mantexia-secondary font-semibold">Trabajadores Máximo</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">100%</div>
              <div className="text-mantexia-secondary font-semibold">Trámites Gestionados</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">24h</div>
              <div className="text-mantexia-secondary font-semibold">Respuesta Media</div>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl hover-lift">
              <div className="text-4xl font-bold text-mantexia-primary mb-2">0</div>
              <div className="text-mantexia-secondary font-semibold">Preocupaciones</div>
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
                Gestión Documental Empresas: Su Departamento Administrativo Externo
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
                Como <strong>segundo servicio más importante</strong> de Mantexia, nos especializamos en gestión documental empresas 
                para <strong>autónomos y empresas hasta 15 trabajadores</strong>. Somos su departamento administrativo externo, 
                gestionando certificados técnicos y liberándole de trámites burocráticos para que se centre en hacer crecer su negocio.
              </p>
            </div>

            {/* Target Clients Section */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-mantexia-secondary text-center">
                Nuestros Clientes Objetivo
              </h3>
              <p className="text-lg text-gray-600 text-center mb-8">
                Nos especializamos en autónomos y pequeñas empresas que necesitan gestión administrativa profesional
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {targetClients.map((client, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mantexia-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <client.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-mantexia-secondary">{client.title}</h4>
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
              
              <div className="mt-8 p-6 bg-mantexia-light rounded-xl">
                <h4 className="text-lg font-bold mb-3 text-mantexia-secondary text-center">
                  ¿Por qué limitamos a 15 trabajadores?
                </h4>
                <p className="text-gray-700 text-center">
                  Nos enfocamos en autónomos y pequeñas empresas porque entendemos sus necesidades específicas. 
                  Las empresas más grandes suelen tener departamentos administrativos propios, mientras que 
                  nuestros clientes necesitan un servicio personalizado y ágil.
                </p>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="bg-red-50 border-l-4 border-mantexia-primary p-8 mb-12 rounded-r-xl">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-mantexia-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-mantexia-secondary">
                    El Problema de la Documentación para Autónomos y Pequeñas Empresas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-mantexia-secondary">Consecuencias de la mala gestión:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Pérdida de contratos</strong> por documentación incompleta</li>
                        <li>• <strong>Sanciones económicas</strong> por incumplimientos</li>
                        <li>• <strong>Paralización de actividad</strong> por certificados caducados</li>
                        <li>• <strong>Tiempo perdido</strong> en trámites burocráticos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-mantexia-secondary">Dificultades específicas:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Desconocimiento de normativas cambiantes</li>
                        <li>• Falta de tiempo para gestionar trámites</li>
                        <li>• Complejidad de procedimientos administrativos</li>
                        <li>• Costes de mantener personal administrativo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-mantexia-secondary text-center">
                Servicios de Gestión Documental Especializada
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Certificados y Licencias Técnicas</h4>
                    <p className="text-gray-600 mb-2">Tramitación completa de certificados eléctricos, gas, climatización y licencias municipales</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Certificados de instalaciones eléctricas</li>
                      <li>• Licencias de actividad y apertura</li>
                      <li>• Permisos de obra y construcción</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Documentación PRL Completa</h4>
                    <p className="text-gray-600 mb-2">Gestión integral de Prevención de Riesgos Laborales para autónomos y pequeñas empresas</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Planes de seguridad y salud</li>
                      <li>• Evaluaciones de riesgos</li>
                      <li>• Formación PRL obligatoria</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Seguros y Garantías</h4>
                    <p className="text-gray-600 mb-2">Gestión de pólizas de seguro y garantías necesarias para el desarrollo de la actividad</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Seguros de responsabilidad civil</li>
                      <li>• Pólizas de accidentes laborales</li>
                      <li>• Avales y garantías técnicas</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Homologaciones de Proveedores</h4>
                    <p className="text-gray-600 mb-2">Tramitación de homologaciones para trabajar con grandes empresas y organismos públicos</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Homologaciones industriales</li>
                      <li>• Registro de proveedores</li>
                      <li>• Certificaciones de calidad</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Gestión de Vencimientos</h4>
                    <p className="text-gray-600 mb-2">Sistema de control y alertas para renovaciones y actualizaciones documentales</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Calendario de renovaciones</li>
                      <li>• Alertas automáticas de vencimiento</li>
                      <li>• Renovación proactiva de documentos</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-mantexia-secondary">Asesoramiento Normativo</h4>
                    <p className="text-gray-600 mb-2">Consultoría especializada en normativas y cambios legislativos del sector</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Actualización normativa continua</li>
                      <li>• Asesoramiento personalizado</li>
                      <li>• Adaptación a nuevas regulaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-mantexia-primary text-white p-8 rounded-2xl hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ahorre Tiempo y Dinero</h3>
                    <p className="text-lg">
                      Evite contratar personal administrativo. Nosotros gestionamos toda su documentación 
                      por una fracción del coste de un empleado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-mantexia-secondary text-white p-8 rounded-2xl hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Garantía de Cumplimiento</h3>
                    <p className="text-lg">
                      Nos responsabilizamos de que toda su documentación esté correcta, actualizada 
                      y cumpla con la normativa vigente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-mantexia-secondary text-center">
                Nuestro Proceso de Trabajo
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-mantexia-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2 text-mantexia-secondary">Análisis Inicial</h4>
                  <p className="text-sm text-gray-600">Revisamos su situación actual y identificamos necesidades documentales específicas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-mantexia-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2 text-mantexia-secondary">Plan Personalizado</h4>
                  <p className="text-sm text-gray-600">Creamos un plan de gestión documental adaptado a su actividad y tamaño</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-mantexia-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2 text-mantexia-secondary">Tramitación Completa</h4>
                  <p className="text-sm text-gray-600">Gestionamos todos los trámites necesarios sin que usted se preocupe</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-mantexia-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2 text-mantexia-secondary">Mantenimiento Continuo</h4>
                  <p className="text-sm text-gray-600">Mantenemos actualizada su documentación con alertas de vencimiento</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-mantexia-primary text-white p-8 rounded-xl text-center hover-lift">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Briefcase className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Su Departamento Administrativo Externo</h3>
              </div>
              <p className="text-lg mb-6">
                Libérese de trámites burocráticos y céntrese en hacer crecer su negocio. 
                Nosotros nos encargamos de toda su gestión documental.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Especialistas en autónomos
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Empresas hasta 15 trabajadores
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                  ✓ Gestión integral
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
              <h2 className="text-4xl font-bold mb-4 text-mantexia-secondary">Solicite su Gestión Documental</h2>
              <p className="text-xl text-gray-600">
                Contacte con nosotros y olvídese para siempre de los trámites burocráticos
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

import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Factory } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { serviceSchemas } from '@/lib/structured-data'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('gestoraMantenimientos')

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

export default function GestoraMantenimientosPage() {
  const breadcrumbItems = [
    { name: 'Limpieza Industrial' }
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
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&auto=format"
            alt="Instalaciones industriales limpias"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza Industrial Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Limpieza profesional para instalaciones industriales</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos sus instalaciones industriales en condiciones óptimas de higiene y seguridad
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

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza industrial Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La limpieza industrial es esencial para mantener la seguridad, eficiencia y cumplimiento normativo en su empresa. En Smart Clean entendemos que un entorno de trabajo limpio no es solo cuestión de imagen, sino fundamental para la productividad y salud de sus empleados.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Problemas de seguridad e higiene en el trabajo</li>
                      <li>• Multas por incumplimiento de normativas sanitarias</li>
                      <li>• Aumento de enfermedades y absentismo laboral</li>
                      <li>• Mala imagen corporal ante clientes y proveedores</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener sus instalaciones impecables</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza industrial con los conocimientos y equipos necesarios para mantener sus instalaciones en condiciones óptimas de higiene y seguridad, cumpliendo con todas las normativas vigentes.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza industrial</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Maquinaria</h4>
                    <p className="text-sm text-gray-600">Limpieza especializada de equipos industriales, maquinaria y líneas de producción</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Naves Industriales</h4>
                    <p className="text-sm text-gray-600">Limpieza completa de instalaciones industriales, almacenes y zonas de producción</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Suelos Industriales</h4>
                    <p className="text-sm text-gray-600">Tratamiento especializado de suelos industriales, eliminación de grasas, aceites y residuos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Oficinas en Instalaciones</h4>
                    <p className="text-sm text-gray-600">Limpieza de zonas administrativas, vestuarios y espacios comunes en industrias</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Vehículos Industriales</h4>
                    <p className="text-sm text-gray-600">Limpieza de flotas de vehículos industriales, camiones y maquinaria móvil</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza con Productos Específicos</h4>
                    <p className="text-sm text-gray-600">Uso de productos certificados y equipos especializados para cada tipo de suciedad industrial</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Sectores que atendemos:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-smartclean-primary" />
                    <span>Fábricas y plantas industriales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-smartclean-primary" />
                    <span>Almacenes y centros logísticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-smartclean-primary" />
                    <span>Talleres y zonas de trabajo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Servicio flexible</h3>
                    <p className="text-lg">Nos adaptamos a sus horarios de producción para no interrumpir sus operaciones. Trabajamos 24/7 si es necesario.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Seguridad garantizada</h3>
                    <p className="text-lg">Utilizamos productos certificados y seguimos todos los protocolos de seguridad industrial. Personal formado y equipado.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que cumple normativas</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos higiene y seguridad</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza industrial profesional, cumplimiento normativo y resultados medibles. Sin complicaciones, sin suciedad, solo instalaciones impecables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza industrial</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga sus instalaciones industriales en perfectas condiciones
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover-lift animate-scale-in animate-delay-400">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


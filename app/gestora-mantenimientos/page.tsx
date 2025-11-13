import { Wrench, CheckCircle, AlertCircle, Clock, Shield, Settings } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { serviceSchemas } from '@/lib/structured-data'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('limpiezaOficinas')

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
    { name: 'Limpieza de Oficinas' }
  ]
  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas.limpiezaComunidades),
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&auto=format"
            alt="Oficinas modernas limpias y organizadas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Mantenimiento Integral - Gestión Mantenimiento Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Limpieza profesional para oficinas impecables</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Creamos ambientes de trabajo limpios y saludables con nuestro servicio profesional de limpieza de oficinas en Valencia
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de oficinas Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La limpieza profesional no es solo una cuestión de estética, sino de salud y productividad. En Smart Clean entendemos que mantener su oficina limpia no es la parte más emocionante de su negocio, pero es fundamental para el bienestar de sus empleados y la imagen de su empresa.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de no mantener la limpieza</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mala impresión a clientes y visitantes</li>
                      <li>• Problemas de salud por acumulación de polvo y bacterias</li>
                      <li>• Reducción de la productividad por ambiente desagradable</li>
                      <li>• Pérdida de productividad y clientes insatisfechos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener su oficina impecable</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos la empresa que le garantiza un ambiente de trabajo limpio, saludable y profesional. Nos especializamos en mantener sus oficinas impecables para que usted pueda concentrarse en hacer crecer su negocio.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza de oficinas</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza Diaria</h4>
                    <p className="text-sm text-gray-600">Limpieza diaria de escritorios, suelos y zonas comunes para un ambiente impecable</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Cristales</h4>
                    <p className="text-sm text-gray-600">Limpieza profesional de ventanas y cristales para máxima luminosidad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Alfombras</h4>
                    <p className="text-sm text-gray-600">Limpieza profunda de alfombras y moquetas para eliminar ácaros y suciedad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Suelos</h4>
                    <p className="text-sm text-gray-600">Limpieza especializada de todo tipo de suelos: parquet, tarima, cerámica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Desinfección y Higiene</h4>
                    <p className="text-sm text-gray-600">Desinfección profesional de superficies para un ambiente saludable</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Productos Ecológicos</h4>
                    <p className="text-sm text-gray-600">Utilizamos productos certificados ecológicos para proteger el medio ambiente</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Tipos de oficinas que limpiamos:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-smartclean-primary" />
                    <span>Oficinas corporativas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-smartclean-primary" />
                    <span>Despachos profesionales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-smartclean-primary" />
                    <span>Espacios de coworking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Respuesta garantizada</h3>
                    <p className="text-lg">Atendemos sus incidencias en un máximo de 24-48 horas. En emergencias, respuesta inmediata.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Garantía de calidad</h3>
                    <p className="text-lg">Todos nuestros trabajos incluyen garantía y seguimiento posterior para asegurar su correcto funcionamiento.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">No prometemos milagros</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Prometemos limpieza impecable</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional, productos de calidad y resultados excepcionales. Sin complicaciones, sin excusas, solo oficinas impecables.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y olvídese de las preocupaciones por la limpieza
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

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('sobreNosotros')

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

export default function SobreNosotros() {
  const breadcrumbItems = [
    { name: 'Sobre Nosotros' }
  ]

  const certifications = [
    {
      title: "Prevención de Riesgos Laborales",
      description: "Certificación completa en PRL para todos nuestros técnicos",
      year: "2024"
    },
    {
      title: "Instalaciones Eléctricas BT",
      description: "Habilitación para instalaciones eléctricas de baja tensión",
      year: "2024"
    },
    {
      title: "Mantenimiento Industrial",
      description: "Especialización en mantenimiento correctivo y preventivo",
      year: "2023"
    }
  ]

  const experience = [
    {
      title: "Más de 10 años de experiencia",
      description: "Una década ofreciendo soluciones integrales en Valencia"
    },
    {
      title: "Más de 200 proyectos completados",
      description: "Experiencia demostrada en obras y fábricas de todo tipo"
    },
    {
      title: "Equipo de 15+ profesionales",
      description: "Técnicos especializados y certificados en cada área"
    },
    {
      title: "Cobertura en toda Valencia",
      description: "Servicio completo en Valencia y área metropolitana"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&auto=format"
            alt="Equipo profesional de Mantexia - Sobre nosotros"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Sobre Mantexia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Experiencia, profesionalidad y confianza en cada proyecto
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

       {/* Nuestra Historia */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-slide-left">
                Nuestra Historia
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Mantexia nace de la necesidad de ofrecer soluciones integrales y profesionales en tres áreas clave: Mano de Obra especializada, Gestión Documental para pequeñas empresas y Gestión Integral de Mantenimientos. Con más de una década de experiencia, nos hemos consolidado como referente en Valencia.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in animate-delay-500">
                Nuestro modelo de negocio se basa en la subcontratación de técnicos especializados para obras y fábricas, la gestión administrativa externa para autónomos y pequeñas empresas (hasta 15 trabajadores), y el mantenimiento integral para establecimientos que buscan tranquilidad operativa.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Contamos con un equipo de más de 15 profesionales especializados: electricistas certificados, técnicos electromecánicos, recursos preventivos y gestores documentales. Nuestro enfoque principal es la subcontratación de mano de obra cualificada.
              </p>
              
              <div className="space-y-4 mb-8 animate-slide-up animate-delay-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Formación continua y actualizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Certificaciones PRL vigentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Experiencia demostrada en el sector</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Compromiso con la excelencia</span>
                </div>
              </div>
            </div>
            
            {/* Imagen profesional */}
            <div className="animate-slide-right animate-delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format"
                  alt="Instalaciones eléctricas industriales - Mantexia especializada en obras y fábricas"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-mantexia-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Ubicados estratégicamente en Alcàsser para dar servicio a toda Valencia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-mantexia-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Dirección</h3>
                  <p className="text-gray-600">Av. Angelino Soler, 2, bajo 3<br />46290 Alcàsser, Valencia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-mantexia-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Teléfono</h3>
                  <a href="tel:+34663423034" className="text-mantexia-primary hover:text-mantexia-secondary transition-colors">
                    +34 663 423 034
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mantexia-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-mantexia-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Email</h3>
                  <a href="mailto:mantexia@mantexia.com" className="text-mantexia-primary hover:text-mantexia-secondary transition-colors">
                    mantexia@mantexia.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center animate-scale-in animate-delay-300">
              <Calendar className="w-16 h-16 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-mantexia-secondary">Horario de Atención</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Lunes a Viernes:</strong> 08:00 - 18:00</p>
                <p><strong>Sábados:</strong> 09:00 - 14:00</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
              <p className="text-sm text-mantexia-primary mt-4 font-semibold">
                Atención de emergencias 24h
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
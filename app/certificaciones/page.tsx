import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Shield, FileText, Users, Calendar } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Certificaciones y Acreditaciones - Mantexia | Profesionales Certificados Valencia',
  description: 'Descubre todas las certificaciones oficiales de Mantexia: PRL, instalaciones eléctricas, mantenimiento industrial. Equipo certificado y formación continua en Valencia.',
  keywords: 'certificaciones mantexia, PRL valencia, instalaciones eléctricas certificadas, mantenimiento industrial acreditado, formación continua técnicos',
  openGraph: {
    title: 'Certificaciones y Acreditaciones - Mantexia | Profesionales Certificados Valencia',
    description: 'Descubre todas las certificaciones oficiales de Mantexia: PRL, instalaciones eléctricas, mantenimiento industrial. Equipo certificado y formación continua en Valencia.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function Certificaciones() {
  const breadcrumbItems = [
    { name: 'Certificaciones' }
  ]
  const certifications = [
    {
      title: "Prevención de Riesgos Laborales",
      category: "Seguridad",
      description: "Certificación completa en PRL para todos nuestros técnicos especializados",
      validUntil: "2025",
      authority: "Generalitat Valenciana",
      icon: Shield,
      features: [
        "Recursos preventivos certificados",
        "Formación en seguridad industrial",
        "Evaluación de riesgos laborales",
        "Planes de seguridad y salud"
      ]
    },
    {
      title: "Instalaciones Eléctricas BT",
      category: "Electricidad",
      description: "Habilitación oficial para instalaciones eléctricas de baja tensión",
      validUntil: "2025",
      authority: "Ministerio de Industria",
      icon: Award,
      features: [
        "Instalaciones hasta 1000V",
        "Cuadros eléctricos industriales",
        "Sistemas de automatización",
        "Certificados de instalación"
      ]
    },
    {
      title: "Mantenimiento Industrial",
      category: "Técnica",
      description: "Especialización en mantenimiento correctivo y preventivo industrial",
      validUntil: "2024",
      authority: "Colegio Profesional",
      icon: FileText,
      features: [
        "Mantenimiento predictivo",
        "Análisis de vibraciones",
        "Termografía industrial",
        "Planes de mantenimiento"
      ]
    },
    {
      title: "Gestión de Calidad ISO 9001",
      category: "Calidad",
      description: "Sistema de gestión de calidad certificado para garantizar la excelencia",
      validUntil: "2025",
      authority: "AENOR",
      icon: CheckCircle,
      features: [
        "Procesos estandarizados",
        "Mejora continua",
        "Satisfacción del cliente",
        "Auditorías internas"
      ]
    }
  ]

  const accreditations = [
    {
      title: "Registro de Empresas Acreditadas",
      description: "Inscripción en el REA para trabajos especializados",
      number: "REA-CV-2024-001234"
    },
    {
      title: "Seguro de Responsabilidad Civil",
      description: "Cobertura completa hasta 600.000€",
      number: "RC-IND-2024-567890"
    },
    {
      title: "Autorización Residuos Peligrosos",
      description: "Gestión autorizada de residuos industriales",
      number: "RP-CV-2024-098765"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&auto=format"
            alt="Certificaciones profesionales de Mantexia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Certificaciones
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Acreditaciones oficiales que garantizan la máxima profesionalidad
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

       {/* Certificaciones */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              Profesionalidad Certificada
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
              En Mantexia, la profesionalidad no es solo una promesa, es una garantía respaldada por certificaciones oficiales. 
              Nuestro equipo cuenta con todas las acreditaciones necesarias para ofrecer servicios de máxima calidad y seguridad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in">
              <Shield className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Seguridad Garantizada</h3>
              <p className="text-gray-600">Todas nuestras certificaciones están vigentes y actualizadas</p>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in animate-delay-200">
              <Award className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Calidad Profesional</h3>
              <p className="text-gray-600">Cumplimos con los más altos estándares del sector</p>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in animate-delay-400">
              <FileText className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Documentación Completa</h3>
              <p className="text-gray-600">Toda la documentación legal y técnica al día</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Principales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Nuestras Certificaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Certificaciones oficiales que avalan nuestra experiencia y profesionalidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover-lift animate-scale-in animate-delay-${(index + 1) * 200}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-mantexia-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-mantexia-secondary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-mantexia-primary bg-mantexia-light px-3 py-1 rounded-full">
                          {cert.category}
                        </span>
                        <span className="text-sm text-gray-500">Válido hasta {cert.validUntil}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-mantexia-secondary">{cert.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Autoridad emisora:</strong> {cert.authority}
                      </p>
                      
                      <div className="space-y-2">
                        {cert.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-mantexia-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Acreditaciones Adicionales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-mantexia-secondary animate-fade-in">
              Acreditaciones Oficiales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Registros y autorizaciones que garantizan el cumplimiento normativo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accreditations.map((accred, index) => (
              <div 
                key={index}
                className={`p-6 bg-gray-50 rounded-xl border-l-4 border-mantexia-primary hover-lift animate-slide-up animate-delay-${(index + 1) * 200}`}
              >
                <h3 className="text-lg font-bold mb-3 text-mantexia-secondary">{accred.title}</h3>
                <p className="text-gray-600 mb-4">{accred.description}</p>
                <div className="text-sm font-mono text-mantexia-primary bg-mantexia-light px-3 py-2 rounded">
                  {accred.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formación Continua */}
      <section className="section-padding bg-mantexia-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-slide-left">
                Formación Continua
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Nuestro compromiso con la excelencia nos lleva a mantener una formación continua y actualizada. 
                Participamos regularmente en cursos, seminarios y actualizaciones normativas.
              </p>
              
              <div className="space-y-4 mb-8 animate-slide-up animate-delay-500">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Formación trimestral obligatoria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Actualización normativa continua</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Seminarios especializados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-mantexia-primary" />
                  <span className="text-gray-700">Certificaciones internacionales</span>
                </div>
              </div>

              <Link href="/sobre-nosotros" className="btn-primary hover-lift animate-bounce-in animate-delay-700">
                Conoce Nuestro Equipo
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in animate-delay-300">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format"
                alt="Formación continua del equipo técnico de Mantexia"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-mantexia-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso de Calidad */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              Nuestro Compromiso
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-up animate-delay-200">
              Todas nuestras certificaciones están respaldadas por años de experiencia y un compromiso inquebrantable 
              con la calidad, la seguridad y la satisfacción del cliente.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-gray-50 rounded-xl animate-scale-in animate-delay-300">
                <Shield className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">Garantía de Seguridad</h3>
                <p className="text-gray-600">
                  Cumplimos con todas las normativas de seguridad laboral y medioambiental vigentes.
                </p>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-xl animate-scale-in animate-delay-500">
                <Award className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">Excelencia Técnica</h3>
                <p className="text-gray-600">
                  Nuestras certificaciones garantizan el más alto nivel técnico en cada proyecto.
                </p>
              </div>
            </div>

            <div className="mt-12 animate-bounce-in animate-delay-700">
              <Link href="/casos-exito" className="btn-primary hover-lift mr-4">
                Ver Casos de Éxito
              </Link>
              <Link href="/contacto" className="btn-secondary hover-lift">
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
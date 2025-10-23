import { Users, CheckCircle, Zap, Shield, Heart, Briefcase, Wrench, FileText } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function TrabajaConNosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&auto=format"
            alt="Instalaciones industriales modernas"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-bounce-in">Únete al Equipo Mantexia</h1>
            <p className="text-2xl mb-4 animate-fade-in animate-delay-300">Profesionales que buscan estabilidad y crecimiento</p>
            <p className="text-xl text-white/90 animate-slide-up animate-delay-500">
              Buscamos técnicos especializados que quieran formar parte de un equipo sólido y en constante crecimiento
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 text-mantexia-secondary animate-fade-in">¿Por qué elegir Mantexia como tu próximo destino profesional?</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                En Mantexia somos una empresa especializada en tres áreas clave: <strong>Mano de Obra Especializada</strong> (nuestro servicio #1), <strong>Gestión Documental</strong> para pequeñas empresas y <strong>Gestora de Mantenimientos</strong>. Buscamos profesionales que quieran formar parte de nuestro equipo de 15+ técnicos especializados.
              </p>

              <div className="bg-mantexia-light border-l-4 border-mantexia-primary p-6 mb-8 rounded-r-lg animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-mantexia-secondary">Nuestro modelo de trabajo</h3>
                    <p className="text-gray-700">
                      Trabajamos principalmente con subcontratación para instaladores eléctricos, obras y fábricas. Ofrecemos proyectos reales como Nou Mestalla, Roig Arena, hospitales privados y hoteles en Valencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-mantexia-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-600">
                <div className="flex items-start gap-4 mb-4">
                  <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Proyectos emblemáticos</h3>
                    <p className="text-lg">Participarás en proyectos de gran envergadura: Nou Mestalla (Valencia CF), Roig Arena, hospitales privados y hoteles. Experiencia única en el sector.</p>
                  </div>
                </div>
              </div>

              <div className="bg-mantexia-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-800">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Equipo especializado</h3>
                    <p className="text-lg">Únete a nuestro equipo de 15+ técnicos certificados. Trabajamos con las mejores empresas instaladoras de Valencia y provincia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-mantexia-secondary animate-slide-left animate-delay-1200">Beneficios de trabajar con nosotros</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Formación continua</h4>
                    <p className="text-sm text-gray-600">Cursos de actualización, certificaciones y especialización pagados por la empresa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Equipo cualificado</h4>
                    <p className="text-sm text-gray-600">Trabajarás junto a profesionales experimentados que te ayudarán a crecer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Herramientas y equipos</h4>
                    <p className="text-sm text-gray-600">Dispondrás de las mejores herramientas y equipos de protección individual</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Ambiente de trabajo</h4>
                    <p className="text-sm text-gray-600">Equipo joven, dinámico y con ganas de hacer las cosas bien</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Flexibilidad horaria</h4>
                    <p className="text-sm text-gray-600">Horarios adaptados y posibilidad de conciliación familiar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-mantexia-secondary">Crecimiento profesional</h4>
                    <p className="text-sm text-gray-600">Oportunidades reales de promoción y especialización en diferentes áreas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-mantexia-light rounded-2xl p-8 mb-12 border border-mantexia-primary/20 animate-scale-in animate-delay-2000">
              <h3 className="text-2xl font-bold mb-6 text-mantexia-secondary animate-bounce-in animate-delay-2200">Perfiles que buscamos</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl hover-lift animate-slide-left animate-delay-2400">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-mantexia-primary" />
                    <h4 className="text-xl font-bold text-mantexia-secondary">Electricistas</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Carnet de instalador eléctrico</li>
                    <li>• Experiencia en instalaciones industriales</li>
                    <li>• Conocimientos de automatización</li>
                    <li>• Disponibilidad para desplazamientos</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl hover-lift animate-slide-right animate-delay-2600">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-8 h-8 text-mantexia-primary" />
                    <h4 className="text-xl font-bold text-mantexia-secondary">Técnicos Electromecánicos</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formación en electromecánica</li>
                    <li>• Experiencia en mantenimiento industrial</li>
                    <li>• Conocimientos de neumática e hidráulica</li>
                    <li>• Capacidad de diagnóstico de averías</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl hover-lift animate-slide-left animate-delay-2800">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-mantexia-primary" />
                    <h4 className="text-xl font-bold text-mantexia-secondary">Recursos Preventivos</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Certificación en PRL</li>
                    <li>• Experiencia en coordinación de seguridad</li>
                    <li>• Conocimientos de normativa vigente</li>
                    <li>• Capacidad de liderazgo</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl hover-lift animate-slide-right animate-delay-3000">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-8 h-8 text-mantexia-primary" />
                    <h4 className="text-xl font-bold text-mantexia-secondary">Técnicos de Mantenimiento</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Formación técnica especializada</li>
                    <li>• Experiencia en mantenimiento preventivo</li>
                    <li>• Conocimientos de gestión documental</li>
                    <li>• Orientación al cliente</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-3200">
              <h3 className="text-3xl font-bold mb-4 text-mantexia-secondary animate-bounce-in animate-delay-3400">¿Te identificas con nuestros valores?</h3>
              <p className="text-2xl text-mantexia-primary font-semibold mb-4 animate-slide-up animate-delay-3600">Profesionalidad, compromiso y trabajo en equipo</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 animate-fade-in animate-delay-3800">
                Si eres un profesional comprometido, con ganas de aprender y crecer, y buscas estabilidad en un sector en constante evolución, queremos conocerte.
              </p>
              <div className="flex items-center justify-center gap-2 text-mantexia-secondary animate-scale-in animate-delay-4000">
                <FileText className="w-5 h-5" />
                <span className="font-semibold">Envíanos tu CV y cuéntanos por qué quieres formar parte de Mantexia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-mantexia-secondary animate-bounce-in">Envía tu candidatura</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle, Search } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'



export default function PreguntasFrecuentes() {
  const breadcrumbItems = [
    { name: 'Preguntas Frecuentes' }
  ]
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Qué servicios ofrece Mantexia?",
      answer: "Mantexia ofrece tres servicios principales: mano de obra especializada para obras y fábricas, gestora de mantenimientos industriales, y gestión documental completa. Nuestro equipo de más de 15 profesionales certificados cubre todas las necesidades técnicas de su empresa.",
      category: "Servicios"
    },
    {
      question: "¿Dónde está ubicada Mantexia y qué área cubre?",
      answer: "Mantexia está ubicada en Av. Angelino Soler, 2, bajo 3, 46290 Alcàsser, Valencia. Damos servicio a toda la provincia de Valencia, incluyendo Valencia capital, Xàtiva, Cullera, Sagunto, Torrent y municipios cercanos.",
      category: "Ubicación"
    },
    {
      question: "¿Cómo puedo contactar con Mantexia?",
      answer: "Puedes contactar con nosotros de varias formas: llamando al +34 663 423 034, enviando un email a mantexia@mantexia.com, o visitando nuestras oficinas en Alcàsser. También ofrecemos atención de emergencias las 24 horas.",
      category: "Contacto"
    },
    {
      question: "¿Cuál es el horario de atención de Mantexia?",
      answer: "Nuestro horario regular es de lunes a viernes de 08:00 a 18:00 horas, y sábados de 09:00 a 14:00 horas. Los domingos permanecemos cerrados, pero mantenemos un servicio de emergencias disponible las 24 horas del día.",
      category: "Horarios"
    },
    {
      question: "¿Qué certificaciones tiene el equipo de Mantexia?",
      answer: "Nuestro equipo cuenta con certificaciones en Prevención de Riesgos Laborales, habilitación para instalaciones eléctricas de baja tensión, especialización en mantenimiento industrial, y gestión de calidad ISO 9001. Todas nuestras certificaciones están vigentes y actualizadas.",
      category: "Certificaciones"
    },
    {
      question: "¿Mantexia trabaja con empresas de todos los tamaños?",
      answer: "Sí, trabajamos con empresas de todos los tamaños, desde pequeñas fábricas familiares hasta grandes complejos industriales. Adaptamos nuestros servicios a las necesidades específicas de cada cliente, garantizando siempre la máxima calidad.",
      category: "Clientes"
    },
    {
      question: "¿Cuánto tiempo lleva Mantexia en el mercado?",
      answer: "Mantexia cuenta con más de 10 años de experiencia en el sector, durante los cuales hemos completado más de 200 proyectos exitosos. Esta experiencia nos permite ofrecer soluciones probadas y eficientes.",
      category: "Experiencia"
    },
    {
      question: "¿Qué tipo de mantenimiento industrial realiza Mantexia?",
      answer: "Realizamos mantenimiento correctivo, preventivo y predictivo. Incluye análisis de vibraciones, termografía industrial, mantenimiento de maquinaria, sistemas eléctricos, y elaboración de planes de mantenimiento personalizados.",
      category: "Mantenimiento"
    },
    {
      question: "¿Mantexia ofrece servicios de emergencia?",
      answer: "Sí, ofrecemos servicio de emergencias las 24 horas del día, los 7 días de la semana. Nuestro equipo está preparado para responder rápidamente a cualquier incidencia que pueda afectar la continuidad de su negocio.",
      category: "Emergencias"
    },
    {
      question: "¿Cómo solicito un presupuesto para mi proyecto?",
      answer: "Puede solicitar un presupuesto gratuito contactándonos por teléfono, email, o a través de nuestro formulario web. Realizamos una evaluación inicial sin compromiso y le proporcionamos un presupuesto detallado adaptado a sus necesidades específicas.",
      category: "Presupuestos"
    },
    {
      question: "¿Qué garantías ofrece Mantexia en sus trabajos?",
      answer: "Ofrecemos garantía completa en todos nuestros trabajos, con seguimiento post-servicio incluido. Además, contamos con seguro de responsabilidad civil hasta 600.000€ y todas las acreditaciones oficiales necesarias.",
      category: "Garantías"
    },
    {
      question: "¿Mantexia puede ayudar con la gestión documental de mi empresa?",
      answer: "Absolutamente. Nuestro servicio de gestión documental incluye organización de documentación técnica, certificados de instalación, planes de mantenimiento, y toda la documentación legal requerida para el cumplimiento normativo.",
      category: "Documentación"
    }
  ]

  const categories = [...new Set(faqs.map(faq => faq.category))]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-mantexia-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&auto=format"
            alt="Preguntas frecuentes sobre servicios de Mantexia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Resolvemos todas tus dudas sobre nuestros servicios
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

       {/* Introducción */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              ¿Tienes Dudas?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de mano de obra especializada, 
              gestora de mantenimientos y gestión documental en Valencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in">
              <HelpCircle className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Respuestas Claras</h3>
              <p className="text-gray-600">Información detallada sobre todos nuestros servicios</p>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in animate-delay-200">
              <MessageCircle className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Atención Personalizada</h3>
              <p className="text-gray-600">Si no encuentras tu respuesta, contáctanos directamente</p>
            </div>
            <div className="text-center p-6 bg-mantexia-light rounded-xl animate-scale-in animate-delay-400">
              <Phone className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-mantexia-secondary">Disponibilidad 24/7</h3>
              <p className="text-gray-600">Servicio de emergencias disponible las 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up animate-delay-${(index + 1) * 100}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-mantexia-primary bg-mantexia-light px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-mantexia-secondary">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-mantexia-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-mantexia-primary" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mantexia-secondary animate-fade-in">
              ¿No Encuentras tu Respuesta?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-up animate-delay-200">
              Nuestro equipo está disponible para resolver cualquier duda específica sobre nuestros servicios
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in">
                <Phone className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">Llámanos</h3>
                <p className="text-gray-600 mb-4">Atención inmediata por teléfono</p>
                <a href="tel:+34663423034" className="text-mantexia-primary font-semibold hover:text-mantexia-secondary transition-colors">
                  +34 663 423 034
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in animate-delay-200">
                <Mail className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">Escríbenos</h3>
                <p className="text-gray-600 mb-4">Respuesta en menos de 24h</p>
                <a href="mailto:mantexia@mantexia.com" className="text-mantexia-primary font-semibold hover:text-mantexia-secondary transition-colors">
                  mantexia@mantexia.com
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in animate-delay-400">
                <MessageCircle className="w-12 h-12 text-mantexia-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mantexia-secondary">Chat Online</h3>
                <p className="text-gray-600 mb-4">Consulta rápida en tiempo real</p>
                <span className="text-mantexia-primary font-semibold">Disponible 24/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in animate-delay-600">
              <Link href="/contacto" className="btn-primary hover-lift">
                Contactar Ahora
              </Link>
              <Link href="/casos-exito" className="btn-secondary hover-lift">
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone, Mail, ArrowLeft, Search, Anchor, Utensils, Crown, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessibleBreadcrumbs from '@/components/AccessibleBreadcrumbs'

export default function NotFound() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Error 404', href: '/404' }
  ]

  const quickLinks = [
    {
      title: 'Yates Privados',
      description: 'Alquiler de yates de lujo con tripulación profesional',
      href: '/alquiler-yates',
      icon: Anchor,
      color: 'bg-firstclass-light hover:bg-firstclass-background border-firstclass-primary/20'
    },
    {
      title: 'Beach Clubs Exclusivos',
      description: 'Acceso VIP a los mejores beach clubs de Ibiza',
      href: '/beach-clubs-vip',
      icon: Crown,
      color: 'bg-firstclass-light hover:bg-firstclass-background border-firstclass-primary/20'
    },
    {
      title: 'Restaurantes Michelin',
      description: 'Reservas en los mejores restaurantes Michelin',
      href: '/restaurantes-michelin',
      icon: Utensils,
      color: 'bg-firstclass-light hover:bg-firstclass-background border-firstclass-primary/20'
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-firstclass-background">
        {/* Breadcrumbs */}
        <div className="container-custom pt-24 pb-4">
          <AccessibleBreadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Number */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-firstclass-primary/10 leading-none select-none font-hero">
                404
              </h1>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo2.webp"
                alt="First Class Sensations"
                width={200}
                height={67}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-firstclass-secondary mb-4 font-hero">
                ¡Ups! Página no encontrada
              </h2>
              <p className="text-base sm:text-lg text-firstclass-text/80 mb-6 max-w-2xl mx-auto">
                La página que estás buscando no existe o ha sido movida.
                No te preocupes, te ayudamos a encontrar lo que necesitas.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 hover-lift"
                aria-label="Volver a la página de inicio"
              >
                <Home className="w-5 h-5" />
                Ir al Inicio
              </Link>

              <Link
                href="/#contacto"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 hover-lift"
                aria-label="Ir a la sección de contacto"
              >
                <Mail className="w-5 h-5" />
                Contactar
              </Link>

              <a
                href="tel:+34600887755"
                className="border border-firstclass-primary text-firstclass-primary hover:bg-firstclass-primary hover:text-firstclass-background rounded-lg inline-flex items-center gap-2 px-6 py-3 hover-lift transition-all duration-300"
                aria-label="Llamar a First Class Sensations"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>

            {/* Services Quick Links */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-firstclass-secondary mb-8 font-hero">
                Descubre nuestros servicios de lujo
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {quickLinks.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`p-6 rounded-xl border transition-all duration-300 hover-lift ${service.color}`}
                      aria-label={`Ir a ${service.title}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-firstclass-background rounded-full shadow-sm border border-firstclass-primary/20">
                          <IconComponent className="w-8 h-8 text-firstclass-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-firstclass-secondary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-firstclass-text/70">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="bg-firstclass-light rounded-xl p-8 shadow-sm border border-firstclass-primary/20">
              <div className="flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-firstclass-primary" />
              </div>
              <h3 className="text-xl font-semibold text-firstclass-secondary mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-firstclass-text/80 mb-6">
                Navega por nuestro sitio web o contáctanos directamente.
                Estamos aquí para ayudarte con cualquier consulta sobre nuestros servicios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/sobre-nosotros"
                  className="text-firstclass-primary hover:text-firstclass-secondary font-medium transition-colors font-body"
                >
                  Conoce más sobre nosotros
                </Link>
                <span className="hidden sm:inline text-firstclass-text/30">|</span>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-firstclass-primary hover:text-firstclass-secondary font-medium transition-colors font-body"
                >
                  Preguntas frecuentes
                </Link>
                <span className="hidden sm:inline text-firstclass-text/30">|</span>
                <Link
                  href="/casos-exito"
                  className="text-firstclass-primary hover:text-firstclass-secondary font-medium transition-colors font-body"
                >
                  Casos de éxito
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-firstclass-primary hover:text-firstclass-secondary font-medium transition-colors font-body"
                aria-label="Volver a la página anterior"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

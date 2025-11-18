'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import LanguageSelector from '@/components/LanguageSelectorOptimized'
import { useLanguage } from '@/hooks/useLanguageOptimized'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBorderVisible, setIsBorderVisible] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, changeLanguage, t } = useLanguage()

  // Detectar scroll para cambiar el estilo del header y dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Lógica existente para transparencia y borde
      setIsBorderVisible(scrollPosition > 80)
      setIsScrolled(scrollPosition > 100)
      
      // Nueva lógica para mostrar/ocultar header basado en dirección de scroll
      // IMPORTANTE: Si el menú móvil está abierto, siempre mantener el header visible
      if (isMenuOpen) {
        setIsHeaderVisible(true)
      } else if (scrollPosition > 100) { // Solo aplicar después de 100px
        if (scrollPosition > lastScrollY && scrollPosition > 200) {
          // Scrolling hacia abajo - ocultar header
          setIsHeaderVisible(false)
        } else if (scrollPosition < lastScrollY) {
          // Scrolling hacia arriba - mostrar header
          setIsHeaderVisible(true)
        }
      } else {
        // Siempre mostrar header en la parte superior
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
       isHeaderVisible ? 'top-0' : '-top-20'
     } ${
       isScrolled || isMenuOpen
        ? `bg-white shadow-lg ${isBorderVisible ? 'border-b border-firstclass-primary/20' : ''}` 
         : 'bg-transparent'
     }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-scale" aria-label="First Class Sensations - Ir a página de inicio">
            <Image 
              src="/logo1.png" 
              alt="First Class Sensations" 
              width={48}
              height={48}
              className="h-8 md:h-12 w-auto transition-smooth"
            />
            <span className="ml-2 md:ml-3 text-[10px] sm:text-xs md:text-xl font-bold transition-smooth leading-tight font-brand text-yellow-500">
              First Class Sensations
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            <Link
              href="/"
              className={`font-medium transition-smooth relative group font-body ${
                isScrolled 
                  ? 'text-firstclass-secondary hover:text-firstclass-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.home')}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-firstclass-primary' : 'bg-white'
              }`}></span>
            </Link>

            {/* Services Link */}
            <Link
              href="/#services"
              className={`font-medium transition-smooth relative group font-body ${
                isScrolled 
                  ? 'text-firstclass-secondary hover:text-firstclass-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.services')}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-firstclass-primary' : 'bg-white'
              }`}></span>
            </Link>

            {/* Nosotros Link */}
            <Link
              href="/#about"
              className={`font-medium transition-smooth relative group font-body ${
                isScrolled 
                  ? 'text-firstclass-secondary hover:text-firstclass-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.about')}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-firstclass-primary' : 'bg-white'
              }`}></span>
            </Link>

            <Link
              href="/#faq"
              className={`font-medium transition-smooth relative group font-body ${
                isScrolled 
                  ? 'text-firstclass-secondary hover:text-firstclass-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.faq')}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-firstclass-primary' : 'bg-white'
              }`}></span>
            </Link>

            <Link
              href="/#contact"
              className={`font-medium transition-smooth relative group font-body ${
                isScrolled 
                  ? 'text-firstclass-secondary hover:text-firstclass-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {t('nav.contact')}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-firstclass-primary' : 'bg-white'
              }`}></span>
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={changeLanguage} isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
            <a href="https://wa.me/34600887755" className="btn-firstclass-primary text-sm py-2 px-6 flex items-center gap-2 hover-lift">
              <Phone className="w-4 h-4" />
              {t('hero.cta.whatsapp')}
            </a>
          </div>

          {/* Mobile Language Selector and Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Selector - Always visible */}
            <div className="flex items-center">
              <LanguageSelector currentLanguage={language} onLanguageChange={changeLanguage} isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-firstclass-light/50 transition-smooth hover-scale"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-firstclass-secondary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-firstclass-secondary' : 'text-white'}`} />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg border-t border-firstclass-primary/20 z-40 animate-slide-up max-h-[calc(100vh-5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-firstclass-secondary hover:text-firstclass-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-firstclass-light/50 hover-lift font-body"
              >
                {t('nav.home')}
              </Link>

              {/* Mobile Services Link */}
              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-firstclass-secondary hover:text-firstclass-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-firstclass-light/50 hover-lift"
              >
                {t('nav.services')}
              </Link>

              {/* Mobile Nosotros Link */}
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-firstclass-secondary hover:text-firstclass-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-firstclass-light/50 hover-lift"
              >
                {t('nav.about')}
              </Link>

              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-firstclass-secondary hover:text-firstclass-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-firstclass-light/50 hover-lift"
              >
                {t('nav.faq')}
              </Link>

              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-firstclass-secondary hover:text-firstclass-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-firstclass-light/50 hover-lift"
              >
                {t('nav.contact')}
              </Link>

              {/* WhatsApp Button */}
              <div className="px-4 pb-4">
                <a href="https://wa.me/34672123456" className="btn-firstclass-primary text-sm py-3 px-6 flex items-center justify-center gap-2 hover-lift w-full">
                  <Phone className="w-4 h-4" />
                  {t('hero.cta.whatsapp')}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import { Phone, Mail, MapPin, Calendar, Star, Home, Car, Shield, Sparkles, Instagram } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  const services = [
    { name: t('footer.services.premium'), href: '#services', icon: Star },
    { name: t('footer.services.exclusive'), href: '#services', icon: Sparkles },
    { name: t('footer.services.personalized'), href: '#services', icon: Shield },
    { name: t('footer.services.custom'), href: '#services', icon: Home },
  ]

  return (
    <footer 
      id="footer"
      className="bg-gray-900 text-white relative overflow-hidden"
      role="contentinfo"
      aria-label={t('footer.ariaLabel')}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      
      <div className="container-custom py-12 relative z-10">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <Image 
                src="/logo1.png" 
                alt="First Class Sensations" 
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-white">
                First Class Sensations
              </span>
            </div>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong className="text-blue-400">{t('contact.location')}:</strong><br />
                <span className="text-white/90">
                  {t('footer.location')}
                </span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <nav aria-label={t('footer.servicesNav')}>
              <ul className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift"
                      >
                        <Icon className="w-4 h-4 mr-2 text-blue-500 group-hover:text-blue-400 transition-smooth" />
                        {service.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <nav aria-label={t('footer.quickNav')}>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-smooth"></span>
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-smooth"></span>
                    {t('nav.howWeWork')}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-smooth"></span>
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-400 transition-smooth"></span>
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/34600887755" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                  <Phone className="w-4 h-4 mr-2 text-blue-500 group-hover:text-blue-400 transition-smooth" />
                  +34 600 887 755
                </a>
              </li>
              <li>
                <a href="mailto:ivansanchezcamano@gmail.com" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift">
                  <Mail className="w-4 h-4 mr-2 text-blue-500 group-hover:text-blue-400 transition-smooth" />
                  ivansanchezcamano@gmail.com
                </a>
              </li>
              <li>
                <div className="text-sm text-white/80 flex items-center group">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  Valencia, España
                </div>
              </li>
              <li>
                <a href="https://www.instagram.com/ivan_first_class_sensations.co/" className="text-sm text-white/80 hover:text-blue-400 transition-smooth flex items-center group hover-lift" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2 text-blue-500 group-hover:text-blue-400 transition-smooth" />
                  @ivan_first_class_sensations.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            {t('footer.copyright').replace('2024', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/politica-privacidad" className="text-sm text-white/70 hover:text-blue-400 transition-smooth hover-lift">
              {t('footer.privacy')}
            </Link>
            <Link href="/terminos-condiciones" className="text-sm text-white/70 hover:text-blue-400 transition-smooth hover-lift">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
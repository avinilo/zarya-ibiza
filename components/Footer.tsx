import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer 
      id="footer"
      className="bg-mantexia-secondary text-white relative overflow-hidden"
      role="contentinfo"
      aria-label="Información de contacto y enlaces del sitio"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-mantexia-secondary via-mantexia-secondary to-mantexia-primary/20"></div>
      
      <div className="container-custom py-12 relative z-10">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/MANTEXIA__solo_nombre_-2-removebg-preview-e1749230794480.png"
              alt="Mantexia - Soluciones integrales para obras y fábricas"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Soluciones integrales para obras y fábricas. Mano de obra, mantenimiento y gestión documental profesional.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong className="text-mantexia-light">Dirección:</strong><br />
                <span className="text-white/90">
                  Av. Angelino Soler, 2, bajo 3<br />
                  46290 Alcàsser, Valencia
                </span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-mantexia-light font-semibold text-lg mb-4">Servicios</h3>
            <nav aria-label="Enlaces de servicios">
              <ul className="space-y-3">
              <li>
                <Link href="/mano-obra" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Mano de Obra
                </Link>
              </li>
              <li>
                <Link href="/gestora-mantenimientos" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Gestora de Mantenimientos
                </Link>
              </li>
              <li>
                <Link href="/gestion-documental" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Gestión Documental
                </Link>
              </li>
              </ul>
            </nav>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-mantexia-light font-semibold text-lg mb-4">Empresa</h3>
            <nav aria-label="Enlaces de empresa">
              <ul className="space-y-3">
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/certificaciones" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <span className="w-2 h-2 bg-mantexia-primary rounded-full mr-2 group-hover:bg-mantexia-light transition-smooth"></span>
                  Preguntas Frecuentes
                </Link>
              </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-mantexia-light font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:663423034" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <svg className="w-4 h-4 mr-2 text-mantexia-primary group-hover:text-mantexia-light transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  663 423 034
                </a>
              </li>
              <li>
                <a href="mailto:mantexia@mantexia.com" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <svg className="w-4 h-4 mr-2 text-mantexia-primary group-hover:text-mantexia-light transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mantexia@mantexia.com
                </a>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="text-sm text-white/80 hover:text-mantexia-light transition-smooth flex items-center group hover-lift">
                  <svg className="w-4 h-4 mr-2 text-mantexia-primary group-hover:text-mantexia-light transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Mantexia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/politica-privacidad" className="text-sm text-white/70 hover:text-mantexia-light transition-smooth hover-lift">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

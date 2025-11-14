import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad - First Class Sensations',
  description: 'Política de privacidad y protección de datos de First Class Sensations en Ibiza',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> 15 de enero de 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información General</h2>
              <p className="text-gray-700 mb-4">
                En First Class Sensations, con domicilio en Ibiza, España, nos comprometemos a proteger su privacidad y 
                garantizar la seguridad de sus datos personales. Esta política describe cómo recopilamos, utilizamos y 
                protegemos su información.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datos que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Podemos recopilar los siguientes tipos de información:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información sobre servicios solicitados</li>
                <li>Datos de ubicación para servicios en Ibiza y Formentera</li>
                <li>Información técnica sobre su visita al sitio web (cookies, IP)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cómo Utilizamos sus Datos</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos su información personal para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Proporcionar y gestionar nuestros servicios premium</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales y reglamentarias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal para el Procesamiento</h2>
              <p className="text-gray-700 mb-4">
                Procesamos sus datos personales basándonos en:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Su consentimiento para servicios específicos</li>
                <li>El cumplimiento de un contrato de servicios</li>
                <li>Obligaciones legales aplicables</li>
                <li>Nuestros intereses legítimos en mejorar nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartición de Datos</h2>
              <p className="text-gray-700 mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales. 
                Solo compartimos datos cuando:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Es necesario para proporcionar nuestros servicios (proveedores de confianza)</li>
                <li>Estamos legalmente obligados a hacerlo</li>
                <li>Con su consentimiento expreso</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales 
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sus Derechos</h2>
              <p className="text-gray-700 mb-4">
                Bajo el Reglamento General de Protección de Datos (GDPR), usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Para ejercer estos derechos, contáctenos en: info@firstclassensations.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Conservación de Datos</h2>
              <p className="text-gray-700 mb-4">
                Conservamos sus datos personales solo durante el tiempo necesario para los fines establecidos en esta política, 
                o según lo requieran las leyes aplicables. Cuando ya no sean necesarios, los eliminamos de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para mejorar la experiencia del usuario. Las cookies técnicas son esenciales para el 
                funcionamiento del sitio, mientras que las cookies analíticas nos ayudan a mejorar nuestros servicios. 
                Puede gestionar sus preferencias de cookies a través de nuestro banner de cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cambios en esta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos 
                y publicaremos la versión actualizada en esta página. Le recomendamos revisar periódicamente esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos personales, 
                contáctenos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>First Class Sensations</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: info@firstclassensations.com
                </p>
                <p className="text-gray-700 mb-2">
                  Teléfono: +34 600 887 755
                </p>
                <p className="text-gray-700">
                  Ubicación: Ibiza, España
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Autoridad de Control</h2>
              <p className="text-gray-700 mb-4">
                Tiene derecho a presentar una reclamación ante la autoridad de control competente si considera que 
                el tratamiento de sus datos personales no cumple con la legislación aplicable.
              </p>
              <p className="text-gray-700">
                Autoridad de Protección de Datos (AEPD) - España<br />
                <a href="https://www.aepd.es" className="text-blue-600 hover:text-blue-800 underline">
                  https://www.aepd.es
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 hover-lift"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
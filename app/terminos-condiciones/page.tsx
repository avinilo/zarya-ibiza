import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - First Class Sensations',
  description: 'Términos y condiciones de uso del sitio web y servicios de First Class Sensations en Valencia',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> 15 de enero de 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar el sitio web de First Class Sensations y sus servicios, usted acepta estar 
                legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, 
                le recomendamos que no utilice nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
              <p className="text-gray-700 mb-4">
                First Class Sensations ofrece servicios premium de concierge y experiencias exclusivas en Valencia 
                y alrededores. Nuestros servicios incluyen, pero no se limitan a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Servicios de concierge personalizados</li>
                <li>Organización de experiencias exclusivas</li>
                <li>Servicios de asistencia personal premium</li>
                <li>Reservas y gestión de servicios de lujo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso del Sitio Web</h2>
              <p className="text-gray-700 mb-4">
                Usted acepta utilizar nuestro sitio web solo para fines legítimos y de manera que no infrinja 
                los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de terceros.
              </p>
              <p className="text-gray-700 mb-4">
                Está prohibido:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Utilizar el sitio de manera que pueda dañar, deshabilitar o comprometer el sitio</li>
                <li>Usar el sitio para cualquier propósito fraudulento o ilegal</li>
                <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
                <li>Publicar o transmitir contenido inapropiado o ofensivo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, 
                imágenes y software, es propiedad de First Class Sensations o de sus proveedores de contenido 
                y está protegido por las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700 mb-4">
                Queda prohibida la reproducción, distribución, modificación o uso no autorizado de cualquier 
                contenido del sitio sin nuestro consentimiento expreso por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                First Class Sensations no será responsable por ningún daño directo, indirecto, incidental, 
                especial o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios o 
                de este sitio web.
              </p>
              <p className="text-gray-700 mb-4">
                No garantizamos que el sitio web esté libre de errores o que el acceso será ininterrumpido. 
                La información proporcionada en este sitio se proporciona &quot;tal cual&quot; sin garantías de ningún tipo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Servicios de Terceros</h2>
              <p className="text-gray-700 mb-4">
                Podemos proporcionar enlaces a sitios web de terceros o servicios que no son propiedad ni 
                controlados por First Class Sensations. No asumimos responsabilidad por el contenido, 
                políticas de privacidad o prácticas de sitios web de terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modificaciones de los Servicios</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar, suspender o discontinuar, temporal o permanentemente, 
                nuestros servicios o cualquier parte de ellos, con o sin previo aviso. Usted acepta que 
                First Class Sensations no será responsable ante usted o ante terceros por cualquier modificación, 
                suspensión o discontinuación del servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Tarifas y Pagos</h2>
              <p className="text-gray-700 mb-4">
                Las tarifas por nuestros servicios premium están disponibles bajo petición y pueden variar 
                según la naturaleza y alcance de los servicios solicitados. Todos los precios se comunicarán 
                claramente antes de la prestación de cualquier servicio.
              </p>
              <p className="text-gray-700 mb-4">
                Los pagos se procesarán de acuerdo con los términos acordados individualmente con cada cliente. 
                Nos reservamos el derecho de modificar nuestras tarifas con previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cancelaciones y Reembolsos</h2>
              <p className="text-gray-700 mb-4">
                Las políticas de cancelación varían según el tipo de servicio contratado. Los clientes serán 
                informados de las condiciones específicas de cancelación al momento de contratar nuestros servicios.
              </p>
              <p className="text-gray-700 mb-4">
                Los reembolsos, cuando correspondan, se procesarán de acuerdo con los términos establecidos 
                en el contrato de servicios individual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ley Aplicable</h2>
              <p className="text-gray-700 mb-4">
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de España. 
                Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción 
                exclusiva de los tribunales de Valencia, España.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Cambios en los Términos</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web. 
                El uso continuo de nuestros servicios después de dichos cambios constituye su aceptación de 
                los términos modificados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos:
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
                  Ubicación: Valencia, España
                </p>
              </div>
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
import { Shield, FileText, Eye, Lock, Users, Database } from 'lucide-react'
import Image from 'next/image'

export default function PoliticaPrivacidadPage() {
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
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-bounce-in">Política de Privacidad</h1>
            <p className="text-2xl mb-4 animate-fade-in animate-delay-300">Protección y tratamiento de datos personales</p>
            <p className="text-xl text-white/90 animate-slide-up animate-delay-500">
              En Mantexia respetamos su privacidad y protegemos sus datos personales
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-mantexia-light border-l-4 border-mantexia-primary p-6 mb-8 rounded-r-lg animate-scale-in animate-delay-200">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-mantexia-secondary">Información general</h3>
                    <p className="text-gray-700">
                      Esta política de privacidad describe cómo Mantexia recopila, utiliza y protege la información personal que usted nos proporciona a través de nuestro sitio web y servicios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-400">
                  <div className="flex items-start gap-3 mb-4">
                    <Users className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Responsable del tratamiento</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-2"><strong>Empresa:</strong> Mantexia</p>
                    <p className="mb-2"><strong>Dirección:</strong> Av. Angelino Soler, 2, bajo 3, 46290 Alcàsser, Valencia</p>
                    <p className="mb-2"><strong>Email:</strong> mantexia@mantexia.com</p>
                    <p><strong>Teléfono:</strong> 663 423 034</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-600">
                  <div className="flex items-start gap-3 mb-4">
                    <Database className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Datos que recopilamos</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Recopilamos los siguientes tipos de información:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Datos de contacto:</strong> Nombre, email, teléfono y dirección cuando nos contacta</li>
                      <li>• <strong>Datos profesionales:</strong> Información sobre su empresa y necesidades de servicio</li>
                      <li>• <strong>Datos de navegación:</strong> Información sobre cómo utiliza nuestro sitio web mediante cookies</li>
                      <li>• <strong>Datos analíticos:</strong> Información de uso del sitio web a través de Google Analytics</li>
                      <li>• <strong>Datos de tracking:</strong> Información de comportamiento para mejorar la experiencia de usuario</li>
                      <li>• <strong>Currículums:</strong> Información profesional cuando solicita empleo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-800">
                  <div className="flex items-start gap-3 mb-4">
                    <Eye className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Finalidad del tratamiento</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Utilizamos sus datos para:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Responder a sus consultas y solicitudes de información</li>
                      <li>• Proporcionar nuestros servicios de mantenimiento industrial</li>
                      <li>• Gestionar procesos de selección de personal</li>
                      <li>• Enviar información comercial (solo con su consentimiento)</li>
                      <li>• Cumplir con obligaciones legales y contractuales</li>
                      <li>• Analizar el uso del sitio web mediante Google Analytics</li>
                      <li>• Realizar seguimiento de comportamiento para mejorar la experiencia</li>
                      <li>• Mejorar nuestros servicios y experiencia de usuario</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-1000">
                  <div className="flex items-start gap-3 mb-4">
                    <Lock className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Base legal</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">El tratamiento de sus datos se basa en:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Consentimiento:</strong> Para comunicaciones comerciales</li>
                      <li>• <strong>Ejecución contractual:</strong> Para prestar nuestros servicios</li>
                      <li>• <strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                      <li>• <strong>Cumplimiento legal:</strong> Para obligaciones fiscales y laborales</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-1200">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Conservación de datos</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Conservamos sus datos durante:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Datos de contacto:</strong> Hasta que solicite su eliminación</li>
                      <li>• <strong>Datos contractuales:</strong> Durante la vigencia del contrato y 6 años adicionales</li>
                      <li>• <strong>Currículums:</strong> 2 años desde la última comunicación</li>
                      <li>• <strong>Datos de navegación:</strong> Máximo 2 años</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-1400">
                  <div className="flex items-start gap-3 mb-4">
                    <Users className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Sus derechos</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Usted tiene derecho a:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                      <li>• <strong>Rectificación:</strong> Corregir datos inexactos</li>
                      <li>• <strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                      <li>• <strong>Limitación:</strong> Restringir el tratamiento</li>
                      <li>• <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                      <li>• <strong>Oposición:</strong> Oponerse al tratamiento</li>
                    </ul>
                    <p className="mt-4">Para ejercer estos derechos, contacte con nosotros en: <strong>mantexia@mantexia.com</strong></p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-1600">
                  <div className="flex items-start gap-3 mb-4">
                    <Database className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Cookies</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Utilizamos diferentes tipos de cookies:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
                      <li>• <strong>Cookies analíticas:</strong> Google Analytics para analizar el tráfico y uso del sitio</li>
                      <li>• <strong>Cookies de tracking:</strong> Para seguimiento de comportamiento y mejora de la experiencia</li>
                      <li>• <strong>Cookies de preferencias:</strong> Para recordar sus configuraciones</li>
                    </ul>
                    <p className="mt-4">Puede gestionar sus preferencias de cookies a través del banner de cookies que aparece en su primera visita. También puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-1800">
                  <div className="flex items-start gap-3 mb-4">
                    <Lock className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Seguridad</h2>
                  </div>
                  <div className="text-gray-700">
                    <p>Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 animate-slide-up animate-delay-2000">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Modificaciones</h2>
                  </div>
                  <div className="text-gray-700">
                    <p>Nos reservamos el derecho a modificar esta política de privacidad. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
                  </div>
                </div>

                <div className="bg-mantexia-light border border-mantexia-primary/20 rounded-xl p-6 animate-scale-in animate-delay-2200">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-6 h-6 text-mantexia-primary flex-shrink-0 mt-1" />
                    <h2 className="text-2xl font-bold text-mantexia-secondary">Contacto</h2>
                  </div>
                  <div className="text-gray-700">
                    <p className="mb-4">Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos, puede contactarnos:</p>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> mantexia@mantexia.com</li>
                      <li><strong>Teléfono:</strong> 663 423 034</li>
                      <li><strong>Dirección:</strong> Av. Angelino Soler, 2, bajo 3, 46290 Alcàsser, Valencia</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center text-gray-600 text-sm animate-fade-in animate-delay-2400">
                  <p>Última actualización: 15 de enero de 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

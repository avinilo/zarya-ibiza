export type Language = 'es' | 'en' | 'ru'

export interface Translation {
  [key: string]: string
}

export const translations: Record<Language, Translation> = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.howWeWork': 'Cómo trabajamos',
    'nav.about': 'Sobre nosotros',
    'nav.contact': 'Contacto',
    'nav.faq': 'FAQ',
    'nav.quickConsultation': 'Consulta rápida',
    
    // Hero
    'hero.title': 'Ibiza sin límites',
    'hero.subtitle': 'Tú solo disfruta',
    'hero.description': 'Nos dedicamos a organizar vacaciones a medida: reservas de mesas VIP en clubs y restaurantes top, alquiler de villas, coches de lujo, furgonetas Mercedes V Class con licencia y conductor, acompañamientos de seguridad y organización de eventos privados en villas.',
    'hero.cta.plan': 'SERVICIOS DE LUJO',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.trust.available': 'Disponible 24/7',
    'hero.trust.exclusive': 'Experiencias Exclusivas',
    'hero.trust.personalized': 'Servicio Personalizado',
    
    // Services Section
    'services.title': 'Servicios',
    'services.subtitle': 'Servicios claros, pensados para que todo sea rápido y sencillo. Nos ocupamos de la logística completa para que solo tengas que disfrutar de Ibiza.',
    
    // Service 1
    'service1.title': 'Vacaciones de lujo',
    'service1.subtitle': 'Creamos un plan personalizado según tus fechas, tipo de grupo y estilo de viaje.',
    'service1.feature1': 'Propuesta de planificación diaria (playa, atardecer, noche).',
    'service1.feature2': 'Recomendaciones según tu perfil y presupuesto.',
    'service1.feature3': 'Ajustes durante la estancia por WhatsApp.',
    
    // Service 2
    'service2.title': 'Reservas VIP de mesas',
    'service2.subtitle': 'Mesas VIP en los mejores clubs y restaurantes de Ibiza, coordinadas con tu plan.',
    'service2.feature1': 'Reservas confirmadas antes de tu llegada.',
    'service2.feature2': 'Coordinación con transporte y horarios.',
    'service2.feature3': 'Acceso prioritario y servicio personalizado.',
    
    // Service 3
    'service3.title': 'Alquiler de villas',
    'service3.subtitle': 'Selección de villas premium con todas las comodidades y servicios incluidos.',
    'service3.feature1': 'Villas con piscina, seguridad y servicio.',
    'service3.feature2': 'Check-in personalizado y concierge 24/7.',
    'service3.feature3': 'Limpieza diaria y mantenimiento.',
    
    // Service 4
    'service4.title': 'Furgonetas V Class con licencia VTC',
    'service4.subtitle': 'Transporte profesional con conductor para grupos y familias.',
    'service4.feature1': 'Mercedes V Class con conductor profesional.',
    'service4.feature2': 'Licencia VTC oficial para transporte legal.',
    'service4.feature3': 'Capacidad para hasta 7 pasajeros cómodamente.',
    
    'service7.title': 'Coches de lujo',
    'service7.subtitle': 'Vehículos premium y deportivos de alta gama.',
    'service7.feature1': 'Deportivos y SUVs de lujo disponibles.',
    'service7.feature2': 'Recogida en aeropuerto y traslados privados.',
    'service7.feature3': 'Flota exclusiva de última generación.',
    
    // Service 8 - Yacht Rental
    'service8.title': 'Alquiler de yates',
    'service8.subtitle': 'Experiencias náuticas exclusivas en las aguas de Ibiza.',
    'service8.feature1': 'Yates de lujo con tripulación profesional.',
    'service8.feature2': 'Rutas personalizadas por calas secretas.',
    'service8.feature3': 'Catering a bordo y actividades acuáticas.',
    
    // Service 9 - Personal Shopping & Styling
    'service9.title': 'Personal Shopping & Styling',
    'service9.subtitle': 'Asesoría de imagen y compras exclusivas en Ibiza.',
    'service9.feature1': 'Personal shopper profesional y asesor de estilo.',
    'service9.feature2': 'Acceso a boutiques de lujo y diseñadores exclusivos.',
    'service9.feature3': 'Sesiones de styling para ocasiones especiales.',
    
    // Service 5
    'service5.title': 'Seguridad y acompañamiento',
    'service5.subtitle': 'Servicio de seguridad discreto y profesional para tu tranquilidad.',
    'service5.feature1': 'Seguridad personal y para grupos.',
    'service5.feature2': 'Coordinación con servicios locales.',
    'service5.feature3': 'Presencia discreta y profesional.',
    
    // Service 6
    'service6.title': 'Eventos privados en villas',
    'service6.subtitle': 'Organización de eventos exclusivos: DJs privados, chefs, barras de cócteles.',
    'service6.feature1': 'DJ privado, chef, barra de cócteles y decoración.',
    'service6.feature2': 'Personal de servicio y coordinación de proveedores.',
    'service6.feature3': 'Respeto absoluto a la privacidad del cliente.',
    
    // Process Section
    'process.title': 'Proceso',
    'process.subtitle': 'Tres pasos para tener Ibiza completamente organizada. Un contacto, un chat y coordinamos el resto.',
    
    'process.step1.title': 'Cuéntanos tu idea.',
    'process.step1.description': 'Fechas aproximadas, número de personas, tipo de viaje (amigos, familia, empresa) y nivel de presupuesto.',
    
    'process.step2.title': 'Te enviamos propuestas.',
    'process.step2.description': 'Villas, mesas VIP, transporte, seguridad y eventos en villa, todo integrado en un plan.',
    
    'process.step3.title': 'Confirmamos y coordinamos.',
    'process.step3.description': 'Cerramos reservas, coordinamos proveedores y estamos disponibles durante tu estancia para ajustes.',
    
    // About Section
    'about.title': 'Sobre First Class Sensations',
    'about.subtitle': 'Equipo de concierge privado con trato directo y discreto.',
    'about.description': 'Más de <strong class="text-yellow-600">dos décadas de experiencia</strong> en Ibiza dentro del sector nocturno, seguridad privada y atención a clientes VIP. Durante <strong class="text-yellow-600">13 años</strong> trabajamos como seguridad privada y acompañamiento de <strong class="text-yellow-600">DJ internacionales</strong>, accediendo a los entornos más exclusivos de la isla y construyendo una red de contactos privilegiada en <strong class="text-yellow-600">clubes, restaurantes, villas, barcos y servicios premium</strong>. Hoy ofrecemos gestión rápida, discreta y completamente personalizada de estancias a medida, coordinando reservas VIP, experiencias exclusivas, movilidad, villas y eventos privados.',
    'about.feature1': 'Número limitado de clientes para garantizar <strong class="text-yellow-600">servicio exclusivo y personalizado</strong>.',
    'about.location': 'Ibiza · Equipo de concierge privado · Español, inglés y ruso.',
    'about.clients': 'Atendemos a clientes exigentes que valoran el tiempo y buscan experiencias únicas.',
    'about.style': '<strong class="text-yellow-600">Estilo discreto y directo</strong>. Sin intermediarios ni sorpresas.',
    'about.philosophy': '<strong class="text-yellow-600">Planificación meticulosa y atención al detalle</strong>. Cada viaje es único.',
    
    // Testimonials Section
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.subtitle': 'Personas reales, experiencias auténticas. Así vivieron Ibiza con nosotros.',
    'testimonials.project': 'Proyecto',
    
    // Testimonial 1
    'testimonials.t1.name': 'María García',
    'testimonials.t1.position': 'Profesora',
    'testimonials.t1.company': 'Ibiza',
    'testimonials.t1.location': 'Playa d\'en Bossa, Ibiza',
    'testimonials.t1.text': 'Increíble experiencia con First Class Sensations. Nos organizaron una escapada romántica perfecta: reserva en un restaurante con vistas al mar, coche de alquiler y hasta nos consiguieron entradas para un sunset en un beach club. Todo sin preocupaciones y con un trato excepcional.',
    'testimonials.t1.project': 'Escapada Romántica',
    
    // Testimonial 2
    'testimonials.t2.name': 'Carlos y Ana',
    'testimonials.t2.position': 'Pareja jubilada',
    'testimonials.t2.company': 'Madrid',
    'testimonials.t2.location': 'Puerto de San Miguel, Ibiza',
    'testimonials.t2.text': 'No sabíamos por dónde empezar para visitar Ibiza y First Class Sensations nos creó un itinerario perfecto adaptado a nuestro ritmo. Visitamos calas escondidas, mercados locales y disfrutamos de la gastronomía típica. Se portaron fenomenal con nosotros.',
    'testimonials.t2.project': 'Vacaciones tranquilas',
    
    // Testimonial 3
    'testimonials.t3.name': 'Lucía Fernández',
    'testimonials.t3.position': 'Estudiante universitaria',
    'testimonials.t3.company': 'Barcelona',
    'testimonials.t3.location': 'Cala Vadella, Ibiza',
    'testimonials.t3.text': 'Fui con mis amigas y la experiencia fue inolvidable. Nos consiguieron un apartamento genial cerca de la playa, nos organizaron una excursión en barco por calas secretas y hasta nos reservaron en un restaurante de moda. Todo super económico y sin complicaciones.',
    'testimonials.t3.project': 'Viaje con amigas',
    
    // Testimonial 4
    'testimonials.t4.name': 'José Antonio Ruiz',
    'testimonials.t4.position': 'Autónomo',
    'testimonials.t4.company': 'Sevilla',
    'testimonials.t4.location': 'Es Canar, Ibiza',
    'testimonials.t4.text': 'Quería sorprender a mi familia y fue un acierto total. Los niños disfrutaron como locos con las actividades que nos organizaron: snorkel, paddle surf y un día de barco. Mi mujer y yo pudimos relajarnos sabiendo que todo estaba controlado. Repetiremos seguro.',
    'testimonials.t4.project': 'Vacaciones en familia',
    
    // Testimonial 5
    'testimonials.t5.name': 'Sofía y Miguel',
    'testimonials.t5.position': 'Pareja de 30 años',
    'testimonials.t5.company': 'Bilbao',
    'testimonials.t5.location': 'Santa Gertrudis, Ibiza',
    'testimonials.t5.text': 'Llevamos 2 años viniendo a Ibiza con First Class Sensations y siempre nos sorprenden con algo nuevo. Este año descubrimos un restaurante escondido en el interior que era una joya. Se nota que conocen la isla perfectamente y se adaptan a lo que buscas.',
    'testimonials.t5.project': 'Descubrimiento local',
    
    // Testimonial 6
    'testimonials.t6.name': 'Rosa Martínez',
    'testimonials.t6.position': 'Enfermera',
    'testimonials.t6.company': 'Málaga',
    'testimonials.t6.location': 'Cala Llonga, Ibiza',
    'testimonials.t6.text': 'Profesionales de confianza que hacen que todo sea fácil. Me organizaron una escapada de fin de semana con mi hermana: nos recogieron en el aeropuerto, nos llevaron a un spa rural, cena en un restaurante típico y tiempo para shopping en las tiendas locales. Todo perfecto.',
    'testimonials.t6.project': 'Escapada de chicas',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Un chat de WhatsApp para coordinar todo. Contestamos en menos de una hora.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Ubicación',
    'contact.instagram': 'Instagram',
    'contact.form.hint': 'O completa el formulario y te llamamos nosotros.',
    
    // Form Fields
    'form.fullName': 'Nombre completo',
    'form.name': 'Nombre',
    'form.phone': 'Teléfono',
    'form.email': 'Email',
    'form.service': 'Servicio de interés',
    'form.services': 'Servicio de interés',
    'form.services.placeholder': 'Ej: Villa, transporte, reservas VIP, etc.',
    'form.dates': 'Fechas aproximadas',
    'form.dates.placeholder': 'Ej: 15-22 julio, agosto, etc.',
    'form.people': 'Número de personas',
    'form.people.placeholder': 'Ej: 6 personas, familia de 4, etc.',
    'form.budget': 'Presupuesto aproximado',
    'form.budget.placeholder': 'Ej: 5000€, 10000-15000€, etc.',
    'form.message': 'Cuéntanos más sobre tu idea',
    'form.submit': 'Enviar consulta',
    'form.budget.economy': 'Económico',
    'form.budget.mid': 'Medio',
    'form.budget.high': 'Alto',
    'form.budget.luxury': 'Lujo',
    'form.service.any': 'Cualquiera',
    'form.service.villa': 'Villa',
    'form.service.transport': 'Transporte',
    'form.service.vip': 'Reservas VIP',
    'form.service.security': 'Seguridad',
    'form.service.events': 'Eventos',
    'form.service.full': 'Plan completo',
    
    // Form Errors
    'form.errors.required': 'Este campo es obligatorio',
    'form.errors.invalidEmail': 'Email inválido',
    'form.errors.submitError': 'Error al enviar el mensaje',
    'form.errors.generalError': 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.',
    'form.sending': 'Enviando...',
    'form.success.title': '¡Gracias por contactar!',
    'form.success.message': 'Te responderemos en unos minutos...',
    
    // Footer
    'footer.tagline': 'Ibiza al máximo, sin complicaciones.',
    'footer.description': 'Equipo de concierge privado en Ibiza. Experiencias únicas, servicio personalizado.',
    'footer.contact': 'Contacto',
    'footer.services': 'Servicios',
    'footer.follow': 'Síguenos',
    'footer.copyright': '© 2024 First Class Sensations. Todos los derechos reservados.',
    
    'footer.services.premium': 'Servicios Premium',
    'footer.services.exclusive': 'Experiencias Exclusivas',
    'footer.services.personalized': 'Atención Personalizada',
    'footer.services.custom': 'Servicios a Medida',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.aboutUs': 'Sobre Nosotros',
    'footer.location': 'Ibiza, España',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.ariaLabel': 'Información de contacto y enlaces del sitio',
    'footer.servicesNav': 'Enlaces de servicios',
    'footer.quickNav': 'Enlaces rápidos',
    
    // Meta
    'meta.keywords': 'concierge Ibiza, vacaciones de lujo, villas privadas, reservas VIP, transporte de lujo, seguridad privada, eventos en villas',
    'meta.author': 'First Class Sensations',
    'meta.description': 'Concierge privado en Ibiza. Vacaciones a medida con villas de lujo, reservas VIP, transporte exclusivo y eventos privados.',
    
    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre nuestros servicios en Ibiza.',
    
    'faq.q1': '¿Qué hace especial a First Class Sensations?',
    'faq.a1': 'Somos un servicio de concierge independiente en Ibiza con trato directo y sin intermediarios. Conocemos la isla perfectamente y trabajamos con proveedores de confianza. Nos especializamos en experiencias personalizadas y atendemos a un número limitado de clientes para garantizar un servicio excepcional.',
    
    'faq.q2': '¿En qué zona trabajáis?',
    'faq.a2': 'Trabajamos en toda Ibiza y Formentera. Desde las zonas más exclusivas como Jesús, Roca Llisa, Can Rimbau, Can Pep Simó, Can Furnet, Cap Martinet, Marina Botafoch, Talamanca, hasta villas más aisladas y privadas. También cubrimos Santa Eulalia, San Antonio y el resto de la isla.',
    
    'faq.q3': '¿Cuánto tiempo antes debo reservar?',
    'faq.a3': 'Para villas, al menos 2-3 meses en temporada alta (junio-septiembre). Para reservas VIP en clubs, mínimo 1-2 semanas. Para eventos privados, 1 mes. Para transporte y seguridad, con 1 semana es suficiente. Cuanto antes mejor, pero siempre intentamos solucionar urgencias.',
    
    'faq.q4': '¿Cómo se realiza el pago?',
    'faq.a4': '50% para confirmar reservas, 50% antes de la llegada. Aceptamos transferencia bancaria y tarjeta. Todos los pagos son seguros y con factura.',
    
    'faq.q5': '¿Qué pasa si necesito cancelar?',
    'faq.a5': 'Política flexible: reembolso completo hasta 30 días antes. Entre 30-7 días: 50%. Menos de 7 días: gastos gestionados. Intentamos siempre encontrar soluciones.',
    
    'faq.q6': '¿Habláis español, inglés y ruso?',
    'faq.a6': 'Sí, atendemos en español, inglés y ruso. Comunicación directa sin intermediarios, lo que agiliza todo y evita malentendidos.',
    
    'faq.q7': '¿Podéis organizar eventos privados en villas?',
    'faq.a7': 'Sí, DJ privado, chef, barra de cócteles, personal de servicio, decoración y coordinación completa. Respeto absoluto a la privacidad del cliente.',
    
    'faq.q8': '¿Qué nivel de presupuesto manejáis?',
    'faq.a8': 'Trabajamos con diferentes rangos: desde experiencias selectas hasta ultra-lujo. Lo importante es la calidad y la experiencia, no solo el precio.',
    
    'faq.moreQuestions': '¿Más preguntas?',
    'faq.whatsapp': 'Escríbenos por WhatsApp',
    
    // Cookie Banner
    'cookie.title': 'Utilizamos cookies para mejorar su experiencia',
    'cookie.description': 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio, y cookies analíticas (Google Analytics) y de tracking para mejorar nuestros servicios. Puede gestionar sus preferencias o consultar más información en nuestra',
    'cookie.privacyPolicy': 'política de privacidad',
    'cookie.configure': 'Configurar',
    'cookie.necessaryOnly': 'Solo necesarias',
    'cookie.acceptAll': 'Aceptar todas',
    'cookie.settingsTitle': 'Configuración de cookies',
    'cookie.necessaryCookies': 'Cookies necesarias',
    'cookie.necessaryDescription': 'Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.',
    'cookie.analyticsCookies': 'Cookies analíticas',
    'cookie.analyticsDescription': 'Google Analytics para analizar el uso del sitio web y mejorar nuestros servicios.',
    'cookie.trackingCookies': 'Cookies de seguimiento',
    'cookie.trackingDescription': 'Seguimiento de comportamiento para personalizar y mejorar la experiencia de usuario.',
    'cookie.savePreferences': 'Guardar preferencias',
    
    // Privacy Policy
    'privacy.title': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última actualización: 15 de enero de 2024',
    'privacy.section1.title': '1. Información General',
    'privacy.section1.content': 'En First Class Sensations, con domicilio en Ibiza, España, nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta política describe cómo recopilamos, utilizamos y protegemos su información.',
    'privacy.section2.title': '2. Datos que Recopilamos',
    'privacy.section2.content': 'Podemos recopilar los siguientes tipos de información:',
    'privacy.section2.items': 'Información de contacto (nombre, email, teléfono)|Información sobre servicios solicitados|Datos de ubicación para servicios en Ibiza y Formentera|Información técnica sobre su visita al sitio web (cookies, IP)',
    'privacy.section3.title': '3. Cómo Utilizamos sus Datos',
    'privacy.section3.content': 'Utilizamos su información personal para:',
    'privacy.section3.items': 'Proporcionar y gestionar nuestros servicios premium|Responder a sus consultas y solicitudes|Mejorar nuestros servicios y experiencia del cliente|Cumplir con obligaciones legales y reglamentarias',
    'privacy.section4.title': '4. Base Legal para el Procesamiento',
    'privacy.section4.content': 'Procesamos sus datos personales basándonos en:',
    'privacy.section4.items': 'Su consentimiento para servicios específicos|El cumplimiento de un contrato de servicios|Obligaciones legales aplicables|Nuestros intereses legítimos en mejorar nuestros servicios',
    'privacy.section5.title': '5. Compartición de Datos',
    'privacy.section5.content': 'No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales. Solo compartimos datos cuando:',
    'privacy.section5.items': 'Es necesario para proporcionar nuestros servicios (proveedores de confianza)|Estamos legalmente obligados a hacerlo|Con su consentimiento expreso',
    'privacy.section6.title': '6. Seguridad de los Datos',
    'privacy.section6.content': 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.',
    'privacy.section7.title': '7. Sus Derechos',
    'privacy.section7.content': 'Bajo el Reglamento General de Protección de Datos (GDPR), usted tiene derecho a:',
    'privacy.section7.items': 'Acceder a sus datos personales|Rectificar datos inexactos|Solicitar la eliminación de sus datos|Oponerse al procesamiento de sus datos|Solicitar la portabilidad de sus datos|Retirar su consentimiento en cualquier momento',
    'privacy.section7.contact': 'Para ejercer estos derechos, contáctenos en: info@firstclassensations.com',
    'privacy.section8.title': '8. Conservación de Datos',
    'privacy.section8.content': 'Conservamos sus datos personales solo durante el tiempo necesario para los fines establecidos en esta política, o según lo requieran las leyes aplicables. Cuando ya no sean necesarios, los eliminamos de forma segura.',
    'privacy.section9.title': '9. Cookies',
    'privacy.section9.content': 'Utilizamos cookies para mejorar la experiencia del usuario. Las cookies técnicas son esenciales para el funcionamiento del sitio, mientras que las cookies analíticas nos ayudan a mejorar nuestros servicios. Puede gestionar sus preferencias de cookies a través de nuestro banner de cookies.',
    'privacy.section10.title': '10. Cambios en esta Política',
    'privacy.section10.content': 'Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos y publicaremos la versión actualizada en esta página. Le recomendamos revisar periódicamente esta política.',
    'privacy.section11.title': '11. Contacto',
    'privacy.section11.content': 'Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos personales, contáctenos:',
    'privacy.company': 'First Class Sensations',
    'privacy.email': 'Email: info@firstclassensations.com',
    'privacy.phone': 'Teléfono: +34 600 887 755',
    'privacy.location': 'Ubicación: Ibiza, España',
    'privacy.section12.title': '12. Autoridad de Control',
    'privacy.section12.content': 'Tiene derecho a presentar una reclamación ante la autoridad de control competente si considera que el tratamiento de sus datos personales no cumple con la legislación aplicable.',
    'privacy.section12.authority': 'Autoridad de Protección de Datos (AEPD) - España',
    'privacy.section12.link': 'https://www.aepd.es',
    'privacy.backToHome': 'Volver al inicio',
    
    // Terms and Conditions
    'terms.title': 'Términos y Condiciones',
    'terms.lastUpdated': 'Última actualización: 15 de enero de 2024',
    'terms.section1.title': '1. Aceptación de Términos',
    'terms.section1.content': 'Al acceder y utilizar el sitio web de First Class Sensations y sus servicios, usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestros servicios.',
    'terms.section2.title': '2. Servicios Ofrecidos',
    'terms.section2.content': 'First Class Sensations ofrece servicios premium de concierge y experiencias exclusivas en Ibiza y alrededores. Nuestros servicios incluyen, pero no se limitan a:',
    'terms.section2.items': 'Servicios de concierge personalizados|Organización de experiencias exclusivas|Servicios de asistencia personal premium|Reservas y gestión de servicios de lujo',
    'terms.section3.title': '3. Uso del Sitio Web',
    'terms.section3.content': 'Usted acepta utilizar nuestro sitio web solo para fines legítimos y de manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de terceros.',
    'terms.section3.prohibited': 'Está prohibido:',
    'terms.section3.items': 'Utilizar el sitio de manera que pueda dañar, deshabilitar o comprometer el sitio|Usar el sitio para cualquier propósito fraudulento o ilegal|Intentar obtener acceso no autorizado a cualquier parte del sitio|Publicar o transmitir contenido inapropiado u ofensivo',
    'terms.section4.title': '4. Propiedad Intelectual',
    'terms.section4.content1': 'Todo el contenido de este sitio web, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes y software, es propiedad de First Class Sensations o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.',
    'terms.section4.content2': 'Queda prohibida la reproducción, distribución, modificación o uso no autorizado de cualquier contenido del sitio sin nuestro consentimiento expreso por escrito.',
    'terms.section5.title': '5. Limitación de Responsabilidad',
    'terms.section5.content1': 'First Class Sensations no será responsable por ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios o de este sitio web.',
    'terms.section5.content2': 'No garantizamos que el sitio web esté libre de errores o que el acceso será ininterrumpido. La información proporcionada en este sitio se proporciona "tal cual" sin garantías de ningún tipo.',
    'terms.section6.title': '6. Servicios de Terceros',
    'terms.section6.content': 'Podemos proporcionar enlaces a sitios web de terceros o servicios que no son propiedad ni controlados por First Class Sensations. No asumimos responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros.',
    'terms.section7.title': '7. Modificaciones de los Servicios',
    'terms.section7.content': 'Nos reservamos el derecho de modificar, suspender o discontinuar, temporal o permanentemente, nuestros servicios o cualquier parte de ellos, con o sin previo aviso. Usted acepta que First Class Sensations no será responsable ante usted o ante terceros por cualquier modificación, suspensión o discontinuación del servicio.',
    'terms.section8.title': '8. Tarifas y Pagos',
    'terms.section8.content1': 'Las tarifas por nuestros servicios premium están disponibles bajo petición y pueden variar según la naturaleza y alcance de los servicios solicitados. Todos los precios se comunicarán claramente antes de la prestación de cualquier servicio.',
    'terms.section8.content2': 'Los pagos se procesarán de acuerdo con los términos acordados individualmente con cada cliente. Nos reservamos el derecho de modificar nuestras tarifas con previo aviso.',
    'terms.section9.title': '9. Cancelaciones y Reembolsos',
    'terms.section9.content1': 'Las políticas de cancelación varían según el tipo de servicio contratado. Los clientes serán informados de las condiciones específicas de cancelación al momento de contratar nuestros servicios.',
    'terms.section9.content2': 'Los reembolsos, cuando correspondan, se procesarán de acuerdo con los términos establecidos en el contrato de servicios individual.',
    'terms.section10.title': '10. Ley Aplicable',
    'terms.section10.content': 'Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Ibiza, España.',
    'terms.section11.title': '11. Cambios en los Términos',
    'terms.section11.content': 'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web. El uso continuo de nuestros servicios después de dichos cambios constituye su aceptación de los términos modificados.',
    'terms.section12.title': '12. Contacto',
    'terms.section12.content': 'Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos:',
    'terms.company': 'First Class Sensations',
    'terms.email': 'Email: info@firstclassensations.com',
    'terms.phone': 'Teléfono: +34 600 887 755',
    'terms.location': 'Ubicación: Ibiza, España',
    'terms.backToHome': 'Volver al inicio'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.quickConsultation': 'Quick Consultation',
    
    // Hero
    'hero.title': 'Ibiza without limits',
    'hero.subtitle': 'You just enjoy',
    'hero.description': 'We specialize in organizing tailor-made holidays: VIP table reservations in top clubs and restaurants, villa rentals, luxury cars, Mercedes V Class vans with license and driver, security escorts and organization of private events in villas.',
    'hero.cta.plan': 'LUXURY SERVICES',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.trust.available': 'Available 24/7',
    'hero.trust.exclusive': 'Exclusive Experiences',
    'hero.trust.personalized': 'Personalized Service',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Clear services, designed to make everything quick and simple. We take care of the complete logistics so you only have to enjoy Ibiza.',
    
    // Service 1
    'service1.title': 'Luxury Holidays',
    'service1.subtitle': 'We create a personalized plan according to your dates, group type and travel style.',
    'service1.feature1': 'Daily planning proposal (beach, sunset, night).',
    'service1.feature2': 'Recommendations according to your profile and budget.',
    'service1.feature3': 'Adjustments during the stay via WhatsApp.',
    
    // Service 2
    'service2.title': 'VIP Table Reservations',
    'service2.subtitle': 'VIP tables in the best clubs and restaurants in Ibiza, coordinated with your plan.',
    'service2.feature1': 'Reservations confirmed before your arrival.',
    'service2.feature2': 'Coordination with transport and schedules.',
    'service2.feature3': 'Priority access and personalized service.',
    
    // Service 3
    'service3.title': 'Villa Rentals',
    'service3.subtitle': 'Selection of premium villas with all amenities and services included.',
    'service3.feature1': 'Villas with pool, security and service.',
    'service3.feature2': 'Personalized check-in and 24/7 concierge.',
    'service3.feature3': 'Daily cleaning and maintenance.',
    
    // Service 4
    'service4.title': 'V Class Vans with VTC License',
    'service4.subtitle': 'Professional transport with driver for groups and families.',
    'service4.feature1': 'Mercedes V Class with professional driver.',
    'service4.feature2': 'Official VTC license for legal transport.',
    'service4.feature3': 'Capacity for up to 7 passengers comfortably.',
    
    'service7.title': 'Luxury Cars',
    'service7.subtitle': 'Premium and high-end sports vehicles.',
    'service7.feature1': 'Sports cars and luxury SUVs available.',
    'service7.feature2': 'Airport pickup and private transfers.',
    'service7.feature3': 'Exclusive latest generation fleet.',
    
    // Service 8 - Yacht Rental
    'service8.title': 'Yacht Rental',
    'service8.subtitle': 'Exclusive nautical experiences in the waters of Ibiza.',
    'service8.feature1': 'Luxury yachts with professional crew.',
    'service8.feature2': 'Custom routes through secret coves.',
    'service8.feature3': 'Onboard catering and water activities.',
    
    // Service 9 - Personal Shopping & Styling
    'service9.title': 'Personal Shopping & Styling',
    'service9.subtitle': 'Image consulting and exclusive shopping in Ibiza.',
    'service9.feature1': 'Professional personal shopper and style advisor.',
    'service9.feature2': 'Access to luxury boutiques and exclusive designers.',
    'service9.feature3': 'Styling sessions for special occasions.',
    
    // Service 5
    'service5.title': 'Security and Escort',
    'service5.feature1': 'Personal and group security.',
    'service5.feature2': 'Coordination with local services.',
    'service5.feature3': 'Discreet and professional presence.',
    
    // Service 6
    'service6.title': 'Private Events at Villas',
    'service6.subtitle': 'Organization of exclusive events: private DJs, chefs, cocktail bars.',
    'service6.feature1': 'Private DJ, chef, cocktail bar and decoration.',
    'service6.feature2': 'Service staff and supplier coordination.',
    'service6.feature3': 'Absolute respect for client privacy.',
    
    // Process Section
    'process.title': 'Process',
    'process.subtitle': 'Three steps to have Ibiza completely organized. One contact, one chat and we coordinate the rest.',
    
    'process.step1.title': 'Tell us your idea.',
    'process.step1.description': 'Approximate dates, number of people, type of trip (friends, family, company) and budget level.',
    
    'process.step2.title': 'We send you proposals.',
    'process.step2.description': 'Villas, VIP tables, transport, security and villa events, all integrated into one plan.',
    
    'process.step3.title': 'We confirm and coordinate.',
    'process.step3.description': 'We close reservations, coordinate suppliers and are available during your stay for adjustments.',
    
    // About Section
    'about.title': 'About First Class Sensations',
    'about.subtitle': 'Private concierge team with direct and discreet treatment.',
    'about.description': 'With <strong class="text-yellow-600">over two decades of experience</strong> in Ibiza in the nightlife sector, private security and VIP client service. For <strong class="text-yellow-600">13 years</strong> we worked as private security and escort for <strong class="text-yellow-600">international DJs</strong>, accessing the most exclusive environments on the island and building a privileged network of contacts in <strong class="text-yellow-600">clubs, restaurants, villas, boats and premium services</strong>. Today we offer fast, discreet and completely personalized management of tailor-made stays, coordinating VIP reservations, exclusive experiences, mobility, villas and private events.',
    'about.feature1': 'Limited number of clients to guarantee <strong class="text-yellow-600">exclusive and personalized service</strong>.' ,
    'about.location': 'Ibiza · Private Concierge Team · Spanish, English and Russian.',
    'about.clients': 'We serve demanding clients who value time and seek unique experiences.',
    'about.style': '<strong class="text-yellow-600">Discreet and direct style</strong>. No intermediaries or surprises.',
    'about.philosophy': '<strong class="text-yellow-600">Meticulous planning and attention to detail</strong>. Each trip is unique.',
    
    // Testimonials Section
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Real people, authentic experiences. This is how they lived Ibiza with us.',
    'testimonials.project': 'Project',
    
    // Testimonial 1
    'testimonials.t1.name': 'Sarah Thompson',
    'testimonials.t1.position': 'Marketing Director',
    'testimonials.t1.company': 'London',
    'testimonials.t1.location': 'Playa d\'en Bossa, Ibiza',
    'testimonials.t1.text': 'Incredible experience with First Class Sensations. They organized a perfect romantic getaway: reservation at a seaside restaurant, rental car, and even got us tickets for a sunset at a beach club. Everything without worries and with exceptional service.',
    'testimonials.t1.project': 'Romantic Getaway',
    
    // Testimonial 2
    'testimonials.t2.name': 'Robert and Helen',
    'testimonials.t2.position': 'Retired Couple',
    'testimonials.t2.company': 'Manchester',
    'testimonials.t2.location': 'Puerto de San Miguel, Ibiza',
    'testimonials.t2.text': 'We didn\'t know where to start to visit Ibiza and First Class Sensations created a perfect itinerary adapted to our pace. We visited hidden coves, local markets and enjoyed the typical gastronomy. They were phenomenal with us.',
    'testimonials.t2.project': 'Peaceful Holidays',
    
    // Testimonial 3
    'testimonials.t3.name': 'Emma Wilson',
    'testimonials.t3.position': 'University Student',
    'testimonials.t3.company': 'Brighton',
    'testimonials.t3.location': 'Cala Vadella, Ibiza',
    'testimonials.t3.text': 'I went with my friends and the experience was unforgettable. They got us a great apartment near the beach, organized a boat excursion to secret coves, and even booked us at a trendy restaurant. All super affordable and without complications.',
    'testimonials.t3.project': 'Girls Trip',
    
    // Testimonial 4
    'testimonials.t4.name': 'James Mitchell',
    'testimonials.t4.position': 'Business Owner',
    'testimonials.t4.company': 'Liverpool',
    'testimonials.t4.location': 'Es Canar, Ibiza',
    'testimonials.t4.text': 'I wanted to surprise my family and it was a total success. The kids went crazy with the activities they organized for us: snorkeling, paddle surfing and a day on a boat. My wife and I were able to relax knowing that everything was under control. We will definitely repeat.',
    'testimonials.t4.project': 'Family Vacation',
    
    // Testimonial 5
    'testimonials.t5.name': 'Sophie and Michael',
    'testimonials.t5.position': 'Couple in their 30s',
    'testimonials.t5.company': 'Bristol',
    'testimonials.t5.location': 'Santa Gertrudis, Ibiza',
    'testimonials.t5.text': 'We have been coming to Ibiza with First Class Sensations for 2 years and they always surprise us with something new. This year we discovered a hidden restaurant in the interior that was a gem. You can tell they know the island perfectly and adapt to what you are looking for.',
    'testimonials.t5.project': 'Local Discovery',
    
    // Testimonial 6
    'testimonials.t6.name': 'Rose Martinez',
    'testimonials.t6.position': 'Nurse',
    'testimonials.t6.company': 'Birmingham',
    'testimonials.t6.location': 'Cala Llonga, Ibiza',
    'testimonials.t6.text': 'Trustworthy professionals who make everything easy. They organized a weekend getaway for me with my sister: they picked us up at the airport, took us to a rural spa, dinner at a typical restaurant and time for shopping at local stores. Everything perfect.',
    'testimonials.t6.project': 'Girls Weekend',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'One WhatsApp chat to coordinate everything. We respond in less than an hour.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Location',
    'contact.instagram': 'Instagram',
    'contact.form.hint': 'Or complete the form and we will call you.',
    
    // Form Fields
    'form.fullName': 'Full Name',
    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.service': 'Service of interest',
    'form.services': 'Service of interest',
    'form.services.placeholder': 'Ex: Villa, transport, VIP reservations, etc.',
    'form.dates': 'Approximate dates',
    'form.dates.placeholder': 'Ex: July 15-22, August, etc.',
    'form.people': 'Number of people',
    'form.people.placeholder': 'Ex: 6 people, family of 4, etc.',
    'form.budget': 'Approximate budget',
    'form.budget.placeholder': 'Ex: €5000, €10000-15000, etc.',
    'form.message': 'Tell us more about your idea',
    'form.submit': 'Send inquiry',
    'form.budget.economy': 'Economy',
    'form.budget.mid': 'Mid-range',
    'form.budget.high': 'High-end',
    'form.budget.luxury': 'Luxury',
    'form.service.any': 'Any',
    'form.service.villa': 'Villa',
    'form.service.transport': 'Transport',
    'form.service.vip': 'VIP Reservations',
    'form.service.security': 'Security',
    'form.service.events': 'Events',
    'form.service.full': 'Complete Plan',
    
    // Form Errors
    'form.errors.required': 'This field is required',
    'form.errors.invalidEmail': 'Invalid email',
    'form.errors.submitError': 'Error sending message',
    'form.errors.generalError': 'There was an error sending the message. Please try again.',
    'form.sending': 'Sending...',
    'form.success.title': 'Thank you for contacting us!',
    'form.success.message': 'We will respond to you in a few minutes...',
    
    // Footer
    'footer.tagline': 'Ibiza to the maximum, without complications.',
    'footer.description': 'Private concierge team in Ibiza. Unique experiences, personalized service.',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.follow': 'Follow us',
    'footer.copyright': '© 2024 First Class Sensations. All rights reserved.',
    
    'footer.services.premium': 'Premium Services',
    'footer.services.exclusive': 'Exclusive Experiences',
    'footer.services.personalized': 'Personalized Attention',
    'footer.services.custom': 'Custom Services',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutUs': 'About Us',
    'footer.location': 'Ibiza, Spain',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.ariaLabel': 'Contact information and site links',
    'footer.servicesNav': 'Services links',
    'footer.quickNav': 'Quick links',
    
    // Meta
    'meta.keywords': 'concierge Ibiza, luxury holidays, private villas, VIP reservations, luxury transport, private security, villa events',
    'meta.author': 'First Class Sensations',
    'meta.description': 'Private concierge in Ibiza. Tailor-made holidays with luxury villas, VIP reservations, exclusive transport and private events.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about our services in Ibiza.',
    
    'faq.q1': 'What makes First Class Sensations special?',
    'faq.a1': 'We are an independent concierge service in Ibiza with direct treatment and no intermediaries. We know the island perfectly and work with trusted suppliers. We specialize in personalized experiences and serve a limited number of clients to guarantee exceptional service.',
    
    'faq.q2': 'What area do you work in?',
    'faq.a2': 'We work throughout Ibiza and Formentera. From the most exclusive areas like Jesús, Roca Llisa, Can Rimbau, Can Pep Simó, Can Furnet, Cap Martinet, Marina Botafoch, Talamanca, to more isolated and private villas. We also cover Santa Eulalia, San Antonio and the rest of the island.',
    'faq.q3': 'How far in advance should I book?',
    'faq.a3': 'For villas, at least 2-3 months in high season (June-September). For VIP club reservations, minimum 1-2 weeks. For private events, 1 month. For transport and security, 1 week is enough. The sooner the better, but we always try to solve urgencies.',
    'faq.q4': 'How is payment made?',
    'faq.a4': '50% to confirm reservations, 50% before arrival. We accept bank transfer and card. All payments are secure and with invoice.',
    'faq.q5': 'What if I need to cancel?',
    'faq.a5': 'Flexible policy: full refund up to 30 days before. Between 30-7 days: 50%. Less than 7 days: managed expenses. We always try to find solutions.',
    'faq.q6': 'Do you speak Spanish, English and Russian?',
    'faq.a6': "Yes, we serve in Spanish, English and Russian. Direct communication without intermediaries, which speeds everything up and avoids misunderstandings.",
    'faq.q7': 'Can you organize private events at villas?',
    'faq.a7': 'Yes, private DJ, chef, cocktail bar, service staff, decoration and complete coordination. Absolute respect for client privacy.',
    'faq.q8': 'What budget level do you handle?',
    'faq.a8': 'We work with different ranges: from select experiences to ultra-luxury. The important thing is quality and experience, not just price.',
    
    'faq.moreQuestions': 'More questions?',
    'faq.whatsapp': 'Write to us on WhatsApp',
    
    // Cookie Banner
    'cookie.title': 'We use cookies to improve your experience',
    'cookie.description': 'We use necessary technical cookies for the operation of the site, and analytical (Google Analytics) and tracking cookies to improve our services. You can manage your preferences or consult more information in our',
    'cookie.privacyPolicy': 'privacy policy',
    'cookie.configure': 'Configure',
    'cookie.necessaryOnly': 'Only necessary',
    'cookie.acceptAll': 'Accept all',
    'cookie.settingsTitle': 'Cookie Settings',
    'cookie.necessaryCookies': 'Necessary Cookies',
    'cookie.necessaryDescription': 'These cookies are essential for the operation of the website and cannot be disabled.',
    'cookie.analyticsCookies': 'Analytics Cookies',
    'cookie.analyticsDescription': 'Google Analytics to analyze website usage and improve our services.',
    'cookie.trackingCookies': 'Tracking Cookies',
    'cookie.trackingDescription': 'Behavior tracking to personalize and improve the user experience.',
    'cookie.savePreferences': 'Save preferences',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: January 15, 2024',
    'privacy.section1.title': '1. General Information',
    'privacy.section1.content': 'At First Class Sensations, located in Ibiza, Spain, we are committed to protecting your privacy and ensuring the security of your personal data. This policy describes how we collect, use, and protect your information.',
    'privacy.section2.title': '2. Data We Collect',
    'privacy.section2.content': 'We may collect the following types of information:',
    'privacy.section2.items': 'Contact information (name, email, phone)|Information about requested services|Location data for services in Ibiza and Formentera|Technical information about your website visit (cookies, IP)',
    'privacy.section3.title': '3. How We Use Your Data',
    'privacy.section3.content': 'We use your personal information to:',
    'privacy.section3.items': 'Provide and manage our premium services|Respond to your inquiries and requests|Improve our services and customer experience|Comply with legal and regulatory obligations',
    'privacy.section4.title': '4. Legal Basis for Processing',
    'privacy.section4.content': 'We process your personal data based on:',
    'privacy.section4.items': 'Your consent for specific services|The fulfillment of a service contract|Applicable legal obligations|Our legitimate interests in improving our services',
    'privacy.section5.title': '5. Data Sharing',
    'privacy.section5.content': 'We do not sell, rent, or share your personal information with third parties for commercial purposes. We only share data when:',
    'privacy.section5.items': 'It is necessary to provide our services (trusted providers)|We are legally required to do so|With your express consent',
    'privacy.section6.title': '6. Data Security',
    'privacy.section6.content': 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
    'privacy.section7.title': '7. Your Rights',
    'privacy.section7.content': 'Under the General Data Protection Regulation (GDPR), you have the right to:',
    'privacy.section7.items': 'Access your personal data|Rectify inaccurate data|Request the deletion of your data|Object to the processing of your data|Request the portability of your data|Withdraw your consent at any time',
    'privacy.section7.contact': 'To exercise these rights, contact us at: info@firstclassensations.com',
    'privacy.section8.title': '8. Data Retention',
    'privacy.section8.content': 'We retain your personal data only for as long as necessary for the purposes set out in this policy, or as required by applicable laws. When they are no longer needed, we securely delete them.',
    'privacy.section9.title': '9. Cookies',
    'privacy.section9.content': 'We use cookies to improve the user experience. Technical cookies are essential for the operation of the site, while analytical cookies help us improve our services. You can manage your cookie preferences through our cookie banner.',
    'privacy.section10.title': '10. Changes to this Policy',
    'privacy.section10.content': 'We may update this privacy policy occasionally. We will notify you of significant changes and post the updated version on this page. We recommend that you review this policy periodically.',
    'privacy.section11.title': '11. Contact',
    'privacy.section11.content': 'If you have questions about this privacy policy or about the processing of your personal data, contact us:',
    'privacy.company': 'First Class Sensations',
    'privacy.email': 'Email: info@firstclassensations.com',
    'privacy.phone': 'Phone: +34 600 887 755',
    'privacy.location': 'Location: Ibiza, Spain',
    'privacy.section12.title': '12. Control Authority',
    'privacy.section12.content': 'You have the right to file a complaint with the competent control authority if you believe that the processing of your personal data does not comply with applicable legislation.',
    'privacy.section12.authority': 'Spanish Data Protection Agency (AEPD) - Spain',
    'privacy.section12.link': 'https://www.aepd.es',
    'privacy.backToHome': 'Back to home',
    
    // Terms and Conditions
    'terms.title': 'Terms and Conditions',
    'terms.lastUpdated': 'Last updated: January 15, 2024',
    'terms.section1.title': '1. Acceptance of Terms',
    'terms.section1.content': 'By accessing and using the First Class Sensations website and its services, you agree to be legally bound by these Terms and Conditions. If you do not agree with any of these terms, we recommend that you do not use our services.',
    'terms.section2.title': '2. Services Offered',
    'terms.section2.content': 'First Class Sensations offers premium concierge services and exclusive experiences in Ibiza and surrounding areas. Our services include, but are not limited to:',
    'terms.section2.items': 'Personalized concierge services|Organization of exclusive experiences|Premium personal assistance services|Reservations and management of luxury services',
    'terms.section3.title': '3. Website Use',
    'terms.section3.content': 'You agree to use our website only for legitimate purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the site by third parties.',
    'terms.section3.prohibited': 'It is prohibited:',
    'terms.section3.items': 'Use the site in a way that could damage, disable, or compromise the site|Use the site for any fraudulent or illegal purpose|Attempt to gain unauthorized access to any part of the site|Post or transmit inappropriate or offensive content',
    'terms.section4.title': '4. Intellectual Property',
    'terms.section4.content1': 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of First Class Sensations or its content providers and is protected by intellectual property laws.',
    'terms.section4.content2': 'The reproduction, distribution, modification, or unauthorized use of any content on the site without our express written consent is prohibited.',
    'terms.section5.title': '5. Limitation of Liability',
    'terms.section5.content1': 'First Class Sensations will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or this website.',
    'terms.section5.content2': 'We do not guarantee that the website will be error-free or that access will be uninterrupted. The information provided on this site is provided "as is" without warranties of any kind.',
    'terms.section6.title': '6. Third-Party Services',
    'terms.section6.content': 'We may provide links to third-party websites or services that are not owned or controlled by First Class Sensations. We assume no responsibility for the content, privacy policies, or practices of third-party websites.',
    'terms.section7.title': '7. Service Modifications',
    'terms.section7.content': 'We reserve the right to modify, suspend, or discontinue, temporarily or permanently, our services or any part of them, with or without prior notice. You agree that First Class Sensations will not be liable to you or to third parties for any modification, suspension, or discontinuation of the service.',
    'terms.section8.title': '8. Rates and Payments',
    'terms.section8.content1': 'Rates for our premium services are available upon request and may vary according to the nature and scope of the services requested. All prices will be clearly communicated before the provision of any service.',
    'terms.section8.content2': 'Payments will be processed according to the terms individually agreed with each client. We reserve the right to modify our rates with prior notice.',
    'terms.section9.title': '9. Cancellations and Refunds',
    'terms.section9.content1': 'Cancellation policies vary according to the type of service contracted. Clients will be informed of the specific cancellation conditions at the time of contracting our services.',
    'terms.section9.content2': 'Refunds, when applicable, will be processed according to the terms established in the individual service contract.',
    'terms.section10.title': '10. Applicable Law',
    'terms.section10.content': 'These Terms and Conditions will be governed and interpreted in accordance with the laws of Spain. Any dispute arising in relation to these terms will be subject to the exclusive jurisdiction of the courts of Ibiza, Spain.',
    'terms.section11.title': '11. Changes to Terms',
    'terms.section11.content': 'We reserve the right to modify these Terms and Conditions at any time. The modifications will take effect immediately after their publication on this website. Continued use of our services after such changes constitutes your acceptance of the modified terms.',
    'terms.section12.title': '12. Contact',
    'terms.section12.content': 'If you have any questions about these Terms and Conditions, contact us:',
    'terms.company': 'First Class Sensations',
    'terms.email': 'Email: info@firstclassensations.com',
    'terms.phone': 'Phone: +34 600 887 755',
    'terms.location': 'Location: Ibiza, Spain',
    'terms.backToHome': 'Back to home'
  },
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.howWeWork': 'Как мы работаем',
    'nav.about': 'О нас',
    'nav.contact': 'Контакт',
    'nav.faq': 'FAQ',
    'nav.quickConsultation': 'Быстрая консультация',
    
    // Hero
    'hero.title': 'Ибица без ограничений',
    'hero.subtitle': 'Ты просто наслаждайся',
    'hero.description': 'Мы специализируемся на организации индивидуальных каникул: VIP-бронирование столов в лучших клубах и ресторанах, аренда вилл, роскошные автомобили, микроавтобусы Mercedes V Class с лицензией и водителем, охранные сопровождения и организация частных мероприятий на виллах.',
    'hero.cta.plan': 'РОСКОШНЫЕ УСЛУГИ',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.trust.available': 'Доступен 24/7',
    'hero.trust.exclusive': 'Эксклюзивные впечатления',
    'hero.trust.personalized': 'Персонализированный сервис',
    
    // Services Section
    'services.title': 'Услуги',
    'services.subtitle': 'Понятные услуги, созданные для того, чтобы всё было быстро и просто. Мы занимаемся всей логистикой, чтобы вам осталось только наслаждаться Ибицей.',
    
    // Service 1
    'service1.title': 'Роскошные каникулы',
    'service1.subtitle': 'Мы создаём персонализированный план в соответствии с вашими датами, типом группы и стилем путешествия.',
    'service1.feature1': 'Ежедневное планирование (пляж, закат, ночь).',
    'service1.feature2': 'Рекомендации в соответствии с вашим профилем и бюджетом.',
    'service1.feature3': 'Корректировки во время пребывания через WhatsApp.',
    
    // Service 2
    'service2.title': 'VIP-бронирование столов',
    'service2.subtitle': 'VIP-столы в лучших клубах и ресторанах Ибицы, скоординированные с вашим планом.',
    'service2.feature1': 'Бронирования подтверждаются до вашего прибытия.',
    'service2.feature2': 'Координация с транспортом и расписанием.',
    'service2.feature3': 'Приоритетный доступ и персонализированный сервис.',
    
    // Service 3
    'service3.title': 'Аренда вилл',
    'service3.subtitle': 'Подбор премиальных вилл со всеми удобствами и включёнными услугами.',
    'service3.feature1': 'Виллы с бассейном, безопасностью и обслуживанием.',
    'service3.feature2': 'Персонализированный заезд и консьерж 24/7.',
    'service3.feature3': 'Ежедневная уборка и обслуживание.',
    
    // Service 4
    'service4.title': 'Микроавтобусы V Class с лицензией VTC',
    'service4.subtitle': 'Профессиональный транспорт с водителем для групп и семей.',
    'service4.feature1': 'Mercedes V Class с профессиональным водителем.',
    'service4.feature2': 'Официальная лицензия VTC для легального транспорта.',
    'service4.feature3': 'Вместимость до 7 пассажиров с комфортом.',
    
    'service7.title': 'Роскошные автомобили',
    'service7.subtitle': 'Премиальные и спортивные автомобили высокого класса.',
    'service7.feature1': 'Спортивные автомобили и роскошные внедорожники.',
    'service7.feature2': 'Встреча в аэропорту и частные трансферы.',
    'service7.feature3': 'Эксклюзивный автопарк последнего поколения.',
    
    // Service 8 - Yacht Rental
    'service8.title': 'Аренда яхт',
    'service8.subtitle': 'Эксклюзивные морские приключения в водах Ибицы.',
    'service8.feature1': 'Роскошные яхты с профессиональной командой.',
    'service8.feature2': 'Индивидуальные маршруты по секретным бухтам.',
    'service8.feature3': 'Кейтеринг на борту и водные развлечения.',
    
    // Service 9 - Personal Shopping & Styling
    'service9.title': 'Персональный шопинг и стайлинг',
    'service9.subtitle': 'Консультации по имиджу и эксклюзивный шопинг в Ибице.',
    'service9.feature1': 'Профессиональный персональный шопер и стилист.',
    'service9.feature2': 'Доступ к люксовым бутикам и эксклюзивным дизайнерам.',
    'service9.feature3': 'Сессии стайлинга для особых случаев.',
    
    // Service 5
    'service5.title': 'Безопасность и сопровождение',
    'service5.feature1': 'Личная и групповая безопасность.',
    'service5.feature2': 'Координация с местными службами.',
    'service5.feature3': 'Дискретное и профессиональное присутствие.',
    
    // Service 6
    'service6.title': 'Частные мероприятия на виллах',
    'service6.subtitle': 'Организация эксклюзивных мероприятий: частные диджеи, шеф-повара, коктейль-бары.',
    'service6.feature1': 'Частный диджей, шеф-повар, коктейль-бар и оформление.',
    'service6.feature2': 'Обслуживающий персонал и координация поставщиков.',
    'service6.feature3': 'Абсолютное уважение к конфиденциальности клиента.',
    
    // Process Section
    'process.title': 'Процесс',
    'process.subtitle': 'Три шага, чтобы полностью организовать Ибицу. Один контакт, один чат и мы координируем остальное.',
    
    'process.step1.title': 'Расскажите о вашей идее.',
    'process.step1.description': 'Приблизительные даты, количество людей, тип поездки (друзья, семья, компания) и уровень бюджета.',
    
    'process.step2.title': 'Мы отправляем вам предложения.',
    'process.step2.description': 'Виллы, VIP-столы, транспорт, безопасность и мероприятия на виллах, всё интегрировано в один план.',
    
    'process.step3.title': 'Мы подтверждаем и координируем.',
    'process.step3.description': 'Мы закрываем бронирования, координируем поставщиков и доступны во время вашего пребывания для корректировок.',
    
    // About Section
    'about.title': 'О First Class Sensations',
    'about.subtitle': 'Независимый консьерж с прямым и дискретным обслуживанием.',
    'about.description': 'First Class Sensations родился с чёткой идеей: помочь вам жить Ибицей по максимуму, не теряя время на координацию бронирований, изменений и деталей в последнюю минуту.',
    'about.feature1': 'Мы работаем с ограниченным количеством клиентов, чтобы поддерживать очень персональный, быстрый и гибкий сервис.',
    'about.location': 'Ибица · Приватный консьерж · Испанский, английский и русский.',
    'about.clients': 'Мы обслуживаем требовательных клиентов, которые ценят время и ищут уникальные впечатления.',
    'about.style': 'Стиль дискретный, прямой и эффективный. Без посредников и сюрпризов.',
    'about.philosophy': 'Ключ в планировании и деталях. Каждый клиент разный, каждое путешествие уникально.',
    
    // Testimonials Section
    'testimonials.title': 'Что говорят наши клиенты',
    'testimonials.subtitle': 'Реальные люди, подлинные впечатления. Так они жили Ибицей с нами.',
    'testimonials.project': 'Проект',
    
    // Testimonial 1
    'testimonials.t1.name': 'Мария Иванова',
    'testimonials.t1.position': 'Учительница',
    'testimonials.t1.company': 'Ибица',
    'testimonials.t1.location': 'Плайя д\'ен Босса, Ибица',
    'testimonials.t1.text': 'Невероятный опыт с First Class Sensations. Они организовали идеальный романтический уикенд: бронирование в ресторане с видом на море, аренда автомобиля и даже достали билеты на закат в пляжном клубе. Всё без забот и с исключительным обслуживанием.',
    'testimonials.t1.project': 'Романтический Уикенд',
    
    // Testimonial 2
    'testimonials.t2.name': 'Александр и Елена',
    'testimonials.t2.position': 'Пенсионеры',
    'testimonials.t2.company': 'Москва',
    'testimonials.t2.location': 'Пуэрто де Сан Мигель, Ибица',
    'testimonials.t2.text': 'Мы не знали, с чего начать знакомство с Ибицей, и First Class Sensations создали идеальный маршрут, адаптированный к нашему темпу. Мы посетили скрытые бухты, местные рынки и наслаждались типичной гастрономией. Они были феноменальны с нами.',
    'testimonials.t2.project': 'Спокойный Отдых',
    
    // Testimonial 3
    'testimonials.t3.name': 'Анна Петрова',
    'testimonials.t3.position': 'Студентка',
    'testimonials.t3.company': 'Санкт-Петербург',
    'testimonials.t3.location': 'Кала Ваделла, Ибица',
    'testimonials.t3.text': 'Я поехала с подругами, и опыт был незабываемым. Они достали нам отличную квартиру рядом с пляжем, организовали лодочную экскурсию по секретным бухтам и даже забронировали нас в модном ресторане. Всё супер доступно и без сложностей.',
    'testimonials.t3.project': 'Поездка с Подругами',
    
    // Testimonial 4
    'testimonials.t4.name': 'Дмитрий Смирнов',
    'testimonials.t4.position': 'Предприниматель',
    'testimonials.t4.company': 'Екатеринбург',
    'testimonials.t4.location': 'Эс Канар, Ибица',
    'testimonials.t4.text': 'Я хотел удивить свою семью, и это был полный успех. Дети сходили с ума от активностей, которые они для нас организовали: сноркелинг, паддл-серфинг и день на лодке. Моя жена и я могли расслабиться, зная, что всё под контролем. Обязательно повторим.',
    'testimonials.t4.project': 'Семейный Отдых',
    
    // Testimonial 5
    'testimonials.t5.name': 'София и Михаил',
    'testimonials.t5.position': 'Пара 30-ти лет',
    'testimonials.t5.company': 'Новосибирск',
    'testimonials.t5.location': 'Санта Гертрудис, Ибица',
    'testimonials.t5.text': 'Мы приезжаем на Ибицу с First Class Sensations уже 2 года, и они всегда удивляют нас чем-то новым. В этом году мы открыли скрытый ресторан внутри острова, который был настоящей жемчужиной. Видно, что они идеально знают остров и адаптируются к тому, что вы ищете.',
    'testimonials.t5.project': 'Местные Открытия',
    
    // Testimonial 6
    'testimonials.t6.name': 'Мария Кузнецова',
    'testimonials.t6.position': 'Медсестра',
    'testimonials.t6.company': 'Казань',
    'testimonials.t6.location': 'Кала Льонга, Ибица',
    'testimonials.t6.text': 'Надёжные профессионалы, которые делают всё легко. Они организовали для меня уикенд с сестрой: нас забрали в аэропорту, отвезли в загородный спа, ужин в типичном ресторане и время для шопинга в местных магазинах. Всё идеально.',
    'testimonials.t6.project': 'Девичий Уикенд',
    
    // Contact Section
    'contact.title': 'Контакт',
    'contact.subtitle': 'Один чат WhatsApp для координации всего. Мы отвечаем менее чем за час.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.location': 'Расположение',
    'contact.instagram': 'Instagram',
    'contact.form.hint': 'Или заполните форму, и мы вам перезвоним.',
    
    // Form Fields
    'form.fullName': 'Полное имя',
    'form.name': 'Имя',
    'form.phone': 'Телефон',
    'form.email': 'Email',
    'form.service': 'Интересующая услуга',
    'form.services': 'Интересующая услуга',
    'form.services.placeholder': 'Например: Вилла, транспорт, VIP-бронирование и т.д.',
    'form.dates': 'Приблизительные даты',
    'form.dates.placeholder': 'Например: 15-22 июля, август и т.д.',
    'form.people': 'Количество человек',
    'form.people.placeholder': 'Например: 6 человек, семья из 4 и т.д.',
    'form.budget': 'Приблизительный бюджет',
    'form.budget.placeholder': 'Например: €5000, €10000-15000 и т.д.',
    'form.message': 'Расскажите больше о вашей идее',
    'form.submit': 'Отправить запрос',
    'form.budget.economy': 'Экономный',
    'form.budget.mid': 'Средний',
    'form.budget.high': 'Высокий',
    'form.budget.luxury': 'Роскошный',
    'form.service.any': 'Любой',
    'form.service.villa': 'Вилла',
    'form.service.transport': 'Транспорт',
    'form.service.vip': 'VIP-бронирование',
    'form.service.security': 'Безопасность',
    'form.service.events': 'Мероприятия',
    'form.service.full': 'Полный план',
    
    // Form Errors
    'form.errors.required': 'Это поле обязательно',
    'form.errors.invalidEmail': 'Неверный email',
    'form.errors.submitError': 'Ошибка отправки сообщения',
    'form.errors.generalError': 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
    'form.sending': 'Отправка...',
    'form.success.title': 'Спасибо за обращение!',
    'form.success.message': 'Мы ответим вам через несколько минут...',
    
    // Footer
    'footer.tagline': 'Ибица по максимуму, без осложнений.',
    'footer.description': 'Команда частного консьержа на Ибице. Уникальные впечатления, персонализированный сервис.',
    'footer.contact': 'Контакт',
    'footer.services': 'Услуги',
    'footer.follow': 'Следите за нами',
    'footer.copyright': '© 2024 First Class Sensations. Все права защищены.',
    
    'footer.services.premium': 'Премиальные Услуги',
    'footer.services.exclusive': 'Эксклюзивные Впечатления',
    'footer.services.personalized': 'Персонализированное Внимание',
    'footer.services.custom': 'Индивидуальные Услуги',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.aboutUs': 'О Нас',
    'footer.location': 'Ибица, Испания',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия и Положения',
    'footer.ariaLabel': 'Контактная информация и ссылки сайта',
    'footer.servicesNav': 'Ссылки услуг',
    'footer.quickNav': 'Быстрые ссылки',
    
    // Meta
    'meta.keywords': 'консьерж Ибица, роскошные каникулы, частные виллы, VIP-бронирование, роскошный транспорт, частная безопасность, мероприятия на виллах',
    'meta.author': 'First Class Sensations',
    'meta.description': 'Приватный консьерж в Ибице. Индивидуальные каникулы с роскошными виллами, VIP-бронированием, эксклюзивным транспортом и частными мероприятиями.',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Всё, что вам нужно знать о наших услугах в Ибице.',
    
    'faq.q1': 'Что делает First Class Sensations особенным?',
    'faq.a1': 'Мы являемся независимым сервисом консьержа в Ибице с прямым обслуживанием и без посредников. Мы идеально знаем остров и работаем с проверенными поставщиками. Мы специализируемся на персонализированных впечатлениях и обслуживаем ограниченное количество клиентов, чтобы гарантировать исключительный сервис.',
    
    'faq.q2': 'В какой области вы работаете?',
    'faq.a2': 'Мы работаем по всей Ибице и Форментере. От самых эксклюзивных районов, таких как Хесус, Рока Льиса, Кан Римбау, Кан Пеп Симо, Кан Фурнет, Кап Мартинет, Марина Ботафоч, Таламанка, до более изолированных и частных вилл. Мы также охватываем Санта Эулалия, Сан-Антонио и остальную часть острова.',
    'faq.q3': 'За сколько времени нужно бронировать?',
    'faq.a3': 'Для вилл - не менее 2-3 месяцев в высокий сезон (июнь-сентябрь). Для VIP-бронирования в клубах - минимум 1-2 недели. Для частных мероприятий - 1 месяц. Для транспорта и безопасности - 1 недели достаточно. Чем раньше, тем лучше, но мы всегда стараемся решать срочные вопросы.',
    'faq.q4': 'Как осуществляется оплата?',
    'faq.a4': '50% для подтверждения бронирования, 50% до прибытия. Мы принимаем банковский перевод и карту. Все платежи безопасны и сопровождаются счетом.',
    'faq.q5': 'Что, если мне нужно отменить?',
    'faq.a5': 'Гибкая политика: полный возврат до 30 дней до даты. Между 30-7 днями: 50%. Менее 7 дней: управляемые расходы. Мы всегда стараемся найти решения.',
    'faq.q6': 'Вы говорите по-испански, по-английски и по-русски?',
    'faq.a6': 'Да, мы обслуживаем на испанском, английском и русском языках. Прямое общение без посредников, что ускоряет всё и избавляет от недоразумений.',
    'faq.q7': 'Можете ли вы организовать частные мероприятия на виллах?',
    'faq.a7': 'Да, частный диджей, шеф-повар, коктейль-бар, обслуживающий персонал, оформление и полная координация. Абсолютное уважение к конфиденциальности клиента.',
    'faq.q8': 'С каким уровнем бюджета вы работаете?',
    'faq.a8': 'Мы работаем с разными диапазонами: от избранных впечатлений до ультра-роскоши. Важно качество и опыт, а не только цена.',
    
    'faq.moreQuestions': 'Ещё вопросы?',
    'faq.whatsapp': 'Напишите нам в WhatsApp',
    
    // Privacy Policy
    'privacy.title': 'Политика Конфиденциальности',
    'privacy.lastUpdated': 'Последнее обновление: 15 января 2024 года',
    'privacy.section1.title': '1. Общая Информация',
    'privacy.section1.content': 'В First Class Sensations, расположенной в Ибице, Испания, мы обязуемся защищать вашу конфиденциальность и обеспечивать безопасность ваших персональных данных. Эта политика описывает, как мы собираем, используем и защищаем вашу информацию.',
    'privacy.section2.title': '2. Данные, которые мы собираем',
    'privacy.section2.content': 'Мы можем собирать следующие типы информации:',
    'privacy.section2.items': 'Контактная информация (имя, email, телефон)|Информация о запрошенных услугах|Данные о местоположении для услуг в Ибице и Форментере|Техническая информация о вашем посещении сайта (cookies, IP)',
    'privacy.section3.title': '3. Как мы используем ваши данные',
    'privacy.section3.content': 'Мы используем вашу персональную информацию для:',
    'privacy.section3.items': 'Предоставления и управления нашими премиальными услугами|Ответа на ваши запросы и заявки|Улучшения наших услуг и клиентского опыта|Соблюдения правовых и нормативных обязательств',
    'privacy.section4.title': '4. Правовая основа обработки',
    'privacy.section4.content': 'Мы обрабатываем ваши персональные данные на основе:',
    'privacy.section4.items': 'Вашего согласия для конкретных услуг|Исполнения договора об оказании услуг|Применимых правовых обязательств|Наших законных интересов в улучшении наших услуг',
    'privacy.section5.title': '5. Совместное использование данных',
    'privacy.section5.content': 'Мы не продаём, не сдаём в аренду и не передаём вашу персональную информацию третьим лицам в коммерческих целях. Мы передаём данные только когда:',
    'privacy.section5.items': 'Это необходимо для предоставления наших услуг (надёжные поставщики)|Мы юридически обязаны это сделать|С вашего явного согласия',
    'privacy.section6.title': '6. Безопасность данных',
    'privacy.section6.content': 'Мы внедряем соответствующие технические и организационные меры безопасности для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.',
    'privacy.section7.title': '7. Ваши права',
    'privacy.section7.content': 'Согласно Общему регламенту по защите данных (GDPR), вы имеете право на:',
    'privacy.section7.items': 'Доступ к вашим персональным данным|Исправление неточных данных|Запрос на удаление ваших данных|Возражение против обработки ваших данных|Запрос на переносимость ваших данных|Отзыв вашего согласия в любое время',
    'privacy.section7.contact': 'Для осуществления этих прав свяжитесь с нами: info@firstclassensations.com',
    'privacy.section8.title': '8. Хранение данных',
    'privacy.section8.content': 'Мы храним ваши персональные данные только в течение времени, необходимого для целей, изложенных в этой политике, или в соответствии с требованиями применимого законодательства. Когда они больше не нужны, мы безопасно удаляем их.',
    'privacy.section9.title': '9. Файлы cookies',
    'privacy.section9.content': 'Мы используем файлы cookies для улучшения пользовательского опыта. Технические cookies необходимы для работы сайта, в то время как аналитические cookies помогают нам улучшать наши услуги. Вы можете управлять своими предпочтениями cookies через наш баннер cookies.',
    'privacy.section10.title': '10. Изменения в этой политике',
    'privacy.section10.content': 'Мы можем время от времени обновлять эту политику конфиденциальности. Мы уведомим вас о значительных изменениях и разместим обновлённую версию на этой странице. Мы рекомендуем вам периодически пересматривать эту политику.',
    'privacy.section11.title': '11. Контакт',
    'privacy.section11.content': 'Если у вас есть вопросы об этой политике конфиденциальности или об обработке ваших персональных данных, свяжитесь с нами:',
    'privacy.company': 'First Class Sensations',
    'privacy.email': 'Email: info@firstclassensations.com',
    'privacy.phone': 'Телефон: +34 600 887 755',
    'privacy.location': 'Местоположение: Ибица, Испания',
    'privacy.section12.title': '12. Орган контроля',
    'privacy.section12.content': 'Вы имеете право подать жалобу в компетентный орган контроля, если считаете, что обработка ваших персональных данных не соответствует применимому законодательству.',
    'privacy.section12.authority': 'Испанское агентство по защите данных (AEPD) - Испания',
    'privacy.section12.link': 'https://www.aepd.es',
    'privacy.backToHome': 'Вернуться на главную',
    
    // Terms and Conditions
    'terms.title': 'Условия и Положения',
    'terms.lastUpdated': 'Последнее обновление: 15 января 2024 года',
    'terms.section1.title': '1. Принятие условий',
    'terms.section1.content': 'Получая доступ к веб-сайту First Class Sensations и используя его услуги, вы соглашаетесь быть юридически обязанным этими Условиями и Положениями. Если вы не согласны с каким-либо из этих условий, мы рекомендуем вам не использовать наши услуги.',
    'terms.section2.title': '2. Предлагаемые услуги',
    'terms.section2.content': 'First Class Sensations предлагает премиальные услуги консьержа и эксклюзивные впечатления в Ибице и окрестностях. Наши услуги включают, но не ограничиваются:',
    'terms.section2.items': 'Персонализированные услуги консьержа|Организация эксклюзивных впечатлений|Премиальные услуги персонального ассистента|Бронирование и управление роскошными услугами',
    'terms.section3.title': '3. Использование веб-сайта',
    'terms.section3.content': 'Вы соглашаетесь использовать наш веб-сайт только в законных целях и таким образом, который не нарушает права, ограничивает или препятствует использованию и наслаждению сайтом третьими лицами.',
    'terms.section3.prohibited': 'Запрещено:',
    'terms.section3.items': 'Использовать сайт способом, который может повредить, отключить или скомпрометировать сайт|Использовать сайт для любых мошеннических или незаконных целей|Пытаться получить несанкционированный доступ к любой части сайта|Публиковать или передавать неподходящий или оскорбительный контент',
    'terms.section4.title': '4. Интеллектуальная собственность',
    'terms.section4.content1': 'Весь контент этого веб-сайта, включая, но не ограничиваясь текстом, графикой, логотипами, изображениями и программным обеспечением, является собственностью First Class Sensations или её поставщиков контента и защищён законами об интеллектуальной собственности.',
    'terms.section4.content2': 'Запрещено воспроизводить, распространять, модифицировать или использовать любой контент сайта без нашего явного письменного согласия.',
    'terms.section5.title': '5. Ограничение ответственности',
    'terms.section5.content1': 'First Class Sensations не будет нести ответственность за любые прямые, косвенные, случайные, специальные или последующие убытки, возникающие в результате использования или невозможности использования наших услуг или этого веб-сайта.',
    'terms.section5.content2': 'Мы не гарантируем, что веб-сайт будет свободен от ошибок или что доступ будет бесперебойным. Информация, предоставленная на этом сайте, предоставляется "как есть" без каких-либо гарантий.',
    'terms.section6.title': '6. Услуги третьих лиц',
    'terms.section6.content': 'Мы можем предоставлять ссылки на веб-сайты или услуги третьих лиц, которые не являются собственностью или не контролируются First Class Sensations. Мы не несём ответственности за содержание, политики конфиденциальности или практики веб-сайтов третьих лиц.',
    'terms.section7.title': '7. Изменения услуг',
    'terms.section7.content': 'Мы оставляем за собой право изменять, приостанавливать или прекращать, временно или постоянно, наши услуги или любую их часть, с или без предварительного уведомления. Вы соглашаетесь, что First Class Sensations не будет нести ответственность перед вами или перед третьими лицами за любые изменения, приостановки или прекращения услуги.',
    'terms.section8.title': '8. Тарифы и платежи',
    'terms.section8.content1': 'Тарифы на наши премиальные услуги доступны по запросу и могут варьироваться в зависимости от характера и объёма запрошенных услуг. Все цены будут чётко доведены до сведения до предоставления любой услуги.',
    'terms.section8.content2': 'Платежи будут обрабатываться в соответствии с условиями, индивидуально согласованными с каждым клиентом. Мы оставляем за собой право изменять наши тарифы с предварительным уведомлением.',
    'terms.section9.title': '9. Отмены и возвраты',
    'terms.section9.content1': 'Политики отмены варьируются в зависимости от типа заказанной услуги. Клиенты будут проинформированы о конкретных условиях отмены в момент заказа наших услуг.',
    'terms.section9.content2': 'Возвраты средств, когда это применимо, будут обработаны в соответствии с условиями, установленными в индивидуальном договоре об оказании услуг.',
    'terms.section10.title': '10. Применимое право',
    'terms.section10.content': 'Эти Условия и Положения регулируются и толкуются в соответствии с законодательством Испании. Любые споры, возникающие в связи с этими условиями, подпадают под исключительную юрисдикцию судов Ибицы, Испания.',
    'terms.section11.title': '11. Изменения условий',
    'terms.section11.content': 'Мы оставляем за собой право изменять эти Условия и Положения в любое время. Изменения вступают в силу немедленно после их публикации на этом веб-сайте. Продолжение использования наших услуг после таких изменений означает ваше принятие изменённых условий.',
    'terms.section12.title': '12. Контакт',
    'terms.section12.content': 'Если у вас есть вопросы об этих Условиях и Положениях, свяжитесь с нами:',
    'terms.company': 'First Class Sensations',
    'terms.email': 'Email: info@firstclassensations.com',
    'terms.phone': 'Телефон: +34 600 887 755',
    'terms.location': 'Местоположение: Ибица, Испания',
    'terms.backToHome': 'Вернуться на главную'
  }
}

export const getTranslation = (key: string, language: Language): string => {
  return translations[language][key] || key
}
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
    'hero.title': 'Concierge privado en Ibiza',
    'hero.subtitle': 'Vacaciones a medida y experiencias VIP en Ibiza',
    'hero.description': 'Nos dedicamos a organizar vacaciones a medida: reservas de mesas VIP en clubs y restaurantes top, alquiler de villas, coches de lujo, furgonetas Mercedes V Class con licencia y conductor, acompañamientos de seguridad y organización de eventos privados en villas.',
    'hero.cta.plan': 'Planificar mi estancia',
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
    'service4.title': 'Transporte de lujo',
    'service4.subtitle': 'Coches de alta gama, furgonetas Mercedes V Class con licencia y conductor.',
    'service4.feature1': 'Mercedes V Class con conductor profesional.',
    'service4.feature2': 'Coches deportivos y SUVs de lujo.',
    'service4.feature3': 'Recogida en aeropuerto y traslados.',
    
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
    'about.subtitle': 'Concierge independiente con trato directo y discreto.',
    'about.description': 'First Class Sensations nace con una idea clara: ayudarte a vivir Ibiza al máximo sin perder tiempo coordinando reservas, cambios y detalles de última hora.',
    'about.feature1': 'Trabajamos con un número limitado de clientes para mantener un servicio muy personal, rápido y flexible.',
    'about.location': 'Ibiza · Concierge privado · Español, inglés y ruso.',
    'about.clients': 'Atendemos a clientes exigentes que valoran el tiempo y buscan experiencias únicas.',
    'about.style': 'Estilo discreto, directo y eficaz. Sin intermediarios ni sorpresas.',
    'about.philosophy': 'La clave está en la planificación y en los detalles. Cada cliente es diferente, cada viaje es único.',
    
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
    
    // Footer
    'footer.tagline': 'Ibiza al máximo, sin complicaciones.',
    'footer.description': 'Concierge privado en Ibiza. Experiencias únicas, servicio personalizado.',
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
    'faq.whatsapp': 'Escríbenos por WhatsApp'
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
    'hero.title': 'Private Concierge in Ibiza',
    'hero.subtitle': 'Tailor-made holidays and VIP experiences in Ibiza',
    'hero.description': 'We specialize in organizing tailor-made holidays: VIP table reservations in top clubs and restaurants, villa rentals, luxury cars, Mercedes V Class vans with license and driver, security escorts and organization of private events in villas.',
    'hero.cta.plan': 'Plan My Stay',
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
    'service4.title': 'Luxury Transport',
    'service4.subtitle': 'High-end cars, Mercedes V Class vans with license and driver.',
    'service4.feature1': 'Mercedes V Class with professional driver.',
    'service4.feature2': 'Sports cars and luxury SUVs.',
    'service4.feature3': 'Airport pickup and transfers.',
    
    // Service 5
    'service5.title': 'Security and Escort',
    'service5.subtitle': 'Discreet and professional security service for your peace of mind.',
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
    'about.subtitle': 'Independent concierge with direct and discreet treatment.',
    'about.description': 'First Class Sensations is born with a clear idea: to help you live Ibiza to the fullest without wasting time coordinating reservations, changes and last-minute details.',
    'about.feature1': 'We work with a limited number of clients to maintain a very personal, fast and flexible service.',
    'about.location': 'Ibiza · Private Concierge · Spanish, English and Russian.',
    'about.clients': 'We serve demanding clients who value time and seek unique experiences.',
    'about.style': 'Discreet, direct and efficient style. No intermediaries or surprises.',
    'about.philosophy': 'The key is in planning and details. Each client is different, each trip is unique.',
    
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
    
    // Footer
    'footer.tagline': 'Ibiza to the maximum, without complications.',
    'footer.description': 'Private concierge in Ibiza. Unique experiences, personalized service.',
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
    'faq.whatsapp': 'Write to us on WhatsApp'
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
    'hero.title': 'Приватный консьерж в Ибице',
    'hero.subtitle': 'Индивидуальные каникулы и VIP-опыт в Ибице',
    'hero.description': 'Мы специализируемся на организации индивидуальных каникул: VIP-бронирование столов в лучших клубах и ресторанах, аренда вилл, роскошные автомобили, микроавтобусы Mercedes V Class с лицензией и водителем, охранные сопровождения и организация частных мероприятий на виллах.',
    'hero.cta.plan': 'Спланировать мой отдых',
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
    'service4.title': 'Роскошный транспорт',
    'service4.subtitle': 'Автомобили премиум-класса, микроавтобусы Mercedes V Class с лицензией и водителем.',
    'service4.feature1': 'Mercedes V Class с профессиональным водителем.',
    'service4.feature2': 'Спортивные автомобили и роскошные внедорожники.',
    'service4.feature3': 'Встреча в аэропорту и трансферы.',
    
    // Service 5
    'service5.title': 'Безопасность и сопровождение',
    'service5.subtitle': 'Дискретная и профессиональная служба безопасности для вашего спокойствия.',
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
    
    // Footer
    'footer.tagline': 'Ибица по максимуму, без осложнений.',
    'footer.description': 'Приватный консьерж в Ибице. Уникальные впечатления, персонализированный сервис.',
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
    'faq.whatsapp': 'Напишите нам в WhatsApp'
  }
}

export const getTranslation = (key: string, language: Language): string => {
  return translations[language][key] || key
}
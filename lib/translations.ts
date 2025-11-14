export type Language = 'es' | 'en' | 'ru'

export interface Translation {
  [key: string]: string
}

export const translations: Record<Language, Translation> = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.howWeWork': 'Cómo trabajamos',
    'nav.about': 'Sobre nosotros',
    'nav.contact': 'Contacto',
    'nav.quickConsultation': 'Consulta rápida',
    
    // Hero
    'hero.title': 'Concierge privado en Ibiza',
    'hero.subtitle': 'Vacaciones a medida y experiencias VIP en Ibiza',
    'hero.description': 'Nos dedicamos a organizar vacaciones a medida: reservas de mesas VIP en clubs y restaurantes top, alquiler de villas, coches de lujo, furgonetas Mercedes V Class con licencia y conductor, acompañamientos de seguridad y organización de eventos privados en villas.',
    'hero.cta.plan': 'Planificar mi estancia',
    'hero.cta.whatsapp': 'WhatsApp',
    


    
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
    'service5.feature1': 'Seguridad personal y de grupo.',
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
    'process.step2.description': 'Villas, mesas VIP, transporte, seguridad y eventos en villa, todo integrado en un solo plan.',
    
    'process.step3.title': 'Confirmamos y coordinamos.',
    'process.step3.description': 'Cerramos reservas, coordinamos proveedores y estamos disponibles durante tu estancia para ajustes.',
    
    // About Section
    'about.title': 'Sobre First Class Sensations',
    'about.subtitle': 'Concierge independiente con trato directo y discreto.',
    'about.description': 'First Class Sensations nace con una idea clara: ayudarte a vivir Ibiza al máximo sin perder tiempo coordinando reservas, cambios y detalles de última hora.',
    'about.feature1': 'Trabajamos con un número limitado de clientes para mantener un servicio muy personal, rápido y flexible.',
    'about.location': 'Ibiza · Concierge Privado · Español, Inglés y Ruso.',
    'about.clients': 'Clientes: grupos de amigos, parejas, familias y empresas.',
    'about.style': 'Estilo: directo, cercano y discreto.',
    'about.philosophy': 'No buscamos volumen, sino relaciones de confianza y resultados perfectos en cada viaje.',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Cuéntanos tu idea y respondemos de forma personalizada. Puedes escribirnos por email, WhatsApp o usar el formulario. Siempre respondemos directamente, sin mensajes automáticos.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.hint': 'Indica fechas aproximadas, número de personas y qué servicios te interesan (villas, mesas VIP, V Class, seguridad, eventos en villa…).',
    
    // Form Fields
    'form.dates': 'Fechas Aproximadas',
    'form.dates.placeholder': 'Ej. del 10 al 15 de agosto.',
    'form.people': 'Personas',
    'form.people.placeholder': 'Número total y tipo de grupo.',
    'form.budget': 'Presupuesto',
    'form.budget.placeholder': 'Rango aproximado para ajustar propuestas.',
    'form.fullName': 'Nombre Completo *',
    'form.email': 'Email *',
    'form.phone': 'Teléfono / WhatsApp *',
    'form.services': 'Qué te gustaría incluir',
    'form.services.placeholder': 'Ej: villas, mesas VIP, V Class, seguridad, eventos en villa…',
    'form.submit': 'Enviar Solicitud',
    
    // Footer
    'footer.copyright': '© 2025 First Class Sensations. Todos los derechos reservados.',
    'footer.tagline': 'Concierge Privado en Ibiza.',
    
    // Meta
    'meta.description': 'Concierge privado en Ibiza. Vacaciones a medida y experiencias VIP: villas de lujo, mesas VIP, transporte de lujo, seguridad y eventos privados.',
    'meta.keywords': 'concierge ibiza, villas de lujo ibiza, mesas vip ibiza, transporte de lujo ibiza, seguridad ibiza, eventos privados ibiza',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Resolvemos las dudas más comunes sobre nuestros servicios de concierge en Ibiza.',
    'faq.moreQuestions': '¿Tienes más preguntas? Estamos aquí para ayudarte.',
    'faq.whatsapp': 'WhatsApp +34 600 887 755',
    
    'faq.q1': '¿Cuánto tiempo antes debo reservar?',
    'faq.a1': 'Recomendamos contactar al menos 2-3 semanas antes para villas y servicios VIP. Para época alta (julio-agosto) y fechas especiales, mejor 1-2 meses de antelación.',
    
    'faq.q2': '¿Trabajáis solo en Ibiza o también en Formentera?',
    'faq.a2': 'Principalmente en Ibiza, pero podemos coordinar servicios en Formentera: yates, transporte y experiencias. Todo con la misma calidad y discreción.',
    
    'faq.q3': '¿Qué incluye exactamente el servicio de concierge?',
    'faq.a3': 'Coordinación completa: villas, VIP, transporte, seguridad, reservas, proveedores y soporte 24/7 durante tu estancia. Un solo contacto para todo.',
    
    'faq.q4': '¿Cómo se realiza el pago?',
    'faq.a4': '50% para confirmar reservas, 50% antes de la llegada. Aceptamos transferencia bancaria y tarjeta. Todos los pagos son seguros y con factura.',
    
    'faq.q5': '¿Qué pasa si necesito cancelar?',
    'faq.a5': 'Política flexible: reembolso completo hasta 30 días antes. Entre 30-7 días: 50%. Menos de 7 días: gastos gestionados. Intentamos siempre encontrar soluciones.',
    
    'faq.q6': '¿Habláis español, inglés y ruso?',
    'faq.a6': 'Sí, atendemos en español, inglés y ruso. Comunicación directa sin intermediarios, lo que agiliza todo y evita malentendidos.',
    
    'faq.q7': '¿Podéis organizar eventos privados en villas?',
    'faq.a7': 'Sí, DJ privado, chef, barra de cócteles, personal de servicio, decoración y coordinación completa. Respeto absoluto a la privacidad del cliente.',
    
    'faq.q8': '¿Qué nivel de presupuesto manejáis?',
    'faq.a8': 'Trabajamos con diferentes rangos: desde experiencias selectas hasta ultra-lujo. Lo importante es la calidad y la experiencia, no solo el precio.'
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.quickConsultation': 'Quick Consultation',
    
    // Hero
    'hero.title': 'Private Concierge in Ibiza',
    'hero.subtitle': 'Tailor-made holidays and VIP experiences in Ibiza',
    'hero.description': 'We specialize in organizing tailor-made holidays: VIP table reservations in top clubs and restaurants, villa rentals, luxury cars, Mercedes V Class vans with license and driver, security escorts and organization of private events in villas.',
    'hero.cta.plan': 'Plan My Stay',
    'hero.cta.whatsapp': 'WhatsApp',
    
    // Quick Contact

    
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
    'about.clients': 'Clients: groups of friends, couples, families and companies.',
    'about.style': 'Style: direct, close and discreet.',
    'about.philosophy': 'We don\'t seek volume, but trust relationships and perfect results in every trip.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Tell us your idea and we will respond in a personalized way. You can write to us by email, WhatsApp or use the form. We always respond directly, without automatic messages.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.hint': 'Indicate approximate dates, number of people and what services interest you (villas, VIP tables, V Class, security, villa events…).',
    
    // Form Fields
    'form.dates': 'Approximate Dates',
    'form.dates.placeholder': 'Ex. from August 10 to 15.',
    'form.people': 'People',
    'form.people.placeholder': 'Total number and type of group.',
    'form.budget': 'Budget',
    'form.budget.placeholder': 'Approximate range to adjust proposals.',
    'form.fullName': 'Full Name *',
    'form.email': 'Email *',
    'form.phone': 'Phone / WhatsApp *',
    'form.services': 'What would you like to include',
    'form.services.placeholder': 'Ex: villas, VIP tables, V Class, security, villa events…',
    'form.submit': 'Send Request',
    
    // Footer
    'footer.copyright': '© 2025 First Class Sensations. All rights reserved.',
    'footer.tagline': 'Private Concierge in Ibiza.',
    
    // Meta
    'meta.description': 'Private Concierge in Ibiza. Tailor-made holidays and VIP experiences: luxury villas, VIP tables, luxury transport, security and private events.',
    'meta.keywords': 'concierge ibiza, luxury villas ibiza, vip tables ibiza, luxury transport ibiza, security ibiza, private events ibiza',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'We answer the most common questions about our concierge services in Ibiza.',
    'faq.moreQuestions': 'Have more questions? We are here to help you.',
    'faq.whatsapp': 'WhatsApp +34 600 887 755',
    
    'faq.q1': 'How far in advance should I book?',
    'faq.a1': 'We recommend contacting at least 2-3 weeks in advance for villas and VIP services. For high season (July-August) and special dates, better 1-2 months ahead.',
    
    'faq.q2': 'Do you work only in Ibiza or also in Formentera?',
    'faq.a2': 'Mainly in Ibiza, but we can coordinate services in Formentera: yachts, transport and experiences. All with the same quality and discretion.',
    
    'faq.q3': 'What exactly does the concierge service include?',
    'faq.a3': 'Complete coordination: villas, VIP, transport, security, reservations, suppliers and 24/7 support during your stay. One contact for everything.',
    
    'faq.q4': 'How is payment made?',
    'faq.a4': '50% to confirm reservations, 50% before arrival. We accept bank transfer and card. All payments are secure and with invoice.',
    
    'faq.q5': 'What if I need to cancel?',
    'faq.a5': 'Flexible policy: full refund up to 30 days before. Between 30-7 days: 50%. Less than 7 days: managed expenses. We always try to find solutions.',
    
    'faq.q6': 'Do you speak Spanish, English and Russian?',
    'faq.a6': 'Yes, we serve in Spanish, English and Russian. Direct communication without intermediaries, which speeds everything up and avoids misunderstandings.',
    
    'faq.q7': 'Can you organize private events at villas?',
    'faq.a7': 'Yes, private DJ, chef, cocktail bar, service staff, decoration and complete coordination. Absolute respect for client privacy.',
    
    'faq.q8': 'What budget level do you handle?',
    'faq.a8': 'We work with different ranges: from select experiences to ultra-luxury. What matters is quality and experience, not just price.'
  },
  ru: {
    // Header
    'nav.services': 'Услуги',
    'nav.howWeWork': 'Как мы работаем',
    'nav.about': 'О нас',
    'nav.contact': 'Контакт',
    'nav.quickConsultation': 'Быстрая консультация',
    
    // Hero
    'hero.title': 'Приватный консьерж в Ибице',
    'hero.subtitle': 'Индивидуальные каникулы и VIP-опыт в Ибице',
    'hero.description': 'Мы специализируемся на организации индивидуальных каникул: VIP-бронирование столов в лучших клубах и ресторанах, аренда вилл, роскошные автомобили, микроавтобусы Mercedes V Class с лицензией и водителем, охранные сопровождения и организация частных мероприятий на виллах.',
    'hero.cta.plan': 'Спланировать мой отдых',
    'hero.cta.whatsapp': 'WhatsApp',
    
    // Quick Contact

    
    // Services Section
    'services.title': 'Услуги',
    'services.subtitle': 'Понятные услуги, разработанные для того, чтобы всё было быстро и просто. Мы берём на себя всю логистику, чтобы вам осталось только наслаждаться Ибицей.',
    
    // Service 1
    'service1.title': 'Роскошные каникулы',
    'service1.subtitle': 'Мы создаём индивидуальный план согласно датам, типу группы и стилю путешествия.',
    'service1.feature1': 'Предложение ежедневного планирования (пляж, закат, ночь).',
    'service1.feature2': 'Рекомендации согласно вашему профилю и бюджету.',
    'service1.feature3': 'Корректировки во время пребывания через WhatsApp.',
    
    // Service 2
    'service2.title': 'VIP-бронирование столов',
    'service2.subtitle': 'VIP-столы в лучших клубах и ресторанах Ибицы, скоординированные с вашим планом.',
    'service2.feature1': 'Бронирования подтверждены до вашего прибытия.',
    'service2.feature2': 'Координация с транспортом и расписанием.',
    'service2.feature3': 'Приоритетный доступ и персонализированный сервис.',
    
    // Service 3
    'service3.title': 'Аренда вилл',
    'service3.subtitle': 'Подбор премиум-вилл со всеми удобствами и услугами.',
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
    'service6.feature2': 'Поддерживающий персонал и координация поставщиков.',
    'service6.feature3': 'Абсолютное уважение к конфиденциальности клиента.',
    
    // Process Section
    'process.title': 'Процесс',
    'process.subtitle': 'Три шага, чтобы полностью организовать Ибицу. Один контакт, один чат и мы координируем остальное.',
    
    'process.step1.title': 'Расскажите свою идею.',
    'process.step1.description': 'Приблизительные даты, количество людей, тип поездки (друзья, семья, компания) и уровень бюджета.',
    
    'process.step2.title': 'Мы отправляем вам предложения.',
    'process.step2.description': 'Виллы, VIP-столы, транспорт, безопасность и мероприятия на вилле, всё вписано в один план.',
    
    'process.step3.title': 'Мы подтверждаем и координируем.',
    'process.step3.description': 'Мы закрываем бронирования, координируем поставщиков и доступны во время вашего пребывания для корректировок.',
    
    // About Section
    'about.title': 'О First Class Sensations',
    'about.subtitle': 'Независимый консьерж с прямым и дискретным обращением.',
    'about.description': 'First Class Sensations рождается с чёткой идеей: помочь вам жить Ибицей на максимуме, не теряя время на координацию бронирований, изменений и деталей в последнюю минуту.',
    'about.feature1': 'Мы работаем с ограниченным количеством клиентов, чтобы поддерживать очень персональный, быстрый и гибкий сервис.',
    'about.location': 'Ибица · Приватный консьерж · Испанский, английский и русский.',
    'about.clients': 'Клиенты: группы друзей, пары, семьи и компании.',
    'about.style': 'Стиль: прямой, близкий и дискретный.',
    'about.philosophy': 'Мы не ищем объём, а доверительные отношения и идеальные результаты в каждой поездке.',
    
    // Contact Section
    'contact.title': 'Контакт',
    'contact.subtitle': 'Расскажите свою идею и мы ответим персонально. Вы можете написать нам по электронной почте, WhatsApp или использовать форму. Мы всегда отвечаем напрямую, без автоматических сообщений.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.hint': 'Укажите приблизительные даты, количество людей и какие услуги вас интересуют (виллы, VIP-столы, V Class, безопасность, мероприятия на вилле…).',
    
    // Form Fields
    'form.dates': 'Приблизительные даты',
    'form.dates.placeholder': 'Напр: с 10 по 15 августа.',
    'form.people': 'Люди',
    'form.people.placeholder': 'Общее количество и тип группы.',
    'form.budget': 'Бюджет',
    'form.budget.placeholder': 'Приблизительный диапазон для подбора предложений.',
    'form.fullName': 'Полное имя *',
    'form.email': 'Email *',
    'form.phone': 'Телефон / WhatsApp *',
    'form.services': 'Что бы вы хотели включить',
    'form.services.placeholder': 'Напр: виллы, VIP-столы, V Class, безопасность, мероприятия на вилле…',
    'form.submit': 'Отправить запрос',
    
    // Footer
    'footer.copyright': '© 2025 First Class Sensations. Все права защищены.',
    'footer.tagline': 'Приватный консьерж в Ибице.',
    
    // Meta
    'meta.description': 'Приватный консьерж в Ибице. Индивидуальные каникулы и VIP-опыт: роскошные виллы, VIP-столы, роскошный транспорт, безопасность и частные мероприятия.',
    'meta.keywords': 'консьерж ибица, роскошные виллы ибица, VIP столы ибица, роскошный транспорт ибица, безопасность ибица, частные мероприятия ибица',
    
    // FAQ Section
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Мы отвечаем на самые распространенные вопросы о наших услугах консьержа в Ибице.',
    'faq.moreQuestions': 'Есть ещё вопросы? Мы здесь, чтобы помочь вам.',
    'faq.whatsapp': 'WhatsApp +34 600 887 755',
    
    'faq.q1': 'За сколько времени нужно бронировать?',
    'faq.a1': 'Рекомендуем связаться минимум за 2-3 недели для вилл и VIP-услуг. Для высокого сезона (июль-август) и специальных дат лучше за 1-2 месяца.',
    
    'faq.q2': 'Вы работаете только в Ибице или также в Форментере?',
    'faq.a2': 'В основном в Ибице, но можем координировать услуги в Форментере: яхты, транспорт и впечатления. Всё с тем же качеством и дискретностью.',
    
    'faq.q3': 'Что именно включает услуга консьержа?',
    'faq.a3': 'Полная координация: виллы, VIP, транспорт, безопасность, бронирования, поставщики и поддержка 24/7 во время вашего пребывания. Один контакт для всего.',
    
    'faq.q4': 'Как осуществляется оплата?',
    'faq.a4': '50% для подтверждения бронирований, 50% до прибытия. Принимаем банковский перевод и карту. Все платежи безопасны и с выставлением счета.',
    
    'faq.q5': 'Что, если мне нужно отменить?',
    'faq.a5': 'Гибкая политика: полный возврат до 30 дней. Между 30-7 днями: 50%. Менее 7 дней: управляемые расходы. Мы всегда стараемся найти решения.',
    
    'faq.q6': 'Вы говорите по-испански, по-английски и по-русски?',
    'faq.a6': 'Да, мы обслуживаем на испанском, английском и русском. Прямое общение без посредников, что ускоряет всё и избегает недоразумений.',
    
    'faq.q7': 'Можете ли вы организовать частные мероприятия на виллах?',
    'faq.a7': 'Да, частный DJ, шеф-повар, бар, обслуживающий персонал, декорации и полная координация. Абсолютное уважение к конфиденциальности клиента.',
    
    'faq.q8': 'Какой уровень бюджета вы обслуживаете?',
    'faq.a8': 'Мы работаем с разными диапазонами: от избранных впечатлений до ультра-роскоши. Важно качество и опыт, а не только цена.'
  }
}

export const getTranslation = (key: string, language: Language): string => {
  return translations[language][key] || translations.es[key] || key
}
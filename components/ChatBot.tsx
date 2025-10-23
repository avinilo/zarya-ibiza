'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Phone, FileText } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Bot responses database - Ampliada y mejorada
  const botResponses = React.useMemo(() => ({
    greeting: [
      "¡Hola! 👋 Soy el asistente virtual de Mantexia. Con más de 15 técnicos especializados, estamos aquí para ayudarte. ¿En qué puedo asistirte hoy?",
      "¡Bienvenido a Mantexia! 🏢 Somos especialistas en mano de obra técnica, mantenimiento integral y gestión documental. ¿Qué necesitas saber?",
      "¡Hola! 🔧 Soy tu asistente en Mantexia. Trabajamos con proyectos como Nou Mestalla y Roig Arena. ¿Cómo puedo ayudarte con tu proyecto?"
    ],
    services: [
      "🏢 **Servicios Mantexia - Soluciones Profesionales:**\n\n🔧 **Mano de Obra Especializada** (Servicio #1)\n• 15+ técnicos electricistas certificados\n• Cobertura: Valencia, Alicante, Castellón\n• Casos: Nou Mestalla, hospitales, obras industriales\n\n🏭 **Gestora de Mantenimientos**\n• Mantenimiento 24/7 preventivo y correctivo\n• Roig Arena, hoteles, centros comerciales\n• Certificaciones y cumplimiento normativo\n\n📋 **Gestión Documental**\n• Exclusivo para empresas hasta 15 trabajadores\n• Gestión administrativa completa\n• Digitalización y organización\n\n¿Qué servicio te interesa más? 💼",
      "Nuestros **tres pilares de servicio** están diseñados para diferentes necesidades:\n\n🎯 **¿Necesitas personal técnico?** → Mano de Obra (15+ especialistas)\n🎯 **¿Mantenimiento de instalaciones?** → Gestora 24/7\n🎯 **¿Gestión administrativa?** → Documental (máx. 15 trabajadores)\n\n**Cobertura:** Valencia • Alicante • Castellón\n**Referencias:** Nou Mestalla, Roig Arena, hospitales\n\n¿Cuál se adapta mejor a tu proyecto?"
    ],
    prices: [
      "💰 **Información de Precios y Presupuestos:**\n\n**Mano de Obra Especializada:**\n• Desde 25€/hora técnico electricista\n• Proyectos grandes: tarifas especiales\n• Desplazamientos incluidos en Valencia\n\n**Gestora de Mantenimientos:**\n• Contratos anuales desde 150€/mes\n• Emergencias 24/7: 80€ + materiales\n• Mantenimiento preventivo: consultar\n\n**Gestión Documental:**\n• Desde 120€/mes (hasta 5 trabajadores)\n• Hasta 15 trabajadores: 280€/mes\n\n📞 **Presupuesto personalizado: +34 663 423 034**\n*Precios orientativos, consulta condiciones específicas*",
      "🎯 **Tarifas Competitivas - Calidad Garantizada:**\n\n**¿Proyecto puntual?** Mano de obra desde 25€/h\n**¿Mantenimiento continuo?** Contratos desde 150€/mes\n**¿Gestión administrativa?** Desde 120€/mes\n\n**Ventajas incluidas:**\n✅ Sin costes de desplazamiento (Valencia)\n✅ Certificaciones PRL incluidas\n✅ Garantía en todos los trabajos\n✅ Respuesta 24/7 para emergencias\n\n📱 **Llama para tu presupuesto exacto: +34 663 423 034**"
    ],
    urgency: [
      "🚨 **Servicio de Emergencias 24/7:**\n\n**Disponibilidad inmediata:**\n• Técnicos de guardia las 24 horas\n• Respuesta en menos de 2 horas\n• Cobertura: Valencia, Alicante, Castellón\n\n**Tipos de emergencias que atendemos:**\n⚡ Fallos eléctricos críticos\n🔧 Averías de equipos industriales\n🏥 Hospitales y centros sanitarios\n🏢 Edificios comerciales y oficinas\n\n**Tarifa emergencia:** 80€ + materiales\n\n📞 **Llama AHORA: +34 663 423 034**\n*Técnico especializado en camino*",
      "⏰ **¿Necesitas ayuda URGENTE?**\n\nNuestro equipo de 15+ técnicos está preparado para emergencias:\n\n🎯 **Respuesta garantizada en 2 horas**\n🎯 **Técnicos certificados disponibles 24/7**\n🎯 **Experiencia en hospitales y grandes proyectos**\n\n**Casos de emergencia recientes:**\n• Hospital privado Valencia - Fallo eléctrico nocturno\n• Centro comercial - Avería climatización fin de semana\n• Fábrica Castellón - Parada de producción\n\n📱 **EMERGENCIAS: +34 663 423 034**"
    ],
    certifications: [
      "🏅 **Certificaciones PRL y Garantías:**\n\n**Nuestras Certificaciones:**\n✅ Prevención de Riesgos Laborales (PRL) - Todos los técnicos\n✅ Certificados de instalaciones eléctricas\n✅ Habilitaciones para trabajos en altura\n✅ Formación en espacios confinados\n✅ Certificación en equipos de protección\n\n**Garantías que ofrecemos:**\n🛡️ Seguro de responsabilidad civil\n🛡️ Garantía de trabajos realizados\n🛡️ Cumplimiento normativo 100%\n🛡️ Certificados oficiales post-trabajo\n\n**Experiencia verificada:**\n• 200+ trabajadores gestionados (hospitales)\n• Proyectos de gran envergadura (Nou Mestalla)\n• Cumplimiento estricto normativas\n\n📞 **Consulta certificaciones: +34 663 423 034**",
      "🔒 **Seguridad y Certificaciones - Nuestro Compromiso:**\n\n**¿Por qué elegir Mantexia?**\n• 15+ técnicos con PRL actualizada\n• Experiencia en hospitales (normativas estrictas)\n• Casos de éxito: Nou Mestalla, Roig Arena\n• Gestión PRL para empresas hasta 200 trabajadores\n\n**Documentación que proporcionamos:**\n📋 Certificados de instalación\n📋 Informes de seguridad\n📋 Documentación PRL completa\n📋 Garantías por escrito\n\n**Sectores especializados:**\n🏥 Sanitario • 🏢 Comercial • 🏭 Industrial • ⚽ Deportivo\n\n¿Necesitas certificación específica? ¡Consúltanos!"
    ],
    coverage: [
      "🗺️ **Cobertura Geográfica Completa:**\n\n**Provincias que cubrimos:**\n📍 **Valencia** - Sede principal (Alcàsser)\n📍 **Alicante** - Cobertura completa\n📍 **Castellón** - Servicio integral\n\n**Ciudades principales:**\n• Valencia capital y área metropolitana\n• Alicante, Elche, Torrevieja\n• Castellón, Vila-real, Burriana\n• Sagunto, Xàtiva, Gandia\n• Alcoy, Denia, Benidorm\n\n**Ventajas por zonas:**\n✅ Sin coste desplazamiento en Valencia\n✅ Técnicos locales en cada provincia\n✅ Conocimiento de normativas locales\n✅ Respuesta rápida en toda la Comunidad\n\n**Casos por zona:**\n• Valencia: Nou Mestalla, hospitales\n• Alicante: Hoteles costa, industria\n• Castellón: Fábricas, polígonos industriales\n\n📞 **Consulta cobertura: +34 663 423 034**"
    ],
    experience: [
      "🏆 **Experiencia y Referencias Verificables:**\n\n**Proyectos Destacados:**\n⚽ **Nou Mestalla** - Valencia CF\n• 15+ técnicos desplegados simultáneamente\n• Instalaciones eléctricas de alta complejidad\n• Cumplimiento de plazos estrictos\n\n🏀 **Roig Arena** - Pabellón Deportivo\n• Mantenimiento integral 24/7\n• Sistemas de climatización y eléctricos\n• Eventos deportivos sin interrupciones\n\n🏥 **Hospitales Privados Valencia**\n• Gestión PRL para 200+ trabajadores\n• Mantenimiento crítico sin paradas\n• Certificaciones sanitarias específicas\n\n🏨 **Hoteles Costa Valenciana**\n• Mantenimiento preventivo temporada alta\n• Respuesta inmediata huéspedes\n• Sistemas de climatización y piscinas\n\n**Sectores de experiencia:**\n• Sanitario • Deportivo • Hotelero • Industrial • Comercial\n\n📞 **Referencias disponibles: +34 663 423 034**",
      "💼 **Casos de Éxito - Más de una Década de Experiencia:**\n\n**¿Por qué nos eligen grandes proyectos?**\n🎯 Equipo de 15+ técnicos especializados\n🎯 Experiencia en proyectos de gran envergadura\n🎯 Respuesta 24/7 garantizada\n🎯 Certificaciones y cumplimiento normativo\n\n**Testimonios de clientes:**\n• \"Mantexia gestionó perfectamente el Nou Mestalla\"\n• \"Roig Arena funciona sin problemas gracias a su mantenimiento\"\n• \"Nuestro hospital confía en su profesionalidad\"\n\n**Números que nos avalan:**\n📊 200+ trabajadores gestionados (PRL)\n📊 15+ técnicos certificados\n📊 24/7 disponibilidad\n📊 3 provincias de cobertura\n\n¿Quieres ser nuestro próximo caso de éxito?"
    ],
    contact: [
      "📞 **¡Perfecto! Contacta con Nuestro Equipo:**\n\n**Información de Contacto:**\n📱 **Teléfono: +34 663 423 034**\n📧 **Email: mantexia@mantexia.com**\n📍 **Oficina: Av. Angelino Soler, 2, bajo 3**\n    **46290 Alcàsser, Valencia**\n\n**Horarios de Atención:**\n🕐 Lunes a Viernes: 08:00 - 18:00\n🕐 Sábados: 09:00 - 14:00\n🚨 Emergencias: 24/7 disponible\n\n**¿Qué necesitas?**\n• Presupuesto personalizado gratuito\n• Consulta técnica especializada\n• Planificación de proyecto\n• Servicio de emergencia\n\n**Respuesta garantizada en menos de 2 horas** ⏰\n\n¡Nuestro equipo de 15+ técnicos está listo para ayudarte! 💪",
      "🎯 **¡Excelente Decisión! Te Esperamos:**\n\n**Contacto Directo:**\n📞 **+34 663 423 034** (Respuesta inmediata)\n📧 **mantexia@mantexia.com**\n\n**¿Qué puedes esperar?**\n✅ Presupuesto detallado en 24h\n✅ Visita técnica gratuita\n✅ Propuesta adaptada a tu proyecto\n✅ Garantías por escrito\n\n**Información que nos ayuda:**\n• Tipo de proyecto o servicio\n• Ubicación (Valencia, Alicante, Castellón)\n• Urgencia o plazos\n• Presupuesto orientativo\n\n**Casos similares al tuyo:**\n• Nou Mestalla, Roig Arena, hospitales\n• Hoteles, fábricas, centros comerciales\n\n📱 **¡Llama ahora y hablemos de tu proyecto!**"
    ],
    maintenance: [
      "🔧 **Gestora de Mantenimientos - Servicio Integral:**\n\n**Tipos de Mantenimiento:**\n🛠️ **Preventivo** - Planificado y sistemático\n🚨 **Correctivo** - Reparaciones inmediatas\n⚡ **Emergencias** - Respuesta 24/7\n🔍 **Predictivo** - Análisis y prevención\n\n**Sectores Especializados:**\n🏀 Instalaciones deportivas (Roig Arena)\n🏥 Centros sanitarios y hospitales\n🏨 Hoteles y establecimientos turísticos\n🏢 Edificios comerciales y oficinas\n🏭 Naves industriales y fábricas\n\n**Servicios Incluidos:**\n✅ Mantenimiento eléctrico y electromecánico\n✅ Climatización y ventilación\n✅ Sistemas de seguridad\n✅ Certificaciones y documentación\n✅ Gestión de averías 24/7\n\n**Tarifas:**\n• Contratos anuales desde 150€/mes\n• Emergencias: 80€ + materiales\n• Mantenimiento preventivo: consultar\n\n📞 **Consulta tu caso: +34 663 423 034**",
      "🏭 **Mantenimiento Profesional - Casos de Éxito:**\n\n**¿Por qué Mantexia para tu mantenimiento?**\n• 15+ técnicos especializados disponibles\n• Experiencia en Roig Arena (sin interrupciones)\n• Mantenimiento hospitalario (normativas estrictas)\n• Respuesta 24/7 garantizada\n\n**Metodología de trabajo:**\n📋 Auditoría inicial gratuita\n📋 Plan de mantenimiento personalizado\n📋 Calendario de revisiones\n📋 Informes mensuales detallados\n📋 Certificaciones oficiales\n\n**Ventajas competitivas:**\n🎯 Sin paradas no programadas\n🎯 Reducción de costes a largo plazo\n🎯 Cumplimiento normativo garantizado\n🎯 Técnicos certificados PRL\n\n**Sectores de confianza:**\n• Deportivo • Sanitario • Hotelero • Industrial\n\n¿Necesitas un mantenimiento sin sorpresas?"
    ],
    workforce: [
      "👷 **Mano de Obra Especializada - Nuestro Servicio #1:**\n\n**Nuestro Equipo:**\n🔧 15+ técnicos electricistas certificados\n🔧 Especialistas electromecánicos\n🔧 Técnicos en automatización industrial\n🔧 Instaladores de sistemas de seguridad\n\n**Especializaciones:**\n⚡ Instalaciones eléctricas industriales\n⚡ Cuadros eléctricos y automatismos\n⚡ Sistemas de climatización\n⚡ Mantenimiento preventivo y correctivo\n⚡ Certificaciones y legalizaciones\n\n**Casos de Referencia:**\n🏟️ **Nou Mestalla** - 15+ técnicos desplegados\n🏥 **Hospitales Privados** - Instalaciones críticas\n🏭 **Industrias Castellón** - Automatización\n🏢 **Centros Comerciales** - Mantenimiento integral\n\n**Tarifas:**\n• Desde 25€/hora técnico especializado\n• Proyectos grandes: tarifas especiales\n• Sin coste desplazamiento Valencia\n\n**Cobertura:** Valencia • Alicante • Castellón\n\n📞 **Solicita tu equipo: +34 663 423 034**",
      "🎯 **Personal Técnico de Élite - Subcontratación Profesional:**\n\n**¿Para quién trabajamos?**\n• Instaladores eléctricos (subcontratación)\n• Empresas de obras y construcción\n• Fábricas e industrias\n• Hospitales y centros sanitarios\n\n**Ventajas de nuestro personal:**\n✅ Certificaciones PRL actualizadas\n✅ Experiencia en grandes proyectos\n✅ Disponibilidad inmediata\n✅ Herramientas y equipos incluidos\n✅ Seguro de responsabilidad civil\n\n**Casos donde destacamos:**\n• Nou Mestalla: Coordinación de 15+ técnicos\n• Hospitales: Cumplimiento normativas estrictas\n• Industria: Automatización y control\n• Comercial: Instalaciones complejas\n\n**Proceso de contratación:**\n📞 Llamada → 📋 Evaluación → 👷 Despliegue\n\n**Respuesta en menos de 24 horas**\n\n¿Necesitas reforzar tu equipo técnico?"
    ],
    documents: [
      "📋 **Gestión Documental - Especialistas en Pequeñas Empresas:**\n\n**Servicio Exclusivo:**\n🎯 **Límite máximo: 15 trabajadores**\n🎯 **Ideal para autónomos y PYMES**\n🎯 **Gestión administrativa externa completa**\n\n**Servicios Incluidos:**\n📄 Gestión de nóminas y seguros sociales\n📄 Trámites con administraciones públicas\n📄 Certificados PRL y formación\n📄 Gestión de contratos laborales\n📄 Digitalización de documentos\n📄 Organización de archivo empresarial\n\n**Sectores Especializados:**\n• Instaladores eléctricos autónomos\n• Pequeñas empresas de mantenimiento\n• Talleres y servicios técnicos\n• Comercios y oficinas pequeñas\n\n**Tarifas Competitivas:**\n• Hasta 5 trabajadores: desde 120€/mes\n• De 6 a 10 trabajadores: desde 200€/mes\n• De 11 a 15 trabajadores: 280€/mes\n\n**Ventajas:**\n✅ Liberación total de gestión administrativa\n✅ Cumplimiento normativo garantizado\n✅ Ahorro en personal administrativo\n✅ Digitalización y modernización\n\n📞 **¿Tu empresa tiene menos de 15 trabajadores? ¡Llámanos! +34 663 423 034**",
      "💼 **Gestión Administrativa Externa - Tu Socio de Confianza:**\n\n**¿Por qué externalizar tu gestión?**\n• Ahorro de costes (vs. administrativo interno)\n• Especialización y conocimiento actualizado\n• Liberación de tiempo para tu negocio\n• Cumplimiento normativo garantizado\n\n**Proceso de trabajo:**\n📊 Análisis inicial de necesidades\n📊 Digitalización de documentos existentes\n📊 Implementación de sistemas\n📊 Gestión mensual completa\n📊 Informes y seguimiento\n\n**Casos de éxito:**\n• Instalador eléctrico (8 trabajadores) - Ahorro 40% costes\n• Taller mecánico (12 trabajadores) - Digitalización completa\n• Empresa mantenimiento (15 trabajadores) - Cumplimiento PRL\n\n**Incluye:**\n🎯 Gestión completa de personal\n🎯 Trámites administrativos\n🎯 Certificaciones técnicas\n🎯 Soporte telefónico\n\n**¿Tu empresa necesita liberarse de la gestión administrativa?**"
    ],
    location: [
      "📍 **Ubicación y Cobertura - Cerca de Ti:**\n\n**Sede Principal:**\n🏢 **Av. Angelino Soler, 2, bajo 3**\n🏢 **46290 Alcàsser, Valencia**\n🏢 **Zona: Área metropolitana Valencia**\n\n**Cobertura Completa:**\n🗺️ **Valencia** - Cobertura total (sede)\n🗺️ **Alicante** - Técnicos desplazados\n🗺️ **Castellón** - Servicio integral\n\n**Ciudades Principales:**\n• Valencia, Sagunto, Xàtiva, Gandia\n• Alicante, Elche, Torrevieja, Benidorm\n• Castellón, Vila-real, Burriana, Vinaròs\n\n**Horarios de Oficina:**\n🕐 **Lunes a Viernes:** 08:00 - 18:00\n🕐 **Sábados:** 09:00 - 14:00\n🚨 **Emergencias:** 24/7 disponible\n\n**Ventajas por ubicación:**\n✅ Sin coste desplazamiento en Valencia\n✅ Respuesta rápida (menos de 2h)\n✅ Conocimiento del territorio\n✅ Técnicos locales en cada zona\n\n**Transporte y logística:**\n• Vehículos equipados con herramientas\n• Material de repuesto disponible\n• Rutas optimizadas por provincias\n\n📞 **¿Estamos cerca de tu proyecto? +34 663 423 034**"
    ],
    projects: [
      "🏆 **Casos de Éxito - Portfolio de Referencias:**\n\n⚽ **Nou Mestalla - Valencia CF**\n• Proyecto: Instalaciones eléctricas estadio\n• Equipo: 15+ técnicos especializados\n• Duración: Proyecto de gran envergadura\n• Resultado: Cumplimiento plazos y calidad\n\n🏀 **Roig Arena - Pabellón Deportivo**\n• Servicio: Mantenimiento integral 24/7\n• Sistemas: Climatización, eléctrico, seguridad\n• Eventos: Sin interrupciones durante competiciones\n• Resultado: Funcionamiento perfecto continuo\n\n🏥 **Hospitales Privados Valencia**\n• Gestión: PRL para 200+ trabajadores\n• Mantenimiento: Sistemas críticos sin paradas\n• Certificaciones: Normativas sanitarias estrictas\n• Resultado: Cumplimiento 100% normativo\n\n🏨 **Hoteles Costa Valenciana**\n• Temporada alta: Mantenimiento preventivo\n• Servicios: Climatización, piscinas, eléctrico\n• Respuesta: Inmediata para huéspedes\n• Resultado: Satisfacción cliente garantizada\n\n🏭 **Industrias Castellón**\n• Automatización: Sistemas de control\n• Mantenimiento: Preventivo y correctivo\n• Certificaciones: PRL industrial\n• Resultado: Optimización producción\n\n📞 **¿Quieres ser nuestro próximo caso de éxito? +34 663 423 034**"
    ],
    followup: [
      "🤔 **¿Necesitas más información específica?**\n\nPuedo ayudarte con:\n• Detalles técnicos de servicios\n• Presupuestos orientativos\n• Casos similares a tu proyecto\n• Disponibilidad de técnicos\n• Certificaciones específicas\n\n¿Qué te gustaría saber exactamente?",
      "💡 **¿Te puedo ayudar con algo más concreto?**\n\nTemas que puedo resolver:\n🔧 Especificaciones técnicas\n💰 Información de precios\n📅 Disponibilidad y plazos\n🏆 Referencias de proyectos similares\n📋 Certificaciones y garantías\n\n¿Hay algo específico que te preocupe de tu proyecto?"
    ],
    default: [
      "Entiendo tu consulta. Para darte la mejor respuesta personalizada sobre nuestros servicios (mano de obra, mantenimiento o gestión documental), te recomiendo que nos llames al **+34 663 423 034** 📞\n\nNuestro equipo de 15+ técnicos especializados podrá ayudarte con cualquier duda específica. ¿Hay algo concreto que te gustaría saber mientras tanto?",
      "¡Gracias por tu interés en Mantexia! 🏢\n\nCon experiencia en proyectos como Nou Mestalla y Roig Arena, estamos preparados para ayudarte con:\n🔧 Mano de obra especializada\n🏭 Mantenimiento integral\n📋 Gestión documental\n\n📞 **+34 663 423 034** | 📧 **mantexia@mantexia.com**\n\n¿Te gustaría que profundice en algún servicio específico?",
      "Perfecto, estoy aquí para resolver tus dudas sobre Mantexia. 💼\n\nCon 15+ técnicos certificados y cobertura en Valencia, Alicante y Castellón, podemos ayudarte con cualquier proyecto técnico.\n\n¿Prefieres que hablemos de:\n• Servicios específicos y precios\n• Casos de éxito similares al tuyo\n• Disponibilidad y plazos\n• Certificaciones y garantías\n\nO si lo prefieres, **llama directamente: +34 663 423 034** 📱"
    ]
  }), [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getRandomResponse = React.useCallback((category: keyof typeof botResponses): string => {
    const responses = botResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }, [botResponses])

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getRandomResponse('greeting'))
      }, 500)
    }
  }, [isOpen, messages.length, getRandomResponse])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle viewport changes for mobile keyboard
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && inputRef.current) {
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const analyzeMessage = (text: string): keyof typeof botResponses => {
    const lowerText = text.toLowerCase()
    
    // Saludos y presentaciones
    if (lowerText.includes('hola') || lowerText.includes('buenos') || lowerText.includes('buenas') || 
        lowerText.includes('saludos') || lowerText.includes('hey')) {
      return 'greeting'
    }
    
    // Precios y presupuestos (alta prioridad)
    if (lowerText.includes('precio') || lowerText.includes('presupuesto') || lowerText.includes('coste') || 
        lowerText.includes('cuesta') || lowerText.includes('tarifa') || lowerText.includes('€') ||
        lowerText.includes('euro') || lowerText.includes('dinero') || lowerText.includes('pagar') ||
        lowerText.includes('factura') || lowerText.includes('cobrar')) {
      return 'prices'
    }
    
    // Urgencias y emergencias
    if (lowerText.includes('urgente') || lowerText.includes('emergencia') || lowerText.includes('rápido') ||
        lowerText.includes('inmediato') || lowerText.includes('ya') || lowerText.includes('ahora') ||
        lowerText.includes('24/7') || lowerText.includes('24 horas') || lowerText.includes('avería') ||
        lowerText.includes('fallo') || lowerText.includes('parado') || lowerText.includes('no funciona')) {
      return 'urgency'
    }
    
    // Certificaciones PRL y garantías
    if (lowerText.includes('certificacion') || lowerText.includes('certificado') || lowerText.includes('prl') ||
        lowerText.includes('prevención') || lowerText.includes('riesgos') || lowerText.includes('seguridad') ||
        lowerText.includes('garantía') || lowerText.includes('garantia') || lowerText.includes('seguro') ||
        lowerText.includes('normativa') || lowerText.includes('legal')) {
      return 'certifications'
    }
    
    // Cobertura geográfica
    if (lowerText.includes('valencia') || lowerText.includes('alicante') || lowerText.includes('castellón') ||
        lowerText.includes('castellon') || lowerText.includes('donde') || lowerText.includes('ubicación') ||
        lowerText.includes('ubicacion') || lowerText.includes('zona') || lowerText.includes('cobertura') ||
        lowerText.includes('desplazamiento') || lowerText.includes('vienen') || lowerText.includes('cerca')) {
      return 'coverage'
    }
    
    // Experiencia y referencias
    if (lowerText.includes('experiencia') || lowerText.includes('referencia') || lowerText.includes('caso') ||
        lowerText.includes('proyecto') || lowerText.includes('nou mestalla') || lowerText.includes('roig arena') ||
        lowerText.includes('hospital') || lowerText.includes('hotel') || lowerText.includes('cliente') ||
        lowerText.includes('trabajo') || lowerText.includes('han hecho')) {
      return 'experience'
    }
    
    // Servicios generales
    if (lowerText.includes('servicio') || lowerText.includes('qué hacen') || lowerText.includes('que hacen') ||
        lowerText.includes('ofrecen') || lowerText.includes('especialidad') || lowerText.includes('actividad')) {
      return 'services'
    }
    
    // Mantenimiento específico
    if (lowerText.includes('mantenimiento') || lowerText.includes('reparar') || lowerText.includes('gestora') ||
        lowerText.includes('preventivo') || lowerText.includes('correctivo') || lowerText.includes('revisar') ||
        lowerText.includes('climatización') || lowerText.includes('aire acondicionado')) {
      return 'maintenance'
    }
    
    // Mano de obra
    if (lowerText.includes('mano de obra') || lowerText.includes('personal') || lowerText.includes('trabajador') ||
        lowerText.includes('técnico') || lowerText.includes('tecnico') || lowerText.includes('electricista') ||
        lowerText.includes('instalador') || lowerText.includes('equipo') || lowerText.includes('subcontrata')) {
      return 'workforce'
    }
    
    // Gestión documental
    if (lowerText.includes('document') || lowerText.includes('papel') || lowerText.includes('archivo') ||
        lowerText.includes('gestión') || lowerText.includes('gestion') || lowerText.includes('administrativa') ||
        lowerText.includes('nómina') || lowerText.includes('nomina') || lowerText.includes('contrato') ||
        lowerText.includes('autónomo') || lowerText.includes('autonomo') || lowerText.includes('pyme')) {
      return 'documents'
    }
    
    // Ubicación y contacto
    if (lowerText.includes('ubicación') || lowerText.includes('ubicacion') || lowerText.includes('dirección') ||
        lowerText.includes('direccion') || lowerText.includes('oficina') || lowerText.includes('horario')) {
      return 'location'
    }
    
    // Contacto directo
    if (lowerText.includes('llamar') || lowerText.includes('contacto') || lowerText.includes('teléfono') ||
        lowerText.includes('telefono') || lowerText.includes('email') || lowerText.includes('correo') ||
        lowerText.includes('hablar') || lowerText.includes('consulta')) {
      return 'contact'
    }
    
    // Casos específicos de proyectos
    if (lowerText.includes('nou mestalla') || lowerText.includes('roig arena') || lowerText.includes('valencia cf') ||
        lowerText.includes('estadio') || lowerText.includes('pabellón') || lowerText.includes('pabellon')) {
      return 'projects'
    }
    
    return 'default'
  }

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addUserMessage(userMessage)
    setInputText('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const responseCategory = analyzeMessage(userMessage)
      let botResponse = getRandomResponse(responseCategory)
      
      // Añadir contexto conversacional y seguimiento
      if (responseCategory === 'services' || responseCategory === 'default') {
        // Añadir pregunta de seguimiento para servicios generales
        botResponse += "\n\n" + getRandomResponse('followup')
      } else if (responseCategory === 'prices') {
        // Para precios, sugerir contacto directo
        botResponse += "\n\n💡 **¿Te interesa algún servicio específico?** Puedo darte más detalles técnicos o conectarte directamente con nuestro equipo."
      } else if (responseCategory === 'workforce' || responseCategory === 'maintenance' || responseCategory === 'documents') {
        // Para servicios específicos, ofrecer información adicional
        botResponse += "\n\n🔍 **¿Quieres saber más sobre:**\n• Casos similares a tu proyecto\n• Disponibilidad y plazos\n• Proceso de trabajo específico"
      }
      
      addBotMessage(botResponse)
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    // Focus input after animation completes
    setTimeout(() => {
      inputRef.current?.focus()
    }, 300)
  }

  const closeChat = () => {
    setIsOpen(false)
    // Clear focus to hide mobile keyboard
    inputRef.current?.blur()
  }

  const formatMessage = (text: string) => {
    // Convert markdown-like formatting to JSX
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('**') ? (
          <span dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        ) : (
          line
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <>
      {/* Chat Bubble - Optimizado para PC y móvil */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 w-16 h-16 md:w-[70px] md:h-[70px] bg-mantexia-primary hover:bg-mantexia-secondary text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-[998] animate-bounce-in group"
          aria-label="Abrir chat de ayuda"
        >
          <MessageCircle className="w-8 h-8 md:w-9 md:h-9 mx-auto transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window - Responsive: Full-screen en móvil, flotante en PC */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-[400px] md:h-[600px] bg-white z-[998] flex flex-col animate-slide-up md:rounded-2xl md:shadow-2xl md:border md:border-gray-200 overflow-hidden">
          {/* Header con colores corporativos */}
          <div className="bg-mantexia-primary text-white p-4 flex items-center justify-between shadow-lg md:rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Asistente Mantexia</h3>
                <p className="text-mantexia-light text-sm opacity-90">En línea • Respuesta inmediata</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Cerrar chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Container con scrollbar personalizada */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-mantexia-primary scrollbar-track-gray-200"
            style={{ height: 'calc(100dvh - 140px)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                    message.isBot
                      ? 'bg-mantexia-light text-mantexia-secondary rounded-bl-md border border-mantexia-light'
                      : 'bg-mantexia-secondary text-white rounded-br-md hover:bg-opacity-90'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {formatMessage(message.text)}
                  </div>
                  <div className={`text-xs mt-1 ${message.isBot ? 'text-mantexia-secondary/70' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString('es-ES', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator mejorado */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-mantexia-light p-3 rounded-2xl rounded-bl-md shadow-sm border border-mantexia-light">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-mantexia-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-mantexia-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-mantexia-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area con colores corporativos */}
          <div className="p-4 bg-white border-t border-gray-200 md:rounded-b-2xl">
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-all duration-200"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="w-12 h-12 bg-mantexia-primary hover:bg-mantexia-secondary disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                aria-label="Enviar mensaje"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados para scrollbar */}
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-mantexia-primary::-webkit-scrollbar-thumb {
          background-color: #ED0B63;
          border-radius: 9999px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #E5E7EB;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </>
  )
}

export default ChatBot
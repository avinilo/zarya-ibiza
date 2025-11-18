import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Validación de datos de entrada
function validateContactData(data: any) {
  const errors: string[] = []
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Nombre debe tener al menos 2 caracteres')
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email inválido')
  }
  
  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length < 6) {
    errors.push('Teléfono debe tener al menos 6 caracteres')
  }
  
  if (!data.service || typeof data.service !== 'string') {
    errors.push('Servicio es requerido')
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Mensaje debe tener al menos 10 caracteres')
  }
  
  return errors
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar datos
    const validationErrors = validateContactData(body)
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validationErrors },
        { status: 400 }
      )
    }
    
    const { name, email, phone, service, message, preferredLanguage = 'es' } = body
    
    // Configurar mensaje según idioma preferido
    const subjectOptions = {
      es: `Nueva consulta de ${name} - ${service}`,
      en: `New inquiry from ${name} - ${service}`,
      ru: `Новый запрос от ${name} - ${service}`,
    } as const
    
    const subject = subjectOptions[preferredLanguage as keyof typeof subjectOptions] || `Nueva consulta de ${name} - ${service}`
    
    const htmlContent = `
      <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; font-family: 'Playfair Display', serif;">First Class Sensations</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nueva Consulta de Cliente</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              Detalles del Cliente
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Nombre:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">
                  <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">Servicio:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; vertical-align: top;">Mensaje:</td>
                <td style="padding: 12px;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>Este correo fue generado automáticamente desde el formulario de contacto de First Class Sensations.</p>
            <p>Responder lo antes posible para mantener al cliente interesado.</p>
          </div>
        </div>
      </div>
    `
    
    // Enviar correo al equipo de First Class Sensations
    const mailOptions = {
      from: `"First Class Sensations Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject,
      html: htmlContent,
      replyTo: email,
    }
    
    await transporter.sendMail(mailOptions)
    
    // Enviar confirmación al cliente (opcional)
    const confirmationSubjectOptions = {
      es: 'Gracias por contactar First Class Sensations',
      en: 'Thank you for contacting First Class Sensations',
      ru: 'Спасибо за обращение в First Class Sensations',
    } as const
    
    const confirmationSubject = confirmationSubjectOptions[preferredLanguage as keyof typeof confirmationSubjectOptions] || 'Gracias por contactar First Class Sensations'
    
    const confirmationHtml = `
      <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; font-family: 'Playfair Display', serif;">First Class Sensations</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">
              ${(() => {
                const greetings = {
                  es: '¡Hola ' + name + '!',
                  en: 'Hello ' + name + '!',
                  ru: 'Здравствуйте, ' + name + '!',
                } as const
                return greetings[preferredLanguage as keyof typeof greetings] || '¡Hola ' + name + '!'
              })()}
            </h2>
            
            <p style="color: #555; line-height: 1.6;">
              ${(() => {
                const messages = {
                  es: 'Hemos recibido tu consulta sobre ' + service + '. Nuestro equipo de concierge de lujo revisará tu solicitud y te contactará en las próximas 24 horas.',
                  en: 'We have received your inquiry about ' + service + '. Our luxury concierge team will review your request and contact you within the next 24 hours.',
                  ru: 'Мы получили ваш запрос о ' + service + '. Наша команда роскошного консьержа рассмотрит ваш запрос и свяжется с вами в течение следующих 24 часов.',
                } as const
                return messages[preferredLanguage as keyof typeof messages] || 'Hemos recibido tu consulta sobre ' + service + '.'
              })()}
            </p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">
                ${(() => {
                  const titles = {
                    es: 'Resumen de tu consulta:',
                    en: 'Summary of your inquiry:',
                    ru: 'Краткое содержание вашего запроса:',
                  } as const
                  return titles[preferredLanguage as keyof typeof titles] || 'Resumen de tu consulta:'
                })()}
              </h3>
              <p style="margin: 5px 0; color: #666;"><strong>Servicio:</strong> ${service}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Mensaje:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              ${(() => {
                const footers = {
                  es: 'Mientras tanto, no dudes en explorar nuestros servicios de concierge de lujo en nuestra web.',
                  en: 'In the meantime, feel free to explore our luxury concierge services on our website.',
                  ru: 'А пока не стесняйтесь исследовать наши услуги роскошного консьержа на нашем сайте.',
                } as const
                return footers[preferredLanguage as keyof typeof footers] || 'Mientras tanto, no dudes en explorar nuestros servicios.'
              })()}
            </p>
            
            <div style="text-align: center; margin-top: 25px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://firstclass-sensations.com'}" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block;">
                ${(() => {
                  const buttons = {
                    es: 'Visitar Web',
                    en: 'Visit Website',
                    ru: 'Посетить сайт',
                  } as const
                  return buttons[preferredLanguage as keyof typeof buttons] || 'Visitar Web'
                })()}
              </a>
            </div>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>First Class Sensations - Concierge de Lujo en Marbella</p>
            <p>Email: info@firstclass-sensations.com | Tel: +34 123 456 789</p>
          </div>
        </div>
      </div>
    `
    
    const confirmationMailOptions = {
      from: `"First Class Sensations" <${process.env.SMTP_USER}>`,
      to: email,
      subject: confirmationSubject,
      html: confirmationHtml,
    }
    
    await transporter.sendMail(confirmationMailOptions)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json(
      { 
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
      },
      { status: 500 }
    )
  }
}

// Manejo de otros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
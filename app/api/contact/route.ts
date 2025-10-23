import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !service || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #0284c7;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            background-color: white;
            padding: 30px;
            margin-top: 20px;
            border-radius: 5px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            color: #0284c7;
          }
          .field-value {
            margin-top: 5px;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nuevo Contacto desde Mantexia.com</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Nombre:</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value">${email}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Teléfono:</div>
              <div class="field-value">${phone}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Empresa:</div>
              <div class="field-value">${company}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Servicio:</div>
              <div class="field-value">${service}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Mensaje:</div>
              <div class="field-value">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este email fue enviado desde el formulario de contacto de mantexia.com</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: `"Formulario Web Mantexia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'mantexia@mantexia.com',
      subject: `Nuevo contacto: ${service} - ${name}`,
      html: emailHtml,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    )
  }
}

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-mantexia-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-mantexia-secondary">¡Gracias por contactar!</h3>
        <p className="text-gray-600">En unos minutos le daremos respuesta...</p>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-4"
      noValidate
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Número de teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors"
          aria-required="true"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          autoComplete="tel"
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Empresa *
        </label>
        <input
          type="text"
          id="company"
          {...register('company', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors"
          aria-required="true"
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
          autoComplete="organization"
        />
        {errors.company && (
          <p id="company-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Elige un servicio *
        </label>
        <select
          id="service"
          {...register('service', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors"
          aria-required="true"
          aria-invalid={errors.service ? 'true' : 'false'}
          aria-describedby={errors.service ? 'service-error' : undefined}
        >
          <option value="">— Selecciona la opción —</option>
          <option value="Mano de Obra">Mano de Obra</option>
          <option value="Gestora de Mantenimientos">Gestora de Mantenimientos</option>
          <option value="Gestión Documental">Gestión Documental</option>
        </select>
        {errors.service && (
          <p id="service-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mantexia-secondary mb-1">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mantexia-primary focus:border-mantexia-primary transition-colors resize-none"
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert" aria-live="polite">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <div 
          className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-mantexia-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-describedby={isSubmitting ? 'submit-status' : undefined}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
            <span id="submit-status">Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Contactar
          </>
        )}
      </button>
    </form>
  )
}

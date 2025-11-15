'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

type FormData = {
  fullName: string
  email: string
  phone: string
  dates: string
  people: string
  budget: string
  services: string
  message?: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Prevent autofill on problematic fields
  useEffect(() => {
    const datesInput = document.getElementById('dates') as HTMLInputElement
    const peopleInput = document.getElementById('people') as HTMLInputElement
    
    if (datesInput) {
      datesInput.setAttribute('autocomplete', 'new-field-dates')
      datesInput.setAttribute('readonly', 'readonly')
      setTimeout(() => {
        datesInput.removeAttribute('readonly')
      }, 100)
    }
    
    if (peopleInput) {
      peopleInput.setAttribute('autocomplete', 'new-field-people')
      peopleInput.setAttribute('readonly', 'readonly')
      setTimeout(() => {
        peopleInput.removeAttribute('readonly')
      }, 100)
    }
  }, [])

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
        throw new Error(t('form.errors.submitError'))
      }

      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(t('form.errors.generalError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-white">{t('form.success.title')}</h3>
        <p className="text-gray-300">{t('form.success.message')}</p>
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
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.fullName')}
        </label>
        <input
          type="text"
          id="fullName"
          {...register('fullName', { required: t('form.errors.required') })}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.fullName ? 'true' : 'false'}
          aria-describedby={errors.fullName ? 'fullname-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullname-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.email')}
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: t('form.errors.required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('form.errors.invalidEmail'),
            },
          })}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: t('form.errors.required') })}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          autoComplete="tel"
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.dates')}
        </label>
        <input
          type="text"
          id="dates"
          {...register('dates', { required: t('form.errors.required') })}
          placeholder={t('form.dates.placeholder')}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.dates ? 'true' : 'false'}
          aria-describedby={errors.dates ? 'dates-error' : undefined}
          autoComplete="new-field-dates"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-form-type="other"
          inputMode="text"
          role="textbox"
        />
        {errors.dates && (
          <p id="dates-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.dates.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="people" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.people')}
        </label>
        <input
          type="text"
          id="people"
          {...register('people', { required: t('form.errors.required') })}
          placeholder={t('form.people.placeholder')}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.people ? 'true' : 'false'}
          aria-describedby={errors.people ? 'people-error' : undefined}
          autoComplete="new-field-people"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          data-form-type="other"
          inputMode="text"
          role="textbox"
        />
        {errors.people && (
          <p id="people-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.people.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.budget')}
        </label>
        <input
          type="text"
          id="budget"
          {...register('budget', { required: t('form.errors.required') })}
          placeholder={t('form.budget.placeholder')}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors"
          aria-required="true"
          aria-invalid={errors.budget ? 'true' : 'false'}
          aria-describedby={errors.budget ? 'budget-error' : undefined}
        />
        {errors.budget && (
          <p id="budget-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.budget.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="services" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.services')}
        </label>
        <textarea
          id="services"
          rows={3}
          {...register('services', { required: t('form.errors.required') })}
          placeholder={t('form.services.placeholder')}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors resize-none"
          aria-required="true"
          aria-invalid={errors.services ? 'true' : 'false'}
          aria-describedby={errors.services ? 'services-error' : undefined}
        ></textarea>
        {errors.services && (
          <p id="services-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.services.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          {t('form.message')}
        </label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-colors resize-none"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="text-red-400 text-sm mt-1" role="alert" aria-live="polite">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <div 
          className="bg-red-900/20 border border-red-800 text-red-300 px-4 py-3 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
        aria-describedby={isSubmitting ? 'submit-status' : undefined}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
            <span id="submit-status">{t('form.sending')}</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            {t('form.submit')}
          </>
        )}
      </button>
    </form>
  )
}
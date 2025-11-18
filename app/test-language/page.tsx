'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { useLocationDetection } from '@/hooks/useLocationDetection'

export default function TestLanguageDetection() {
  const { language, changeLanguage, isAutoDetecting } = useLanguage()
  const { country, language: detectedLanguage, isLoading, error } = useLocationDetection()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-firstclass-primary mb-8 font-hero">Prueba de Detección de Idioma</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Estado actual del idioma */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-firstclass-secondary mb-4">Estado del Sistema</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium font-body">Idioma actual:</span>
                <span className="text-firstclass-primary font-bold font-hero">{language.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium font-body">Detectando automáticamente:</span>
                <span className={isAutoDetecting ? 'text-yellow-600' : 'text-yellow-600'}>
                  {isAutoDetecting ? 'Sí' : 'No'}
                </span>
              </div>
            </div>
          </div>

          {/* Detección de ubicación */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-firstclass-secondary mb-4">Detección de Ubicación</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium font-body">Cargando:</span>
                <span className={isLoading ? 'text-yellow-600' : 'text-yellow-600'}>
                  {isLoading ? 'Sí' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium font-body">País detectado:</span>
                <span className="text-firstclass-primary font-bold font-hero">{country || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium font-body">Idioma detectado:</span>
                <span className="text-firstclass-primary font-bold font-hero">{detectedLanguage.toUpperCase()}</span>
              </div>
              {error && (
                <div className="text-red-600 text-sm">
                  Error: {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Selector manual de idioma */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-firstclass-secondary mb-4">Cambio Manual de Idioma</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-4 py-2 rounded-md font-medium transition-colors font-body ${
                language === 'es' 
                  ? 'bg-firstclass-primary text-white' 
                  : 'bg-white text-firstclass-secondary hover:bg-firstclass-primary/10'
              }`}
            >
              Español
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 rounded-md font-medium transition-colors font-body ${
                language === 'en' 
                  ? 'bg-firstclass-primary text-white' 
                  : 'bg-white text-firstclass-secondary hover:bg-firstclass-primary/10'
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className={`px-4 py-2 rounded-md font-medium transition-colors font-body ${
                language === 'ru' 
                  ? 'bg-firstclass-primary text-white' 
                  : 'bg-white text-firstclass-secondary hover:bg-firstclass-primary/10'
              }`}
            >
              Русский
            </button>
          </div>
        </div>

        {/* Información de prueba */}
        <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-firstclass-secondary mb-4">Información de Prueba</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• El sistema detectará automáticamente tu ubicación basándose en tu IP</p>
            <p>• Si estás en un país hispanohablante, se mostrará en español</p>
            <p>• Si estás en un país de habla rusa, se mostrará en ruso</p>
            <p>• Para el resto de países, se mostrará en inglés</p>
            <p>• Siempre podrás cambiar el idioma manualmente con los botones de arriba</p>
            <p>• Tu elección manual se guardará para futuras visitas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
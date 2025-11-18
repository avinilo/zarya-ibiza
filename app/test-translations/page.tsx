import { getLanguageFromHeaders, getTranslations } from '@/lib/language-utils'

export default async function TestTranslations() {
  const lang = await getLanguageFromHeaders()
  const t = getTranslations(lang)
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-firstclass-primary mb-8 font-hero">Test de Traducciones</h1>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-firstclass-secondary mb-2 font-hero">Idioma detectado: {lang}</h2>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-firstclass-secondary mb-2 font-hero">Prueba de traducción:</h3>
            <p className="text-gray-700 mb-2">
              <strong>privacy.title:</strong> {t('privacy.title')}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>terms.title:</strong> {t('terms.title')}
            </p>
            <p className="text-gray-700">
              <strong>nav.home:</strong> {t('nav.home')}
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-firstclass-secondary mb-2">Secciones completas:</h3>
            <div className="space-y-2 text-sm">
              <p><strong>privacy.section1.title:</strong> {t('privacy.section1.title')}</p>
              <p><strong>privacy.section1.content:</strong> {t('privacy.section1.content')}</p>
              <p><strong>terms.section1.title:</strong> {t('terms.section1.title')}</p>
              <p><strong>terms.section1.content:</strong> {t('terms.section1.content')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link'
import { getLanguageFromHeaders, getTranslations } from '@/lib/language-utils'

export default async function PoliticaPrivacidad() {
  const lang = await getLanguageFromHeaders()
  const t = getTranslations(lang)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t('privacy.lastUpdated')}</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section1.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section1.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section2.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section2.content')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {t('privacy.section2.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section3.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section3.content')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {t('privacy.section3.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section4.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section4.content')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {t('privacy.section4.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section5.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section5.content')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {t('privacy.section5.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section6.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section6.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section7.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section7.content')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                {t('privacy.section7.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4">
                {t('privacy.section7.contact')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section8.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section8.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section9.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section9.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section10.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section10.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section11.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section11.content')}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>{t('privacy.company')}</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  {t('privacy.email')}
                </p>
                <p className="text-gray-700 mb-2">
                  {t('privacy.phone')}
                </p>
                <p className="text-gray-700">
                  {t('privacy.location')}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.section12.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.section12.content')}
              </p>
              <p className="text-gray-700">
                {t('privacy.section12.authority')}<br />
                <a href={t('privacy.section12.link')} className="text-blue-600 hover:text-blue-800 underline">
                  {t('privacy.section12.link')}
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 hover-lift"
            >
              {t('privacy.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
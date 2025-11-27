'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export default function TerminosCondiciones() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-firstclass-background py-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <div className="bg-firstclass-light rounded-lg shadow-lg p-8 border border-firstclass-primary/20">
          <h1 className="text-3xl md:text-4xl font-bold text-firstclass-primary mb-8 text-center font-hero">
            {t('terms.title')}
          </h1>

          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-firstclass-text/80 mb-6">
              <strong className="text-firstclass-text">{t('terms.lastUpdated')}</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section1.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section1.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section2.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section2.content')}
              </p>
              <ul className="list-disc pl-6 text-firstclass-text/80 mb-4 space-y-2 marker:text-firstclass-primary">
                {t('terms.section2.items').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section3.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section3.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section4.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section4.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section5.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section5.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section6.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section6.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section7.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section7.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section8.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section8.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section9.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section9.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section10.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section10.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section11.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section11.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-firstclass-secondary mb-4 font-hero">{t('terms.section12.title')}</h2>
              <p className="text-firstclass-text/80 mb-4">
                {t('terms.section12.content')}
              </p>
              <p className="text-firstclass-text/80">
                {t('terms.section12.contact')}
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-firstclass-primary/20 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-firstclass-primary text-firstclass-background font-medium rounded-lg hover:bg-firstclass-secondary transition-colors duration-200 hover-lift"
            >
              {t('terms.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
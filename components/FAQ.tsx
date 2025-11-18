'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-yellow-600 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Always use the t function directly
  const translate = (key: string) => t(key)

  const faqItems = [
    {
      question: translate('faq.q1'),
      answer: translate('faq.a1')
    },
    {
      question: translate('faq.q2'),
      answer: translate('faq.a2')
    },
    {
      question: translate('faq.q3'),
      answer: translate('faq.a3')
    },
    {
      question: translate('faq.q4'),
      answer: translate('faq.a4')
    },
    {
      question: translate('faq.q5'),
      answer: translate('faq.a5')
    },
    {
      question: translate('faq.q6'),
      answer: translate('faq.a6')
    },
    {
      question: translate('faq.q7'),
      answer: translate('faq.a7')
    },
    {
      question: translate('faq.q8'),
      answer: translate('faq.a8')
    }
  ]

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-hero">
            {translate('faq.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translate('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {translate('faq.moreQuestions')}
          </p>
          <a 
            href="https://wa.me/34600887755" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.79.372-.272.297-1.04 1.011-1.04 2.475 0 1.464 1.065 2.875 1.213 3.074.149.198 2.096 3.213 5.077 4.492.71.306 1.262.488 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0024.003 11.89"/>
            </svg>
            {translate('faq.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  )
}
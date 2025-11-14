import { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'First Class Sensations - Private Concierge in Ibiza',
  description: 'Private concierge in Ibiza. Tailor-made holidays and VIP experiences: luxury villas, VIP tables, luxury transport, security and private events.',
  keywords: 'concierge ibiza, luxury villas ibiza, vip tables ibiza, luxury transport ibiza, security ibiza, private events ibiza',
  openGraph: {
    title: 'First Class Sensations - Private Concierge in Ibiza',
    description: 'Private concierge in Ibiza. Tailor-made holidays and VIP experiences: luxury villas, VIP tables, luxury transport, security and private events.',
    type: 'website',
    locale: 'es_ES',
    images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=630&fit=crop&auto=format'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Class Sensations - Private Concierge in Ibiza',
    description: 'Private concierge in Ibiza. Tailor-made holidays and VIP experiences: luxury villas, VIP tables, luxury transport, security and private events.',
    images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=630&fit=crop&auto=format'],
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function Home() {
  return <HomeContent />
}
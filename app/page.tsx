import HomeContent from '@/components/HomeContent'
import { generateMultilingualMetadata } from '@/lib/multilingual-seo'

export const generateMetadata = () => generateMultilingualMetadata('home', 'es')

export default function Home() {
  return <HomeContent />
}
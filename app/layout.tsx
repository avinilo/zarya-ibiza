import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import './animations.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { 
  organizationSchema, 
  websiteSchema, 
  localBusinessSchema, 
  faqSchema 
} from '@/lib/structured-data'
import { GA_TRACKING_ID } from '@/lib/gtag'
import PerformanceOptimizer, { CriticalResourcesPreloader } from '@/components/PerformanceOptimizer'
import ScrollRestoration from '@/components/ScrollRestoration'
import { generateMultilingualMetadata, SUPPORTED_LANGUAGES } from '@/lib/multilingual-seo'
import ClientComponentsWrapper from '@/components/ClientComponentsWrapper'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
})

// Fuentes del hero para toda la web
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = generateMultilingualMetadata('home', 'es')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preload crítico para Core Web Vitals - Solo recursos inmediatamente necesarios */}
        
        {/* DNS prefetch y preconnect para recursos externos optimizados */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* Preload de recursos críticos para Core Web Vitals */}
        <link rel="preload" href="/logo2.webp" as="image" fetchPriority="high" />
        <link rel="preload" href="/og-image.png" as="image" fetchPriority="low" />
        
        {/* Resource hints adicionales para optimización */}
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        
        {/* Verificación de propietario de motores de búsqueda */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && (
          <meta name="yandex-verification" content={process.env.NEXT_PUBLIC_YANDEX_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_YAHOO_VERIFICATION && (
          <meta name="y_key" content={process.env.NEXT_PUBLIC_YAHOO_VERIFICATION} />
        )}
        
        {/* Meta tags específicos para redes sociales */}
        <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''} />
        <meta name="twitter:site" content="@firstclassvlc" />
        <meta name="twitter:creator" content="@firstclassvlc" />
        
        {/* Meta tags para LinkedIn */}
        <meta property="og:site_name" content="First Class Sensations" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/first-class-sensations" />
        
        {/* Meta tags para WhatsApp */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Configuración de indexación granular */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo-targeting para Ibiza */}
        <meta name="geo.region" content="ES-IB" />
        <meta name="geo.placename" content="Ibiza, España" />
        <meta name="geo.position" content="38.9067;1.4206" />
        <meta name="ICBM" content="38.9067, 1.4206" />
        <meta name="DC.title" content="First Class Sensations - Servicios Premium en Ibiza" />
        
        {/* Meta tags adicionales para SEO */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="First Class Sensations" />
        
        {/* Favicon y Apple Touch Icons (Optimizado) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Viewport optimizado */}
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
         
         {/* Structured Data JSON-LD para SEO */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(organizationSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(websiteSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(localBusinessSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(faqSchema),
           }}
         />
       </head>
       <body className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} font-sans antialiased`}>
        {/* Google Analytics 4 Scripts */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Service Worker Registration */}
        <Script id="sw-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('✅ Service Worker registrado correctamente:', registration.scope);
                  })
                  .catch(function(error) {
                    console.log('❌ Error al registrar Service Worker:', error);
                  });
              });
            }
          `}
        </Script>
        
        <PerformanceOptimizer>
          <CriticalResourcesPreloader />
          <ScrollRestoration />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ClientComponentsWrapper />
        </PerformanceOptimizer>
      </body>
    </html>
  )
}

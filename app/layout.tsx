import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './animations.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { 
  organizationSchema, 
  websiteSchema, 
  localBusinessSchema, 
  faqSchema 
} from '@/lib/structured-data'
import { GA_TRACKING_ID } from '@/lib/gtag'
import PerformanceOptimizer, { CriticalResourcesPreloader } from '@/components/PerformanceOptimizer'
import { CookieBanner, WhatsAppBubble } from '@/components/ClientComponents'
import ScrollRestoration from '@/components/ScrollRestoration'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'First Class Sensations - Servicios Premium en Valencia',
  description: 'Servicios exclusivos y experiencias de primera clase en Valencia y alrededores. Especialistas en servicios premium con atención personalizada y calidad excepcional.',
  keywords: 'servicios premium valencia, experiencias exclusivas, servicios de lujo valencia, atención personalizada, first class sensations',
  authors: [{ name: 'First Class Sensations' }],
  creator: 'First Class Sensations',
  publisher: 'First Class Sensations',
  applicationName: 'First Class Sensations',
  referrer: 'origin-when-cross-origin',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://limpiezassmartclean.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YAHOO_VERIFICATION && {
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
      },
    }),
  },
  category: 'business',
  classification: 'Premium services and experiences',
  openGraph: {
    title: 'First Class Sensations - Servicios Premium en Valencia',
    description: 'Servicios exclusivos y experiencias de primera clase en Valencia y alrededores. Especialistas en servicios premium con atención personalizada.',
    url: 'https://firstclassensations.com',
    siteName: 'First Class Sensations',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'First Class Sensations - Servicios Premium en Valencia',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Class Sensations - Servicios Premium en Valencia',
    description: 'Servicios exclusivos y experiencias de primera clase en Valencia y alrededores',
    images: ['/og-image.png'],
    creator: '@firstclassvlc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Smart Clean Valencia',
    statusBarStyle: 'default',
  },
}

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
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* Preload de recursos críticos para Core Web Vitals */}
        <link rel="preload" href="/logo.webp" as="image" fetchPriority="high" />
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
        <meta name="DC.title" content="First Class Sensations - Servicios Premium en Valencia" />
        
        {/* Meta tags adicionales para SEO */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="First Class Sensations" />
        
        {/* Favicon y Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
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
       <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics 4 Scripts */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
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
          <CookieBanner />
          <WhatsAppBubble />
        </PerformanceOptimizer>
      </body>
    </html>
  )
}

// Service Worker para First Class Sensations - Cache estratégico
// Implementación cuidadosa para mejorar performance sin romper funcionalidad

const CACHE_NAME = 'firstclass-v3'
const STATIC_CACHE = 'firstclass-static-v3'
const RUNTIME_CACHE = 'firstclass-runtime-v3'

// URLs críticas para cachear
const CRITICAL_URLS = [
  '/',
  '/alquiler-yates',
  '/beach-clubs-vip',
  '/restaurantes-michelin',
  '/transporte-vip',
  '/sobre-nosotros',
  '/casos-exito',
  '/preguntas-frecuentes'
]

// Recursos estáticos para cachear
const STATIC_RESOURCES = [
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-96x96.png',
  '/apple-icon-180x180.png',
  '/android-icon-192x192.png',
  '/ms-icon-144x144.png',
  '/og-image.png',
  '/logo1.png',
  '/manifest.json'
]

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Instalando...')
  
  event.waitUntil(
    Promise.all([
      // Cache de páginas críticas
      caches.open(CACHE_NAME).then(cache => {
        console.log('📦 Service Worker: Cacheando páginas críticas')
        return cache.addAll(CRITICAL_URLS)
      }),
      // Cache de recursos estáticos
      caches.open(STATIC_CACHE).then(cache => {
        console.log('🖼️ Service Worker: Cacheando recursos estáticos')
        return cache.addAll(STATIC_RESOURCES)
      })
    ]).then(() => {
      console.log('✅ Service Worker: Instalación completada')
      // Forzar activación inmediata
      return self.skipWaiting()
    }).catch(error => {
      console.error('❌ Service Worker: Error en instalación:', error)
    })
  )
})

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker: Activando...')
  
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== RUNTIME_CACHE) {
              console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      }),
      // Tomar control de todas las pestañas
      self.clients.claim()
    ]).then(() => {
      console.log('✅ Service Worker: Activación completada')
    }).catch(error => {
      console.error('❌ Service Worker: Error en activación:', error)
    })
  )
})

// Estrategia de fetch
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)
  
  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) {
    return
  }
  
  // Estrategia según tipo de recurso
  if (request.destination === 'document') {
    // Network First para páginas HTML
    event.respondWith(networkFirstStrategy(request))
  } else if (request.destination === 'image') {
    // Hero debe refrescarse con prioridad cuando se actualiza
    if (url.pathname === '/hero.webp') {
      event.respondWith(networkFirstStrategy(request))
      return
    }
    // Cache First para imágenes
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE))
  } else if (request.url.includes('/_next/static/')) {
    // Cache First para assets de Next.js
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE))
  } else if (request.url.includes('/api/')) {
    // Network Only para APIs
    event.respondWith(networkOnlyStrategy(request))
  } else {
    // Stale While Revalidate para otros recursos
    event.respondWith(staleWhileRevalidateStrategy(request))
  }
})

// Estrategia Network First
async function networkFirstStrategy(request) {
  try {
    // Intentar red primero
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cachear respuesta exitosa
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('🌐 Service Worker: Red falló, buscando en cache:', request.url)
    
    // Si falla la red, buscar en cache
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Si no hay cache, devolver página offline básica
    if (request.destination === 'document') {
      return new Response(
        `<!DOCTYPE html>
        <html>
        <head>
          <title>First Class Sensations - Sin conexión</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: 'Montserrat', sans-serif; text-align: center; padding: 50px; background: #f8fafc; }
            .offline { color: #334155; max-width: 600px; margin: 0 auto; }
            .logo { color: #2563eb; font-weight: bold; font-size: 24px; margin-bottom: 20px; font-family: 'Playfair Display', serif; }
            button { background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; }
            button:hover { background: #1d4ed8; }
          </style>
        </head>
        <body>
          <div class="offline">
            <div class="logo">First Class Sensations</div>
            <h1>Sin conexión a internet</h1>
            <p>Por favor, verifica tu conexión e intenta nuevamente.</p>
            <button onclick="window.location.reload()">Reintentar</button>
          </div>
        </body>
        </html>`,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      )
    }
    
    throw error
  }
}

// Estrategia Cache First
async function cacheFirstStrategy(request, cacheName = STATIC_CACHE) {
  try {
    // Buscar en cache primero
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Si no está en cache, buscar en red
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cachear para futuras requests
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.error('❌ Service Worker: Error en Cache First:', error)
    throw error
  }
}

// Estrategia Network Only
async function networkOnlyStrategy(request) {
  try {
    return await fetch(request)
  } catch (error) {
    console.error('❌ Service Worker: Error en Network Only:', error)
    throw error
  }
}

// Estrategia Stale While Revalidate
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cachedResponse = await cache.match(request)
  
  // Fetch en background para actualizar cache
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  }).catch(error => {
    console.log('🌐 Service Worker: Error en background fetch:', error)
  })
  
  // Devolver cache inmediatamente si existe, sino esperar network
  return cachedResponse || fetchPromise
}

// Manejo de mensajes desde la aplicación
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏭️ Service Worker: Saltando espera por mensaje de la app')
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})

// Log de inicio
console.log('🚀 Service Worker de First Class Sensations cargado correctamente')

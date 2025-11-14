'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open('https://wa.me/34600887755', '_blank')
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[998]">
          {/* Mensaje flotante */}
          <div 
            className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs border border-gray-200">
              <div className="text-sm text-gray-800 font-medium">
                ¿Necesitas ayuda? ¡Escríbenos por WhatsApp!
              </div>
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
          </div>

          {/* Burbula principal */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group animate-bounce"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
          >
            <div className="relative">
              <MessageCircle className="w-8 h-8 mx-auto transition-transform duration-300 group-hover:scale-110" />
              <Phone className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
            </div>
            
            {/* Efecto de ondas */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 animate-ping"></div>
          </button>
        </div>
      )}

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -8px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-bounce:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
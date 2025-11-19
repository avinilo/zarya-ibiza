export default function CriticalCSS() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Critical CSS - Inline para eliminar render-blocking */
        *, ::before, ::after {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: #e5e7eb00;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #111827;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Layout crítico */
        .container-custom {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 640px) {
          .container-custom {
            padding: 0 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .container-custom {
            padding: 0 2rem;
          }
        }
        
        /* Botones críticos */
        .btn-primary, .btn-secondary, .btn-firstclass-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .btn-primary {
          background: #d4af37;
          color: white;
        }
        
        .btn-primary:hover {
          background: #b8860b;
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Header crítico */
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
        }
        
        /* Hero crítico */
        .hero-firstclass {
          background: linear-gradient(135deg, #2563eb 0%, #FFFFFF 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        /* Grid y flexbox críticos */
        .grid {
          display: grid;
        }
        
        .flex {
          display: flex;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-center {
          justify-content: center;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        /* Espaciado crítico */
        .py-4 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .py-24 {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        
        /* Tipografía crítica */
        h1, h2, h3 {
          margin: 0;
          font-weight: 700;
          line-height: 1.2;
        }
        
        h1 {
          font-size: 3rem;
        }
        
        @media (min-width: 640px) {
          h1 {
            font-size: 3.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
        }
        
        /* Animaciones críticas */
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ocultar elementos no críticos inicialmente */
        .non-critical {
          display: none !important;
        }
        
        /* Mostrar solo elementos críticos */
        .critical-only {
          display: block !important;
        }
        
        /* Optimización de imágenes */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        /* Transiciones suaves */
        .transition-all {
          transition: all 0.3s ease;
        }
        
        /* Sombra crítica */
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Bordes redondeados críticos */
        .rounded-lg {
          border-radius: 0.5rem;
        }
        
        .rounded-xl {
          border-radius: 0.75rem;
        }
        
        /* Colores de marca críticos */
        .bg-firstclass-primary {
          background-color: #d4af37;
        }
        
        .text-firstclass-primary {
          color: #d4af37;
        }
        
        .bg-white {
          background-color: #ffffff;
        }
        
        .text-white {
          color: #ffffff;
        }
        
        .text-gray-900 {
          color: #111827;
        }
        
        /* Responsive crítico */
        @media (max-width: 640px) {
          .container-custom {
            padding: 0 1rem;
          }
          
          h1 {
            font-size: 2.25rem;
          }
          
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      ` }} />
    </>
  )
}
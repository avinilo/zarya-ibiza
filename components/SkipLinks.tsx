'use client';

import { useState, useEffect } from 'react';

/**
 * Componente SkipLinks para navegación por teclado
 * Permite a usuarios de screen readers saltar al contenido principal
 */
export default function SkipLinks() {
  const [isVisible, setIsVisible] = useState(false);

  const skipLinks = [
    { href: '#main-content', text: 'Saltar al contenido principal' },
    { href: '#main-navigation', text: 'Saltar a la navegación principal' },
    { href: '#footer', text: 'Saltar al pie de página' },
    { href: '#contact-form', text: 'Saltar al formulario de contacto' }
  ];

  const handleFocus = () => setIsVisible(true);
  const handleBlur = () => setIsVisible(false);

  const handleClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      // Hacer el elemento focusable temporalmente si no lo es
      const originalTabIndex = target.getAttribute('tabindex');
      target.setAttribute('tabindex', '-1');
      
      // Enfocar el elemento
      (target as HTMLElement).focus();
      
      // Restaurar el tabindex original después de un momento
      setTimeout(() => {
        if (originalTabIndex !== null) {
          target.setAttribute('tabindex', originalTabIndex);
        } else {
          target.removeAttribute('tabindex');
        }
      }, 100);
    }
  };

  return (
    <nav 
      className={`skip-links ${isVisible ? 'skip-links--visible' : ''}`}
      aria-label="Enlaces de navegación rápida"
    >
      <ul className="skip-links__list">
        {skipLinks.map((link, index) => (
          <li key={index} className="skip-links__item">
            <a
              href={link.href}
              className="skip-links__link"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -100vh;
          left: 0;
          z-index: 9999;
          width: 100%;
          background: #000;
          color: #fff;
          padding: 0;
          margin: 0;
          list-style: none;
          transition: top 0.3s ease;
        }

        .skip-links--visible {
          top: 0;
        }

        .skip-links__list {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skip-links__item {
          margin: 0;
          padding: 0;
        }

        .skip-links__link {
          display: block;
          padding: 12px 16px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-right: 1px solid #333;
          transition: background-color 0.2s ease;
        }

        .skip-links__link:hover,
        .skip-links__link:focus {
          background-color: #333;
          outline: 2px solid #fff;
          outline-offset: -2px;
        }

        .skip-links__link:last-child {
          border-right: none;
        }

        /* Asegurar que los skip links sean visibles en modo de alto contraste */
        @media (prefers-contrast: high) {
          .skip-links {
            background: #000;
            border: 2px solid #fff;
          }
          
          .skip-links__link {
            border-color: #fff;
          }
          
          .skip-links__link:hover,
          .skip-links__link:focus {
            background-color: #fff;
            color: #000;
          }
        }

        /* Reducir animaciones si el usuario lo prefiere */
        @media (prefers-reduced-motion: reduce) {
          .skip-links {
            transition: none;
          }
          
          .skip-links__link {
            transition: none;
          }
        }
      `}</style>
    </nav>
  );
}
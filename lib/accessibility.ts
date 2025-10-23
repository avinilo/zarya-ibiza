/**
 * Utilidades de Accesibilidad para Mantexia
 * Funciones para mejorar la experiencia de usuarios con discapacidades
 */

// Tipos para las utilidades de accesibilidad
export interface FocusOptions {
  preventScroll?: boolean;
  restoreFocus?: boolean;
}

export interface AnnouncementOptions {
  priority?: 'polite' | 'assertive';
  delay?: number;
}

export interface ContrastResult {
  ratio: number;
  level: 'AA' | 'AAA' | 'fail';
  isAccessible: boolean;
}

// Gestión de Focus
export class FocusManager {
  private static focusStack: HTMLElement[] = [];
  private static trapStack: HTMLElement[] = [];

  /**
   * Guarda el elemento actualmente enfocado
   */
  static saveFocus(): void {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement !== document.body) {
      this.focusStack.push(activeElement);
    }
  }

  /**
   * Restaura el último elemento enfocado guardado
   */
  static restoreFocus(): void {
    const lastFocused = this.focusStack.pop();
    if (lastFocused && typeof lastFocused.focus === 'function') {
      try {
        lastFocused.focus({ preventScroll: true });
      } catch (error) {
        console.warn('No se pudo restaurar el focus:', error);
      }
    }
  }

  /**
   * Enfoca el primer elemento focusable dentro de un contenedor
   */
  static focusFirstElement(container: HTMLElement): boolean {
    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
      return true;
    }
    return false;
  }

  /**
   * Obtiene todos los elementos focusables dentro de un contenedor
   */
  static getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(container.querySelectorAll(focusableSelectors))
      .filter(element => {
        const el = element as HTMLElement;
        return el.offsetWidth > 0 && el.offsetHeight > 0 && !el.hidden;
      }) as HTMLElement[];
  }

  /**
   * Crea una trampa de focus para modales
   */
  static trapFocus(container: HTMLElement): () => void {
    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length === 0) return () => {};

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    this.trapStack.push(container);

    // Enfocar el primer elemento
    firstElement.focus();

    // Función para limpiar la trampa
    return () => {
      container.removeEventListener('keydown', handleTabKey);
      const index = this.trapStack.indexOf(container);
      if (index > -1) {
        this.trapStack.splice(index, 1);
      }
    };
  }
}

// Anuncios para Screen Readers
export class ScreenReaderAnnouncer {
  private static liveRegion: HTMLElement | null = null;

  /**
   * Inicializa la región live para anuncios
   */
  static init(): void {
    if (this.liveRegion) return;

    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.setAttribute('aria-relevant', 'text');
    this.liveRegion.style.position = 'absolute';
    this.liveRegion.style.left = '-10000px';
    this.liveRegion.style.width = '1px';
    this.liveRegion.style.height = '1px';
    this.liveRegion.style.overflow = 'hidden';
    
    document.body.appendChild(this.liveRegion);
  }

  /**
   * Anuncia un mensaje a los screen readers
   */
  static announce(message: string, options: AnnouncementOptions = {}): void {
    if (!this.liveRegion) this.init();
    if (!this.liveRegion) return;

    const { priority = 'polite', delay = 100 } = options;
    
    // Cambiar la prioridad si es necesario
    if (this.liveRegion.getAttribute('aria-live') !== priority) {
      this.liveRegion.setAttribute('aria-live', priority);
    }

    // Limpiar y anunciar después de un pequeño delay
    setTimeout(() => {
      if (this.liveRegion) {
        this.liveRegion.textContent = '';
        setTimeout(() => {
          if (this.liveRegion) {
            this.liveRegion.textContent = message;
          }
        }, 10);
      }
    }, delay);
  }

  /**
   * Anuncia cambios de página
   */
  static announcePageChange(pageTitle: string): void {
    this.announce(`Navegando a ${pageTitle}`, { priority: 'assertive' });
  }

  /**
   * Anuncia errores de formulario
   */
  static announceFormError(message: string): void {
    this.announce(`Error: ${message}`, { priority: 'assertive' });
  }

  /**
   * Anuncia éxito en formularios
   */
  static announceFormSuccess(message: string): void {
    this.announce(`Éxito: ${message}`, { priority: 'polite' });
  }
}

// Validación de Contraste
export class ContrastValidator {
  /**
   * Convierte un color hex a RGB
   */
  private static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  /**
   * Calcula la luminancia relativa de un color
   */
  private static getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  /**
   * Calcula el ratio de contraste entre dos colores
   */
  static calculateContrast(color1: string, color2: string): ContrastResult {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    if (!rgb1 || !rgb2) {
      return { ratio: 0, level: 'fail', isAccessible: false };
    }

    const lum1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    const ratio = (brightest + 0.05) / (darkest + 0.05);

    let level: 'AA' | 'AAA' | 'fail' = 'fail';
    let isAccessible = false;

    if (ratio >= 7) {
      level = 'AAA';
      isAccessible = true;
    } else if (ratio >= 4.5) {
      level = 'AA';
      isAccessible = true;
    }

    return { ratio, level, isAccessible };
  }

  /**
   * Verifica el contraste de un elemento
   */
  static checkElementContrast(element: HTMLElement): ContrastResult | null {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;

    // Convertir colores RGB a hex si es necesario
    const colorHex = this.rgbToHex(color);
    const bgColorHex = this.rgbToHex(backgroundColor);

    if (colorHex && bgColorHex) {
      return this.calculateContrast(colorHex, bgColorHex);
    }

    return null;
  }

  /**
   * Convierte RGB a hex
   */
  private static rgbToHex(rgb: string): string | null {
    const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
    return null;
  }
}

// Detección de Preferencias de Usuario
export class UserPreferences {
  /**
   * Detecta si el usuario prefiere movimiento reducido
   */
  static prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Detecta si el usuario prefiere alto contraste
   */
  static prefersHighContrast(): boolean {
    return window.matchMedia('(prefers-contrast: high)').matches;
  }

  /**
   * Detecta si el usuario prefiere esquema de color oscuro
   */
  static prefersDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Detecta si el usuario prefiere transparencia reducida
   */
  static prefersReducedTransparency(): boolean {
    return window.matchMedia('(prefers-reduced-transparency: reduce)').matches;
  }

  /**
   * Obtiene todas las preferencias del usuario
   */
  static getAllPreferences() {
    return {
      reducedMotion: this.prefersReducedMotion(),
      highContrast: this.prefersHighContrast(),
      darkMode: this.prefersDarkMode(),
      reducedTransparency: this.prefersReducedTransparency()
    };
  }

  /**
   * Aplica clases CSS basadas en las preferencias
   */
  static applyPreferencesToBody(): void {
    const body = document.body;
    const preferences = this.getAllPreferences();

    // Aplicar clases según preferencias
    if (preferences.reducedMotion) {
      body.classList.add('reduce-motion');
    }
    if (preferences.highContrast) {
      body.classList.add('high-contrast');
    }
    if (preferences.darkMode) {
      body.classList.add('dark-mode');
    }
    if (preferences.reducedTransparency) {
      body.classList.add('reduce-transparency');
    }
  }
}

// Utilidades de Teclado
export class KeyboardUtils {
  /**
   * Verifica si una tecla es de navegación
   */
  static isNavigationKey(key: string): boolean {
    return ['Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key);
  }

  /**
   * Verifica si una tecla es de acción
   */
  static isActionKey(key: string): boolean {
    return ['Enter', ' ', 'Escape'].includes(key);
  }

  /**
   * Maneja la navegación por teclado en listas
   */
  static handleListNavigation(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number
  ): number {
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = items.length - 1;
        break;
    }

    if (newIndex !== currentIndex && items[newIndex]) {
      items[newIndex].focus();
    }

    return newIndex;
  }
}

// Inicialización automática
if (typeof window !== 'undefined') {
  // Inicializar el anunciador cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ScreenReaderAnnouncer.init();
      UserPreferences.applyPreferencesToBody();
    });
  } else {
    ScreenReaderAnnouncer.init();
    UserPreferences.applyPreferencesToBody();
  }
}
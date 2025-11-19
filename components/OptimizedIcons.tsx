'use client'

import { lazy, Suspense } from 'react'

// Iconos críticos que se cargan inmediatamente
export { Home, Phone, Mail } from 'lucide-react'

// Iconos no críticos - solo cargar los más usados inicialmente
export { Star, Car, Shield, Sparkles, CheckCircle, MapPin, Users, Instagram, Anchor, ArrowLeft, Search, Utensils, Crown } from 'lucide-react'

// Wrapper para iconos con lazy loading (usar solo para iconos muy grandes o raros)
export function LazyIcon({ icon: Icon, ...props }: { icon: React.ElementType, [key: string]: any }) {
  return (
    <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />}>
      <Icon {...props} />
    </Suspense>
  )
}
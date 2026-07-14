import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>
  href: string
  label: string
}

export interface QuickLink {
  label: string
  href: string
}

export interface ContactItem {
  icon: LucideIcon
  text: string
}

export const socialLinks: SocialLink[] = [
  { icon: FaFacebook, href: 'https://www.facebook.com/Creaa2', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/crea2_sv/', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@crea2sv', label: 'TikTok' },
  { icon: FaWhatsapp, href: 'https://wa.me/50370632464', label: 'WhatsApp' },
]

export const quickLinks: QuickLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const contactItems: ContactItem[] = [
  { icon: MapPin, text: 'Av. Principal 123, Col. Centro, Ciudad' },
  { icon: Phone, text: '+52 (123) 456 78 90' },
  { icon: Mail, text: 'crea2sv@gmail.com' },
  { icon: Clock, text: 'Lun - Vie: 9:00 - 18:00' },
]

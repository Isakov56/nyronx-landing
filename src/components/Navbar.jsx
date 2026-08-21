import { useState, useEffect } from 'react'
import { Logo } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

// Clean Vector Icons (Tailored in Nyronx Green Brand Style)
const CategoryIcons = {
  // Solutions Mega Menu Icons
  pharmacy: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5l7 7" />
    </svg>
  ),
  production: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 2v7.5L4.5 20A2 2 0 006 23h12a2 2 0 001.5-3L14 9.5V2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 2h7" />
    </svg>
  ),
  electronics: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6" />
    </svg>
  ),
  chain: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
    </svg>
  ),
  cosmetics: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-5 4h4m-5 4h6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
    </svg>
  ),
  medicalGoods: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="4" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10" />
    </svg>
  ),
  clinic: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  opticsDental: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6 2 9.5.5 3 2 4.5 4 4.5s3.5-1.5 4-4.5c.5-3.5 2-6.5 2-9.5 0-3.5-2.5-6-6-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6" />
    </svg>
  ),
  finance: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h.01M18 14h.01" />
    </svg>
  ),
  allFeatures: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  integration: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),

  // "Why Nyronx" Icons
  inventory: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  pos: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m-4 4h2" />
    </svg>
  ),
  marketing: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  customers: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  analytics: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  money: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  // "Resources" Icons
  blog: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  updates: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  academy: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  interview: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  support: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dev: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  referral: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  ),
  partner: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  agency: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),

  // "Company" Icons (Matching 4th Screenshot)
  contactPhone: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  aboutUs: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  mediaPress: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  careers: () => (
    <svg className="w-5 h-5 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [activeMega, setActiveMega] = useState(null) // 'solutions' | 'why' | 'resources' | 'company' | null
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { openDemoModal } = useModal()

  const handleNavClick = (target, isPage = false) => {
    setActiveMega(null)
    setMobileOpen(false)
    if (isPage) {
      if (onNavigate) onNavigate(target)
    } else {
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home')
        setTimeout(() => {
          const el = document.querySelector(target)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (activeMega) setActiveMega(null)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeMega])

  // "Yechimlar" Items
  const solCol1 = [
    { id: 'pharmacy', name: language === 'uz' ? 'Chakana dorixona' : 'Розничная аптека', icon: CategoryIcons.pharmacy },
    { id: 'production', name: language === 'uz' ? 'Dori ishlab chiqarish & Optom' : 'Фармпроизводство и опт', icon: CategoryIcons.production },
    { id: 'electronics', name: language === 'uz' ? 'Elektron retsept & IT baza' : 'Электронный рецепт и IT', icon: CategoryIcons.electronics },
  ]
  const solCol2 = [
    { id: 'chain', name: language === 'uz' ? 'Dorixonalar tarmog\'i' : 'Сеть аптек', icon: CategoryIcons.chain },
    { id: 'cosmetics', name: language === 'uz' ? 'Dori-darmon & Kosmetika' : 'Косметика и фармтовары', icon: CategoryIcons.cosmetics },
    { id: 'medicalGoods', name: language === 'uz' ? 'Tibbiy buyumlar & Texnika' : 'Медтехника и изделия', icon: CategoryIcons.medicalGoods },
  ]
  const solCol3 = [
    { id: 'clinic', name: language === 'uz' ? 'Klinikalar va statsionar' : 'Клиники и стационар', icon: CategoryIcons.clinic },
    { id: 'opticsDental', name: language === 'uz' ? 'Optika & stomatologiya' : 'Оптика и стоматология', icon: CategoryIcons.opticsDental },
  ]
  const solBottom = [
    { id: 'finance', name: language === 'uz' ? 'Moliyalashtirish & Kassa' : 'Финансы и касса', icon: CategoryIcons.finance },
    { id: 'allFeatures', name: language === 'uz' ? 'Barcha imkoniyatlar (BI)' : 'Все возможности (BI)', icon: CategoryIcons.allFeatures },
    { id: 'integration', name: language === 'uz' ? 'Integratsiya & API' : 'Интеграция и API', icon: CategoryIcons.integration },
  ]

  // "Nima uchun NYRONX?" Items
  const whyCol1 = [
    { id: 'inventory', name: language === 'uz' ? 'Dori va tovarlar hisobi' : 'Учет лекарств и товаров', icon: CategoryIcons.inventory },
    { id: 'pos', name: language === 'uz' ? 'Savdo va tezkor kassa' : 'Продажи и быстрая касса', icon: CategoryIcons.pos },
    { id: 'marketing', name: language === 'uz' ? 'Sodiqlik va chegirmalar' : 'Маркетинг и лояльность', icon: CategoryIcons.marketing },
  ]
  const whyCol2 = [
    { id: 'customers', name: language === 'uz' ? 'Mijozlar va bemorlar bazasi' : 'База клиентов и пациентов', icon: CategoryIcons.customers },
    { id: 'analytics', name: language === 'uz' ? 'Hisobotlar va chuqur tahlil' : 'Отчеты и глубокая аналитика', icon: CategoryIcons.analytics },
    { id: 'money', name: language === 'uz' ? 'Moliyani to\'liq boshqarish' : 'Управление финансами', icon: CategoryIcons.money },
  ]

  // "Resurslar" Items
  const resCol1 = [
    { id: 'blog', name: language === 'uz' ? 'Blog & Maqolalar' : 'Блог и статьи', icon: CategoryIcons.blog },
    { id: 'updates', name: language === 'uz' ? 'NYRONX Yangilanishlari' : 'Обновления NYRONX', icon: CategoryIcons.updates },
    { id: 'academy', name: language === 'uz' ? 'NYRONX Akademiyasi' : 'Академия NYRONX', icon: CategoryIcons.academy },
    { id: 'interview', name: language === 'uz' ? 'Mijozlar bilan intervyu' : 'Интервью с клиентами', icon: CategoryIcons.interview },
    { id: 'support', name: language === 'uz' ? 'Qo\'llab-quvvatlash xizmati' : 'Служба поддержки 24/7', icon: CategoryIcons.support },
    { id: 'dev', name: language === 'uz' ? 'Dasturchilarga (Open API)' : 'Разработчикам (API)', icon: CategoryIcons.dev },
  ]
  const resCol2 = [
    { id: 'referral', name: language === 'uz' ? 'Referal dastur' : 'Реферальная программа', icon: CategoryIcons.referral },
    { id: 'partner', name: language === 'uz' ? 'Hamkorlik dasturi' : 'Партнерская программа', icon: CategoryIcons.partner },
    { id: 'agency', name: language === 'uz' ? 'Agentlik dasturi' : 'Агентская программа', icon: CategoryIcons.agency },
  ]

  // "Kompaniya" Items (Matching 4th Screenshot)
  const compItems = [
    { id: 'contact', name: language === 'uz' ? 'Aloqa ma\'lumotlari' : 'Контактная информация', icon: CategoryIcons.contactPhone, href: '#contact' },
    { id: 'about', name: language === 'uz' ? 'Biz haqimizda' : 'О компании', icon: CategoryIcons.aboutUs, href: '#trust' },
    { id: 'media', name: language === 'uz' ? 'Media NYRONX haqida' : 'СМИ о NYRONX', icon: CategoryIcons.mediaPress, href: '#news' },
    { id: 'careers', name: language === 'uz' ? 'Vakansiyalar' : 'Вакансии и карьера', icon: CategoryIcons.careers, href: '#contact' },
  ]

  return (
    <>
      {/* Dimmed backdrop when any Mega Menu is open */}
      {activeMega && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300"
          onClick={() => setActiveMega(null)}
        />
      )}

      {/* Main Header Wrapper */}
      <header className="fixed top-0 inset-x-0 z-50 font-sans select-none">
        {/* ===== MAIN NAVBAR BAR ===== */}
        <div className={`bg-white transition-all duration-300 ${activeMega ? 'shadow-none' : 'shadow-[0_4px_25px_rgba(0,0,0,0.04)]'}`}>
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('home', true)
              }}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Logo className="h-8 sm:h-9 w-auto" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[15px] font-bold text-[#1A1D1F]">
              {/* 1. Yechimlar (Mega Menu Trigger) */}
              <button
                type="button"
                onClick={() => setActiveMega((v) => (v === 'solutions' ? null : 'solutions'))}
                onMouseEnter={() => setActiveMega('solutions')}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  activeMega === 'solutions'
                    ? 'bg-brand-primary/10 text-brand-forest border border-brand-primary/20 shadow-xs'
                    : 'hover:bg-gray-100/80 text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Yechimlar' : 'Решения'}
              </button>

              {/* 2. Nima uchun NYRONX? (Mega Menu Trigger) */}
              <button
                type="button"
                onClick={() => setActiveMega((v) => (v === 'why' ? null : 'why'))}
                onMouseEnter={() => setActiveMega('why')}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  activeMega === 'why'
                    ? 'bg-brand-primary/10 text-brand-forest border border-brand-primary/20 shadow-xs'
                    : 'hover:bg-gray-100/80 text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Nima uchun NYRONX?' : 'Почему NYRONX?'}
              </button>

              {/* 3. Narxlar (Dedicated Page Switcher) */}
              <button
                type="button"
                onClick={() => handleNavClick('prices', true)}
                onMouseEnter={() => setActiveMega(null)}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  currentPage === 'prices'
                    ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-xs'
                    : 'hover:bg-gray-100/80 text-gray-700 hover:text-brand-forest'
                }`}
              >
                {language === 'uz' ? 'Narxlar' : 'Цены'}
              </button>

              {/* 4. Resurslar (Mega Menu Trigger) */}
              <button
                type="button"
                onClick={() => setActiveMega((v) => (v === 'resources' ? null : 'resources'))}
                onMouseEnter={() => setActiveMega('resources')}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  activeMega === 'resources'
                    ? 'bg-brand-primary/10 text-brand-forest border border-brand-primary/20 shadow-xs'
                    : 'hover:bg-gray-100/80 text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Resurslar' : 'Ресурсы'}
              </button>

              {/* 5. Kompaniya (Mega Menu Trigger) */}
              <button
                type="button"
                onClick={() => setActiveMega((v) => (v === 'company' ? null : 'company'))}
                onMouseEnter={() => setActiveMega('company')}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                  activeMega === 'company'
                    ? 'bg-brand-primary/10 text-brand-forest border border-brand-primary/20 shadow-xs'
                    : 'hover:bg-gray-100/80 text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Kompaniya' : 'Компания'}
              </button>
            </nav>

            {/* Right Action: Language Switcher (UZ | RU) + Demo Olish Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Dual Segmented Language Pill */}
              <div className="flex items-center p-1 rounded-full bg-gray-100/90 border border-black/[0.06] text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('uz')}
                  className={`px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                    language === 'uz'
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-gray-500 hover:text-[#1A1D1F]'
                  }`}
                >
                  UZ
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                    language === 'ru'
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'text-gray-500 hover:text-[#1A1D1F]'
                  }`}
                >
                  RU
                </button>
              </div>

              {/* Demo Olish CTA Button */}
              <button
                type="button"
                onClick={() => openDemoModal('demo')}
                className="px-6 py-2.5 rounded-full bg-brand-primary text-white hover:bg-brand-deep font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-md shadow-brand-primary/20 hover:-translate-y-0.5 cursor-pointer select-none"
              >
                {language === 'uz' ? 'Demo olish' : 'Получить демо'}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-800"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Menyu"
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MEGA MENU 1: YECHIMLAR ===== */}
        {activeMega === 'solutions' && (
          <div
            className="bg-white border-b border-black/[0.06] rounded-b-[44px] sm:rounded-b-[56px] shadow-[0_35px_90px_rgba(0,0,0,0.14)] overflow-hidden transition-all duration-300"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-8 pb-12">
              <div className="grid lg:grid-cols-12 gap-10 items-stretch">
                {/* Left 8 cols: 3-Column Categories Grid */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-6">
                      {language === 'uz' ? 'DORIXONA VA TIBBIYOT BOSHQARUVI' : 'УПРАВЛЕНИЕ АПТЕКОЙ И МЕДИЦИНОЙ'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6">
                      <div className="flex flex-col gap-5">
                        {solCol1.map((it) => {
                          const Icon = it.icon
                          return (
                            <a
                              key={it.id}
                              href="#industries"
                              onClick={() => setActiveMega(null)}
                              className="flex items-center gap-3.5 group cursor-pointer"
                            >
                              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                                <Icon />
                              </span>
                              <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                                {it.name}
                              </span>
                            </a>
                          )
                        })}
                      </div>

                      <div className="flex flex-col gap-5">
                        {solCol2.map((it) => {
                          const Icon = it.icon
                          return (
                            <a
                              key={it.id}
                              href="#industries"
                              onClick={() => setActiveMega(null)}
                              className="flex items-center gap-3.5 group cursor-pointer"
                            >
                              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                                <Icon />
                              </span>
                              <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                                {it.name}
                              </span>
                            </a>
                          )
                        })}
                      </div>

                      <div className="flex flex-col gap-5">
                        {solCol3.map((it) => {
                          const Icon = it.icon
                          return (
                            <a
                              key={it.id}
                              href="#industries"
                              onClick={() => setActiveMega(null)}
                              className="flex items-center gap-3.5 group cursor-pointer"
                            >
                              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                                <Icon />
                              </span>
                              <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                                {it.name}
                              </span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: BOSHQA IMKONIYATLAR */}
                  <div className="mt-10 pt-8 border-t border-black/[0.04]">
                    <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-5">
                      {language === 'uz' ? 'BOSHQA IMKONIYATLAR' : 'ДРУГИЕ ВОЗМОЖНОСТИ'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4">
                      {solBottom.map((it) => {
                        const Icon = it.icon
                        return (
                          <a
                            key={it.id}
                            href="#solutions"
                            onClick={() => setActiveMega(null)}
                            className="flex items-center gap-3.5 group cursor-pointer"
                          >
                            <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                              <Icon />
                            </span>
                            <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                              {it.name}
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Right 4 cols: Phone Mockup Widget (Nyronx Lite) */}
                <div className="lg:col-span-4 flex justify-end">
                  <div className="w-full max-w-[340px] bg-[#F4F7F2] rounded-[36px] p-6 sm:p-7 flex flex-col items-center justify-between border border-brand-primary/10 text-center shadow-xs">
                    <div>
                      <h4 className="text-[17px] font-black text-[#1A1D1F] leading-snug">
                        {language === 'uz' ? (
                          <>
                            NYRONX Lite — Oddiy <br />
                            <span className="text-brand-primary">sotuv</span> va{' '}
                            <span className="text-brand-forest">dori</span> hisobi
                          </>
                        ) : (
                          <>
                            NYRONX Lite — Быстрые <br />
                            <span className="text-brand-primary">продажи</span> и{' '}
                            <span className="text-brand-forest">учет</span> лекарств
                          </>
                        )}
                      </h4>
                    </div>

                    {/* Realistic iPhone Screen Mockup */}
                    <div className="w-[200px] bg-white rounded-[32px] p-3 shadow-2xl border-[5px] border-brand-forest my-4 overflow-hidden relative">
                      <div className="w-14 h-3.5 bg-brand-forest rounded-full mx-auto mb-2 flex items-center justify-end px-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                      </div>

                      <div className="bg-[#F8FAF8] rounded-2xl p-2.5 text-left font-sans">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 text-[10px] font-bold text-[#1A1D1F]">
                            <span>Savatcha</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-brand-primary text-white text-[8px] flex items-center justify-center font-bold">
                              1
                            </span>
                          </div>
                          <span className="w-4 h-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-[9px] font-bold">
                            💊
                          </span>
                        </div>

                        <div className="bg-white rounded-xl p-2 border border-brand-primary/10 text-center mb-2 shadow-xs">
                          <span className="text-xs font-black text-brand-forest tracking-tight">
                            125 000{' '}
                            <span className="text-[9px] text-gray-400 font-semibold">UZS</span>
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-1 text-center font-bold text-[11px] text-gray-800">
                          {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '✓'].map((k) => (
                            <span
                              key={k}
                              className={`py-1 rounded-lg transition-colors ${
                                k === 'C'
                                  ? 'bg-red-50 text-red-500 font-black'
                                  : k === '✓'
                                  ? 'bg-brand-primary text-white font-black'
                                  : 'bg-white shadow-xs text-gray-800'
                              }`}
                            >
                              {k}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveMega(null)
                        openDemoModal('demo')
                      }}
                      className="w-full py-2.5 rounded-full bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs shadow-md shadow-brand-primary/25 transition-all cursor-pointer"
                    >
                      {language === 'uz' ? 'Ilovani sinab ko\'rish' : 'Попробовать приложение'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU 2: NIMA UCHUN NYRONX? ===== */}
        {activeMega === 'why' && (
          <div
            className="bg-white border-b border-black/[0.06] rounded-b-[44px] sm:rounded-b-[56px] shadow-[0_35px_90px_rgba(0,0,0,0.14)] overflow-hidden transition-all duration-300"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-8 pb-12">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                {/* Left 6.5 cols: 2-Column Core Features Grid */}
                <div className="lg:col-span-6">
                  <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-6">
                    {language === 'uz' ? 'NIMA UCHUN NYRONX?' : 'ПОЧЕМУ NYRONX?'}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="flex flex-col gap-6">
                      {whyCol1.map((it) => {
                        const Icon = it.icon
                        return (
                          <a
                            key={it.id}
                            href="#segments"
                            onClick={() => setActiveMega(null)}
                            className="flex items-center gap-3.5 group cursor-pointer"
                          >
                            <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                              <Icon />
                            </span>
                            <span className="text-[15px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                              {it.name}
                            </span>
                          </a>
                        )
                      })}
                    </div>

                    <div className="flex flex-col gap-6">
                      {whyCol2.map((it) => {
                        const Icon = it.icon
                        return (
                          <a
                            key={it.id}
                            href="#segments"
                            onClick={() => setActiveMega(null)}
                            className="flex items-center gap-3.5 group cursor-pointer"
                          >
                            <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                              <Icon />
                            </span>
                            <span className="text-[15px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                              {it.name}
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Right 5.5 cols: Case Study Banner Card */}
                <div className="lg:col-span-6 flex justify-end">
                  <div className="w-full bg-[#F4F7F2] rounded-[36px] p-5 sm:p-6 border border-brand-primary/10 shadow-xs flex flex-col sm:flex-row items-center gap-6 group">
                    <div className="w-full sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0 bg-gray-200 shadow-md relative">
                      <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                        alt="Nyronx interview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-full bg-white/90 text-brand-forest flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 text-left">
                      <h4 className="text-[16px] sm:text-[17px] font-black text-[#1A1D1F] leading-snug mb-2 tracking-tight group-hover:text-brand-forest transition-colors">
                        {language === 'uz'
                          ? 'NYRONX dasturi dorixonalar tarmog\'ida savdo hajmini 30 foizga oshirishga qanday yordam berdi'
                          : 'Как система NYRONX помогла сети аптек увеличить продажи на 30%'}
                      </h4>

                      <p className="text-xs text-gray-500 font-medium mb-4">
                        {language === 'uz'
                          ? '«Dori Dunyo» dorixonalar tarmog\'i ta\'sischilari bilan intervyu'
                          : 'Интервью с основателями сети аптек «Dori Dunyo»'}
                      </p>

                      <a
                        href="#trust"
                        onClick={() => setActiveMega(null)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary group-hover:text-brand-deep transition-colors"
                      >
                        <span>{language === 'uz' ? 'Intervyuni tomosha qilish' : 'Смотреть интервью'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">➔</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU 3: RESURSLAR ===== */}
        {activeMega === 'resources' && (
          <div
            className="bg-white border-b border-black/[0.06] rounded-b-[44px] sm:rounded-b-[56px] shadow-[0_35px_90px_rgba(0,0,0,0.14)] overflow-hidden transition-all duration-300"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-8 pb-12">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                {/* Left 6.5 cols: Resurslar & Hamkorlarga 2-Column Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                    {/* Col 1: Resurslar */}
                    <div>
                      <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-5">
                        {language === 'uz' ? 'RESURSLAR' : 'РЕСУРСЫ'}
                      </div>

                      <div className="flex flex-col gap-4">
                        {resCol1.map((it) => {
                          const Icon = it.icon
                          return (
                            <a
                              key={it.id}
                              href="#news"
                              onClick={() => setActiveMega(null)}
                              className="flex items-center gap-3.5 group cursor-pointer"
                            >
                              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                                <Icon />
                              </span>
                              <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                                {it.name}
                              </span>
                            </a>
                          )
                        })}
                      </div>
                    </div>

                    {/* Col 2: Hamkorlarga */}
                    <div>
                      <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-5">
                        {language === 'uz' ? 'HAMKORLARGA' : 'ПАРТНЕРАМ'}
                      </div>

                      <div className="flex flex-col gap-4">
                        {resCol2.map((it) => {
                          const Icon = it.icon
                          return (
                            <a
                              key={it.id}
                              href="#partnership"
                              onClick={() => setActiveMega(null)}
                              className="flex items-center gap-3.5 group cursor-pointer"
                            >
                              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                                <Icon />
                              </span>
                              <span className="text-[14.5px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                                {it.name}
                              </span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Customer Story Card */}
                <div className="lg:col-span-5 flex justify-end">
                  <div className="w-full bg-[#F4F7F2] rounded-[36px] p-5 sm:p-6 border border-brand-primary/10 shadow-xs flex flex-col sm:flex-row items-center gap-5 group">
                    <div className="w-full sm:w-44 h-36 rounded-2xl overflow-hidden shrink-0 bg-gray-200 shadow-md relative">
                      <img
                        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500&q=80"
                        alt="Customer story"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <span className="w-9 h-9 rounded-full bg-white/90 text-brand-forest flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 text-left">
                      <h4 className="text-[15px] sm:text-[16px] font-black text-[#1A1D1F] leading-snug mb-1.5 tracking-tight group-hover:text-brand-forest transition-colors">
                        {language === 'uz'
                          ? '«Pharma Plus»: muvaffaqiyat tarixi va NYRONX afzalliklari'
                          : '«Pharma Plus»: история успеха и преимущества NYRONX'}
                      </h4>

                      <p className="text-xs text-gray-500 font-medium mb-3">
                        {language === 'uz'
                          ? '«Pharma Plus» rahbariyati bilan intervyu'
                          : 'Интервью с руководством «Pharma Plus»'}
                      </p>

                      <a
                        href="#news"
                        onClick={() => setActiveMega(null)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary group-hover:text-brand-deep transition-colors"
                      >
                        <span>{language === 'uz' ? 'Intervyuni tomosha qilish' : 'Смотреть интервью'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">➔</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU 4: KOMPANIYA (Matching 4th Screenshot) ===== */}
        {activeMega === 'company' && (
          <div
            className="bg-white border-b border-black/[0.06] rounded-b-[44px] sm:rounded-b-[56px] shadow-[0_35px_90px_rgba(0,0,0,0.14)] overflow-hidden transition-all duration-300"
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-8 pb-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left 4 cols: Kompaniya Links */}
                <div className="lg:col-span-4">
                  <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#9AA1B2] mb-6">
                    {language === 'uz' ? 'KOMPANIYA' : 'КОМПАНИЯ'}
                  </div>

                  <div className="flex flex-col gap-6">
                    {compItems.map((it) => {
                      const Icon = it.icon
                      return (
                        <a
                          key={it.id}
                          href={it.href}
                          onClick={() => setActiveMega(null)}
                          className="flex items-center gap-3.5 group cursor-pointer"
                        >
                          <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                            <Icon />
                          </span>
                          <span className="text-[15px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-tight">
                            {it.name}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Right 8 cols: Team & Events Multi-Photo Showcase (Matching 4th Screenshot) */}
                <div className="lg:col-span-8 flex justify-end">
                  <div className="grid grid-cols-12 gap-3.5 w-full">
                    {/* Big Team Photo (Left 6 cols) */}
                    <div className="col-span-6 h-52 sm:h-60 rounded-[24px] overflow-hidden bg-gray-100 shadow-md group relative">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                        alt="Nyronx Jamoasi"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <span className="text-white text-xs font-bold">
                          {language === 'uz' ? 'NYRONX Jamoasi' : 'Команда NYRONX'}
                        </span>
                      </div>
                    </div>

                    {/* 2 Stacked Photos (Middle 3 cols) */}
                    <div className="col-span-3 flex flex-col gap-3.5">
                      <div className="h-[98px] sm:h-[113px] rounded-[20px] overflow-hidden bg-gray-100 shadow-sm group">
                        <img
                          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                          alt="Nyronx ofis"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-[98px] sm:h-[113px] rounded-[20px] overflow-hidden bg-gray-100 shadow-sm group">
                        <img
                          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80"
                          alt="Nyronx tadbir"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Tall Event/Keynote Photo (Right 3 cols) */}
                    <div className="col-span-3 h-52 sm:h-60 rounded-[24px] overflow-hidden bg-gray-100 shadow-md group relative">
                      <img
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80"
                        alt="Nyronx konferensiya"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                        <span className="text-white text-[11px] font-bold leading-tight">
                          {language === 'uz' ? 'MedTech Forum 2026' : 'MedTech Форум'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-24 bottom-6 lg:hidden z-50 overflow-y-auto bg-white/98 backdrop-blur-2xl border border-black/10 rounded-3xl shadow-2xl p-6">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('#industries')}
              className="text-left text-lg font-bold text-brand-ink py-3 border-b border-black/5 cursor-pointer"
            >
              {language === 'uz' ? 'Yechimlar' : 'Решения'}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#segments')}
              className="text-left text-lg font-bold text-brand-ink py-3 border-b border-black/5 cursor-pointer"
            >
              {language === 'uz' ? 'Nima uchun NYRONX?' : 'Почему NYRONX?'}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('prices', true)}
              className="text-left text-lg font-bold text-brand-primary py-3 border-b border-black/5 cursor-pointer"
            >
              {language === 'uz' ? 'Narxlar' : 'Цены'}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#news')}
              className="text-left text-lg font-bold text-brand-ink py-3 border-b border-black/5 cursor-pointer"
            >
              {language === 'uz' ? 'Resurslar' : 'Ресурсы'}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('#trust')}
              className="text-left text-lg font-bold text-brand-ink py-3 border-b border-black/5 cursor-pointer"
            >
              {language === 'uz' ? 'Kompaniya' : 'Компания'}
            </button>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  openDemoModal('demo')
                }}
                className="w-full py-3.5 rounded-2xl bg-brand-primary text-white font-bold text-base shadow-lg shadow-brand-primary/25"
              >
                {language === 'uz' ? 'Demo olish' : 'Получить демо'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

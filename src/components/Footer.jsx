import { useState, useEffect } from 'react'
import { Logo } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t, language } = useLanguage()
  const year = new Date().getFullYear()

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-[#FAFAFA] font-sans pt-16 pb-12 overflow-hidden border-t border-black/[0.04]">
      {/* 1. Interactive Dashboard Mockup Card with Center "Sinab ko'rish" CTA (Billz.io style) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-[40px] sm:rounded-[52px] bg-white border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-14 overflow-hidden select-none">
          {/* Dashboard Header Bar */}
          <div className="grid lg:grid-cols-12 gap-8 items-start opacity-75 pointer-events-none filter blur-[0.4px] sm:blur-none">
            {/* Left Mock Sidebar */}
            <div className="lg:col-span-3 hidden lg:flex flex-col gap-3 border-r border-black/[0.06] pr-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-brand-primary text-white flex items-center justify-center font-black text-sm">
                  N
                </div>
                <span className="font-black text-lg tracking-tight text-gray-900">NYRONX</span>
              </div>

              {[
                { name: language === 'uz' ? 'Dorilar / Tovarlar' : 'Товары / Лекарства', icon: '📦', active: true },
                { name: language === 'uz' ? 'Savdo / Kassa' : 'Продажи / Касса', icon: '🛒' },
                { name: language === 'uz' ? 'Mijozlar' : 'Клиенты', icon: '👤' },
                { name: language === 'uz' ? 'Retseptlar' : 'Рецепты', icon: '📋' },
                { name: language === 'uz' ? 'Hisobotlar' : 'Отчеты', icon: '📊' },
                { name: language === 'uz' ? 'Moliya' : 'Финансы', icon: '💳' },
                { name: language === 'uz' ? 'Sozlamalar' : 'Настройки', icon: '⚙️' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    item.active
                      ? 'bg-brand-primary/10 text-brand-primary font-bold'
                      : 'text-gray-500'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Right Mock Content Area */}
            <div className="lg:col-span-9 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  {language === 'uz' ? 'Katalog va zaxira hisobi' : 'Каталог и учет остатков'}
                </h3>
                <span className="text-xs text-brand-primary font-bold cursor-pointer hidden sm:inline">
                  ▲ {language === 'uz' ? 'Statistikani ko\'rsatish' : 'Показать статистику'}
                </span>
              </div>

              {/* Metric Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-black/[0.04]">
                  <div className="text-xl mb-1">💊</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {language === 'uz' ? 'Assortiment' : 'Наименований'}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-brand-primary">15 000 ta</div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-black/[0.04]">
                  <div className="text-xl mb-1">📦</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {language === 'uz' ? 'Zaxiradagi birlik' : 'Товарных единиц'}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-gray-900">50 000 dona</div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-black/[0.04]">
                  <div className="text-xl mb-1">💰</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {language === 'uz' ? 'Kirim summasi' : 'Сумма поставки'}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-brand-primary">5.5 mlrd</div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-black/[0.04]">
                  <div className="text-xl mb-1">📈</div>
                  <div className="text-xs text-gray-500 font-medium">
                    {language === 'uz' ? 'Chakana savdo' : 'Сумма продажи'}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-gray-900">7.5 mlrd</div>
                </div>
              </div>

              {/* Table Toolbar Preview */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-black/[0.04]">
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
                  <span className="text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-lg">
                    {language === 'uz' ? 'Barchasi (15 000)' : 'Все (15 000)'}
                  </span>
                  <span className="hidden sm:inline">
                    {language === 'uz' ? 'Kam qolganlar (700)' : 'Остаток (700)'}
                  </span>
                  <span className="hidden sm:inline">
                    {language === 'uz' ? 'Nol qoldiq (12)' : 'Нулевой (12)'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-8 px-4 rounded-lg bg-gray-100 text-xs text-gray-400 flex items-center">
                    🔍 {language === 'uz' ? 'Nom, shtrix-kod...' : 'Поиск...'}
                  </div>
                  <div className="h-8 px-4 rounded-lg bg-brand-primary/10 text-brand-primary font-bold text-xs flex items-center">
                    + {language === 'uz' ? 'Yaratish' : 'Создать'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Large "Sinab ko'rish" Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/[0.02] backdrop-blur-[1px] z-20">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full bg-brand-primary text-white font-black text-lg sm:text-xl shadow-[0_12px_40px_rgba(31,165,108,0.45)] hover:shadow-[0_16px_50px_rgba(31,165,108,0.6)] hover:bg-brand-deep hover:scale-105 active:scale-95 transition-all duration-300 tracking-wide"
            >
              {language === 'uz' ? 'Sinab ko\'rish' : 'Попробовать бесплатно'}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Clean Modern Footer Bar (Copyright + Region + Socials) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-black/[0.06] text-sm text-gray-500">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-center md:text-left font-medium">
            <span>© {year} NYRONX.</span>
            <span>{language === 'uz' ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}</span>
          </div>

          {/* Region selector & Social Media Circles */}
          <div className="flex items-center gap-5">
            {/* Region dropdown badge */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 border border-black/[0.06] text-xs font-bold text-gray-700 select-none">
              <span>🇺🇿 O'zbekiston</span>
              <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Social Icons (Facebook, Instagram, Telegram, YouTube) */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#405DE6] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/nyronx"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.3-.616.3l.2-3.03 5.485-4.96c.238-.21-.052-.33-.37-.12l-6.78 4.27-2.94-.92c-.64-.2-.65-.64.13-.95l11.5-4.43c.53-.2 1 .13.88.86z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Floating Scroll-to-Top Button (at bottom right) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Yuqoriga qaytish"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white text-gray-800 border border-black/10 shadow-2xl hover:bg-brand-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { Logo, ChevronDown } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

function MenuPanel({ items }) {
  if (!items) return null
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3 p-5">
      {items.map((it) => (
        <a
          key={it.title}
          href="#"
          className="group block rounded-2xl p-3 hover:bg-brand-primary/[0.06] transition-colors"
        >
          <div className="text-[14px] font-bold text-brand-ink group-hover:text-brand-primary mb-1 transition-colors">
            {it.title}
          </div>
          <div className="text-[12px] text-brand-slate leading-snug">{it.blurb}</div>
        </a>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { key: 'solutions', label: t('navbar.solutions'), dropdown: t('navbar.solutionsItems') },
    { key: 'serve', label: t('navbar.serve'), dropdown: t('navbar.serveItems') },
    { key: 'pricing', label: t('navbar.pricing'), href: '#pricing' },
    { key: 'news', label: t('navbar.news'), href: '#news' },
    { key: 'about', label: t('navbar.about'), href: '#about' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none" onMouseLeave={() => setOpenMenu(null)}>
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav className="rounded-full bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.06)] px-5 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0 inline-flex items-center text-brand-ink">
            <Logo className="h-8" />
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7 text-[15px] font-bold text-[#1A1D1F]">
            {navLinks.map((l) =>
              l.dropdown ? (
                <li
                  key={l.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(l.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => setOpenMenu((m) => (m === l.key ? null : l.key))}
                    className={`flex items-center gap-1.5 py-1 transition-colors ${
                      openMenu === l.key
                        ? 'text-brand-primary'
                        : 'text-gray-700 hover:text-brand-primary'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === l.key}
                  >
                    <span>{l.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openMenu === l.key ? 'rotate-180 text-brand-primary' : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {openMenu === l.key && (
                    <div
                      className="absolute top-full z-[60] pt-4"
                      style={{
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '540px',
                      }}
                    >
                      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/8 overflow-hidden">
                        <MenuPanel items={l.dropdown} />
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={l.key}>
                  <a
                    href={l.href}
                    onMouseEnter={() => setOpenMenu(null)}
                    className="text-gray-700 hover:text-brand-primary transition-colors py-1 block"
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Right Action: Language + Demo Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
              className="inline-flex h-9 items-center justify-center rounded-full px-3 text-xs font-bold text-brand-ink hover:bg-black/5 transition-colors uppercase border border-black/5"
            >
              {language === 'uz' ? 'RU' : 'UZ'}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-primary/10 text-brand-forest border border-brand-primary/20 hover:bg-brand-primary hover:text-white font-bold text-[14px] transition-all hover:shadow-md"
            >
              {t('navbar.contact') || 'Demo olish'}
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-ink bg-gray-100"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 bottom-6 lg:hidden overflow-y-auto bg-white/98 backdrop-blur-2xl border border-black/10 rounded-3xl shadow-2xl p-6 pointer-events-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.key}
                href={l.href || '#'}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-brand-ink py-3 border-b border-black/5"
              >
                {l.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl bg-brand-primary text-white px-6 py-3.5 text-base font-bold shadow-lg shadow-brand-primary/20"
              >
                {t('navbar.contact')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

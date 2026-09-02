import { useState, useEffect } from 'react'
import { Logo, ChevronDown } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

function MenuPanel({ items, onItemClick }) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-4 p-5">
      {items.map((it) => (
        <a
          key={it.title}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (onItemClick) onItemClick(it)
          }}
          className="group block rounded-2xl px-3 py-2.5 hover:bg-brand-primary/[0.06] transition-colors"
        >
          <div className="text-[14px] font-semibold text-brand-ink group-hover:text-brand-primary mb-0.5 transition-colors">
            {it.title}
          </div>
          {it.blurb && (
            <div className="text-[12px] text-brand-slate leading-snug">{it.blurb}</div>
          )}
        </a>
      ))}
    </div>
  )
}

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { openDemoModal } = useModal()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navNavbar = t('navbar') || {}
  const serveItems = navNavbar.serveItems || []
  const solutionsItems = navNavbar.solutionsItems || []

  const handleNavClick = (target, isPage = false) => {
    setOpenMenu(null)
    setMobileOpen(false)
    if (isPage && onNavigate) {
      onNavigate(target)
    } else if (onNavigate) {
      if (currentPage !== 'home') {
        onNavigate('home')
        setTimeout(() => {
          const el = document.querySelector(target)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.querySelector(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { key: 'serve', label: navNavbar.serve || 'Nima uchun Nyronx?', dropdown: serveItems },
    { key: 'solutions', label: navNavbar.solutions || 'Yechimlar', dropdown: solutionsItems },
    { key: 'prices', label: navNavbar.pricing || 'Narxlar', page: 'prices' },
    { key: 'partnership', label: navNavbar.partnership || 'Hamkorlik', href: '#partnership' },
    { key: 'news', label: navNavbar.news || 'Resurslar', href: '#news' },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 py-4 font-sans select-none"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className="relative flex items-center gap-2 rounded-full px-4 py-2 bg-white"
          style={{
            filter:
              'drop-shadow(0 1px 3px rgba(14,26,20,0.06)) drop-shadow(0 0 8px rgba(14,26,20,0.06))',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home', true)
            }}
            className="shrink-0 ml-1.5 inline-flex items-center text-brand-ink hover:opacity-90 transition-opacity"
          >
            <Logo className="h-8 w-auto" />
          </a>

          {/* Desktop links */}
          <ul className="ml-6 hidden lg:flex items-center gap-1 text-sm font-semibold">
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
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 font-semibold transition-colors cursor-pointer ${openMenu === l.key
                        ? 'text-brand-ink bg-gray-100/80'
                        : 'text-brand-slate hover:text-brand-ink hover:bg-gray-50'
                      }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === l.key}
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === l.key ? 'rotate-180 text-brand-ink' : ''
                        }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {openMenu === l.key && (() => {
                    const h = l.key === 'serve' ? 360 : 304
                    return (
                      <div
                        className="absolute top-full z-[60]"
                        style={{
                          left: 'calc(50% - 92px)',
                          width: '560px',
                          marginTop: '-6px',
                        }}
                      >
                        <div
                          style={{
                            width: '560px',
                            height: `${h}px`,
                            background: '#ffffff',
                            clipPath: `path("M 26 0 L 158 0 Q 172 0 172 14 L 150 14 Q 140 14 140 24 Q 140 34 150 34 L 532 34 Q 560 34 560 62 L 560 ${h - 28
                              } Q 560 ${h} 532 ${h} L 28 ${h} Q 0 ${h} 0 ${h - 28
                              } L 0 62 Q 0 34 28 34 L 34 34 Q 44 34 44 24 Q 44 14 34 14 L 12 14 Q 12 0 26 0 Z")`,
                          }}
                        >
                          <div className="pt-12">
                            <MenuPanel
                              items={l.dropdown}
                              onItemClick={() => setOpenMenu(null)}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </li>
              ) : l.page ? (
                <li key={l.key}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(l.page, true)}
                    onMouseEnter={() => setOpenMenu(null)}
                    className={`block rounded-full px-3.5 py-2 font-semibold transition-colors cursor-pointer ${currentPage === l.page
                        ? 'text-brand-ink font-bold bg-gray-100/80'
                        : 'text-brand-slate hover:text-brand-ink hover:bg-gray-50'
                      }`}
                  >
                    {l.label}
                  </button>
                </li>
              ) : (
                <li key={l.key}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(l.href)
                    }}
                    onMouseEnter={() => setOpenMenu(null)}
                    className="block rounded-full px-3.5 py-2 font-semibold text-brand-slate hover:text-brand-ink hover:bg-gray-50 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Right side: Language Switcher + Demo CTA */}
          <div className="ml-auto flex items-center gap-2.5">
            {/* Dual Segmented Language Pill */}
            <div className="flex items-center p-0.5 rounded-full bg-gray-100/90 border border-black/[0.06] text-xs">
              <button
                type="button"
                onClick={() => setLanguage('uz')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${language === 'uz'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-gray-500 hover:text-brand-ink'
                  }`}
              >
                UZ
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${language === 'ru'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-gray-500 hover:text-brand-ink'
                  }`}
              >
                RU
              </button>
            </div>

            {/* Demo Olish CTA Button (Contact us / Demo) */}
            <button
              type="button"
              onClick={() => openDemoModal('demo')}
              className="inline-flex h-9 items-center rounded-full px-5 text-sm font-semibold bg-brand-primary text-white hover:bg-brand-deep transition-all duration-200 cursor-pointer shadow-md shadow-brand-primary/20 hover:-translate-y-0.5"
            >
              {navNavbar.contact || (language === 'uz' ? 'Demo olish' : 'Получить демо')}
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-ink hover:bg-gray-100"
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

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-x-0 top-[68px] bottom-0 lg:hidden overflow-y-auto"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-2 font-semibold text-brand-ink">
            {navLinks.map((l) =>
              l.page ? (
                <button
                  key={l.key}
                  onClick={() => handleNavClick(l.page, true)}
                  className="text-left text-base text-brand-ink py-3 border-b border-black/5"
                >
                  {l.label}
                </button>
              ) : (
                <a
                  key={l.key}
                  href={l.href || '#'}
                  onClick={(e) => {
                    if (l.href) {
                      e.preventDefault()
                      handleNavClick(l.href)
                    } else {
                      setMobileOpen(false)
                    }
                  }}
                  className="text-base text-brand-ink py-3 border-b border-black/5"
                >
                  {l.label}
                </a>
              )
            )}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                openDemoModal('demo')
              }}
              className="inline-flex items-center justify-center rounded-full bg-brand-primary text-white px-5 py-3 text-sm font-semibold mt-4 shadow-md"
            >
              {navNavbar.contact || (language === 'uz' ? 'Demo olish' : 'Получить демо')}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
import { useState, useEffect } from 'react'
import { Logo, ChevronDown } from './Icons.jsx'

const serveItems = [
  { title: 'Pharmacy Benefit Managers', blurb: 'Take control of your future' },
  { title: 'Pharmacies', blurb: 'Solutions designed to strengthen your business' },
  { title: 'Health Systems', blurb: 'Build on your expertise while taking advantage of ours' },
  { title: 'Employers', blurb: 'Take control of your pharmacy benefit strategy' },
  { title: 'Health Plans', blurb: "Rethink what's possible with your pharmacy benefits" },
  { title: 'Consumers', blurb: 'Making pharmacy more affordable, accessible, and effortless' },
]

const solutionsItems = [
  { title: 'Nyronx Enterprise', blurb: 'Modern adjudication built for scale' },
  { title: 'Nyronx Business Intelligence', blurb: 'Real-time analytics and reporting' },
  { title: 'Nyronx Price AI', blurb: 'AI-driven pricing optimization' },
  { title: 'Discount Cards', blurb: 'Flexible savings programs' },
  { title: 'Nyronx Autosave', blurb: 'Lowest price, automatically' },
  { title: 'Pharmacy Solutions', blurb: 'Tools for pharmacy partners' },
]

function MenuPanel({ items }) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-4 p-5">
      {items.map((it) => (
        <a key={it.title} href="#" className="group block rounded-2xl px-3 py-2.5 hover:bg-brand-primary/[0.06] transition-colors">
          <div className="text-[14px] font-semibold text-brand-ink group-hover:text-brand-primary mb-0.5 transition-colors">
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { key: 'serve', label: 'Who we serve', dropdown: serveItems },
    { key: 'solutions', label: 'Solutions', dropdown: solutionsItems },
    { key: 'work', label: 'Working with us', href: '#partnership' },
    { key: 'news', label: 'News & insights', href: '#news' },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 py-4"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className="relative flex items-center gap-2 rounded-full px-3 py-2"
          style={{
            background: '#ffffff',
            filter:
              'drop-shadow(0 1px 3px rgba(14,26,20,0.06)) drop-shadow(0 0 8px rgba(14,26,20,0.06))',
          }}
        >
          <a href="#" className="shrink-0 ml-1.5 inline-flex items-center text-brand-ink">
            <Logo className="h-8" />
          </a>

          {/* Desktop links */}
          <ul className="ml-6 hidden lg:flex items-center gap-1 text-sm">
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
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 font-medium transition-colors ${
                      openMenu === l.key
                        ? 'text-brand-ink'
                        : 'text-brand-slate hover:text-brand-ink'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openMenu === l.key}
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${openMenu === l.key ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Per-button dropdown — clipped to a single tab+panel silhouette.
                      NO shadow here. The parent <nav>'s filter:drop-shadow renders nav + dropdown
                      as ONE combined alpha, so the shadow naturally traces the outside of the
                      union (pill + bridge + panel) and disappears where they overlap. That's why
                      pill and bridge read as one entity instead of two stacked layers. */}
                  {openMenu === l.key && (() => {
                    // Per-menu height — serve has 2-line blurbs, solutions has 1-line.
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
                            clipPath: `path("M 26 0 L 158 0 Q 172 0 172 14 L 150 14 Q 140 14 140 24 Q 140 34 150 34 L 532 34 Q 560 34 560 62 L 560 ${h - 28} Q 560 ${h} 532 ${h} L 28 ${h} Q 0 ${h} 0 ${h - 28} L 0 62 Q 0 34 28 34 L 34 34 Q 44 34 44 24 Q 44 14 34 14 L 12 14 Q 12 0 26 0 Z")`,
                          }}
                        >
                          <div className="pt-12">
                            <MenuPanel items={l.dropdown} />
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </li>
              ) : (
                <li key={l.key}>
                  <a
                    href={l.href}
                    onMouseEnter={() => setOpenMenu(null)}
                    className="block rounded-full px-3.5 py-2 font-medium text-brand-slate hover:text-brand-ink transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <a
              href="#about"
              className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-brand-slate hover:text-brand-ink transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold bg-brand-primary text-white hover:bg-brand-deep transition-colors"
              style={{ boxShadow: '0 8px 24px -8px rgba(31,165,108,0.55)' }}
            >
              Contact us
            </a>
            <button
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-ink"
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
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((l) => (
              <a
                key={l.key}
                href={l.href || '#'}
                onClick={() => setMobileOpen(false)}
                className="text-base text-brand-ink py-3 border-b border-black/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="text-base text-brand-ink py-3 border-b border-black/5"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-brand-primary text-white px-5 py-3 text-sm font-semibold mt-4"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

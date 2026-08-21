import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

// Professional Vector SVG Icons (Flaticon style) for each Medical/Pharmacy category
const CategoryIcons = {
  retail: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z" />
      <path d="M8.5 8.5l7 7" />
      <path d="M4 14l2-2" />
      <path d="M12 6l2-2" />
    </svg>
  ),
  clinic: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      <path d="M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </svg>
  ),
  chain: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
      <path d="M9 7h6" />
      <path d="M12 4v6" />
    </svg>
  ),
  distributor: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  dental: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6 2 9.5.5 3 2 4.5 4 4.5s3.5-1.5 4-4.5c.5-3.5 2-6.5 2-9.5 0-3.5-2.5-6-6-6z" />
      <path d="M12 2v6" />
    </svg>
  ),
  lab: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 2v7.5L4.5 20A2 2 0 006 23h12a2 2 0 001.5-3L14 9.5V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
      <circle cx="10" cy="18.5" r=".8" fill="currentColor" />
      <circle cx="14" cy="17.5" r=".8" fill="currentColor" />
    </svg>
  ),
  herbal: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 014 13C4 7 11 3 20 3c0 9-4 16-10 17z" />
      <path d="M11 20l5-9" />
    </svg>
  ),
  diagnostic: ({ className = 'w-6 h-6' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M6 10h2.5l1.5-3 2.5 7 2-4h3.5" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  ),
}

// Custom organic frame shapes (border-radius) for each category like on Billz.io
const categoryShapes = {
  retail: '85px 30px 65px 40px',
  clinic: '40px 90px 40px 90px',
  chain: '95px 40px 80px 30px',
  distributor: '30px 85px 95px 40px',
  dental: '75px 50px 30px 85px',
  lab: '40px 85px 65px 30px',
  herbal: '85px 30px 50px 85px',
  diagnostic: '50px 85px 40px 75px',
}

export default function IndustryFit() {
  const { t, language } = useLanguage()
  const { openDemoModal } = useModal()

  const categories = t('industryFit.categories') || []
  const [selectedId, setSelectedId] = useState(categories[0]?.id || 'retail')

  const activeCategory = categories.find((c) => c.id === selectedId) || categories[0] || {}
  const ActiveIcon = CategoryIcons[selectedId] || CategoryIcons.retail
  const activeBorderRadius = categoryShapes[selectedId] || '60px 40px 60px 40px'

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title and 2-Column Categories Grid */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-4xl lg:text-[48px] font-black text-[#1A1D1F] leading-[1.15] tracking-tight mb-8">
              <span>{t('industryFit.titlePart1')} </span>
              <span className="text-brand-primary">{t('industryFit.titlePart2')} </span>
              <span>{t('industryFit.titlePart3')}</span>
            </h2>

            {/* 2-Column Pill Buttons Grid (Switches on Hover & Click) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {categories.map((cat) => {
                const isActive = cat.id === selectedId
                const IconComponent = CategoryIcons[cat.id] || CategoryIcons.retail
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setSelectedId(cat.id)}
                    onClick={() => setSelectedId(cat.id)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl sm:rounded-full text-left transition-all duration-300 border group cursor-pointer ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-forest border-brand-primary/40 font-bold shadow-sm ring-2 ring-brand-primary/15 transform -translate-y-0.5'
                        : 'bg-[#F8F9FA] text-gray-800 border-black/[0.04] hover:bg-gray-100 hover:border-black/10 font-semibold'
                    }`}
                  >
                    {/* Vector SVG Icon */}
                    <span
                      className={`p-2 rounded-xl shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-brand-primary text-white shadow-sm'
                          : 'bg-white text-gray-600 group-hover:text-brand-primary group-hover:bg-brand-primary/10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </span>

                    <span className="text-sm sm:text-base leading-snug">{cat.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Morphing Curved Showcase Image */}
          <div className="lg:col-span-5">
            <div
              className="relative h-[420px] sm:h-[500px] lg:h-[540px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-black/5 bg-[#1A1D1F] group"
              style={{
                borderRadius: activeBorderRadius,
                transition: 'border-radius 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease',
              }}
            >
              {/* Dynamic Image with Smooth Fade & Morph */}
              {categories.map((cat) => (
                <img
                  key={cat.id}
                  src={cat.img}
                  alt={cat.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    cat.id === selectedId
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Bottom Floating Info Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <ActiveIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-bold text-base text-[#1A1D1F] leading-tight">
                      {activeCategory.name}
                    </h4>
                    <p className="text-xs text-brand-primary font-semibold mt-0.5">
                      {language === 'uz' ? '✓ 100% Moslashtirilgan yechim' : '✓ 100% Адаптированное решение'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDemoModal('consultation')}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand-primary text-white text-xs font-bold hover:bg-brand-deep transition-colors shadow-sm cursor-pointer"
                >
                  {language === 'uz' ? 'Ulash' : 'Подключить'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

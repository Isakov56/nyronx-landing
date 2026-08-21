import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const brandLogos = [
  { name: 'BARAKA PHARMA', tag: 'DORIXONA', color: '#1FA56C', icon: '✦' },
  { name: 'MEDLIFE CLINIC', tag: 'KLINIKA', color: '#0066FF', icon: '✚' },
  { name: 'DORI DUNYO', tag: 'TARMOG\'', color: '#E11D48', icon: '❖' },
  { name: 'AL-SHIFA MED', tag: 'MARKAZ', color: '#0D9488', icon: '❋' },
  { name: 'UZPHARM GROUP', tag: 'YETKAZIB BERUVCHI', color: '#0284C7', icon: '▲' },
  { name: 'AVICENNA PHARM', tag: 'DORIXONA', color: '#16A34A', icon: '✚' },
  { name: 'MEDEXPRESS', tag: 'KLINIKA', color: '#EA580C', icon: '◆' },
  { name: 'SOG\'LOM HAYOT', tag: 'TIBBIYOT', color: '#8B5CF6', icon: '●' },
  { name: 'GRAND PHARM', tag: 'DORIXONA', color: '#2563EB', icon: '✦' },
  { name: 'PHARMA PLUS', tag: 'LOGISTIKA', color: '#4F46E5', icon: '❖' },
]

export default function TrustMarquee() {
  const { t } = useLanguage()

  const row1Data = t('trustMarquee.row1') || []
  const row2Data = t('trustMarquee.row2') || []
  const allReviews = [...row1Data, ...row2Data]
  const brands = [...brandLogos, ...brandLogos, ...brandLogos]

  // Carousel state
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStart = useRef(null)
  const isDragging = useRef(false)

  // Scroll to active card
  useEffect(() => {
    if (!trackRef.current) return
    const track = trackRef.current
    const card = track.children[index]
    if (!card) return
    const scrollLeft = card.offsetLeft - 16 // small left padding
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [index])

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
    isDragging.current = true
  }
  const handleTouchEnd = (e) => {
    if (!isDragging.current || touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && index < allReviews.length - 1) {
        setIndex(index + 1)
      } else if (diff < 0 && index > 0) {
        setIndex(index - 1)
      }
    }
    touchStart.current = null
    isDragging.current = false
  }

  // Mouse drag handlers (desktop)
  const mouseStart = useRef(null)
  const handleMouseDown = (e) => {
    mouseStart.current = e.clientX
    isDragging.current = true
    e.preventDefault()
  }
  const handleMouseUp = (e) => {
    if (!isDragging.current || mouseStart.current === null) return
    const diff = mouseStart.current - e.clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && index < allReviews.length - 1) {
        setIndex(index + 1)
      } else if (diff < 0 && index > 0) {
        setIndex(index - 1)
      }
    }
    mouseStart.current = null
    isDragging.current = false
  }

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-black/[0.04] overflow-hidden font-sans">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-12 px-4">
        <h2 className="text-[32px] sm:text-4xl lg:text-[46px] font-black text-[#1A1D1F] leading-[1.2] tracking-tight mb-4">
          <span className="text-brand-primary">{t('trustMarquee.count')}</span>{' '}
          <span className="text-gray-400 font-bold">{t('trustMarquee.titleLead')}</span>{' '}
          <span>{t('trustMarquee.titleMain')}</span>
        </h2>
      </div>

      {/* Brand Logos Infinite Marquee Bar */}
      <div className="relative mb-12 lg:mb-14 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        <div className="flex gap-0 w-max animate-marquee-brands hover:[animation-play-state:paused] py-3">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-3.5 mx-3 rounded-2xl bg-white/70 hover:bg-white border border-black/[0.04] hover:border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 cursor-pointer select-none group shrink-0"
            >
              <span
                className="text-lg font-black transition-transform duration-300 group-hover:scale-110"
                style={{ color: brand.color }}
              >
                {brand.icon}
              </span>
              <span className="font-black text-base sm:text-lg tracking-wider text-gray-800 group-hover:text-black transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SWIPEABLE TESTIMONIAL CAROUSEL ===== */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left/Right edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-20 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-20 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        {/* Carousel track */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-2.5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 sm:px-6 pb-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allReviews.map((item, i) => (
            <div
              key={i}
              className={`snap-start flex-shrink-0 w-[85%] sm:w-[380px] lg:w-[420px] bg-white rounded-[24px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between select-none ${
                i === index
                  ? 'border-brand-primary/25 shadow-xl scale-[1.02]'
                  : 'border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg'
              }`}
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-black/5"
                  loading="lazy"
                  draggable="false"
                />
                <div>
                  <h4 className="font-bold text-[15px] text-[#1A1D1F] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
                {/* Star rating */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 1l2.39 6.2H19l-5.3 4.1 1.9 6.7L10 14.2 4.4 18l1.9-6.7L1 7.2h6.61z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review text */}
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className={`hidden sm:flex absolute -left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-black/10 shadow-lg items-center justify-center transition-all cursor-pointer ${
            index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-xl'
          }`}
          aria-label="Previous"
        >
          <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => setIndex(Math.min(allReviews.length - 1, index + 1))}
          disabled={index === allReviews.length - 1}
          className={`hidden sm:flex absolute -right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-black/10 shadow-lg items-center justify-center transition-all cursor-pointer ${
            index === allReviews.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-xl'
          }`}
          aria-label="Next"
        >
          <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {allReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? 'w-7 h-2 bg-brand-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Marquee Animations CSS */}
      <style>{`
        @keyframes marqueeBrands {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-brands {
          animation: marqueeBrands 90s linear infinite;
        }
      `}</style>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

export default function InAction() {
  const { t, language } = useLanguage()
  const { openDemoModal } = useModal()

  const slidesData = t('inAction.slides') || []
  const images = [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=80',
  ]

  const tabTitles = language === 'uz'
    ? ['Mustaqil dorixonalar', 'Klinika va parvarish', 'Laboratoriya va tarmoqlar']
    : ['Независимые аптеки', 'Клиники и уход', 'Лаборатории и сети']

  const slides = slidesData.map((s, i) => ({
    ...s,
    tabTitle: tabTitles[i] || s.caption,
    img: images[i],
  }))

  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance
  useEffect(() => {
    setProgress(0)
    const interval = 50
    const duration = 6000
    const step = (interval / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1)
          setIndex((current) => (current + 1) % slides.length)
          return 0
        }
        return prev + step
      })
    }, interval)

    return () => clearInterval(timer)
  }, [index, slides.length])

  // Swipe support
  const touchStart = useRef(null)
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) {
      if (diff > 0 && index < slides.length - 1) {
        goTo(index + 1)
      } else if (diff < 0 && index > 0) {
        goTo(index - 1)
      }
    }
    touchStart.current = null
  }

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
    setProgress(0)
  }

  return (
    <section 
      id="inaction" 
      className="h-screen max-h-[960px] min-h-[640px] py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-brand-cream font-sans overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
        {/* Section Header */}
        <div className="text-center mb-3 sm:mb-5 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-[11px] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            {t('inAction.chapter')}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1D1F] leading-tight tracking-tight">
            {language === 'uz' ? (
              <>
                Nyronx ni <span className="text-brand-accent">ish jarayonida</span> ko'ring
              </>
            ) : (
              <>
                Увидьте Nyronx <span className="text-brand-accent">в действии</span>
              </>
            )}
          </h2>
        </div>

        {/* ===== CAROUSEL DEVICE FRAME ===== */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 max-h-[65vh] flex flex-col">
          <div
            className="relative w-full h-full rounded-2xl lg:rounded-[24px] overflow-hidden border border-black/10 shadow-2xl bg-[#1A1D1F] flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Browser Bar */}
            <div className="h-8 sm:h-9 bg-black/60 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between z-30 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[11px] font-mono text-white/50 tracking-wider hidden sm:block">
                app.nyronx.uz · {slides[index]?.caption}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] font-bold text-brand-mint uppercase tracking-wider">
                  {language === 'uz' ? 'Jonli tizim' : 'Онлайн система'}
                </span>
              </div>
            </div>

            {/* Slide content area */}
            <div className="relative flex-1 w-full h-full overflow-hidden">
              {/* Background images */}
              {slides.map((s, i) => (
                <img
                  key={s.img}
                  src={s.img}
                  alt={s.caption}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent hidden sm:block pointer-events-none" />

              {/* Bottom Elements: CTA & Metric */}
              <div className="absolute bottom-20 sm:bottom-24 left-4 sm:left-6 right-4 sm:right-6 z-20 flex items-end justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={() => openDemoModal('consultation')}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-brand-primary text-white px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold hover:bg-brand-deep transition-all shadow-xl shadow-brand-primary/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t('inAction.cta')}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <div className="bg-white/90 backdrop-blur-xl border border-white/40 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl max-w-[200px] sm:max-w-[240px]">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-0.5 line-clamp-1">
                    {slides[index]?.caption}
                  </p>
                  <div className="text-base sm:text-2xl font-black text-[#1A1D1F] tracking-tight">
                    {slides[index]?.metric}
                  </div>
                </div>
              </div>

              {/* TABS (Bottom area) */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-3 sm:px-5 pb-3 sm:pb-4">
                <div className="grid grid-cols-3 gap-2">
                  {slides.map((s, i) => {
                    const isActive = i === index
                    return (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`relative text-left p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 cursor-pointer backdrop-blur-md overflow-hidden ${
                          isActive
                            ? 'bg-brand-forest/90 text-white border-brand-accent/30 shadow-lg shadow-black/20'
                            : 'bg-white/15 text-white/90 border-white/15 hover:bg-white/25'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span
                            className={`font-mono text-[9px] sm:text-[11px] font-bold ${
                              isActive ? 'text-brand-mint' : 'text-brand-accent'
                            }`}
                          >
                            0{i + 1}
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-ping" />
                          )}
                        </div>
                        <div className="font-bold text-[11px] sm:text-xs leading-snug line-clamp-1">
                          {s.tabTitle}
                        </div>

                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 overflow-hidden">
                            <div
                              className="h-full bg-brand-mint transition-all duration-75"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goTo(index > 0 ? index - 1 : slides.length - 1)}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-black/10 shadow-lg items-center justify-center text-brand-ink hover:bg-gray-50 hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(index < slides.length - 1 ? index + 1 : 0)}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-black/10 shadow-lg items-center justify-center text-brand-ink hover:bg-gray-50 hover:scale-105 transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

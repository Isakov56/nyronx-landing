import { useState, useEffect } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function InAction() {
  const { t } = useLanguage()

  const slidesData = t('inAction.slides') || []
  const images = [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=80',
  ]

  const tabTitles = [
    'Mustaqil dorixonalar',
    'Klinika va parvarish',
    'Laboratoriya va tarmoqlar',
  ]

  const slides = slidesData.map((s, i) => ({
    ...s,
    tabTitle: tabTitles[i] || s.caption,
    img: images[i],
  }))

  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance timer with progress bar
  useEffect(() => {
    setProgress(0)
    const interval = 50 // ms
    const duration = 5000 // 5s
    const step = (interval / duration) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIndex((current) => (current + 1) % slides.length)
          return 0
        }
        return prev + step
      })
    }, interval)

    return () => clearInterval(timer)
  }, [index, slides.length])

  const slide = slides[index] || {}

  return (
    <section id="inaction" className="py-24 lg:py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            {t('inAction.chapter')}
          </div>

          <h2 className="text-[40px] md:text-5xl lg:text-[58px] font-black text-[#1A1D1F] leading-[1.12] mb-6 tracking-tight">
            Nyronx ni <span className="text-brand-accent">ish jarayonida</span> ko'ring
          </h2>

          <p className="text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            {t('inAction.description')}
          </p>
        </div>

        {/* Interactive Tabs Header */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8">
          {slides.map((s, i) => {
            const isActive = i === index
            return (
              <button
                key={i}
                onClick={() => {
                  setIndex(i)
                  setProgress(0)
                }}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-forest text-white border-brand-forest shadow-lg shadow-brand-forest/15'
                    : 'bg-[#F8F9FA] text-gray-700 border-black/[0.04] hover:bg-gray-100 hover:border-black/10'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-brand-mint' : 'text-brand-primary'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-mint animate-ping" />
                  )}
                </div>

                <div className="font-bold text-sm sm:text-base leading-snug line-clamp-1">
                  {s.tabTitle}
                </div>

                {/* Progress bar line */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
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

        {/* Device / Showcase Frame */}
        <div className="relative rounded-[32px] overflow-hidden border border-black/10 shadow-[0_24px_70px_rgba(0,0,0,0.12)] bg-[#1A1D1F] aspect-[16/10] sm:aspect-[16/9] max-h-[640px]">
          {/* Top Browser Bar */}
          <div className="h-10 bg-black/40 backdrop-blur-md border-b border-white/10 px-5 flex items-center justify-between z-20 relative">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-xs font-mono text-white/50 tracking-wider hidden sm:block">
              app.nyronx.uz · {slide.caption}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] font-bold text-brand-mint uppercase tracking-wider">
                Jonli tizim
              </span>
            </div>
          </div>

          {/* Background Images with Cross-fade */}
          <div className="absolute inset-0 top-10 overflow-hidden">
            {slides.map((s, i) => (
              <img
                key={s.img}
                src={s.img}
                alt={s.caption}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
                  i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden sm:block" />
          </div>

          {/* Floating Metric Badge (Bottom-Right) */}
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-20">
            <div className="bg-white/90 backdrop-blur-xl border border-white/40 p-5 sm:p-6 rounded-[24px] shadow-2xl max-w-[280px]">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-slate mb-1">
                {slide.caption}
              </p>
              <div className="text-2xl sm:text-3xl font-black text-[#1A1D1F] tracking-tight">
                {slide.metric}
              </div>
            </div>
          </div>

          {/* Bottom-Left CTA overlay */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-brand-primary text-white px-7 py-3.5 sm:px-8 sm:py-4 text-base font-bold hover:bg-brand-deep transition-all shadow-xl shadow-brand-primary/30 hover:-translate-y-0.5"
            >
              <span>{t('inAction.cta')}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

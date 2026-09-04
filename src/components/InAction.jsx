import { useState, useEffect } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const slideImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=70',
]

export default function InAction() {
  const { t } = useLanguage()
  const inActionData = t('inAction') || {}

  const rawSlides = inActionData.slides || []
  const slides = rawSlides.map((s, idx) => ({
    ...s,
    img: slideImages[idx % slideImages.length],
  }))

  const notchW = 330
  const notchH = 68
  const entryR = 24
  const insideR = 38

  const svgW = notchW + entryR
  const svgH = notchH + entryR

  const notchPath = `
    M 0 ${svgH}
    L 0 0
    Q 0 ${entryR} ${entryR} ${entryR}
    L ${notchW - insideR} ${entryR}
    Q ${notchW} ${entryR} ${notchW} ${entryR + insideR}
    L ${notchW} ${svgH - entryR}
    Q ${notchW} ${svgH} ${notchW + entryR} ${svgH}
    Z
  `

  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance every 6s with progress bar
  useEffect(() => {
    if (slides.length === 0) return
    setProgress(0)
    const interval = 50
    const duration = 6000
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

  const slide = slides[index] || slides[0] || {}

  return (
    <section className="bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
        {/* Header */}
        <div className="max-w-2xl mb-8 px-4 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-7 bg-brand-primary/60" />
            <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-brand-primary">
              {inActionData.chapter || '02 / Amalda'}
            </span>
          </div>
          <h2 className="font-sans font-normal text-brand-ink text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
            {inActionData.titlePart1 || 'Nyronx ni'}{' '}
            <span className="font-serif italic font-normal">{inActionData.titlePart2 || 'ish jarayonida ko\'ring.'}</span>
          </h2>
          <p className="mt-4 text-brand-slate text-[15px] lg:text-[16px] leading-[1.6] max-w-[460px]">
            {inActionData.description || 'Nyronx da ishlaydigan mustaqil dorixonalar.'}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[clamp(420px,58vh,640px)]">
          {/* Image card */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            {/* Top Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-10 overflow-hidden">
              <div
                className="h-full bg-brand-primary transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Stacked images, fade between them */}
            {slides.map((s, i) => (
              <img
                key={s.img + i}
                src={s.img}
                alt={s.caption}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                decoding="async"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

            {/* Top-right caption pin */}
            <div className="absolute top-8 lg:top-10 right-8 lg:right-12 pointer-events-none z-[2] hidden md:flex items-center gap-3">
              <span className="font-mono text-[10px] lg:text-[11px] text-white/80 tracking-[0.2em] uppercase whitespace-nowrap">
                {slide.caption}
              </span>
              <span className="h-px w-14 bg-white/45" />
              <span className="w-6 h-6 rounded-full border border-white/80 flex items-center justify-center text-white text-[11px] font-mono leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Bottom-right: metric */}
            <div className="absolute bottom-10 right-10 lg:bottom-12 lg:right-14 pointer-events-none z-[2] hidden md:block text-right">
              <div className="font-sans font-bold text-white text-[28px] lg:text-[36px] leading-none tracking-tight">
                {slide.metric}
              </div>
            </div>

            {/* Dot navigation */}
            <div className="absolute bottom-6 right-6 lg:bottom-7 lg:right-10 flex items-center gap-2 z-[5]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setIndex(i)
                    setProgress(0)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/70'}`}
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                />
              ))}
            </div>

            {/* White notch carved into bottom-left for the CTA */}
            <svg
              className="absolute bottom-0 left-0 pointer-events-none"
              width={svgW}
              height={svgH}
              viewBox={`0 0 ${svgW} ${svgH}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={notchPath} fill="white" />
            </svg>
          </div>

          {/* CTA — sits in the notch */}
          <a
            href="#contact"
            className="absolute left-0 bottom-0 inline-flex items-center justify-center w-[310px] h-[48px] rounded-full bg-brand-primary text-white text-[15px] font-medium hover:bg-brand-deep transition-all duration-200 shadow-lg shadow-black/25 z-10 cursor-pointer hover:-translate-y-0.5 gap-2"
          >
            {inActionData.cta || 'Konsultatsiya yozilish'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
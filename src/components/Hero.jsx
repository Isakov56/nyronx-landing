import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const TextRotator = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (!words || words.length === 0) return
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setFade(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [words])

  if (!words || words.length === 0) return null

  return (
    <span
      className={`inline-block transition-opacity duration-500 text-brand-accent ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {words[index]}
    </span>
  )
}

export default function Hero() {
  const { t } = useLanguage()

  // Bottom-left notch (button-sized) — fits the "Learn about Nyronx" CTA
  const btnNotchW = 296
  const btnNotchH = 68
  const btnEntryR = 24
  const btnInsideR = 38
  const btnSvgW = btnNotchW + btnEntryR
  const btnSvgH = btnNotchH + btnEntryR

  const btnNotchPath = `
    M 0 ${btnSvgH}
    L 0 0
    Q 0 ${btnEntryR} ${btnEntryR} ${btnEntryR}
    L ${btnNotchW - btnInsideR} ${btnEntryR}
    Q ${btnNotchW} ${btnEntryR} ${btnNotchW} ${btnEntryR + btnInsideR}
    L ${btnNotchW} ${btnSvgH - btnEntryR}
    Q ${btnNotchW} ${btnSvgH} ${btnNotchW + btnEntryR} ${btnSvgH}
    Z
  `

  // Top-right notch
  const annoNotchW = 270
  const annoNotchH = 280
  const annoEntryR = 20
  const annoInsideR = 28
  const annoSvgW = annoNotchW + annoEntryR
  const annoSvgH = annoNotchH + annoEntryR

  return (
    <section className="bg-white pt-24 pb-14 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
        <div className="relative h-[calc(100svh-152px)] min-h-[480px] max-h-[760px]">
          {/* Image card */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=70"
              alt="Team collaborating in a glass-walled office"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

            <div className="relative h-full px-8 sm:px-14 lg:px-20 pt-10 sm:pt-12 lg:pt-14">
              <div className="max-w-xl">
                <h1 className="font-sans font-bold text-white leading-[1.05] tracking-[-0.02em] text-[clamp(44px,7vh,88px)]">
                  <span className="block">
                    <TextRotator words={t('hero.dynamicWords')} />
                  </span>
                  <span className="block">{t('hero.titleLine2')}</span>
                  <span className="sr-only">{t('hero.titleLine3')}</span>
                </h1>
                <p className="mt-5 text-white/90 text-lg lg:text-xl leading-relaxed max-w-[500px]">
                  {t('hero.description')}
                </p>

                {/* Editorial statement */}
                <div className="mt-8 lg:mt-10 max-w-[480px] hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-white/60" />
                    <span className="font-mono text-xs tracking-[0.32em] uppercase text-white/80 font-bold">
                      {t('hero.noteTitle')}
                    </span>
                  </div>
                  <p className="mt-3 font-serif italic text-white/95 text-lg lg:text-xl leading-snug">
                    {t('hero.noteQuote')}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons — centered at bottom */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[6] flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-accent text-brand-forest px-8 py-4 text-base font-bold hover:bg-brand-mint transition-all duration-200 shadow-[0_8px_24px_-8px_rgba(43,196,138,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(43,196,138,0.75)] hover:-translate-y-0.5 whitespace-nowrap"
              >
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                {t('hero.ctaTry')}
              </a>
              <a
                href="#inaction"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-4 text-base font-bold hover:bg-white/30 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </span>
                {t('hero.ctaWatch')}
              </a>
            </div>

            {/* Bottom-left notch */}
            <svg
              className="absolute bottom-0 left-0 pointer-events-none"
              width={btnSvgW}
              height={btnSvgH}
              viewBox={`0 0 ${btnSvgW} ${btnSvgH}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d={btnNotchPath} fill="white" />
            </svg>

            {/* Top-right notch */}
            <svg
              className="absolute pointer-events-none"
              style={{ top: -10, right: -10 }}
              width={290}
              height={300}
              viewBox="0 0 290 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 10 0 L 272 0 Q 290 0 290 18 L 290 290 Q 290 300 280 300 Q 270 300 270 290 L 270 45 Q 270 20 245 20 L 10 20 Q 0 20 0 10 Q 0 0 10 0 Z"
                fill="white"
              />
            </svg>

            {/* Audience stats */}
            <div
              className="absolute bottom-5 hidden lg:flex items-center gap-5 xl:gap-6 pointer-events-none z-[3]"
              style={{ left: 320, right: 'clamp(440px, 38vw, 600px)' }}
            >
              {[
                { category: t('hero.stats.healthSystem'), value: '32%' },
                { category: t('hero.stats.employer'), value: '$4.2M' },
                { category: t('hero.stats.pharmacy'), value: '99.9%' },
              ].map((s) => (
                <div key={s.category} className="flex items-center gap-2">
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/55 whitespace-nowrap">
                    {s.category}
                  </span>
                  <span className="h-px w-3 bg-white/35" />
                  <span className="font-sans font-light text-white text-[13px] xl:text-[14px] leading-none tracking-tight">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial annotation */}
          <div
            className="absolute pointer-events-none z-[4] hidden md:block"
            style={{ top: -10, right: -10, width: 290, height: 300 }}
          >
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath:
                  'path("M 10 0 L 272 0 Q 290 0 290 18 L 290 290 Q 290 300 280 300 Q 270 300 270 290 L 270 45 Q 270 20 245 20 L 10 20 Q 0 20 0 10 Q 0 0 10 0 Z")',
              }}
            />

            {/* Horizontal arm content */}
            <div className="absolute top-0 left-0 right-0 h-5 flex items-center justify-end gap-2">
              <span className="font-mono text-[10px] lg:text-[11px] text-brand-ink/75 tracking-[0.2em] uppercase whitespace-nowrap">
                {t('hero.tagline')}
              </span>
              <span className="h-px w-8 bg-brand-ink/30" />
              <span className="w-5 h-5 shrink-0 rounded-full border border-brand-ink/70 flex items-center justify-center text-brand-ink text-[10px] font-mono leading-none">
                1
              </span>
            </div>

            {/* Vertical arm content */}
            <div className="absolute top-5 right-0 w-5 bottom-0 flex flex-col items-center pt-2 gap-2">
              <span className="w-px h-6 bg-brand-ink/30" />
              <span
                className="font-mono text-[10px] tracking-[0.42em] uppercase text-brand-ink/65 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl' }}
              >
                {t('hero.chapter')}
              </span>
            </div>
          </div>

          {/* Title overflow bleed */}
          <div
            aria-hidden="true"
            className="absolute right-2 sm:right-4 lg:right-8 pointer-events-none z-[3] select-none font-sans font-bold leading-[1.15] tracking-[-0.035em] whitespace-nowrap"
            style={{
              bottom: 0,
              fontSize: 'clamp(56px,9vh,108px)',
              transform: 'translateY(42%)',
              backgroundImage:
                'linear-gradient(to bottom, #ffffff 0%, #ffffff 58%, #0F3D2E 58%, #0F3D2E 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            {t('hero.titleLine3')}
          </div>

          {/* Button flush with image's bottom-left corner */}
          <a
            href="#solutions"
            className="absolute left-0 bottom-0 inline-flex items-center rounded-full bg-brand-primary text-white px-7 py-3.5 text-[15px] font-medium hover:bg-brand-deep transition-colors shadow-lg shadow-black/25 z-10"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}

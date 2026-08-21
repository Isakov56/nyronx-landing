import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

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
      className={`inline-block transition-opacity duration-500 text-brand-accent ${fade ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {words[index]}
    </span>
  )
}

export default function Hero() {
  const { t, language } = useLanguage()
  const { openDemoModal } = useModal()

  const stats = [
    {
      label: language === 'uz' ? 'Boshqarish Samaradorligi' : 'Эффективность управления',
      value: '32%',
      sub: language === 'uz' ? 'Ish unumdorligini oshirish' : 'Рост производительности',
    },
    {
      label: language === 'uz' ? 'Korxona Daromadi (Yillik, USD)' : 'Прибыль предприятий (Год, USD)',
      value: '$4.2M',
      sub: language === 'uz' ? 'Sof foyda oshishi' : 'Рост чистой прибыли',
    },
    {
      label: language === 'uz' ? 'Tizim Ishonchliligi' : 'Надежность системы',
      value: '99.9%',
      sub: language === 'uz' ? 'Barqaror ish vaqti (Uptime)' : 'Бесперебойная работа',
    },
  ]

  return (
    <section className="bg-white pt-24 pb-10 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
        {/* Hero image container — relative, NOT absolute height */}
        <div className="relative rounded-[24px] overflow-hidden">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=70"
            alt="Team collaborating in a glass-walled office"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

          {/* Content — flows naturally, no absolute positioning */}
          <div className="relative z-10 px-7 sm:px-10 lg:px-14 pt-10 sm:pt-12 lg:pt-14 pb-6">
            {/* ===== ROW 1: Title ===== */}
            <h1 className="font-sans font-extrabold text-white leading-[1.08] tracking-[-0.02em] text-[clamp(28px,4.5vw,52px)] max-w-[780px]">
              Nyronx — <TextRotator words={t('hero.dynamicWords')} />{' '}
              {t('hero.titleLine2')}{' '}
              <span className="text-white">
                {language === 'uz' ? 'Aqlli Operatsion Tizim' : 'Умная операционная система'}
              </span>
            </h1>

            {/* ===== ROW 2: Description ===== */}
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-[620px]">
              {t('hero.description')}
            </p>

            {/* ===== ROW 3: CTA Buttons ===== */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Primary: 7-day trial / demo modal */}
              <button
                type="button"
                onClick={() => openDemoModal('trial')}
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-primary text-white px-7 py-3.5 text-sm sm:text-[15px] font-bold hover:bg-brand-deep transition-all duration-200 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                <span>{t('hero.ctaTry')}</span>
              </button>

              {/* Video watch */}
              <a
                href="#inaction"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 text-sm sm:text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 ml-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </span>
                <span>{t('hero.ctaWatch')}</span>
              </a>
            </div>

            {/* ===== ROW 4: Testimonial Card ===== */}
            <div className="mt-7 max-w-[580px]">
              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Feruza Ismoilova"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-accent/40"
                  />
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">
                      {language === 'uz' ? 'Feruza Ismoilova' : 'Феруза Исмаилова'}
                    </p>
                    <p className="text-white/60 text-xs">
                      {language === 'uz' ? 'Dorixona rahbari' : 'Руководитель аптеки'}
                    </p>
                  </div>
                </div>
                <p className="text-white/85 text-sm italic leading-relaxed">
                  {t('hero.noteQuote')}
                </p>
              </div>
            </div>

            {/* ===== ROW 5: Stats Cards ===== */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[680px]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-brand-primary/90 backdrop-blur-sm px-4 py-3.5 text-white"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wide text-white/80 leading-tight mb-1">
                    {s.label}
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold leading-none tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-white/75 mt-1 leading-tight">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

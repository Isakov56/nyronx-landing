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
    }, 2500)
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
  const { language, t } = useLanguage()
  const { openDemoModal } = useModal()

  // Bottom-left notch (button-sized) — fits the CTA button
  const btnNotchW = 330
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

  const isUz = language === 'uz'
  const isRu = language === 'ru'
  const dynamicWords = t('hero.dynamicWords') || (isUz ? ['Dorixonalar,', 'Klinikalar,', 'Yetkazib beruvchilar,'] : isRu ? ['Для аптек,', 'Для клиник,', 'Для дистрибьюторов,'] : ['For Pharmacies,', 'For Clinics,', 'For Distributors,'])

  const heroTexts = {
    titleBleed: isUz ? 'aqlli tizim.' : isRu ? 'система.' : 'smart system.',
    description: isUz
      ? 'Nyronx — dorixonalar, klinikalar va dori yetkazib beruvchilar uchun zamonaviy operatsion tizim. Sotuvlar, hisob-kitoblar, zaxiralar va tahlillar — yagona platformada.'
      : isRu
      ? 'Nyronx — операционная система для аптек, клиник и дистрибьюторов. Продажи, учет, остатки и аналитика — в единой платформе.'
      : 'Nyronx is a modern operating system for pharmacies, clinics, and medicine distributors. Sales, accounting, inventory, and analytics — unified on one platform.',
    ctaBtn: isUz ? 'Nyronx platformasi bilan tanishish' : isRu ? 'Узнать больше о Nyronx Enterprise' : 'Explore Nyronx Enterprise',
    noteTitle: isUz ? 'Jamoadan eslatma' : isRu ? 'Заметка от команды' : 'A note from the team',
    noteQuote: isUz
      ? '“Dorixona marjasi skanerlash va hisob-kitob orasidagi soniyalarda yutiladi. Biz Nyronx-ni aynan shu soniyalar uchun yaratdik.”'
      : isRu
      ? '“Маржа аптеки выигрывается в секунды между сканированием и расчетом. Мы создали Nyronx, чтобы жить в этих секундах.”'
      : '“Pharmacy margin is won in the seconds between scan and adjudication. We built Nyronx to live in those seconds.”',
    stats: [
      { category: isUz ? 'Klinikalar' : isRu ? 'Клиники' : 'Clinics', value: '32%' },
      { category: isUz ? 'Tarmoqlar' : isRu ? 'Сети аптек' : 'Chains', value: '$4.2M' },
      { category: isUz ? 'Barqarorlik' : isRu ? 'Надежность' : 'Reliability', value: '99.9%' },
    ],
    annotationPin: isUz ? 'Dorixonalar tarmog\'i · UZ' : isRu ? 'Сеть аптек · RU' : 'Pharmacy Network · EN',
    annotationTag: isUz ? '01 / Operatsion boshqaruv' : isRu ? '01 / Операционный учет' : '01 / Operations Control',
  }

  return (
    <section className="bg-white pt-24 pb-6 font-sans select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5">
        <div className="relative h-[calc(100svh-152px)] min-h-[460px] max-h-[760px]">
          {/* Image card */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=60"
              alt="Team collaborating in a glass-walled office"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative h-full px-8 sm:px-14 lg:px-20 pt-10 sm:pt-12 lg:pt-14">
              <div className="max-w-xl">
                <h1 className="font-sans font-bold text-white leading-[0.95] tracking-[-0.02em] text-[clamp(48px,8vh,96px)]">
                  <span className="block min-h-[1.1em] whitespace-nowrap">
                    <TextRotator words={dynamicWords} />
                  </span>
                  <span className="block mt-0.5">
                    {isUz ? (
                      <>
                        uchun <span className="font-serif italic font-normal text-white">aqlli tizim.</span>
                      </>
                    ) : isRu ? (
                      <span className="font-serif italic font-normal text-white">умная система.</span>
                    ) : (
                      <span className="font-serif italic font-normal text-white">smart software.</span>
                    )}
                  </span>
                  <span className="sr-only">{heroTexts.titleBleed}</span>
                </h1>
                <p className="mt-6 text-white font-semibold text-[15px] lg:text-[16px] leading-[1.5] max-w-[420px]">
                  {heroTexts.description}
                </p>

                {/* Editorial statement */}
                <div className="mt-8 lg:mt-10 max-w-[440px] hidden sm:block">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-white/60" />
                    <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/70">
                      {heroTexts.noteTitle}
                    </span>
                  </div>
                  <p className="mt-3 font-serif italic text-white/90 text-[15px] lg:text-[17px] leading-snug">
                    {heroTexts.noteQuote}
                  </p>
                </div>
              </div>
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
              style={{ left: 360, right: 'clamp(440px, 38vw, 600px)' }}
            >
              {heroTexts.stats.map((s) => (
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

            <div className="absolute top-0 left-0 right-0 h-5 flex items-center justify-end gap-2">
              <span className="font-mono text-[10px] lg:text-[11px] text-brand-ink/75 tracking-[0.2em] uppercase whitespace-nowrap">
                {heroTexts.annotationPin}
              </span>
              <span className="h-px w-8 bg-brand-ink/30" />
              <span className="w-5 h-5 shrink-0 rounded-full border border-brand-ink/70 flex items-center justify-center text-brand-ink text-[10px] font-mono leading-none">
                1
              </span>
            </div>

            <div className="absolute top-5 right-0 w-5 bottom-0 flex flex-col items-center pt-2 gap-2">
              <span className="w-px h-6 bg-brand-ink/30" />
              <span
                className="font-mono text-[10px] tracking-[0.42em] uppercase text-brand-ink/65 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl' }}
              >
                {heroTexts.annotationTag}
              </span>
            </div>
          </div>

          {/* Title overflow bleed */}
          <div
            aria-hidden="true"
            className="absolute right-2 sm:right-4 lg:right-8 pointer-events-none z-[3] select-none font-serif italic font-normal leading-[1.15] tracking-[-0.035em] whitespace-nowrap"
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
            {heroTexts.titleBleed}
          </div>

          {/* Button flush with image's bottom-left corner */}
          <button
            type="button"
            onClick={() => openDemoModal('demo')}
            className="absolute left-0 bottom-0 inline-flex items-center justify-center w-[310px] h-[48px] rounded-full bg-brand-primary text-white text-[15px] font-medium hover:bg-brand-deep transition-all duration-200 shadow-lg shadow-black/25 z-10 cursor-pointer hover:-translate-y-0.5"
          >
            {heroTexts.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  )
}
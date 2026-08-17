import { useLanguage } from '../context/LanguageContext.jsx'

export default function OnboardingSupport() {
  const { t } = useLanguage()

  const tickerItems = Array(12).fill(t('onboardingSupport.tickerText') || 'Bepul yordam va qo\'llab-quvvatlash')

  return (
    <section className="py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION 1: Giant Capsule Banner ("Sozlaymiz. O'rgatamiz. Tez o'rnatib beramiz.") */}
        <div className="mb-24 lg:mb-32">
          <div className="rounded-[40px] sm:rounded-full bg-gradient-to-r from-brand-primary/[0.08] via-brand-primary/[0.04] to-brand-mint/10 border border-brand-primary/15 p-8 sm:p-12 lg:p-16 shadow-[0_15px_40px_rgba(31,165,108,0.05)]">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Title */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1A1D1F] leading-[1.15] tracking-tight">
                  <span className="text-brand-primary block">{t('onboardingSupport.bannerTitle1')}</span>
                  <span>{t('onboardingSupport.bannerTitle2')}</span>
                </h2>
              </div>

              {/* Right Description */}
              <div className="lg:col-span-6">
                <p className="text-base sm:text-lg lg:text-[19px] text-gray-700 leading-relaxed">
                  {t('onboardingSupport.bannerText')}{' '}
                  <span className="inline-block bg-brand-primary/15 text-brand-forest px-2.5 py-0.5 rounded-lg font-bold border border-brand-primary/20">
                    {t('onboardingSupport.bannerHighlight')}
                  </span>{' '}
                  {t('onboardingSupport.bannerTextEnd')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Moving Ticker Title */}
        <div className="relative mb-12 overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-white to-transparent" />

          <div className="flex gap-0 w-max animate-ticker-slow py-2 select-none">
            {tickerItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1D1F] tracking-tight whitespace-nowrap mx-3">
                <span className={i % 2 === 0 ? 'text-[#1A1D1F]' : 'text-gray-400'}>{item}</span>
                <span className="text-gray-300 text-2xl">●</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two Consultation Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Qog'ozda yuritasizmi? */}
          <div className="bg-[#F8F9FA] rounded-[36px] p-8 sm:p-12 border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#1A1D1F] leading-tight tracking-tight mb-5">
                <span>{t('onboardingSupport.card1TitlePart1')} </span>
                <span className="text-brand-primary block sm:inline">
                  {t('onboardingSupport.card1TitleHighlight')}
                </span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                {t('onboardingSupport.card1Description')}
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary text-white hover:bg-brand-deep px-8 py-4 text-base font-bold shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 w-full sm:w-fit group"
              >
                <span>{t('onboardingSupport.card1Button')}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Card 2: Boshqa dasturdan foydalanasizmi? */}
          <div className="bg-[#F8F9FA] rounded-[36px] p-8 sm:p-12 border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#1A1D1F] leading-tight tracking-tight mb-5">
                <span className="text-brand-primary">{t('onboardingSupport.card2TitleHighlight')} </span>
                <span>{t('onboardingSupport.card2TitlePart2')}</span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                {t('onboardingSupport.card2Description')}
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary text-white hover:bg-brand-deep px-8 py-4 text-base font-bold shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 w-full sm:w-fit group"
              >
                <span>{t('onboardingSupport.card2Button')}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tickerSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-slow {
          animation: tickerSlow 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

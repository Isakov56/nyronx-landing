import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

export default function OnboardingSupport() {
  const { t } = useLanguage()
  const { openDemoModal } = useModal()

  const tickerItems = Array(12).fill(t('onboardingSupport.tickerText') || 'Bepul yordam va qo\'llab-quvvatlash')

  return (
    <section className="py-20 lg:py-28 bg-[#F4F7F2] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 overflow-hidden">
          {/* Edge fades matching section background */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[#F4F7F2] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[#F4F7F2] to-transparent" />

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
          <div className="group bg-white rounded-2xl p-8 sm:p-12 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#1A1D1F] leading-tight tracking-tight mb-5">
                <span>{t('onboardingSupport.card1TitlePart1')} </span>
                <span className="text-[#1A1D1F] block sm:inline">
                  {t('onboardingSupport.card1TitleHighlight')}
                </span>
              </h3>

              <p className="font-serif italic text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                {t('onboardingSupport.card1Description')}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => openDemoModal('consultation')}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary text-white hover:bg-brand-deep px-8 py-4 text-base font-bold shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 w-full sm:w-fit group cursor-pointer"
              >
                <span className="text-white">{t('onboardingSupport.card1Button')}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 fill-none stroke-white stroke-[3]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Card 2: Boshqa dasturdan foydalanasizmi? */}
          <div className="group bg-white rounded-2xl p-8 sm:p-12 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#1A1D1F] leading-tight tracking-tight mb-5">
                <span className="text-[#1A1D1F]">{t('onboardingSupport.card2TitleHighlight')} </span>
                <span className="text-[#1A1D1F]">{t('onboardingSupport.card2TitlePart2')}</span>
              </h3>

              <p className="font-serif italic text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                {t('onboardingSupport.card2Description')}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => openDemoModal('consultation')}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary text-white hover:bg-brand-deep px-8 py-4 text-base font-bold shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 w-full sm:w-fit group cursor-pointer"
              >
                <span className="text-white">{t('onboardingSupport.card2Button')}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 fill-none stroke-white stroke-[3]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
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

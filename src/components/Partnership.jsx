import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Partnership() {
  const { t } = useLanguage()

  const items = t('partnership.items') || []

  return (
    <section 
      id="partnership" 
      className="py-12 sm:py-16 lg:py-0 lg:h-screen lg:max-h-[960px] lg:min-h-[700px] bg-gradient-to-b from-[#081F17] via-[#0D3326] to-[#081F17] text-white font-sans relative overflow-hidden flex items-center justify-center"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-brand-mint/15 rounded-full blur-[120px]" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.15] tracking-tight mb-3">
            <span>{t('partnership.titlePart1')} </span>
            <span className="font-serif italic font-normal text-white block sm:inline">{t('partnership.titlePart2')}</span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            {t('partnership.description')}
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Box 1: Klinik hamkor */}
          {items[0] && (
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-mint/10 rounded-2xl blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <article className="relative h-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-500 hover:border-brand-mint/40 hover:bg-white/[0.07] shadow-2xl">
                <div>

                  <h3 className="text-xl sm:text-2xl font-black mb-2 text-white tracking-tight leading-snug">
                    {items[0].name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                    {items[0].summary}
                  </p>

                  {/* Bullet points */}
                  {items[0].features && (
                    <ul className="space-y-2.5 mb-6">
                      {items[0].features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 font-medium">
                          <span className="w-4 h-4 rounded-full bg-brand-mint/20 text-brand-mint flex items-center justify-center text-[10px] font-bold shrink-0">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-mint text-brand-forest hover:bg-white px-7 py-3 text-sm font-bold shadow-lg shadow-brand-mint/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-fit group/btn"
                  >
                    <span>{items[0].cta}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          )}

          {/* Box 2: Texnologik hamkor */}
          {items[1] && (
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-mint/10 rounded-2xl blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <article className="relative h-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-500 hover:border-brand-mint/40 hover:bg-white/[0.07] shadow-2xl">
                <div>

                  <h3 className="text-xl sm:text-2xl font-black mb-2 text-white tracking-tight leading-snug">
                    {items[1].name}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                    {items[1].summary}
                  </p>

                  {/* Bullet points */}
                  {items[1].features && (
                    <ul className="space-y-2.5 mb-6">
                      {items[1].features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 font-medium">
                          <span className="w-4 h-4 rounded-full bg-brand-mint/20 text-brand-mint flex items-center justify-center text-[10px] font-bold shrink-0">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 text-white border border-white/25 hover:bg-white hover:text-brand-forest px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-fit group/btn"
                  >
                    <span>{items[1].cta}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Partnership() {
  const { t } = useLanguage()

  const items = t('partnership.items') || []

  return (
    <section id="partnership" className="py-24 lg:py-32 bg-gradient-to-b from-[#081F17] via-[#0D3326] to-[#081F17] text-white font-sans relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-brand-mint/15 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-xs font-bold uppercase tracking-[0.2em] mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            {t('partnership.subtitle')}
          </div>

          <h2 className="text-[34px] sm:text-4xl lg:text-[52px] font-black text-white leading-[1.12] tracking-tight mb-6">
            <span>{t('partnership.titlePart1')} </span>
            <span className="text-brand-mint block sm:inline">{t('partnership.titlePart2')}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t('partnership.description')}
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Box 1: Klinik hamkor */}
          {items[0] && (
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-mint/10 rounded-[36px] blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <article className="relative h-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[36px] p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 hover:border-brand-mint/40 hover:bg-white/[0.07] shadow-2xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/15 text-brand-mint text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                    {items[0].tag}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tight leading-snug">
                    {items[0].name}
                  </h3>

                  <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                    {items[0].summary}
                  </p>

                  {/* Bullet points */}
                  {items[0].features && (
                    <ul className="space-y-3 mb-10">
                      {items[0].features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white/90 font-medium">
                          <span className="w-5 h-5 rounded-full bg-brand-mint/20 text-brand-mint flex items-center justify-center text-xs font-bold shrink-0">
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
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-mint text-brand-forest hover:bg-white px-8 py-4 text-base font-bold shadow-lg shadow-brand-mint/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-fit group/btn"
                  >
                    <span>{items[0].cta}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </span>
                  </a>
                </div>
              </article>
            </div>
          )}

          {/* Box 2: Texnologik hamkor */}
          {items[1] && (
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-mint/10 rounded-[36px] blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <article className="relative h-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[36px] p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 hover:border-brand-mint/40 hover:bg-white/[0.07] shadow-2xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {items[1].tag}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tight leading-snug">
                    {items[1].name}
                  </h3>

                  <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                    {items[1].summary}
                  </p>

                  {/* Bullet points */}
                  {items[1].features && (
                    <ul className="space-y-3 mb-10">
                      {items[1].features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-white/90 font-medium">
                          <span className="w-5 h-5 rounded-full bg-brand-mint/20 text-brand-mint flex items-center justify-center text-xs font-bold shrink-0">
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
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 text-white border border-white/25 hover:bg-white hover:text-brand-forest px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-fit group/btn"
                  >
                    <span>{items[1].cta}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
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

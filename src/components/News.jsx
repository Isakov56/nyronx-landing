import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function News() {
  const { t, language } = useLanguage()

  const items = t('news.items') || []
  const featured = t('news.featured') || {}

  return (
    <section id="news" className="py-14 lg:py-20 bg-[#F8F9FA] font-sans border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              {t('news.subtitle')}
            </div>

            <h2 className="text-[34px] sm:text-4xl lg:text-[46px] font-black text-[#1A1D1F] leading-[1.15] tracking-tight">
              <span>{t('news.titlePart1')} </span>
              <span className="text-brand-primary">{t('news.titlePart2')}</span>
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-black/10 text-[#1A1D1F] hover:bg-[#1A1D1F] hover:text-white font-bold text-sm shadow-sm transition-all duration-200 self-start md:self-auto hover:-translate-y-0.5 group"
          >
            <span>{t('news.viewAll')}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Featured Large Article Card (7 columns) */}
          <article className="lg:col-span-7 bg-white rounded-[28px] p-5 sm:p-6 border border-black/[0.06] shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            <div>
              {/* Image Banner */}
              <div className="h-52 sm:h-64 w-full rounded-[22px] overflow-hidden relative mb-4 bg-gray-100">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Award Badge */}
                {featured.badge && (
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-brand-forest font-bold text-xs shadow-md border border-black/5">
                    {featured.badge}
                  </div>
                )}
              </div>

              {/* Tag */}
              <div className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-2">
                {featured.tag}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-black text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-snug mb-2 tracking-tight">
                {featured.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {featured.description}
              </p>
            </div>

            {/* Read More Link */}
            <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold text-base group-hover:translate-x-1 transition-transform">
                <span>{featured.readMore}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {language === 'uz' ? '5 daqiqa o\'qish' : '5 мин чтения'}
              </span>
            </div>
          </article>

          {/* Right Side 3 Articles (5 columns) - Unified Cohesive Card */}
          <div className="lg:col-span-5 bg-white rounded-[28px] p-2.5 sm:p-3.5 border border-black/[0.06] shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between divide-y divide-black/[0.04]">
            {items.map((it, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3.5 sm:p-4 rounded-2xl hover:bg-gray-50/80 transition-all duration-200 flex items-center gap-4 group cursor-pointer flex-1"
              >
                {/* Thumbnail Image */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 relative bg-gray-100 border border-black/[0.04]">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                      {it.type}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[11px] text-gray-400 font-medium">{it.readTime}</span>
                  </div>

                  <h4 className="text-[14px] sm:text-[15px] font-bold text-[#1A1D1F] group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                    {it.title}
                  </h4>

                  <div className="text-[11px] text-gray-400 font-medium mt-1">{it.date}</div>
                </div>

                {/* Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-brand-primary group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 text-gray-500">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

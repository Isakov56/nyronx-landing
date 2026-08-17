import { useState, useEffect } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const productImages = {
  'Nyronx Enterprise': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75',
  'Nyronx Price AI': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=75',
  'Nyronx Pulse': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75',
  'Chegirma kartalari': 'https://images.unsplash.com/photo-1556742049-0a67e55722c3?auto=format&fit=crop&w=800&q=75',
  'Nyronx Autosave': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=75',
  'Dorixona yechimlari': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=75',
}

export default function Solutions() {
  const { t, language } = useLanguage()
  
  const categories = t('solutions.categories') || []
  const products = t('solutions.products') || []

  // Default to the first category (e.g., 'All' / 'Barchasi' / 'Все')
  const [active, setActive] = useState(categories[0] || 'All')

  // When language changes, reset the active category so it matches the new language's 'All'
  useEffect(() => {
    setActive(t('solutions.categories')[0])
  }, [language, t])

  const filtered = active === categories[0] ? products : products.filter((p) => p.cat === active)

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#F4F6F8] font-sans">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Title, description, and filter buttons */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-bold mb-3">
            {t('solutions.subtitle')}
          </p>
          <h2 className="text-[40px] lg:text-[52px] font-black text-[#1A1D1F] mb-5 leading-[1.12] tracking-tight">
            {t('solutions.titlePart1')} <span className="text-brand-accent">{t('solutions.titlePart2')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-brand-slate mb-8 leading-relaxed">
            {t('solutions.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand-forest text-white px-8 py-4 text-base font-bold hover:bg-brand-deep transition-all shadow-md shadow-brand-forest/15 hover:-translate-y-0.5"
          >
            <span>{t('solutions.button')}</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          {/* Categories filter tabs */}
          <div className="mt-10 pt-8 border-t border-black/[0.08]">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-slate/70 mb-4">
              {t('solutions.filterTitle')}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 ${
                    active === c
                      ? 'bg-brand-forest text-white border-brand-forest shadow-sm'
                      : 'bg-white text-gray-700 border-black/[0.06] hover:border-brand-primary/40 hover:text-brand-forest'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Grid of solution cards */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {filtered.map((p) => {
            const imgSrc = productImages[p.name] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75'
            return (
              <article
                key={p.name}
                className="group bg-white rounded-[32px] p-7 lg:p-8 border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-xs font-bold tracking-wider uppercase text-brand-primary">
                    {p.cat}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#1A1D1F] mb-3 leading-snug tracking-tight group-hover:text-brand-forest transition-colors">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-brand-slate mb-6 flex-1 leading-relaxed">
                  {p.blurb}
                </p>

                {/* Illustration Image Area */}
                <div className="relative h-40 rounded-2xl overflow-hidden mb-6 bg-gray-50 border border-black/[0.05]">
                  <img
                    src={imgSrc}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-base font-bold text-brand-primary group-hover:text-brand-deep transition-colors mt-auto w-fit"
                >
                  <span>{p.cta}</span>
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 inline-flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </span>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

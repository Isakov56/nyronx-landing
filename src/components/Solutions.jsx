import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Solutions() {
  const { t } = useLanguage()
  const solutionsData = t('solutions') || {}

  const categories = solutionsData.categories || ['Barchasi', 'Boshqaruv va tahlil', 'Retseptni tejash', 'Dorixona', 'Iste\'molchi']
  const products = solutionsData.products || []

  const [activeIdx, setActiveIdx] = useState(0)

  const activeCategory = categories[activeIdx] || categories[0]
  const isAll = activeIdx === 0

  const filtered = isAll ? products : products.filter((p) => p.cat === activeCategory)

  return (
    <section id="solutions" className="py-16 lg:py-20 bg-brand-cream font-sans">
      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-3">
            {solutionsData.subtitle || 'Amalda yechimlar'}
          </p>
          <h2 className="font-serif font-normal text-brand-forest text-4xl lg:text-5xl mb-4 leading-[1.05] tracking-[-0.02em]">
            {solutionsData.titlePart1 || 'Tushunchalarni'}{' '}
            <span className="font-serif italic font-normal">{solutionsData.titlePart2 || 'natijalarga aylantiramiz.'}</span>
          </h2>
          <p className="text-base text-brand-ink/70 mb-6">
            {solutionsData.description || 'Bitta platforma, g\'alaba qozonishning ko\'plab usullari — xarajatlarni kamaytirishdan tortib tezkor ishga tushirishgacha.'}
          </p>
          <a href="#" className="btn-primary">
            {solutionsData.button || 'Keyslarni ko\'rib chiqish'} <ArrowRight />
          </a>

          <div className="mt-7 pt-6 border-t border-brand-forest/10">
            <p className="text-xs tracking-widest uppercase text-brand-ink/40 mb-3">
              {solutionsData.filterTitle || 'Toifa bo\'yicha filtrlash'}
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c, idx) => (
                <button
                  key={c + idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-all cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-brand-forest text-white border-brand-forest shadow-sm'
                      : 'bg-white text-brand-ink/70 border-black/[0.06] hover:border-brand-forest/30 hover:text-brand-forest'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {filtered.map((p, idx) => (
            <article
              key={p.name + idx}
              className="group bg-white rounded-2xl p-6 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                <div className="text-[11px] tracking-widest uppercase text-brand-primary">{p.cat}</div>
              </div>
              <h3 className="text-lg text-brand-forest mb-2 leading-tight">{p.name}</h3>
              <p className="text-sm text-brand-ink/70 mb-5 flex-1 leading-relaxed">{p.blurb}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-forest hover:text-brand-primary transition-colors"
              >
                <span>{p.cta}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
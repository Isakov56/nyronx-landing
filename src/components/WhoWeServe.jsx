import { ArrowRight, Plus } from './Icons.jsx'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const audienceImages = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?auto=format&fit=crop&w=1400&q=70',
]

export default function ValueProp() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [displayed, setDisplayed] = useState(0)

  const rawAudiences = t('valueProp.audiences') || []
  const audiences = rawAudiences.map((item, idx) => ({
    ...item,
    img: audienceImages[idx % audienceImages.length],
  }))

  const segment = audiences[displayed] || audiences[0] || {}

  const toggleActive = (i) => {
    if (active === i) {
      setActive(null)
    } else {
      setActive(i)
      setDisplayed(i)
    }
  }

  return (
    <section id="segments" className="pt-6 lg:pt-10 pb-20 lg:pb-28 bg-white font-sans">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-4">
            {t('valueProp.subtitle')}
          </p>
          <h2 className="text-4xl lg:text-6xl text-brand-forest leading-tight mb-6">
            {t('valueProp.titlePart1')} {t('valueProp.titlePart2')}{' '}
            <span className="font-serif italic font-normal">{t('valueProp.titlePart3')}</span>
          </h2>
        </div>

        {/* Two halves — sized to fit viewport like Hero */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:h-[calc(100svh-280px)] lg:min-h-[520px] lg:max-h-[760px]">
          {/* LEFT: image card */}
          <div className="relative h-full min-h-[440px]">
            {/* Inner image card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-brand-forest">
              {audiences.map((a, i) => (
                <img
                  key={a.img + i}
                  src={a.img}
                  alt={a.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                    i === displayed ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-transparent" />

              {/* Audience overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
                    {t('valueProp.audienceLabel') || 'Audience / '}{String(displayed + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-10 bg-white/40" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold leading-[1.05] tracking-[-0.02em]">
                  {segment.title}
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT: expandable list */}
          <div className="flex flex-col">
            {audiences.map((a, i) => {
              const isActive = i === active
              return (
                <button
                  key={a.title + i}
                  onClick={() => toggleActive(i)}
                  className={`text-left border-t border-brand-ink/10 last:border-b py-6 lg:py-7 transition-colors group ${
                    isActive ? '' : 'hover:bg-brand-cream/40'
                  }`}
                  aria-expanded={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Row header */}
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[11px] tracking-[0.2em] text-brand-primary shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3
                          className={`text-xl lg:text-2xl transition-colors ${
                            isActive ? 'text-brand-forest' : 'text-brand-ink/70 group-hover:text-brand-forest'
                          }`}
                        >
                          {a.title}
                        </h3>
                      </div>

                      {/* Expandable body */}
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                        }`}
                      >
                        <div className="overflow-hidden pl-9">
                          <p className="text-sm text-brand-ink/70 leading-relaxed mb-4 max-w-md">
                            {a.blurb}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-brand-forest hover:text-brand-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>{a.cta}</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* +/× toggle icon */}
                    <span
                      className={`shrink-0 rounded-full border p-2 transition-all duration-300 ${
                        isActive
                          ? 'rotate-45 border-brand-forest text-brand-forest bg-brand-cream'
                          : 'border-brand-forest/20 text-brand-forest/60 group-hover:border-brand-forest/50 group-hover:text-brand-forest'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
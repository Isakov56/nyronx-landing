import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const formatPrice = (price, currency) => {
  if (currency === 'UZS') {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS'
  }
  return '$' + price
}

export default function Pricing() {
  const [currency, setCurrency] = useState('UZS')
  const { t } = useLanguage()

  const allInclude = t('pricing.allInclude') || []
  const plansData = t('pricing.plans') || []
  const plans = plansData.map((p, i) => ({
    ...p,
    pricing: i === 0 ? { USD: 25, UZS: 299000 } : { USD: 30, UZS: 359000 },
    highlighted: i === 1
  }))

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-brand-cream">
      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <p className="text-base tracking-widest uppercase text-brand-primary font-bold mb-3">
            {t('pricing.subtitle')}
          </p>
          <h2 className="text-[44px] lg:text-[56px] text-[#1A1D1F] font-extrabold mb-4 leading-[1.1] tracking-tight">
            {t('pricing.titlePart1')} <span className="text-brand-accent">{t('pricing.titlePart2')}</span>
          </h2>
          <p className="text-xl text-brand-slate mb-8 leading-relaxed">
            {t('pricing.description')}
          </p>

          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-brand-forest/10">
            <button
              onClick={() => setCurrency('UZS')}
              className={`px-5 py-2.5 rounded-full text-[15px] font-semibold transition-colors ${currency === 'UZS'
                  ? 'bg-brand-forest text-white'
                  : 'text-brand-ink/60 hover:text-brand-forest'
                }`}
            >
              UZS
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-5 py-2.5 rounded-full text-[15px] font-semibold transition-colors ${currency === 'USD'
                  ? 'bg-brand-forest text-white'
                  : 'text-brand-ink/60 hover:text-brand-forest'
                }`}
            >
              USD
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-brand-forest/10">
            <p className="text-sm tracking-widest uppercase text-brand-ink/40 font-bold mb-4">
              {t('pricing.allIncludeTitle') || 'Barchasiga kiritilgan'}
            </p>
            <ul className="text-base text-brand-ink/75 space-y-3 font-medium">
              {allInclude.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {plans.map((plan) => {
            const dark = plan.highlighted
            return (
              <article
                key={plan.name}
                className={`group rounded-[28px] p-7 lg:p-8 border transition-all duration-300 flex flex-col ${dark
                    ? 'bg-brand-forest text-white border-brand-forest shadow-[0_22px_50px_-25px_rgba(15,61,46,0.5)]'
                    : 'bg-white text-brand-ink border-black/5 hover:border-brand-forest/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,61,46,0.15)]'
                  }`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className={`w-2 h-2 rounded-full ${dark ? 'bg-brand-mint' : 'bg-brand-primary'}`}
                  />
                  <div
                    className={`text-xs tracking-widest uppercase font-bold ${dark ? 'text-brand-mint' : 'text-brand-primary'
                      }`}
                  >
                    {plan.tag}
                  </div>
                </div>

                <h3
                  className={`text-[32px] font-bold mb-3 leading-[1.25] tracking-tight ${dark ? 'text-white' : 'text-[#1A1D1F]'
                    }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-lg mb-6 flex-1 leading-[1.65] ${dark ? 'text-white/80' : 'text-brand-slate'
                    }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span
                    className={`text-[40px] lg:text-[48px] font-bold tracking-tight ${dark ? 'text-white' : 'text-brand-forest'
                      }`}
                  >
                    {formatPrice(plan.pricing[currency], currency)}
                  </span>
                  <span
                    className={`text-base font-medium ml-2 ${dark ? 'text-white/60' : 'text-brand-ink/50'}`}
                  >
                    /oy
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[17px]">
                      <span
                        className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${dark ? 'bg-brand-mint' : 'bg-brand-forest/60'
                          }`}
                      />
                      <span className={dark ? 'text-white/90' : 'text-brand-ink/80 font-medium'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full text-lg font-bold transition-colors mt-auto ${dark
                      ? 'bg-brand-mint text-brand-forest hover:bg-white'
                      : 'bg-brand-forest text-white hover:bg-brand-deep'
                    }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

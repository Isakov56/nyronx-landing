import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const plans = [
  {
    name: 'Basic',
    tag: 'Single store',
    pricing: { USD: 25, UZS: 299000 },
    description:
      'For independent pharmacies starting out — everything you need to run one store from day one.',
    features: [
      'Up to 1 store',
      'Up to 5 team members',
      'Inventory management essentials',
      'Full POS system',
      'Customer database',
      'Supplier records',
      'Returns & refunds workflow',
      'Multi-payment methods',
      'Summary reports',
      'Dashboard access',
    ],
    cta: 'Start with Basic',
    highlighted: false,
  },
  {
    name: 'Premium',
    tag: 'Multi-store',
    pricing: { USD: 30, UZS: 359000 },
    description:
      'For multi-branch networks — scale to unlimited stores with advanced analytics and priority support.',
    features: [
      'Unlimited stores',
      'Unlimited team members',
      'Advanced inventory management',
      'Full POS system',
      'Customer insights & loyalty',
      'Suppliers & purchase orders',
      'Returns & refunds workflow',
      'Multi-payment methods',
      'Promotions & discounts engine',
      'Detailed reports with charts',
      'Export reports (CSV / PDF)',
      'Priority support',
    ],
    cta: 'Go Premium',
    highlighted: true,
  },
]

const allInclude = [
  'No setup fees',
  'Cancel anytime',
  'Instant activation',
  'Secure storage + daily backups',
]

const formatPrice = (price, currency) => {
  if (currency === 'UZS') {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' UZS'
  }
  return '$' + price
}

export default function Pricing() {
  const [currency, setCurrency] = useState('UZS')

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-brand-cream">
      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-3">
            Plans & pricing
          </p>
          <h2 className="text-4xl lg:text-5xl text-brand-forest mb-4 leading-[1.05]">
            One platform, <span className="italic">two ways</span> to start.
          </h2>
          <p className="text-base text-brand-ink/70 mb-6">
            Pick the plan that fits your stage. Upgrade anytime without losing data — every plan ships with secure storage, daily backups, and email support.
          </p>

          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-full border border-brand-forest/10">
            <button
              onClick={() => setCurrency('UZS')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                currency === 'UZS'
                  ? 'bg-brand-forest text-white'
                  : 'text-brand-ink/60 hover:text-brand-forest'
              }`}
            >
              UZS
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                currency === 'USD'
                  ? 'bg-brand-forest text-white'
                  : 'text-brand-ink/60 hover:text-brand-forest'
              }`}
            >
              USD
            </button>
          </div>

          <div className="mt-7 pt-6 border-t border-brand-forest/10">
            <p className="text-xs tracking-widest uppercase text-brand-ink/40 mb-3">
              All plans include
            </p>
            <ul className="text-sm text-brand-ink/70 space-y-2">
              {allInclude.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {plans.map((plan) => {
            const dark = plan.highlighted
            return (
              <article
                key={plan.name}
                className={`group rounded-2xl p-6 lg:p-7 border transition-all duration-300 flex flex-col ${
                  dark
                    ? 'bg-brand-forest text-white border-brand-forest shadow-[0_22px_50px_-25px_rgba(15,61,46,0.5)]'
                    : 'bg-white text-brand-ink border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)]'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-brand-mint' : 'bg-brand-primary'}`}
                  />
                  <div
                    className={`text-[11px] tracking-widest uppercase ${
                      dark ? 'text-brand-mint' : 'text-brand-primary'
                    }`}
                  >
                    {plan.tag}
                  </div>
                </div>

                <h3
                  className={`text-2xl mb-1 leading-tight ${
                    dark ? 'text-white' : 'text-brand-forest'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-5 leading-relaxed ${
                    dark ? 'text-white/75' : 'text-brand-ink/70'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-5">
                  <span
                    className={`text-3xl lg:text-4xl font-bold tracking-tight ${
                      dark ? 'text-white' : 'text-brand-forest'
                    }`}
                  >
                    {formatPrice(plan.pricing[currency], currency)}
                  </span>
                  <span
                    className={`text-sm ml-1.5 ${dark ? 'text-white/55' : 'text-brand-ink/50'}`}
                  >
                    /month
                  </span>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className={`shrink-0 mt-[7px] w-1 h-1 rounded-full ${
                          dark ? 'bg-brand-mint' : 'bg-brand-forest/60'
                        }`}
                      />
                      <span className={dark ? 'text-white/85' : 'text-brand-ink/75'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                    dark
                      ? 'bg-brand-mint text-brand-forest hover:bg-white'
                      : 'bg-brand-forest text-white hover:bg-brand-deep'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const categories = ['All', 'Adjudication & Analytics', 'Prescription Savings', 'Pharmacy', 'Consumer']

const products = [
  {
    cat: 'Adjudication & Analytics',
    name: 'Nyronx Enterprise',
    blurb: 'A modern adjudication platform built for speed, flexibility, and transparency.',
    cta: 'Explore Enterprise',
  },
  {
    cat: 'Adjudication & Analytics',
    name: 'Nyronx Price AI',
    blurb: 'Automate cost controls with advanced AI-driven pricing optimization.',
    cta: 'Discover Price AI',
  },
  {
    cat: 'Adjudication & Analytics',
    name: 'Nyronx Pulse',
    blurb: 'Live operational dashboard — sales, stock levels, and team activity across every branch in real time.',
    cta: 'Explore Pulse',
  },
  {
    cat: 'Prescription Savings',
    name: 'Discount Cards',
    blurb: 'Flexible savings programs powered by integrated pricing and adjudication tech.',
    cta: 'Learn about Discount Cards',
  },
  {
    cat: 'Prescription Savings',
    name: 'Nyronx Autosave',
    blurb: 'Compare benefit and discount card prices to automatically secure the lowest cost.',
    cta: 'Learn about Autosave',
  },
  {
    cat: 'Pharmacy',
    name: 'Pharmacy Solutions',
    blurb: 'Empower pharmacy partners with tools to enhance efficiency and reduce costs.',
    cta: 'See Pharmacy Solutions',
  },
  {
    cat: 'Pharmacy',
    name: 'Nyronx Voice',
    blurb: 'Hands-free pharmacy search — look up products, stock, and customers by voice, in Uzbek, Russian, or English.',
    cta: 'See Voice in action',
  },
  {
    cat: 'Consumer',
    name: 'Nyronx Direct',
    blurb: 'Join thousands across Uzbekistan saving on prescription medications every day.',
    cta: 'Explore Nyronx Direct',
  },
]

export default function Solutions() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter((p) => p.cat === active)

  return (
    <section id="solutions" className="py-16 lg:py-20 bg-brand-cream">
      <div className="container-x grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-3">
            Solutions in practice
          </p>
          <h2 className="text-4xl lg:text-5xl text-brand-forest mb-4 leading-[1.05]">
            Turning insights into <span className="italic">impact.</span>
          </h2>
          <p className="text-base text-brand-ink/70 mb-6">
            One platform, many ways to win — from cost containment to faster onboarding to happier members. Explore the products turning insight into measurable results.
          </p>
          <a href="#" className="btn-primary">
            Browse case studies <ArrowRight />
          </a>

          <div className="mt-7 pt-6 border-t border-brand-forest/10">
            <p className="text-xs tracking-widest uppercase text-brand-ink/40 mb-3">Filter by category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                    active === c
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
          {filtered.map((p) => (
            <article
              key={p.name}
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

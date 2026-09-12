import { useState } from 'react'
import { ArrowRight } from './Icons.jsx'

const categories = ['All', 'Counter & stock', 'Fiscal compliance', 'Supply chain', 'Reliability']

const products = [
  {
    cat: 'Counter & stock',
    name: 'Point of sale',
    blurb: 'Scan, sell and print in seconds — barcode-first, keyboard-friendly, and fast enough for a queue.',
    cta: 'See the counter',
  },
  {
    cat: 'Counter & stock',
    name: 'Inventory & batches',
    blurb: 'Track stock down to the batch: expiry dates, per-batch cost and selling price, and sell-the-oldest-first control.',
    cta: 'Explore inventory',
  },
  {
    cat: 'Counter & stock',
    name: 'Reports & analytics',
    blurb: 'Revenue, margin and stock value with batch-level cost — so the numbers match what actually sold.',
    cta: 'See reporting',
  },
  {
    cat: 'Fiscal compliance',
    name: 'ИКПУ classification',
    blurb: 'Every product carries its national classifier code, resolved from a built-in catalog instead of typed by hand.',
    cta: 'How coding works',
  },
  {
    cat: 'Fiscal compliance',
    name: 'e-POS fiscalization',
    blurb: 'Receipts are fiscalized at the moment of sale, with automatic retry so a network blip never loses a receipt.',
    cta: 'About fiscal receipts',
  },
  {
    cat: 'Fiscal compliance',
    name: 'Markirovka tracking',
    blurb: 'Scan the DataMatrix on marked goods — boxes are tracked from receipt to sale, per unit.',
    cta: 'About markirovka',
  },
  {
    cat: 'Supply chain',
    name: 'Didox e-invoices',
    blurb: 'Pull a supplier e-invoice and receive it straight into stock — matched to your products, not retyped.',
    cta: 'See e-invoicing',
  },
  {
    cat: 'Reliability',
    name: 'Offline hub',
    blurb: 'Tills keep selling when the internet drops. A local hub syncs the branch and reconciles once you are back.',
    cta: 'How offline works',
  },
  {
    cat: 'Reliability',
    name: 'Voice search',
    blurb: 'Hands-free lookup — find products and stock by voice, in Uzbek, Russian or English.',
    cta: 'See voice in action',
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
            One platform, built in modules — the counter, the stock room, the fiscal paperwork and the supply chain. Turn them on as you need them.
          </p>
          <a href="#pricing" className="btn-primary">
            See plans &amp; pricing <ArrowRight />
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
                href="#contact"
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

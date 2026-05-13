import { ArrowRight, Plus } from './Icons.jsx'
import { useState } from 'react'

const audiences = [
  {
    title: 'Pharmacy Benefit Managers',
    blurb:
      'Modernize your tech stack with adjudication, analytics, and pricing intelligence built for scale.',
    cta: 'Explore solutions for PBMs',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Health Systems',
    blurb:
      'Bring pharmacy benefits in-house with a partner that simplifies the lift and protects margin.',
    cta: 'Explore solutions for Health Systems',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Health Plans',
    blurb:
      'Improve member experience and contain spend with flexible plan tooling and real-time data.',
    cta: 'Explore solutions for Health Plans',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Pharmacies',
    blurb:
      'Equip independent and community pharmacies with the technology to compete, grow, and serve.',
    cta: 'Explore solutions for Pharmacies',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Employers',
    blurb:
      'Design a pharmacy benefit that works harder for your people and your budget.',
    cta: 'Explore solutions for Employers',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Consumers',
    blurb:
      'Help members find the lowest price on prescriptions, every time they fill.',
    cta: 'Explore solutions for Consumers',
    img: 'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?auto=format&fit=crop&w=1400&q=70',
  },
]

export default function ValueProp() {
  const [active, setActive] = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const segment = audiences[displayed]

  const toggleActive = (i) => {
    if (active === i) {
      setActive(null)
    } else {
      setActive(i)
      setDisplayed(i)
    }
  }

  return (
    <section id="segments" className="py-24 lg:py-32 bg-white">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-4">
            Who we serve
          </p>
          <h2 className="text-4xl lg:text-6xl text-brand-forest leading-tight mb-6">
            Making Rx better for{' '}
            <span className="italic">everyone.</span>
          </h2>
          <p className="text-lg text-brand-ink/70 max-w-2xl">
            From PBMs to pharmacies to the people picking up a prescription, our platform meets each audience with the right tools.
          </p>
        </div>

        {/* Two halves — sized to fit viewport like Hero */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:h-[calc(100svh-280px)] lg:min-h-[520px] lg:max-h-[760px]">
          {/* LEFT: image card, wrapped in a positioned parent so the Modular Solutions
              overlay can stick out of the image's top edge. */}
          <div className="relative h-full min-h-[440px]">
            {/* Inner image card — has overflow-hidden so the photo is clipped to rounded corners */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-brand-forest">
              {audiences.map((a, i) => (
                <img
                  key={a.img}
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
                    Audience / {String(displayed + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-10 bg-white/40" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold leading-[1.05] tracking-[-0.02em]">
                  {segment.title}
                </h3>
              </div>
            </div>

            {/* Modular Solutions overlay — tighter container, bigger text, layered brand-forest
                shadow (matches the navbar shadow recipe). Pulled further left so it overflows
                the image edge more visibly. Cubic second box still 100% inside the image. */}
            <div
              className="absolute z-[3] pointer-events-none w-[260px] max-w-[78%]"
              style={{
                top: '42%',
                left: '-72px',
                transform: 'translateY(-50%)',
                filter: [
                  'drop-shadow(0 0 28px rgba(15,61,46,0.18))',
                  'drop-shadow(0 0 10px rgba(15,61,46,0.10))',
                  'drop-shadow(0 4px 12px rgba(14,26,20,0.10))',
                ].join(' '),
              }}
            >
              <svg
                viewBox="0 0 260 80"
                className="w-full h-auto"
                aria-hidden="true"
              >
                <path
                  d="M 16 0 L 204 0 Q 220 0 220 16 L 220 26 Q 220 40 234 40 L 244 40 Q 260 40 260 56 L 260 64 Q 260 80 244 80 L 236 80 Q 220 80 220 64 L 220 54 Q 220 40 206 40 L 16 40 Q 0 40 0 24 L 0 16 Q 0 0 16 0 Z"
                  fill="white"
                />
              </svg>

              {/* First box content — "Modular Solutions" bigger, centered, snug padding. */}
              <div
                className="absolute top-0 left-0 flex items-center justify-center px-4"
                style={{ width: '220px', height: '40px' }}
              >
                <span className="font-bold text-brand-forest text-[17px] tracking-tight leading-none whitespace-nowrap">
                  Modular Solutions
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: expandable list */}
          <div className="flex flex-col">
            {audiences.map((a, i) => {
              const isActive = i === active
              return (
                <button
                  key={a.title}
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
                            {a.cta} <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* +/× toggle icon — rotates 45° when active */}
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

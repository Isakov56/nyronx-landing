import { ArrowRight, Logo } from './Icons.jsx'

// Ecosystem-hub constellation nodes — symmetric 4-corner layout, all the same
// big avatar size. Lines run as straight diagonals from each avatar's inner
// corner to the corresponding corner of the central logo, so each node visibly
// "touches" both ends. Pharmacies still gets the mint flagship ring.
const nodes = [
  {
    label: 'Pharmacies',
    tag: 'Flagship',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
    pos: 'top-4 left-4',
    flagship: true,
  },
  {
    label: 'Distributors',
    tag: 'Wholesale',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80',
    pos: 'top-4 right-4',
  },
  {
    label: 'Clinics',
    tag: 'Outpatient',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    pos: 'bottom-4 left-4',
  },
  {
    label: 'Customers',
    tag: 'Patient',
    img: 'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?auto=format&fit=crop&w=400&q=80',
    pos: 'bottom-4 right-4',
  },
]

// Star field — concentrated near the hub (10 stars in a tight central cluster)
// with a few outliers near each node. Positions are percentages so they scale
// with the container; rendered as HTML divs with rounded-full so they're always
// perfectly circular regardless of the container's aspect ratio.
const stars = [
  // Tight cluster around the hub
  { x: '48%', y: '34%', size: 2,   dur: 3.2, delay: 0 },
  { x: '60%', y: '40%', size: 1.5, dur: 2.7, delay: 1.1 },
  { x: '42%', y: '44%', size: 1.4, dur: 3.5, delay: 0.4 },
  { x: '38%', y: '52%', size: 1.8, dur: 4,   delay: 1.7 },
  { x: '62%', y: '54%', size: 1.6, dur: 2.9, delay: 0.6 },
  { x: '52%', y: '63%', size: 2.2, dur: 3.4, delay: 2 },
  { x: '40%', y: '64%', size: 1.2, dur: 4.2, delay: 1.3 },
  { x: '58%', y: '32%', size: 1.1, dur: 3,   delay: 0.8 },
  { x: '50%', y: '57%', size: 1,   dur: 2.5, delay: 0.2 },
  { x: '46%', y: '48%', size: 1.3, dur: 3.7, delay: 1.5 },
  // Outliers near nodes
  { x: '30%', y: '8%',  size: 1.4, dur: 3,   delay: 0.5 },
  { x: '68%', y: '14%', size: 1.6, dur: 2.8, delay: 1.8 },
  { x: '14%', y: '38%', size: 1.2, dur: 3.5, delay: 1 },
  { x: '10%', y: '62%', size: 1.8, dur: 4,   delay: 2.2 },
  { x: '72%', y: '88%', size: 1.5, dur: 3.2, delay: 0.4 },
  { x: '42%', y: '92%', size: 1.1, dur: 3.8, delay: 1.6 },
]

const flagship = {
  tag: 'Flagship · Pharmacy management SaaS',
  name: 'Pharmacies',
  summary:
    'Run the counter, the back office, and the network on one modern POS and management platform — purpose-built for independent and multi-store pharmacies.',
  highlights: [
    { title: 'Full POS + inventory engine', detail: 'Counter, back office, and stock control in one' },
    { title: 'Multi-store, multi-team ready', detail: 'Roles, branches, and team permissions out of the box' },
    { title: 'Built-in adjudication & pricing', detail: 'Real-time claim flow and price optimization' },
    { title: 'Reporting that earns its keep', detail: 'Dashboards, exports, and the metrics owners actually use' },
  ],
  cta: 'Explore the pharmacy platform',
}

const ecosystem = [
  {
    tag: 'Distribution & wholesale',
    name: 'Distributors',
    summary:
      'Order management, fulfillment workflows, and live inventory sync that scale to thousands of pharmacy customers.',
    cta: 'See distributor tools',
  },
  {
    tag: 'Outpatient & in-clinic',
    name: 'Clinics',
    summary:
      'Connect prescribing, dispensing, and patient records — bring pharmacy operations inside the clinic.',
    cta: 'Explore clinic tools',
  },
  {
    tag: 'Direct to patient',
    name: 'Customers',
    summary:
      'Help patients find meds at the right price, with refill reminders and savings programs built in.',
    cta: 'For patients',
  },
]

export default function Partnership() {
  return (
    <section id="partnership" className="py-24 lg:py-32 bg-brand-forest text-white">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <p className="text-sm tracking-widest uppercase text-brand-mint font-medium mb-4">Work with us</p>
          <h2 className="text-4xl lg:text-6xl leading-[1.05] mb-6">
            Built for the entire <span className="italic">pharmacy ecosystem.</span>
          </h2>
          <p className="text-lg text-white/75 max-w-2xl">
            Pharmacy management is our flagship — but the same platform powers every link in the chain. From distributors and clinics to the patients walking out the door, one team, one stack, one mission.
          </p>
        </div>

        <div className="space-y-5 lg:space-y-6">
          <article className="rounded-3xl p-8 lg:p-12 bg-[#144E37] border border-white/[0.09] shadow-[0_28px_55px_-30px_rgba(0,0,0,0.45)] text-white grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                <div className="text-[11px] tracking-widest uppercase text-brand-mint">{flagship.tag}</div>
              </div>
              <h3 className="text-5xl lg:text-6xl mb-5 leading-[1] text-white">{flagship.name}</h3>
              <p className="text-base lg:text-lg text-white/75 mb-8 max-w-xl leading-relaxed">
                {flagship.summary}
              </p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-brand-mint text-brand-forest px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
              >
                {flagship.cta} <ArrowRight />
              </a>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-12 flex flex-col justify-center">
              <p className="text-[11px] tracking-widest uppercase text-brand-mint/70 mb-5">What you ship with</p>
              <ul className="space-y-4">
                {flagship.highlights.map((h) => (
                  <li key={h.title} className="flex items-start gap-3">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand-mint shrink-0" />
                    <div>
                      <div className="font-medium text-white leading-tight">{h.title}</div>
                      <div className="text-sm text-white/60 leading-snug">{h.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Two-half row — ecosystem diagram (left, lg+ only) + 3 audience cards
              stacked vertically (right). On md, the diagram is hidden and the 3
              cards collapse back to a 3-col grid via display:contents. */}
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-2 lg:gap-6 lg:items-stretch">
            {/* LEFT — ecosystem constellation diagram.
                Layered backdrop: two radial gradients + dot-grid + twinkling stars.
                Right-angle "PCB trace" routing with rounded corners replaces the
                soft curves so the connections read like real data paths.
                Avatars are rounded-square (rounded-2xl) for an "app tile" feel
                instead of circular portraits, each with a pulsing live indicator. */}
            <div
              className="hidden lg:block relative min-h-[500px] rounded-3xl overflow-hidden border border-white/[0.06]"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(120% 90% at 50% 50%, #16553B 0%, #0F3D2E 55%, #082A1E 100%)',
              }}
            >
              {/* Subtle dot-grid overlay for texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,0.75) 1px, transparent 1px)',
                  backgroundSize: '26px 26px',
                }}
              />

              {/* SVG layer — gradient defs + glow + routed paths + twinkling stars + anchors */}
              <svg
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <radialGradient id="hub-glow" cx="50%" cy="50%" r="48%">
                    <stop offset="0%" stopColor="#2BC48A" stopOpacity="0.32" />
                    <stop offset="35%" stopColor="#2BC48A" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#2BC48A" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="aux-glow-bl" cx="15%" cy="85%" r="45%">
                    <stop offset="0%" stopColor="#9FE3C2" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#9FE3C2" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="aux-glow-tr" cx="85%" cy="15%" r="40%">
                    <stop offset="0%" stopColor="#9FE3C2" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#9FE3C2" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Layered gradient wash — adds depth + asymmetric warmth */}
                <rect width="500" height="500" fill="url(#aux-glow-bl)" />
                <rect width="500" height="500" fill="url(#aux-glow-tr)" />
                <circle cx="250" cy="250" r="210" fill="url(#hub-glow)" />

                {/* Four symmetric diagonal connection lines — each runs from
                    the inner corner of one avatar to the matching corner of the
                    central logo. Coordinates are tuned so the line endpoints
                    visibly touch both the avatar tile edge and the logo edge. */}
                <path
                  d="M 140 158 L 218 218"
                  stroke="#9FE3C2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  fill="none"
                  style={{ animation: 'flowDash 3s linear infinite' }}
                />
                <path
                  d="M 360 158 L 282 218"
                  stroke="#9FE3C2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  fill="none"
                  style={{ animation: 'flowDash 3.4s linear infinite reverse' }}
                />
                <path
                  d="M 140 342 L 218 282"
                  stroke="#9FE3C2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  fill="none"
                  style={{ animation: 'flowDash 3.2s linear infinite reverse' }}
                />
                <path
                  d="M 360 342 L 282 282"
                  stroke="#9FE3C2"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  fill="none"
                  style={{ animation: 'flowDash 3.6s linear infinite' }}
                />

                {/* Anchor dots — bright mint at the logo corners (4) and dimmer
                    at the avatar corners (4) — makes the "touching" explicit. */}
                <circle cx="218" cy="218" r="3.2" fill="#9FE3C2" />
                <circle cx="282" cy="218" r="3.2" fill="#9FE3C2" />
                <circle cx="218" cy="282" r="3.2" fill="#9FE3C2" />
                <circle cx="282" cy="282" r="3.2" fill="#9FE3C2" />
                <circle cx="140" cy="158" r="2" fill="#9FE3C2" opacity="0.55" />
                <circle cx="360" cy="158" r="2" fill="#9FE3C2" opacity="0.55" />
                <circle cx="140" cy="342" r="2" fill="#9FE3C2" opacity="0.55" />
                <circle cx="360" cy="342" r="2" fill="#9FE3C2" opacity="0.55" />
              </svg>

              {/* Twinkling stars — rendered as HTML so they stay perfectly
                  circular regardless of container aspect ratio. Concentrated
                  near the hub with a few outliers near each node. */}
              {stars.map((s, i) => {
                const px = s.size * 2
                return (
                  <span
                    key={i}
                    className="absolute rounded-full bg-brand-mint pointer-events-none"
                    style={{
                      left: s.x,
                      top: s.y,
                      width: `${px}px`,
                      height: `${px}px`,
                      boxShadow: `0 0 ${px * 2.5}px rgba(43,196,138,0.55)`,
                      animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
                    }}
                  />
                )
              })}

              {/* Central hub — just the Nyronx icon, nothing else. Mint glow +
                  black drop-shadow lift it off the dark backdrop. The icon
                  background-image / position / size matches Logo.jsx exactly. */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  filter: [
                    'drop-shadow(0 0 42px rgba(43,196,138,0.5))',
                    'drop-shadow(0 14px 36px rgba(0,0,0,0.40))',
                  ].join(' '),
                }}
              >
                <div
                  role="img"
                  aria-label="Nyronx"
                  className="w-20 h-20 rounded-2xl bg-no-repeat ring-1 ring-white/15"
                  style={{
                    backgroundImage: 'url(/nyronx-icon.jpg)',
                    backgroundSize: '400%',
                    backgroundPosition: '49% 50%',
                  }}
                />
              </div>

              {/* Four portrait nodes — symmetric 4-corner layout. Big rounded
                  squares (w-32 = 128px) so the audiences read clearly. Pulsing
                  mint corner indicator + mono tag + label below. */}
              {nodes.map((n) => (
                <div key={n.label} className={`absolute ${n.pos} flex flex-col items-center`}>
                  <div className="relative">
                    <img
                      src={n.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`w-32 h-32 rounded-2xl object-cover ring-2 ${
                        n.flagship ? 'ring-brand-mint/70' : 'ring-white/25'
                      } shadow-[0_18px_36px_rgba(0,0,0,0.45)]`}
                    />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-brand-mint"
                      style={{
                        boxShadow: '0 0 12px rgba(43,196,138,0.9)',
                        animation: 'blink 2.2s ease-in-out infinite',
                      }}
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <span className="block font-mono text-[9px] tracking-[0.3em] uppercase text-brand-mint">
                      {n.tag}
                    </span>
                    <span className="block text-white text-sm font-medium mt-1">
                      {n.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — three audience cards. On lg+, `contents` is overridden by
                flex-col so the cards stack vertically with equal share via
                flex-1. On md, `contents` flattens the wrapper so the cards
                become direct children of the outer md:grid-cols-3. */}
            <div className="contents lg:flex lg:flex-col lg:gap-5 xl:gap-6">
              {ecosystem.map((e) => (
                <article
                  key={e.name}
                  className="group lg:flex-1 rounded-3xl p-7 lg:p-8 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-brand-mint/40 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                    <div className="text-[11px] tracking-widest uppercase text-brand-mint">{e.tag}</div>
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{e.name}</h3>
                  <p className="text-sm text-white/70 mb-6 flex-1 leading-relaxed">{e.summary}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-mint hover:text-white transition-colors"
                  >
                    <span>{e.cta}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

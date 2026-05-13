import { ArrowRight } from './Icons.jsx'

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

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {ecosystem.map((e) => (
              <article
                key={e.name}
                className="group rounded-3xl p-7 lg:p-8 bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-brand-mint/40 transition-all duration-300 flex flex-col"
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
    </section>
  )
}

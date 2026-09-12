import { ArrowRight } from './Icons.jsx'

const items = [
  { type: 'Release', title: 'Markirovka: per-box tracking from receipt to sale', date: 'Aug 2026' },
  { type: 'Release', title: 'Didox e-invoices receive straight into stock', date: 'Jul 2026' },
  { type: 'Release', title: 'Offline hub keeps the counter selling during outages', date: 'Jul 2026' },
]

export default function News() {
  return (
    <section id="news" className="py-12 lg:py-16 bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-4">Product updates</p>
            <h2 className="text-4xl lg:text-5xl text-brand-forest">
              What shipped <span className="italic">recently.</span>
            </h2>
          </div>
          <a href="#pricing" className="link-arrow">See plans &amp; pricing <ArrowRight /></a>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 bg-brand-cream rounded-3xl p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-widest uppercase text-brand-primary mb-6">Featured · Release</div>
              <h3 className="text-3xl lg:text-4xl text-brand-forest mb-4">nyronX 0.4.42 for Windows</h3>
              <p className="text-brand-ink/70 mb-8">
                The desktop app ships with silent receipt printing, offline-first checkout and automatic updates over your local network — so a branch updates itself without a technician.
              </p>
            </div>
            <a href="/downloads/nyronx-setup.exe" download className="link-arrow">Download for Windows <ArrowRight /></a>
          </article>
          <div className="lg:col-span-5 grid gap-4">
            {items.map((it) => (
              <a key={it.title} href="#solutions" className="group bg-white border border-black/10 hover:border-brand-forest rounded-2xl p-6 flex items-start gap-5 transition-colors">
                <div className="text-xs tracking-widest uppercase text-brand-primary whitespace-nowrap pt-1">{it.type}</div>
                <div className="flex-1">
                  <h4 className="text-lg text-brand-forest font-display group-hover:text-brand-deep mb-1">{it.title}</h4>
                  <div className="text-xs text-brand-slate">{it.date}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-forest mt-1.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

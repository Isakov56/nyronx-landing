import { ArrowRight } from './Icons.jsx'

// The three nyronX desktop apps.
// - Pharmacy is served from this site (public/downloads/nyronx-setup.exe, replaced
//   on every pharmacy release).
// - Retail and Restaurant link to the newest release in their own public GitHub
//   releases repo. Every release there carries a copy of the installer under the
//   fixed name below, so a new version needs no change on this site.
const apps = [
  {
    key: 'pharmacy',
    name: 'nyronX Pharmacy',
    audience: 'Pharmacies & pharmacy chains',
    blurb: 'Fiscal receipts, markirovka, batches and expiry dates, and an offline hub that keeps the counter selling.',
    href: '/downloads/nyronx-setup.exe',
  },
  {
    key: 'retail',
    name: 'nyronX Retail',
    audience: 'Shops & supermarkets',
    blurb: 'A full-screen touch till for clothing, household goods, groceries and auto parts — sold by the piece, kilo, metre or litre.',
    href: 'https://github.com/Isakov56/nyronx-retail-releases/releases/latest/download/nyronx-retail-setup.exe',
  },
  {
    key: 'restaurant',
    name: 'nyronX Restaurant',
    audience: 'Restaurants & cafés',
    blurb: 'Orders at the till, a kitchen display for the cooks, and menu, recipes and ingredient stock in one back office.',
    href: 'https://github.com/Isakov56/nyronx-restaurant-releases/releases/latest/download/nyronx-restaurant-setup.exe',
  },
]

const WindowsLogo = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
    <path d="M0 2.5L6.5 1.6V7.5H0V2.5zM7.5 1.45L16 0v8H7.5V1.45zM0 8.5h6.5v5.9L0 13.5V8.5zm7.5 0H16V16l-8.5-1.5V8.5z" />
  </svg>
)

export default function Downloads() {
  return (
    <section id="download" className="py-16 lg:py-20 bg-brand-cream scroll-mt-20">
      <div className="container-x">
        <div className="max-w-2xl mb-10">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-3">Desktop apps</p>
          <h2 className="text-4xl lg:text-5xl text-brand-forest mb-4 leading-[1.05]">
            Download nyronX <span className="italic">for Windows.</span>
          </h2>
          <p className="text-base text-brand-ink/70">
            One app for each kind of business. Each installs in a minute, prints receipts and keeps itself up to date.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {apps.map((app) => (
            <article
              key={app.key}
              className="bg-white rounded-3xl border border-black/5 p-7 lg:p-8 flex flex-col"
            >
              <div className="text-xs tracking-widest uppercase text-brand-primary mb-4">{app.audience}</div>
              <h3 className="text-2xl lg:text-3xl text-brand-forest font-display mb-3">{app.name}</h3>
              <p className="text-brand-ink/70 mb-8 flex-1">{app.blurb}</p>
              <a
                href={app.href}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink text-white px-5 py-3 text-sm font-semibold hover:bg-black transition-colors"
              >
                <WindowsLogo />
                Download for Windows
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-brand-slate mt-3 text-center">Windows 10 or 11 · 64-bit</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

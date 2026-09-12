import { Logo, Linkedin, Youtube } from './Icons.jsx'

const groups = [
  {
    title: 'Platform',
    span: 'lg:col-span-3',
    links: [
      { label: 'Point of sale', href: '#solutions' },
      { label: 'Inventory & batches', href: '#solutions' },
      { label: 'Fiscal compliance', href: '#solutions' },
      { label: 'Didox e-invoices', href: '#solutions' },
      { label: 'Offline hub', href: '#solutions' },
    ],
  },
  {
    title: 'Who we serve',
    span: 'lg:col-span-2',
    links: [
      { label: 'Pharmacies', href: '#segments' },
      { label: 'Pharmacy chains', href: '#segments' },
      { label: 'Distributors', href: '#segments' },
      { label: 'Clinics', href: '#segments' },
    ],
  },
  {
    title: 'Company',
    span: 'lg:col-span-2',
    links: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Product updates', href: '#news' },
      { label: 'contact@nyronx.com', href: 'mailto:contact@nyronx.com' },
      { label: 'Sign in', href: 'https://nyronx.uz' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      id="contact"
      className="relative mt-12 lg:mt-16 overflow-hidden bg-brand-ink text-white"
    >
      {/* Subtle dot-grid pattern background (nyronx-landing footer flourish) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-2">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + blurb + socials */}
          <div className="lg:col-span-5">
            <div className="text-white"><Logo className="h-9" /></div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              The pharmacy operating system for Uzbekistan — point of sale,
              inventory and built-in fiscal compliance, in one platform.
            </p>
            <a
              href="mailto:contact@nyronx.com"
              className="mt-4 inline-block text-sm text-white/75 hover:text-white transition-colors"
            >
              contact@nyronx.com
            </a>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {groups.map((g) => (
            <div key={g.title} className={g.span}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-4">
                {g.title}
              </p>
              <ul className="space-y-3 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/75 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright row */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/45">
            © {year} Nyronx Inc. All rights reserved. Tashkent, Uzbekistan.
          </p>
          <div className="flex gap-6 text-xs text-white/45">
            <a href="mailto:contact@nyronx.com" className="hover:text-white transition-colors">Contact</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="https://nyronx.uz" className="hover:text-white transition-colors">Sign in</a>
          </div>
        </div>
      </div>

      {/* Oversized editorial wordmark — fashion-magazine flourish (from nyronx-landing) */}
      <div
        aria-hidden
        className="pointer-events-none relative -mb-6 overflow-hidden text-center"
      >
        <span
          className="block text-[25vw] leading-[0.75] tracking-tighter italic font-light"
          style={{
            fontFamily: '"Fraunces", serif',
            background:
              'linear-gradient(180deg, rgba(43, 196, 138, 0.32), rgba(43, 196, 138, 0.04))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          nyronx
        </span>
      </div>
    </footer>
  )
}

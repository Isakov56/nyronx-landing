import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'
import { Logo, Linkedin, Youtube, Instagram, Telegram, Twitter } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, language, setLanguage } = useLanguage()
  const { openDemoModal, openDownloadModal } = useModal()

  const footerData = t('footer') || {}
  const groups = footerData.groups || []

  return (
    <footer
      id="contact"
      className="relative mt-12 lg:mt-16 overflow-hidden bg-brand-ink text-white"
    >
      {/* Subtle dot-grid pattern background */}
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
          {/* Brand + blurb + Downloads */}
          <div className="lg:col-span-4">
            <div className="text-white"><Logo className="h-9" /></div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {footerData.description || 'Pharmacy benefits reimagined — innovative tech and services for organizations that move healthcare forward.'}
            </p>

            {/* CTA & Windows Download section */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openDemoModal('trial')}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400 cursor-pointer"
              >
                {language === 'uz' ? 'Sinab ko\'rish' : 'Попробовать бесплатно'}
              </button>
              <button
                type="button"
                onClick={openDownloadModal}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 88 88">
                  <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.527l.028 34.453L0 75.542l.033-29.58zm4.359-38.938L88 0v41.312l-47.971.308zm47.971 38.647V88L40.029 81.25l.016-35.485z" />
                </svg>
                {language === 'uz' ? 'Windows uchun' : 'Для Windows'}
              </button>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-[#0A66C2]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-[#E1306C]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-[#0088cc]"
              >
                <Telegram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-[#FF0000]"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {groups.map((g, idx) => (
            <div key={idx} className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-4">
                {g.title}
              </p>
              <ul className="space-y-3 text-sm">
                {g.links?.map((l, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-white/75 hover:text-white transition-colors block py-0.5"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Countries / Region selector column */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-4">
              {language === 'uz' ? 'Davlatlar' : 'Страны'}
            </p>
            <div className="relative inline-block w-full">
              <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80">
                <svg className="h-4 w-4 shrink-0 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <select className="w-full bg-transparent text-xs text-white focus:outline-none [&>option]:bg-slate-900 [&>option]:text-white cursor-pointer">
                  <option value="uz">{language === 'uz' ? 'O\'zbekiston' : 'Узбекистан'}</option>
                  <option value="kg">{language === 'uz' ? 'Qirg\'iziston' : 'Кыргызстан'}</option>
                  <option value="kz">{language === 'uz' ? 'Qozog\'iston' : 'Казахстан'}</option>
                  <option value="tj">{language === 'uz' ? 'Tojikiston' : 'Таджикистан'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/45">
            © {year} Nyronx Inc. {language === 'uz' ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}
          </p>
          <div className="flex gap-6 text-xs text-white/45">
            <a href="#" className="hover:text-white transition-colors">{footerData.privacy || 'Privacy policy'}</a>
            <a href="#" className="hover:text-white transition-colors">{footerData.terms || 'Terms of service'}</a>
            <a href="#" className="hover:text-white transition-colors">{footerData.hipaa || 'HIPAA'}</a>
          </div>
        </div>
      </div>

      {/* Oversized editorial wordmark */}
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
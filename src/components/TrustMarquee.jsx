import { useLanguage } from '../context/LanguageContext.jsx'

const brandLogos = [
  { name: 'BARAKA PHARMA', tag: 'DORIXONA', color: '#1FA56C', icon: '✦' },
  { name: 'MEDLIFE CLINIC', tag: 'KLINIKA', color: '#0066FF', icon: '✚' },
  { name: 'DORI DUNYO', tag: 'TARMOG\'', color: '#E11D48', icon: '❖' },
  { name: 'AL-SHIFA MED', tag: 'MARKAZ', color: '#0D9488', icon: '❋' },
  { name: 'UZPHARM GROUP', tag: 'YETKAZIB BERUVCHI', color: '#0284C7', icon: '▲' },
  { name: 'AVICENNA PHARM', tag: 'DORIXONA', color: '#16A34A', icon: '✚' },
  { name: 'MEDEXPRESS', tag: 'KLINIKA', color: '#EA580C', icon: '◆' },
  { name: 'SOG\'LOM HAYOT', tag: 'TIBBIYOT', color: '#8B5CF6', icon: '●' },
  { name: 'GRAND PHARM', tag: 'DORIXONA', color: '#2563EB', icon: '✦' },
  { name: 'PHARMA PLUS', tag: 'LOGISTIKA', color: '#4F46E5', icon: '❖' },
]

export default function TrustMarquee() {
  const brands = [...brandLogos, ...brandLogos, ...brandLogos]

  return (
    <section className="py-6 sm:py-8 bg-white overflow-hidden font-sans select-none">
      {/* Brand Logos Infinite Marquee Bar */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-0 w-max animate-marquee-brands hover:[animation-play-state:paused] py-1">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 mx-2.5 sm:mx-3 rounded-2xl bg-gray-50/80 hover:bg-white border border-black/[0.06] hover:border-black/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer select-none group shrink-0"
            >
              <span className="font-black text-sm sm:text-base tracking-wider text-gray-800 group-hover:text-black transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animations CSS */}
      <style>{`
        @keyframes marqueeBrands {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-brands {
          animation: marqueeBrands 60s linear infinite;
        }
      `}</style>
    </section>
  )
}

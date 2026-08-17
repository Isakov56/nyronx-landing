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
  const { t } = useLanguage()

  const row1Data = t('trustMarquee.row1') || []
  const row2Data = t('trustMarquee.row2') || []

  // Duplicate arrays for seamless infinite marquee loop
  const row1 = [...row1Data, ...row1Data, ...row1Data]
  const row2 = [...row2Data, ...row2Data, ...row2Data]
  const brands = [...brandLogos, ...brandLogos, ...brandLogos]

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-black/[0.04] overflow-hidden font-sans">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-12 px-4">
        <h2 className="text-[32px] sm:text-4xl lg:text-[46px] font-black text-[#1A1D1F] leading-[1.2] tracking-tight mb-4">
          <span className="text-brand-primary">{t('trustMarquee.count')}</span>{' '}
          <span className="text-gray-400 font-bold">{t('trustMarquee.titleLead')}</span>{' '}
          <span>{t('trustMarquee.titleMain')}</span>
        </h2>
      </div>

      {/* Brand Logos Infinite Marquee Bar */}
      <div className="relative mb-14 lg:mb-16 overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        <div className="flex gap-0 w-max animate-marquee-brands hover:[animation-play-state:paused] py-3">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-3.5 mx-3 rounded-2xl bg-white/70 hover:bg-white border border-black/[0.04] hover:border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 cursor-pointer select-none group shrink-0"
            >
              <span
                className="text-lg font-black transition-transform duration-300 group-hover:scale-110"
                style={{ color: brand.color }}
              >
                {brand.icon}
              </span>
              <span className="font-black text-base sm:text-lg tracking-wider text-gray-800 group-hover:text-black transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Two-row Testimonials Container */}
      <div className="relative flex flex-col gap-6">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[#F8F9FA] to-transparent" />
        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        {/* ROW 1: Moves to the LEFT */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-0 w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {row1.map((item, i) => (
              <div
                key={i}
                className="w-[360px] sm:w-[420px] bg-white rounded-[32px] p-7 sm:p-8 border border-black/[0.06] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between shrink-0 mx-3 select-none"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-black/5"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-[#1A1D1F] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-snug mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves to the RIGHT */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-0 w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {row2.map((item, i) => (
              <div
                key={i}
                className="w-[360px] sm:w-[420px] bg-white rounded-[32px] p-7 sm:p-8 border border-black/[0.06] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between shrink-0 mx-3 select-none"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-black/5"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-[#1A1D1F] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-snug mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animations CSS */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeBrands {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 45s linear infinite;
        }
        .animate-marquee-brands {
          animation: marqueeBrands 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

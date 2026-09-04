import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const dotColors = [
  'bg-purple-500 shadow-purple-500/30',
  'bg-teal-400 shadow-teal-400/30',
  'bg-orange-400 shadow-orange-400/30',
  'bg-emerald-500 shadow-emerald-500/30',
  'bg-pink-500 shadow-pink-500/30',
  'bg-brand-primary shadow-brand-primary/30',
]

const cardImages = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=75', // Pharmacy network
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=75', // Clinics
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=75', // Suppliers
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=75', // Pharmacies
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=75', // Employers
  'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?auto=format&fit=crop&w=1000&q=75', // Consumers
]

export default function ValueProp() {
  const { t } = useLanguage()
  
  const audiencesData = t('valueProp.audiences') || []
  
  return (
    <section id="segments" className="py-24 lg:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">

          <h2 className="font-sans font-normal text-brand-ink text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] mb-6">
            {t('valueProp.titlePart1')}{' '}
            <span className="font-serif italic font-normal">{t('valueProp.titlePart2')}</span>{' '}
            {t('valueProp.titlePart3')}
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            {t('valueProp.description')}
          </p>
        </div>

        {/* 2-Column Grid of Cards (Billz.io style with images) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {audiencesData.map((a, i) => (
            <div 
              key={a.title}
              className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300 relative flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Top Row: Title + Dot Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl lg:text-[32px] font-bold text-[#1A1D1F] leading-[1.2] tracking-tight group-hover:text-brand-forest transition-colors">
                    {a.title}
                  </h3>
                  
                  {/* Glowing Animated Dot Icon */}
                  <span className="relative flex shrink-0 mt-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-25 ${dotColors[i % dotColors.length].split(' ')[0]}`} />
                    <span className={`relative inline-flex rounded-full h-4 w-4 shadow-sm group-hover:scale-125 transition-transform duration-300 ${dotColors[i % dotColors.length]}`} />
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-lg text-brand-slate leading-[1.65] mb-6">
                  {a.blurb}
                </p>

                {/* Card Image Area / Mockup Preview */}
                <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden mb-6 bg-brand-forest/5 border border-black/[0.06]">
                  <img
                    src={cardImages[i % cardImages.length]}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>
              </div>
              
              {/* Bottom Row: CTA with animated Arrow */}
              <div className="pt-4 border-t border-black/[0.04]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-lg font-bold text-brand-primary group-hover:text-brand-deep transition-colors w-fit"
                >
                  <span>{a.cta}</span>
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 inline-flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

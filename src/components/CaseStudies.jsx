import { ArrowRight } from './Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function CaseStudies() {
  const { t } = useLanguage()

  const items = t('caseStudies.items') || []

  return (
    <section className="py-24 bg-brand-cream">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-4">
            {t('caseStudies.subtitle')}
          </p>
          <h2 className="font-sans font-normal text-brand-forest text-4xl lg:text-5xl mb-6 leading-[1.05] tracking-[-0.02em]">
            {t('caseStudies.titlePart1')}{' '}
            <span className="font-serif italic font-normal">{t('caseStudies.titlePart2')}</span>
          </h2>
          <p className="text-lg text-brand-ink/70 mb-8">
            {t('caseStudies.description')}
          </p>
          <a href="#" className="btn-primary group">
            <span>{t('caseStudies.button')}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {items.map((c) => (
            <div key={c.label} className="group bg-white rounded-2xl p-7 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300">
              <div className="text-xs tracking-widest uppercase text-brand-primary mb-6">{c.tag}</div>
              <div className="text-4xl font-display text-brand-forest mb-2">{c.stat}</div>
              <div className="text-sm text-brand-ink/70">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


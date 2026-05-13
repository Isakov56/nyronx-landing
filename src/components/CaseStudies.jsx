import { ArrowRight } from './Icons.jsx'

export default function CaseStudies() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-4">Proof in practice</p>
          <h2 className="text-4xl lg:text-5xl text-brand-forest mb-6">Turning insights into <span className="italic">impact.</span></h2>
          <p className="text-lg text-brand-ink/70 mb-8">
            See how we deliver value with real-world results — from cost containment to faster onboarding to happier members.
          </p>
          <a href="#" className="btn-primary">Browse case studies <ArrowRight /></a>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {[
            { tag: 'Health system', stat: '32%', label: 'reduction in net plan spend' },
            { tag: 'Employer', stat: '$4.2M', label: 'in member savings, year one' },
            { tag: 'PBM', stat: '8 weeks', label: 'from contract to live adjudication' },
            { tag: 'Pharmacy', stat: '99.9%', label: 'claims uptime SLA' },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-2xl p-7 border border-black/5">
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

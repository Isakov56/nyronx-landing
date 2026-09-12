import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ValueProp from './components/ValueProp.jsx'
import Solutions from './components/Solutions.jsx'
import Pricing from './components/Pricing.jsx'
import InAction from './components/InAction.jsx'
import Partnership from './components/Partnership.jsx'
import News from './components/News.jsx'
import Footer from './components/Footer.jsx'
import ConsultationModal from './components/ConsultationModal.jsx'
import { CONSULT_EVENT } from './consultation.js'

export default function App() {
  // The consultation dialog is opened from the nav, the in-action CTA and the
  // pricing plans, so App owns it and the call sites just fire an event.
  const [consultOpen, setConsultOpen] = useState(false)

  useEffect(() => {
    const open = () => setConsultOpen(true)
    window.addEventListener(CONSULT_EVENT, open)
    return () => window.removeEventListener(CONSULT_EVENT, open)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <Solutions />
        <InAction />
        <Pricing />
        <Partnership />
        <News />
      </main>
      <Footer />
      <ConsultationModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  )
}

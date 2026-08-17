import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ValueProp from './components/ValueProp.jsx'
import Solutions from './components/Solutions.jsx'
import InAction from './components/InAction.jsx'
import TrustMarquee from './components/TrustMarquee.jsx'
import IndustryFit from './components/IndustryFit.jsx'
import OnboardingSupport from './components/OnboardingSupport.jsx'
import Partnership from './components/Partnership.jsx'
import News from './components/News.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <Solutions />
        <InAction />
        <TrustMarquee />
        <IndustryFit />
        <OnboardingSupport />
        <Partnership />
        <News />
      </main>
      <Footer />
    </div>
  )
}

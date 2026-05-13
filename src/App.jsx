import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ValueProp from './components/ValueProp.jsx'
import Solutions from './components/Solutions.jsx'
import Pricing from './components/Pricing.jsx'
import InAction from './components/InAction.jsx'
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
        <Pricing />
        <Partnership />
        <News />
      </main>
      <Footer />
    </div>
  )
}

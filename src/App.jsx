import { useState, useEffect } from 'react'
import { ModalProvider } from './context/ModalContext.jsx'
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
import DemoModal from './components/DemoModal.jsx'
import DownloadModal from './components/DownloadModal.jsx'
import PricesPage from './pages/PricesPage.jsx'

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/prices' || window.location.hash === '#prices'
        ? 'prices'
        : 'home'
    }
    return 'home'
  })

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/prices' || window.location.hash === '#prices') {
        setCurrentPage('prices')
      } else {
        setCurrentPage('home')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    if (page === 'prices') {
      window.history.pushState({}, '', '#prices')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.history.pushState({}, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        <main className="flex-1">
          {currentPage === 'prices' ? (
            <PricesPage onNavigateHome={() => navigateTo('home')} />
          ) : (
            <>
              <Hero />
              <ValueProp />
              <Solutions />
              <InAction />
              <TrustMarquee />
              <IndustryFit />
              <OnboardingSupport />
              <Partnership />
              <News />
            </>
          )}
        </main>

        <Footer onNavigate={navigateTo} />
        <DemoModal />
        <DownloadModal />
      </div>
    </ModalProvider>
  )
}

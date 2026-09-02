import { useState, useEffect } from 'react'
import { ModalProvider } from './context/ModalContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Solutions from './components/Solutions.jsx'
import WhoWeServe from './components/WhoWeServe.jsx'
import InAction from './components/InAction.jsx'
import TrustMarquee from './components/TrustMarquee.jsx'
import OnboardingSupport from './components/OnboardingSupport.jsx'
import Partnership from './components/Partnership.jsx'
import News from './components/News.jsx'
import Footer from './components/Footer.jsx'
import DemoModal from './components/DemoModal.jsx'
import DownloadModal from './components/DownloadModal.jsx'
import PricesPage from './pages/PricesPage.jsx'
import ChakanaDorixonaPage from './pages/ChakanaDorixonaPage.jsx'

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/prices' || window.location.hash === '#prices') return 'prices'
      if (window.location.pathname === '/chakana-dorixona' || window.location.hash === '#chakana-dorixona') return 'chakana-dorixona'
      return 'home'
    }
    return 'home'
  })

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/prices' || window.location.hash === '#prices') {
        setCurrentPage('prices')
      } else if (window.location.pathname === '/chakana-dorixona' || window.location.hash === '#chakana-dorixona') {
        setCurrentPage('chakana-dorixona')
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
    } else if (page === 'chakana-dorixona') {
      window.history.pushState({}, '', '#chakana-dorixona')
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
          ) : currentPage === 'chakana-dorixona' ? (
            <ChakanaDorixonaPage onNavigateHome={() => navigateTo('home')} />
          ) : (
            <>
              <Hero />
              <Solutions />
              <WhoWeServe />
              <InAction />
              <TrustMarquee />
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

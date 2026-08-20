import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Solutions from './components/Solutions'
import Services from './components/Services'
import Compare from './components/Compare'
import Calculators from './components/Calculators'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import KycServices from './components/KycServices'
import Compliance from './components/Compliance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PartnerHub from './components/PartnerHub'
import GstHelper from './components/GstHelper'
import ScrollToTop from './components/ScrollToTop'
import VfsOfficeBenefits from './components/VfsOfficeBenefits'

function App() {
  const [currentView, setCurrentView] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('view') || 'home'
  })

  React.useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setCurrentView(params.get('view') || 'home')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (currentView === 'home') {
      if (params.has('view')) {
        window.history.pushState({}, '', window.location.pathname)
      }
    } else {
      if (params.get('view') !== currentView) {
        window.history.pushState({}, '', `?view=${currentView}`)
      }
    }
  }, [currentView])
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Pillars />
            <Solutions />
            <Services />
            <Compare />
            <Calculators />
            <Testimonials />
            <Faq />
            <KycServices />
            <Compliance />
            <Contact />
          </>
        ) : currentView === 'partner' ? (
          <PartnerHub onNavigateHome={() => {
            setCurrentView('home')
            window.scrollTo(0, 0)
          }} />
        ) : currentView === 'vfs-benefits' ? (
          <VfsOfficeBenefits onNavigateHome={() => {
            setCurrentView('home')
            window.scrollTo(0, 0)
          }} />
        ) : (
          <GstHelper onNavigateHome={() => {
            setCurrentView('home')
            window.scrollTo(0, 0)
          }} />
        )}
      </main>
      
      <Footer onViewChange={setCurrentView} />
      
      <ScrollToTop />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=919886291668&text=Hello+Vemuri+Financial+Services!&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default App

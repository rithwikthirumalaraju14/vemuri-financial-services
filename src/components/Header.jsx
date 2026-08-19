import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header({ currentView, onViewChange }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const homeLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Compare', href: '#compare' },
    { name: 'Calculators', href: '#sip' },
    
  ]

  const partnerLinks = [
    { name: 'Loans', href: '#loans' },
    { name: 'Mutual Funds', href: '#mutual-funds' },
    { name: 'Insurance', href: '#insurance' },
    { name: 'Global', href: '#global-investments' },
    { name: 'NPS', href: '#nps' },
    { name: 'Templates', href: '#templates' },
  ]

  const navLinks = currentView === 'partner' ? partnerLinks : homeLinks

  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )

  const handleNavClick = (e, href) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        const y = el.getBoundingClientRect().top + window.scrollY - 160
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }



  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex py-3 md:py-4 items-center justify-between">
          
          <a href="#" onClick={(e) => { e.preventDefault(); onViewChange('home'); window.scrollTo(0,0); }} className="flex items-center space-x-3 md:space-x-4">
            <div className="shine-wrapper rounded-xl flex-shrink-0">
              <img 
                src="/vemurifin.jpg.png" 
                alt="Vemuri Financial Services Logo" 
                className="h-16 md:h-24 w-auto object-contain block" 
                onError={(e) => e.target.style.display = 'none'} 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500 tracking-tight leading-tight">
                Vemuri Financial Services
              </span>
              <div className="flex flex-col text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-500 leading-snug mt-0.5">
                {/* <span><span className="text-primary-500 mr-1">🔹</span>Simple. Smart. Secure Finance.</span> */}
                <span><span className="text-primary-500 mr-1">🔹</span>One Partner for All Your Financial Needs</span>
              </div>
              {/* <div className="mt-1.5 inline-block bg-primary-50 text-primary-700 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded border border-primary-100 w-max">
                AMFI Registered Mutual Fund Distributor - ARN-302882
              </div> */}
            </div>
          </a>

          <div className="flex items-center md:space-x-6 lg:space-x-8">
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 lg:space-x-4">
              {currentView !== 'home' && (
                <button 
                  onClick={() => { onViewChange('home'); window.scrollTo(0,0); setIsOpen(false); }}
                  className="hidden md:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-100 rounded-full transition-colors"
                >
                  Main Website
                </button>
              )}

              <div className="hidden md:flex items-center p-1 bg-gray-50 border border-gray-100 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href="https://vfsoffice.vemurigroup.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-primary-600 hover:bg-white rounded-full transition-all hover:shadow-sm"
                >
                  VFS Office 
                </a>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                <a 
                  href="https://vfs.vemurigroup.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-primary-600 hover:bg-white rounded-full transition-all hover:shadow-sm"
                >
                  Client Login
                </a>
              </div>
              
              <a 
                href="#contact"
                className={`hidden md:inline-flex items-center justify-center px-4 lg:px-6 py-2.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors shadow-lg shadow-primary-500/30 ${currentView === 'partner' ? 'hidden' : ''}`}
              >
                Get Advice
              </a>
              
              <button 
                className="lg:hidden p-2 text-gray-600 hover:text-primary-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-gray-100 px-4 py-6 shadow-xl absolute top-full left-0 right-0"
        >
            <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-gray-900 hover:text-primary-500"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            
            {currentView !== 'home' && (
              <button 
                onClick={() => { onViewChange('home'); window.scrollTo(0, 0); setIsOpen(false); }}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full mt-4"
              >
                Back to Main Website
              </button>
            )}
            <a 
              href="https://vfsoffice.vemurigroup.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full mt-3"
              onClick={() => setIsOpen(false)}
            >
              Office Portal
            </a>
            <a 
              href="https://vfs.vemurigroup.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full mt-3"
              onClick={() => setIsOpen(false)}
            >
              Client Login
            </a>
            {currentView === 'home' && (
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full mt-3"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Get Advice
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
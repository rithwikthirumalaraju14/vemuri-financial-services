import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Compare', href: '#compare' },
    { name: 'Calculators', href: '#sip' },
  ]

  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          <a href="#" className="flex items-center space-x-2">
            <img src="/vemurigroup_logo_registred.png" alt="Vemuri Financial Services Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline-block text-sm font-bold text-primary-600 ml-2">
              Financial Services
            </span>
          </a>

          <div className="flex items-center md:space-x-6 lg:space-x-8">
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 lg:space-x-4">
              <a 
                href="https://vfs.vemurigroup.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center px-4 lg:px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-full transition-colors"
              >
                Client Login
              </a>
              
              <a 
                href="#contact"
                className="hidden md:inline-flex items-center justify-center px-4 lg:px-6 py-2.5 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full transition-colors shadow-lg shadow-primary-500/30"
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
                className="text-base font-medium text-gray-900 hover:text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Advice
            </a>
            <a 
              href="https://vfs.vemurigroup.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-full mt-3"
              onClick={() => setIsOpen(false)}
            >
              Client Login
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
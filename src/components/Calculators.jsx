import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Sip from '../components/Sip'
import Swp from '../components/Swp'
import Fd from '../components/Fd'
import Inflation from '../components/Inflation'
import { Calculator } from 'lucide-react'

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('sip')

  const tabs = [
    { id: 'sip', name: 'SIP Calculator' },
    { id: 'swp', name: 'SWP Calculator' },
    { id: 'fd', name: 'FD Calculator' },
    { id: 'inflation', name: 'Inflation Calculator' }
  ]

  return (
    <section id="sip" className="py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
            Planning Tools
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Calculate Your <span className="text-primary-500">Future</span>
          </h3>
          <p className="text-lg text-gray-600">
            Plan your investments, estimate your returns, and stay ahead of inflation with our suite of smart financial tools.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm border border-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {activeTab === 'sip' && <Sip />}
          {activeTab === 'swp' && <Swp />}
          {activeTab === 'fd' && <Fd />}
          {activeTab === 'inflation' && <Inflation />}
        </motion.div>

      </div>
    </section>
  )
}

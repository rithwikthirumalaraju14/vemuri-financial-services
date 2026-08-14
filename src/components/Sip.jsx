import React, { useState } from 'react'

export default function Sip() {
  const [investment, setInvestment] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)

  // Logic: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100
    const months = years * 12
    const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    const totalInvested = investment * months
    return {
      futureValue: Math.round(futureValue),
      totalInvested: Math.round(totalInvested),
      wealthGained: Math.round(futureValue - totalInvested)
    }
  }

  const results = calculateSIP()

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 max-w-4xl mx-auto my-12">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">SIP Calculator</h3>
        <p className="text-gray-600">Calculate the future value of your systematic investment plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Investment (₹)</label>
            <input 
              type="range" 
              min="500" max="100000" step="500"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" 
            />
            <div className="mt-2 text-right font-bold text-primary-600 text-xl">₹{investment.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Return Rate (p.a %)</label>
            <input 
              type="range" 
              min="1" max="30" step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" 
            />
            <div className="mt-2 text-right font-bold text-primary-600 text-xl">{rate}%</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time Period (Years)</label>
            <input 
              type="range" 
              min="1" max="40" step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" 
            />
            <div className="mt-2 text-right font-bold text-primary-600 text-xl">{years} Yrs</div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-primary-100">
          <div className="mb-6 w-full">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Total Value</p>
            <p className="text-4xl font-bold text-primary-600">₹{results.futureValue.toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-primary-200">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Invested</p>
              <p className="text-lg font-bold text-gray-900">₹{results.totalInvested.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Est. Returns</p>
              <p className="text-lg font-bold text-green-600">₹{results.wealthGained.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
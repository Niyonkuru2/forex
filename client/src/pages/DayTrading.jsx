import React from "react";
import { Clock, LineChart, TrendingUp, BarChart2, Brain } from "lucide-react";

const DayTrading = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">
          Day Trading Strategy
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          A complete structured guide for traders who want to capture intraday moves 
          with patience, analysis, and strong risk management.
        </p>
      </div>
       
       {/* Quick Stats for Day Trading */}
<section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
  <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-blue-500">
    <p className="text-sm text-gray-500">Best Session</p>
    <h3 className="text-lg font-bold text-blue-600">London & New York</h3>
  </div>
  <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-green-500">
    <p className="text-sm text-gray-500">Pairs</p>
    <h3 className="text-lg font-bold text-green-600">EUR/USD, NAS100</h3>
  </div>
  <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-yellow-500">
    <p className="text-sm text-gray-500">Risk/Trade</p>
    <h3 className="text-lg font-bold text-yellow-600">1 – 2%</h3>
  </div>
  <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-red-500">
    <p className="text-sm text-gray-500">Target/Day</p>
    <h3 className="text-lg font-bold text-red-600">30 – 60 pips</h3>
  </div>
</section>
 
      {/* Belief */}
      <section className="bg-white shadow rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Belief</h2>
        <p className="text-gray-700 leading-relaxed">
          Day trading focuses on capturing larger moves within a single trading day. 
          Trades can last minutes to hours, but positions are always closed before the day ends. 
          Patience, discipline, and preparation separate winning traders from the rest.
        </p>
      </section>

      {/* Timeframes */}
      <section className="bg-gray-50 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">Timeframes to Use</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
          <li>Entry: <span className="font-medium">M15 or M30</span></li>
          <li>Confirmation: <span className="font-medium">H1</span></li>
          <li>Market Direction: <span className="font-medium">H4 / D1</span></li>
        </ul>
      </section>

      {/* Core Principles */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-green-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <TrendingUp size={20} /> Entry
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Wait for price to reach strong levels. Use candlestick patterns, 
            support/resistance, or breakout retests for precise entries. 
            Avoid impulsive trades.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-yellow-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <BarChart2 size={20} /> Confirmation
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Validate your idea using H1 structure, RSI/MACD, or candle closures. 
            Confirmation ensures your trade follows the market, not emotions.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <LineChart size={20} /> Market Direction
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Use H4/D1 for the bigger picture bias. Trading in line with the trend 
            increases success. Counter-trend trades require extra caution.
          </p>
        </div>
      </section>

      {/* Daily Schedule */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Daily Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="p-3 border">Time (GMT)</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border">06:00–08:00</td>
                <td className="p-3 border">Morning analysis & mark S/R zones</td>
              </tr>
              <tr>
                <td className="p-3 border">09:00–12:00</td>
                <td className="p-3 border font-medium text-green-600">First entry opportunities (London open)</td>
              </tr>
              <tr>
                <td className="p-3 border">13:00–17:00</td>
                <td className="p-3 border">Second entry opportunities (New York session)</td>
              </tr>
              <tr>
                <td className="p-3 border">20:00</td>
                <td className="p-3 border text-red-600">Close trades & update journal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pairs */}
      <section className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-teal-600 mb-4">Pairs to Trade</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-gray-700 text-sm sm:text-base">
          <li>EUR/USD</li>
          <li>GBP/USD</li>
          <li>USD/CAD</li>
          <li>AUD/USD</li>
          <li>NAS100 (Index)</li>
        </ul>
      </section>

      {/* Advice */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600">Advice for Day Trading</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Plan trades in advance — never chase impulsive moves.</li>
          <li>Check economic calendar before trading major pairs.</li>
          <li>Risk only 1–2% per trade to protect your capital.</li>
          <li>Use higher timeframes for context and confluence.</li>
          <li>Maintain a trade journal for discipline and consistency.</li>
        </ol>
      </section>

      {/* Notes */}
      <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl space-y-3">
        <h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-yellow-700">
          <Brain size={22} /> Important Notes for Day Trading Success
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
          <li><b>Patience:</b> Fewer but higher-quality trades are more profitable than constant entries.</li>
          <li><b>Risk Management:</b> Risk/reward should always be at least 1:2 or better.</li>
          <li><b>Psychology:</b> Don’t let emotions (fear, greed, FOMO) guide decisions.</li>
          <li><b>Journaling:</b> Log entries, exits, and reasons to improve strategy over time.</li>
          <li><b>Routine:</b> Build consistency — trade the same hours daily and avoid distractions.</li>
        </ul>
      </section>
    </div>
  );
};

export default DayTrading;

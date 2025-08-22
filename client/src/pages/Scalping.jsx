import { Brain, Clock, TrendingUp, LineChart, AlertTriangle, BookOpen, CheckCircle } from "lucide-react";

const Scalping = () => {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Scalping Strategy</h1>
        <p className="text-gray-600 text-sm md:text-base">
          A structured guide to fast-paced trading with discipline, precision, and consistency.
        </p>
      </div>

      {/* 🔹 Quick Overview (Summary Cards) */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-blue-500">
          <p className="text-xs md:text-sm text-gray-500">Best Session</p>
          <h3 className="text-lg font-bold text-blue-600">London Open</h3>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-green-500">
          <p className="text-xs md:text-sm text-gray-500">Pairs</p>
          <h3 className="text-lg font-bold text-green-600">EUR/USD, GBP/USD</h3>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-yellow-500">
          <p className="text-xs md:text-sm text-gray-500">Risk/Trade</p>
          <h3 className="text-lg font-bold text-yellow-600">0.5 – 1%</h3>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center border-t-4 border-red-500">
          <p className="text-xs md:text-sm text-gray-500">Target/Day</p>
          <h3 className="text-lg font-bold text-red-600">10 – 20 pips</h3>
        </div>
      </section>

      {/* Belief */}
      <section className="bg-white shadow rounded-2xl p-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Belief</h2>
        <p className="text-gray-700 leading-relaxed">
          Scalping focuses on capturing small, quick profits within minutes. 
          The goal is not to ride large market trends but to accumulate multiple 
          smaller wins using tight stop losses and strict discipline. 
          Success comes from consistency and risk control, not one big trade.
        </p>
      </section>

      {/* Timeframes */}
      <section className="bg-gray-50 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Timeframes to Use</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Entry: <span className="font-medium">M1 or M5</span></li>
          <li>Confirmation: <span className="font-medium">M15</span></li>
          <li>Market Direction: <span className="font-medium">H1</span></li>
        </ul>
      </section>

      {/* Core Principles */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-green-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <TrendingUp size={20} /> Entry
          </h3>
          <p className="text-gray-600 mt-2">
            Look for key price levels (support/resistance), candlestick patterns, 
            and strong timing that matches your style. 
            Avoid chasing entries — let the setup come to you.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-yellow-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <LineChart size={20} /> Confirmation
          </h3>
          <p className="text-gray-600 mt-2">
            Validate your setup with multiple timeframe analysis, RSI, or candle 
            closures. Scalping without confirmation = gambling.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 border-t-4 border-blue-500">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <Clock size={20} /> Market Direction
          </h3>
          <p className="text-gray-600 mt-2">
            Always know the bigger picture bias from H1 or session trends. 
            Trade with the flow — fighting trend will drain your account fast.
          </p>
        </div>
      </section>

      {/* Daily Schedule */}
      <section>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Daily Schedule</h2>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-3 border">Time (GMT)</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-3 border">06:00–09:00</td>
              <td className="p-3 border">Pre-London volatility prep</td>
            </tr>
            <tr>
              <td className="p-3 border">09:00–11:00</td>
              <td className="p-3 border font-medium text-green-600">Best scalping window (London open)</td>
            </tr>
            <tr>
              <td className="p-3 border">13:00–15:00</td>
              <td className="p-3 border">NY overlap opportunities</td>
            </tr>
            <tr>
              <td className="p-3 border">Avoid</td>
              <td className="p-3 border text-red-600">Asian session & high-impact news spikes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Pairs */}
      <section className="bg-gray-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Pairs to Trade</h2>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li>EUR/USD</li>
          <li>GBP/USD</li>
          <li>USD/JPY</li>
          <li>GBP/JPY</li>
          <li>XAU/USD (Gold)</li>
        </ul>
      </section>

      {/* Advice */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-red-600">Advice for Scalping</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Always use tight stop losses (3–10 pips).</li>
          <li>Avoid overtrading — focus on high-quality setups only.</li>
          <li>Stick to liquid pairs with low spreads.</li>
          <li>Don’t trade during major news announcements.</li>
          <li>Track your progress daily in a trading journal.</li>
        </ol>
      </section>

      {/* Extra Professional Notes */}
      <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl space-y-3">
        <h2 className="flex items-center gap-2 text-xl font-bold text-yellow-700">
          <Brain size={22} /> Important Notes for Scalping Success
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li> <b>Risk Management:</b> Never risk more than 0.5–1% per trade.</li>
          <li> <b>Psychology:</b> Stay calm. One bad emotional decision can wipe out 10 good scalps.</li>
          <li><b>Journaling:</b> Record setups, mistakes, and lessons. Review weekly.</li>
          <li><b>Discipline:</b> Have a daily stop (loss & profit) limit to avoid burnout.</li>
          <li> <b>Adaptation:</b> Not every market is good for scalping — step aside when volatility is low.</li>
        </ul>
      </section>

      {/* ✅ Scalper's Checklist */}
      <section className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
          <CheckCircle size={22} /> Scalper’s Checklist
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Trend confirmed (H1 bias matches entry)</li>
          <li>✅ Spread less than 2 pips</li>
          <li>✅ No high-impact news in next 30 min</li>
          <li>✅ Risk ≤ 1% of account</li>
          <li>✅ Stop loss placed before entry</li>
        </ul>
      </section>
    </div>
  );
};

export default Scalping;

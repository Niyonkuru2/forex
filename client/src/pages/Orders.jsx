import React from "react";
import { ArrowUpCircle, ArrowDownCircle, Calculator, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const OrdersAndLotSize = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-700">Orders, Lot Size & Profit/Loss</h1>
        <p className="text-gray-600">
          Understanding different order types, lot size calculations, and profit/loss examples is 
          the foundation of professional trading.
        </p>
      </div>

      {/* Order Types */}
      <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-purple-600">Types of Orders</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <b className="text-green-600">Market Order:</b> Instantly buys or sells at the current price.  
            <br />Example: EUR/USD is at 1.1000 → you click BUY → you enter immediately.
          </li>
          <li>
            <b className="text-blue-600">Limit Order:</b> Buys below or sells above the current price.  
            <br />Example: Price is 1.1000, you want to buy at 1.0950 → place a Buy Limit.
          </li>
          <li>
            <b className="text-red-600">Stop Order:</b> Buys above or sells below the current price (used for breakouts).  
            <br />Example: Price is 1.1000, you expect breakout at 1.1050 → place Buy Stop.
          </li>
          <li>
            <b>Stop Loss (SL):</b> Automatic order to exit a losing trade at a defined price.
          </li>
          <li>
            <b>Take Profit (TP):</b> Automatic order to secure profits when target is hit.
          </li>
        </ul>
      </section>

      {/* Lot Size & Volume */}
      <section className="bg-white shadow rounded-2xl p-6 space-y-4 border-l-4 border-blue-500">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <Calculator size={24} /> Lot Size & Volume Calculation
        </h2>
        <p className="text-gray-700">
          Lot size determines how much you are risking per pip. Standard sizes:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Standard Lot = 1.00 = $10 per pip</li>
          <li>Mini Lot = 0.10 = $1 per pip</li>
          <li>Micro Lot = 0.01 = $0.10 per pip</li>
        </ul>
        <p className="text-gray-700">
          Formula to calculate lot size:  
        </p>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
          Lot Size = (Account Balance × Risk %) ÷ (Stop Loss in pips × Pip Value)
        </div>
        <p className="text-gray-700 mt-2">
          Example: Account $1,000, risk 2%, stop loss 20 pips, pip value $1 →  
          Lot size = (1000 × 0.02) ÷ (20 × 1) = 1.0 Mini Lot (0.10).
        </p>
      </section>

      {/* Profit & Loss Example */}
      <section className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-green-600">
          <DollarSign size={24} /> Profit & Loss Examples
        </h2>
        <div className="space-y-3">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <h3 className="flex items-center gap-2 font-semibold text-green-700">
              <TrendingUp size={20} /> Winning Trade Example
            </h3>
            <p className="text-gray-700">
              You buy EUR/USD at 1.1000 with 0.10 lot (=$1/pip).  
              SL = 20 pips, TP = 40 pips.  
              Price hits TP at 1.1040 → Profit = 40 pips × $1 = <b>$40</b>.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
            <h3 className="flex items-center gap-2 font-semibold text-red-700">
              <TrendingDown size={20} /> Losing Trade Example
            </h3>
            <p className="text-gray-700">
              Same trade: Buy EUR/USD at 1.1000, SL = 20 pips.  
              Price drops to 1.0980 → Loss = 20 pips × $1 = <b>- $20</b>.
            </p>
          </div>
        </div>
      </section>

      {/* Success vs Loss Lessons */}
      <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl space-y-3">
        <h2 className="text-xl font-bold text-yellow-700">Key Lessons</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><b>Risk/Reward:</b> Always aim for at least 1:2 (risk 20 pips, aim 40 pips).</li>
          <li><b>Risk Control:</b> Never risk more than 1–2% of your account per trade.</li>
          <li><b>Consistency:</b> Even with 50% win rate, proper R:R makes you profitable.</li>
          <li><b>Discipline:</b> Always set Stop Loss & Take Profit — never remove them.</li>
        </ul>
      </section>
    </div>
  );
};

export default OrdersAndLotSize;

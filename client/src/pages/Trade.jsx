import { useState } from "react";
import { useTrade } from "../context/TradeContext";

const AddTrade = () => {
  const [formData, setFormData] = useState({
    pair: "",
    type: "buy",
    volume: "",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    comment: "",
  });

  const { addTrade, isAddingTrade } = useTrade(); // Using TradeContext

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrade(formData); // Call API via context
    setFormData({
      pair: "",
      type: "buy",
      volume: "",
      entryPrice: "",
      stopLoss: "",
      takeProfit: "",
      comment: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Trade</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="pair"
            placeholder="Currency Pair (e.g., EUR/USD)"
            value={formData.pair}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>

          <input
            type="number"
            step="any"
            name="volume"
            placeholder="Volume"
            value={formData.volume}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="number"
            step="any"
            name="entryPrice"
            placeholder="Entry Price"
            value={formData.entryPrice}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="number"
            step="any"
            name="stopLoss"
            placeholder="Stop Loss (optional)"
            value={formData.stopLoss}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            type="number"
            step="any"
            name="takeProfit"
            placeholder="Take Profit (optional)"
            value={formData.takeProfit}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={isAddingTrade}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition mt-6 disabled:opacity-50 cursor-pointer"
        >
          {isAddingTrade ? "Adding..." : "Add Trade"}
        </button>
      </form>
    </div>
  );
};

export default AddTrade;

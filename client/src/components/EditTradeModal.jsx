import { useState } from "react";
import { toast } from "react-hot-toast";

const EditTradeModal = ({ trade, closeModal, refetchTrades }) => {
  const [formData, setFormData] = useState({
    pair: trade.pair || "",
    type: trade.type?.toLowerCase() === "sell" ? "sell" : "buy",
    volume: trade.volume || "",
    entryPrice: trade.entryPrice || "",
    stopLoss: trade.stopLoss || "",
    takeProfit: trade.takeProfit || "",
    comment: trade.comment || "",
    status: trade.status?.toLowerCase() || "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // always store lowercase for backend
    if (name === "type" || name === "status") {
      setFormData({ ...formData, [name]: value.toLowerCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/trade/update/${trade._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("Trade updated successfully!");
        refetchTrades();
        closeModal();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to update trade");
    }
  };

  // helper to capitalize for UI display
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Trade</h2>

        {/* Pair & Type */}
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <input
            type="text"
            name="pair"
            value={formData.pair}
            onChange={handleChange}
            placeholder="Currency Pair"
            className="border p-2 rounded w-full md:w-1/2"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 rounded w-full md:w-1/2"
          >
            <option value="buy">{capitalize("buy")}</option>
            <option value="sell">{capitalize("sell")}</option>
          </select>
        </div>

        {/* Volume & Entry */}
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <input
            type="number"
            step="any"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            placeholder="Volume"
            className="border p-2 rounded w-full md:w-1/2"
          />
          <input
            type="number"
            step="any"
            name="entryPrice"
            value={formData.entryPrice}
            onChange={handleChange}
            placeholder="Entry Price"
            className="border p-2 rounded w-full md:w-1/2"
          />
        </div>

        {/* Stop Loss & Take Profit */}
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <input
            type="number"
            step="any"
            name="stopLoss"
            value={formData.stopLoss}
            onChange={handleChange}
            placeholder="Stop Loss (optional)"
            className="border p-2 rounded w-full md:w-1/2"
          />
          <input
            type="number"
            step="any"
            name="takeProfit"
            value={formData.takeProfit}
            onChange={handleChange}
            placeholder="Take Profit (optional)"
            className="border p-2 rounded w-full md:w-1/2"
          />
        </div>

        {/* Comment */}
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Profit/Loss"
          className="border p-2 rounded w-full mb-2"
        />

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-4"
        >
          <option value="pending">{capitalize("pending")}</option>
          <option value="success">{capitalize("success")}</option>
          <option value="fail">{capitalize("fail")}</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTradeModal;

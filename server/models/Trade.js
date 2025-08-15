import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // links trade to user
    pair: { type: String, required: true }, // e.g., "EUR/USD"
    type: { type: String, enum: ["buy", "sell"], required: true }, // buy or sell
    volume: { type: Number, required: true }, // trade volume
    entryPrice: { type: Number, required: true }, // price at entry
    stopLoss: { type: Number }, // optional
    takeProfit: { type: Number }, // optional
    comment: { type: String }, // optional note
    status: { type: String, enum: ["success", "fail", "pending"], default: "pending" }, // trade result
}, { timestamps: true });

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;

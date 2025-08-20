import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    pair: { type: String, required: true },
    type: { type: String, enum: ["buy", "sell"], required: true },
    volume: { type: Number, required: true },
    entryPrice: { type: Number, required: true },
    stopLoss: { type: Number },
    takeProfit: { type: Number },
    comment: { type: String },
    status: { type: String, enum: ["success", "fail", "pending"], default: "pending" }, 
}, { timestamps: true });

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;

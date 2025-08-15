import Trade from "../models/Trade.js";

// Add a new trade
export const addTrade = async (req, res) => {
    const { pair, type, volume, entryPrice, stopLoss, takeProfit, comment, status } = req.body;
    try {
        // validate required fields
        if (!pair || !type || !volume || !entryPrice) {
            return res.json({ success: false, message: "Missing required trade details" });
        }

        const newTrade = await Trade.create({
            user: req.user._id, // assume you have auth middleware that sets req.user
            pair,
            type,
            volume,
            entryPrice,
            stopLoss,
            takeProfit,
            comment,
            status
        });

        res.json({ success: true, trade: newTrade, message: "Trade added successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Get trades with pagination (10 per page)
export const getTrades = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    try {
        const trades = await Trade.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Trade.countDocuments({ user: req.user._id });

        res.json({
            success: true,
            trades,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Edit a trade
export const editTrade = async (req, res) => {
    const tradeId = req.params.id;
    const updates = req.body; // can update any field

    try {
        const updatedTrade = await Trade.findOneAndUpdate(
            { _id: tradeId, user: req.user._id },
            updates,
            { new: true } // return updated doc
        );

        if (!updatedTrade) {
            return res.json({ success: false, message: "Trade not found" });
        }

        res.json({ success: true, trade: updatedTrade, message: "Trade updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Get daily statistics for dashboard
export const getDailyStats = async (req, res) => {
    try {
        const trades = await Trade.find({ user: req.user._id });

        // Initialize stats
        let totalTrades = trades.length;
        let successfulTrades = 0;
        let failedTrades = 0;
        let totalProfitLoss = 0;

        trades.forEach(trade => {
            if (trade.status === "success") successfulTrades++;
            if (trade.status === "fail") failedTrades++;
            // calculate profit/loss
            if (trade.status !== "pending" && trade.entryPrice && trade.takeProfit) {
                const pl = trade.type === "buy"
                    ? (trade.takeProfit - trade.entryPrice) * trade.volume
                    : (trade.entryPrice - trade.takeProfit) * trade.volume;
                totalProfitLoss += pl;
            }
        });

        res.json({
            success: true,
            totalTrades,
            successfulTrades,
            failedTrades,
            successRate: totalTrades ? ((successfulTrades / totalTrades) * 100).toFixed(2) + "%" : "0%",
            totalProfitLoss
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

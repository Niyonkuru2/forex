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
            user: req.user._id,
            pair,
            type,
            volume,
            entryPrice,
            stopLoss,
            takeProfit,
            comment,
            status
        });

        res.json({ success: true, trade: newTrade});
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
    const updates = req.body;

    try {
        const updatedTrade = await Trade.findOneAndUpdate(
            { _id: tradeId, user: req.user._id },
            updates,
            { new: true }
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

// Get statistics for dashboard
export const getDailyStats = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user._id });

    let totalTrades = trades.length;
    let successfulTrades = 0;
    let failedTrades = 0;
    let totalProfit = 0;
    let totalLoss = 0;

    trades.forEach(trade => {
      // Parse comment as float
      const value = parseFloat(trade.comment);
      if (isNaN(value)) return;

      if (trade.status === "success") {
        successfulTrades++;
        totalProfit += value; // sum comment for success
      } else if (trade.status === "fail") {
        failedTrades++;
        totalLoss += value; // sum comment for fail
      }
    });

    const totalProfitLoss = totalProfit - totalLoss;

    res.json({
      success: true,
      totalTrades,
      successfulTrades,
      failedTrades,
      successRate: totalTrades
        ? ((successfulTrades / totalTrades) * 100).toFixed(2) + "%"
        : "0%",
      totalProfitLoss,
      totalProfit,
      totalLoss
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  Target,
} from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTrades: 0,
    successfulTrades: 0,
    failedTrades: 0,
    successRate: "0%",
    totalProfitLoss: 0,
    avgProfitLoss: 0,
    totalProfit: 0,
    totalLoss: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/trade/statistics`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (data.success) {
          setStats({
            totalTrades: data.totalTrades || 0,
            successfulTrades: data.successfulTrades || 0,
            failedTrades: data.failedTrades || 0,
            successRate: data.successRate || "0%",
            totalProfitLoss: data.totalProfitLoss || 0,
            avgProfitLoss:
              data.totalTrades > 0
                ? (data.totalProfitLoss || 0) / data.totalTrades
                : 0,
            totalProfit: data.totalProfit || 0,
            totalLoss: data.totalLoss || 0,
          });
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch dashboard statistics");
      }
    };

    fetchStats();
  }, []);

  const formatNumber = (num) =>
    typeof num === "number" ? num.toFixed(2) : "0.00";

  const statCards = [
    {
      title: "Total Trades",
      value: stats.totalTrades,
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
    },
    {
      title: "Successful Trades",
      value: stats.successfulTrades,
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      bg: "bg-green-50",
    },
    {
      title: "Losing Trades",
      value: stats.failedTrades,
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      bg: "bg-red-50",
    },
    {
      title: "Success Rate",
      value: stats.successRate,
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      bg: "bg-yellow-50",
    },
    {
      title: "Total Profit",
      value: formatNumber(stats.totalProfit),
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      bg: "bg-green-50",
    },
    {
      title: "Total Loss",
      value: formatNumber(stats.totalLoss),
      icon: <TrendingDown className="w-8 h-8 text-red-600" />,
      bg: "bg-red-50",
    },
    {
      title: "Net Profit/Loss",
      value: formatNumber(stats.totalProfitLoss),
      icon:
        stats.totalProfitLoss >= 0 ? (
          <TrendingUp className="w-8 h-8 text-green-600" />
        ) : (
          <TrendingDown className="w-8 h-8 text-red-600" />
        ),
      bg:
        stats.totalProfitLoss >= 0 ? "bg-green-50" : "bg-red-50",
    },
    {
      title: "Average Profit/Loss per Trade",
      value: formatNumber(stats.avgProfitLoss),
      icon:
        stats.avgProfitLoss >= 0 ? (
          <TrendingUp className="w-8 h-8 text-green-600" />
        ) : (
          <TrendingDown className="w-8 h-8 text-red-600" />
        ),
      bg:
        stats.avgProfitLoss >= 0 ? "bg-green-50" : "bg-red-50",
    },
  ];

  return (
    <div>
      <main className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-8">📊 Today’s Trading Summary</h2>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-sm ${card.bg} flex items-center justify-between`}
            >
              <div>
                <h3 className="text-gray-600 mb-2">{card.title}</h3>
                <p className="text-3xl font-bold">{card.value}</p>
              </div>
              {card.icon}
            </div>
          ))}
        </div>

        {/* Placeholder for charts or trade distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Performance Overview</h3>
          <p className="text-gray-500">
            📈 Charts for profit/loss trends, win rate, and strategy distribution can go here.
          </p>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

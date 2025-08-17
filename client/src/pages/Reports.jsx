import { useState, useEffect } from "react";
import { useTrade } from "../context/TradeContext";
import { toast } from "react-hot-toast";
import EditTradeModal from "../components/EditTradeModal";
import { TrendingUp, TrendingDown, Search } from "lucide-react";

const AllTrades = () => {
  const { refetchTrades, isLoadingTrades } = useTrade();
  const [filteredTrades, setFilteredTrades] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingTrade, setEditingTrade] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch trades
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/trade/all?page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (data.success) {
          setFilteredTrades(data.trades);
          setTotalPages(data.totalPages);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Failed to fetch trades");
      }
    };
    fetchPage();
  }, [currentPage, refetchTrades]);

  // Filter & search
  const displayedTrades = filteredTrades.filter((trade) => {
    const matchesSearch = trade.pair
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter
      ? trade.status === statusFilter.toLowerCase()
      : true;
    return matchesSearch && matchesStatus;
  });

  const handleEditClick = (trade) => {
    setEditingTrade(trade);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTrade(null);
    setIsModalOpen(false);
  };

  if (isLoadingTrades) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-500">
        Loading trades...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">📑 All Trades</h2>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <div className="relative w-full sm:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by pair..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-3 py-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Status</option>
          <option value="success">Success</option>
          <option value="fail">Fail</option>
        </select>
      </div>

      {displayedTrades.length > 0 ? (
        <>
          {/* Trades Table */}
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  {[
                    "Date & Time",
                    "Pair",
                    "Type",
                    "Volume",
                    "Entry",
                    "SL",
                    "TP",
                    "Status",
                    "Profit / Loss (USD)",
                    "Actions",
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      className="py-3 px-4 text-left text-sm font-semibold text-gray-600"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedTrades.map((trade) => {
                  return (
                    <tr
                      key={trade._id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 px-4 text-gray-700">
                        {new Date(trade.createdAt).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 font-medium">{trade.pair}</td>
                      <td className="py-2 px-4 flex items-center gap-2 font-semibold">
                        {trade.type === "buy" ? (
                          <TrendingUp className="text-green-500 w-5 h-5" />
                        ) : (
                          <TrendingDown className="text-red-500 w-5 h-5" />
                        )}
                        {trade.type.charAt(0).toUpperCase() +
                          trade.type.slice(1)}
                      </td>
                      <td className="py-2 px-4">{trade.volume}</td>
                      <td className="py-2 px-4">{trade.entryPrice}</td>
                      <td className="py-2 px-4">{trade.stopLoss || "-"}</td>
                      <td className="py-2 px-4">{trade.takeProfit || "-"}</td>
                      <td className="py-2 px-4 capitalize">
                        {trade.status || "Pending"}
                      </td>
                      <td className="py-2 px-4">{trade.comment|| "pending"}</td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleEditClick(trade)}
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-1 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-gray-500 text-lg">
          No transactions available 📭
        </div>
      )}

      {/* Edit Modal */}
      {isModalOpen && editingTrade && (
        <EditTradeModal
          trade={editingTrade}
          closeModal={closeModal}
          refetchTrades={refetchTrades}
        />
      )}
    </div>
  );
};

export default AllTrades;

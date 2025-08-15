import { useState, useEffect } from "react";
import { useTrade } from "../context/TradeContext";
import { toast } from "react-hot-toast";
import EditTradeModal from "../components/EditTradeModal"

const AllTrades = () => {
  const {refetchTrades, isLoadingTrades } = useTrade();
  const [filteredTrades, setFilteredTrades] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editingTrade, setEditingTrade] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch trades whenever page changes
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
    const matchesSearch =
      trade.pair.toLowerCase().includes(search.toLowerCase()) ||
      (trade.comment && trade.comment.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter ? trade.status === statusFilter : true;
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

  if (isLoadingTrades) return <div>Loading trades...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">All Trades</h2>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by pair or comment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Success">Success</option>
          <option value="Fail">Fail</option>
        </select>
      </div>

      {/* Trades Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-3 text-left">Date & Time</th>
              <th className="py-2 px-3 text-left">Pair</th>
              <th className="py-2 px-3 text-left">Type</th>
              <th className="py-2 px-3 text-left">Volume</th>
              <th className="py-2 px-3 text-left">Entry</th>
              <th className="py-2 px-3 text-left">SL</th>
              <th className="py-2 px-3 text-left">TP</th>
              <th className="py-2 px-3 text-left">Comment</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedTrades.map((trade) => (
              <tr
                key={trade._id}
                className={`border-b ${
                  trade.type === "sell" ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <td className="py-2 px-3">
                  {new Date(trade.createdAt).toLocaleString()}
                </td>
                <td className="py-2 px-3">{trade.pair}</td>
                <td className="py-2 px-3 font-bold">{trade.type.charAt(0).toUpperCase() + trade.type.slice(1)}</td>
                <td className="py-2 px-3">{trade.volume}</td>
                <td className="py-2 px-3">{trade.entryPrice}</td>
                <td className="py-2 px-3">{trade.stopLoss || "-"}</td>
                <td className="py-2 px-3">{trade.takeProfit || "-"}</td>
                <td className="py-2 px-3">{trade.comment || "-"}</td>
                <td className="py-2 px-3">{trade.status ? trade.status.charAt(0).toUpperCase() + trade.status.slice(1) : "N/A"}</td>
                <td className="py-2 px-3 flex gap-2">
                  <button
                    onClick={() => handleEditClick(trade)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

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

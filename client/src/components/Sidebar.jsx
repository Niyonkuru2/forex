import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // icons

const Sidebar = () => {
  const { logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-4 text-black fixed top-0 left-0 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
       <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white flex flex-col p-6 w-64 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-8">TradeApp</h1>

        {/* Navigation */}
        <nav className="flex flex-col flex-1">
          <div className="flex flex-col gap-4">
            <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Dashboard
            </Link>
            <Link to="/add" className="hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Add Trade
            </Link>
            <Link to="/report" className="hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Report
            </Link>
            <Link to="/scalping" className="hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Scalper Trader
            </Link>
            <Link to="/day-trade" className="hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Day Trader
            </Link>
            <Link to="/orders" className="hover:bg-gray-700 p-2 rounded"
             onClick={() => setIsOpen(!isOpen)}
            >
              Orders
            </Link>
          </div>

          {/* Logout at the bottom */}
          <button
            onClick={logoutUser}
            className="hover:bg-gray-700 p-2 rounded mt-auto text-left cursor-pointer"
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logoutUser } = useAuth();
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8">TradeApp</h1>
      
      {/* Navigation */}
      <nav className="flex flex-col flex-1">
        <div className="flex flex-col gap-4">
           <Link
            to="/dashboard"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Dashbord
          </Link>
          <Link
            to="/add"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Add Trade
          </Link>
          <Link
            to="/report"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Report
          </Link>
        </div>

        {/* Logout at the bottom */}
        <button
            onClick={() => {
              logoutUser();
            }}
            className="hover:bg-gray-700 p-2 rounded mt-auto text-left cursor-pointer"
          >
            Logout
          </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

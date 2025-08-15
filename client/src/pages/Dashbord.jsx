import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">Today’s Summary</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500 mb-2">Total Trades</h3>
            <p className="text-3xl font-bold">10</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500 mb-2">Successful Trades</h3>
            <p className="text-3xl font-bold">6</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500 mb-2">Losing Trades</h3>
            <p className="text-3xl font-bold">4</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-gray-500 mb-2">Strategies Used</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Breakout</li>
              <li>Reversal</li>
              <li>Scalping</li>
            </ul>
          </div>
        </div>

        {/* Optional Outlet for nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

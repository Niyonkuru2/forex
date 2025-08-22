import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-auto p-6 md:ml-64">
        <Outlet /> {/* Render Dashboard All Pages */}
      </div>
    </div>
  );
};

export default DashboardLayout;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashbord";
import AddTrade from "./pages/Trade";
import DashboardLayout from "./components/DashbordLayout";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import Reports from "./pages/Reports";
import Scalping from "./pages/Scalping";
import DayTrading from "./pages/DayTrading";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Public routes (no sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with sidebar */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add" element={<AddTrade />} />
          <Route path="report" element={<Reports />} />
          <Route path="scalping" element={<Scalping />} />
          <Route path="day-trade" element={<DayTrading />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

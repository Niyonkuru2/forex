import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashbord";
import AddTrade from "./pages/Trade";
import DashboardLayout from "./components/DashbordLayout";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import Reports from "./pages/Reports";

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
        </Route>
      </Routes>
    </>
  );
};

export default App;

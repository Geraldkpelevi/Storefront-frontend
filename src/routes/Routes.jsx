import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

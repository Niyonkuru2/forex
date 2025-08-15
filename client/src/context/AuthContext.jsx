// src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, signup } from "../api/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Login
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        setUser(data.userData);
        localStorage.setItem("user", JSON.stringify(data.userData));
        localStorage.setItem("token", data.token); // Save JWT
        toast.success(data.message);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    },
    onError: (err) => toast.error(err.message),
  });

  // Signup
  const registerMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    },
    onError: (err) => toast.error(err.message),
  });

  // Logout
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // ✅ remove JWT
    queryClient.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser: (formData) => loginMutation.mutate(formData),
        registerUser: (formData) => registerMutation.mutate(formData),
        logoutUser,
        isLoggingIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

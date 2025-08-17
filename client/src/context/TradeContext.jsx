// src/context/TradeContext.jsx
import { createContext, useContext } from "react";
import {useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { add} from "../api/trade";
import { useNavigate } from "react-router-dom";

export const TradeContext = createContext();
export const useTrade = () => useContext(TradeContext);
export const TradeProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  

  // Add trade
  const addTradeMutation = useMutation({
    mutationFn: add,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["trades"]);
      navigate("/report");
    },
    onError: () => toast.error("Failed to add trade"),
  });

  return (
    <TradeContext.Provider
      value={{
        isAddingTrade: addTradeMutation.isLoading,
        addTrade: (tradeData) => addTradeMutation.mutate(tradeData),
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

// src/context/TradeContext.jsx
import { createContext, useContext } from "react";
import {useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { add} from "../api/trade";

export const TradeContext = createContext();
export const useTrade = () => useContext(TradeContext);

export const TradeProvider = ({ children }) => {
  const queryClient = useQueryClient();

  

  // Add trade
  const addTradeMutation = useMutation({
    mutationFn: add,
    onSuccess: () => {
      toast.success("Trade added successfully!");
      queryClient.invalidateQueries(["trades"]);
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

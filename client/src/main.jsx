import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TradeProvider } from './context/TradeContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TradeProvider>
        <App />
        </TradeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
)

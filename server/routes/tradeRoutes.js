import express from 'express'
import { addTrade, getTrades,editTrade, getDailyStats} from '../controllers/tradeController.js';
import { protectRoute } from '../middleware/auth.js';

const tradeRouter = express.Router();
tradeRouter.post('/add',protectRoute,addTrade)
tradeRouter.get('/all',protectRoute,getTrades)
tradeRouter.get('/statistics',protectRoute,getDailyStats)
tradeRouter.put('/update/:id',protectRoute,editTrade)

export default tradeRouter
import express from "express"
import "dotenv/config";
import cors from "cors"
import http from 'http'
import { connectDb } from "./config/db.js";
import tradeRouter from "./routes/tradeRoutes.js";
import userRouter from "./routes/userRoutes.js";
//Create express app and Http Server

const app = express();
const server = http.createServer(app)

//middleware setup
app.use(express.json({limit:"4mb"}));
app.use(cors());
app.use("/api/status",(req,res)=>res.send("Server is Live"));

//routes setup
app.use("/api/auth",userRouter)
app.use("/api/trade",tradeRouter)


//connect to db
await connectDb()

const PORT = process.env.PORT || 5070;
server.listen(PORT,()=>console.log("Server is Running on PORT: " + PORT));
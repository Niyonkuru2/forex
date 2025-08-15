import mongoose from "mongoose";

//Function to connect to the mongodb

export const connectDb = async()=>{
    try {
        mongoose.connection.on('connected',()=>console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/forex`)
    } catch (error) {
        console.log(error);
    }
}
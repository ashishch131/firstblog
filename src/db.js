import mongoose from "mongoose"

export const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new error("db not connected!")
    }
};
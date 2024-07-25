import mongoose from "mongoose";

export const connectDB =  async () => {
    await mongoose.connect('mongodb+srv://debojyotidas:8638036100@cluster0.hoae8mx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
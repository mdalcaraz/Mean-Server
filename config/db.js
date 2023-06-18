import mongoose from "mongoose";
import 'dotenv/config';

export const connectDb = async (req,res) => {
    try {
        await mongoose.connect(process.env.DBURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conexion correcta a la DB")
    } catch (error) {
        console.log(error)
    }
    
}

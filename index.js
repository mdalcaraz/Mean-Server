import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import router from "./routes/producto.js";

const app = express();

app.use(express.json())




app.use('/api/productos', router)

await connectDb();

const usedPort = process.env.PORT || 4000;
app.listen(usedPort, () => {
  console.log(`El servidor esta funcionando en http://localhost:${usedPort}`);
});

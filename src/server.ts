import express  from "express";
import router from "./router";
import db from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    console.log("conexion a la base de datos exitosa");
  } catch (error) {
    console.log(error);
    
    console.error("Error en la conexión a la base de datos:", error);
  }
}
connectDB()
const server = express()
server.use(express.json)
server.use('/api', router)

export default server
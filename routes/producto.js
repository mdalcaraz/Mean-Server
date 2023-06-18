import express from "express";
import { actualizarProducto, crearProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../controller/productoController.js";

const router = express.Router();

router.post("/", crearProducto);
router.get("/", obtenerProductos);
router.put("/:id", actualizarProducto);
router.get("/:id", obtenerProducto);
router.delete("/:id", eliminarProducto);




export default router;
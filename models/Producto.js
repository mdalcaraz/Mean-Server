import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const Producto = mongoose.model('Producto', productoSchema)

export default Producto;
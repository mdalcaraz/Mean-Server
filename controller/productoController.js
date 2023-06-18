import Producto from "../models/producto.js";

const crearProducto = async (req, res, next) => {
    console.log(req.body)
    try {
        let producto = new Producto(req.body);

        const saved = await producto.save();
        if (saved) {
            res.json(producto)
        }
    } catch (error) {
        console.log(error);
        res.status(404).send("Hubo un error");
    }

}

const obtenerProductos = async (req, res, next) => {
    try {
        const productos = await Producto.find();

        if (productos) {
            res.json(productos)
        } else {
            res.status(404).json({ msg: "No existe el producto" })
        }
    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error")
    }
}

const actualizarProducto = async (req, res, next) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe el producto" })
            return
        }

        const saved = await Producto.findOneAndUpdate({ _id: req.params.id }, {
            nombre,
            categoria,
            ubicacion,
            precio
        }, { new: true })

        if (saved) {
            res.json(saved)
        } else {
            res.status(404).json({ msg: "No existe el producto" })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error")
    }
}

const obtenerProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ msg: "No existe el producto" })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error")
    }

}

const eliminarProducto = async (req, res, next) => {
    try {
        const producto = await Producto.deleteOne({ _id: req.params.id });

        if (producto.deletedCount) {
            res.json({ msg: "Producto borrado" })
        } else {
            res.status(404).json({ msg: "No existe el producto" })
        }
    } catch (error) {
        console.log(error)
        res.status(404).send("Hubo un error")
    }

}

export {
    crearProducto,
    obtenerProductos,
    actualizarProducto,
    obtenerProducto,
    eliminarProducto
}
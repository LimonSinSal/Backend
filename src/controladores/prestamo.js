const Prestamo = require("../modelos/Prestamo");

const crearPrestamo = async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamo(req.body);
        const guardar = await nuevoPrestamo.save();
        res.status(201).json(guardar);
    } catch (error) {
        res.status(200).json({ message: "Error al crear el prestamo", error});
    }
};

const verPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    } catch (error) {
        res.status(500).json({ message: "error al obtener el prestamo", error});
    }
};

const verPrestamoId = async (req, res) => {
        A
    try {
        const prestamo = await Prestamo.findById(req.params.id);
        if (!prestamo) return res.status(404).json({ message: "No se encontro el prestamo"});
        res.status(200).json(prestamo);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el prestamo", error});
    }
};

const actualizarPrestamo = async (req, res) => {
    try {
        const actualizar = await Prestamo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizar) return res.status(404).json({ message: "No se encontro el prestamo"});
        res.status(200).json(actualizar);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el prestamo", error});
    }
};

const eliminarPrestamo = async (req, res) => {
    try {
        const eliminar = await Prestamo.findByIdAndDelete(req.params.id);
        if  (!eliminar) return res.status(404).json({ message: "No se encontro el prestamo"});
        res.status(200).json({ message: "Prestamo eliminado"});
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el prestamo" ,error});
    }
};

const ordenarPrestamo = async (req, res) => {
    try {
        const { fecha = "fecha_prestamo", ord = "ascendente"} = req.query;
        const sorteo = ord === "descendente" ? -1 : 1;
        const ordenado = await Prestamo.find().sort({ [fecha]: sorteo});
        res.status(200).json(ordenado);
    } catch (error) {
        res.status(500).json({ message: "Error al ordenar los prestamos", error});
    }
};

module.exports = {
    crearPrestamo,
    verPrestamos,
    verPrestamoId,
    actualizarPrestamo,
    eliminarPrestamo,
    ordenarPrestamo,
}
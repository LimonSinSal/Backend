const { Schema, model } = require("mongoose");

const PrestamoSchema = Schema({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    id_documento: {
        type: Schema.Types.ObjectId,
        ref: "Documento",
        required: true
    },
    tipo_prestamo: {
        type: String,
        enum: ["sala", "domicilio"],
        required: true
    },
    fecha_prestamo: {
        type: Date,
        default: Date.now,
        required: true
    },
    fecha_devolucion: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        enum: ["activo", "devuelto", "vencido"],
        default: "activo"
    }
});

module.exports = model("Prestamo", PrestamoSchema, "prestamos");

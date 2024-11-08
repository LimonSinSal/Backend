// Es como realizar un import, aquí añadimos o incorporamos la dependencia
// de mongoose al archivo o modelo implementado.
const { Schema, model } = require("mongoose");

const DocumentoSchema = Schema({
    Titulo: {
        type: String,
        required: true
    },
    Autor: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        enum: ["Libro", "Audio", "Video"],
        required: true
    },
    Año: {
        type: String,
        required: true
    },
    Categoria: {
        type: String,
        required: true
    },
    Cantidad: {
        type: Number,
        required: true
    },
    Director: {
        type: String,
        required: false
    },
    formato: {
        type: String,
        required: false
    }
});

module.exports = model("Documento", DocumentoSchema, "documentos");

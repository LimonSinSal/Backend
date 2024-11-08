// Es como realizar un import, aquí añadimos o incorporamos la dependencia
// de mongoose al archivo o modelo implementado.
const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
	rut: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    activo: { 
        type: Boolean,
        default: true
    }
});

module.exports = model("Usuario", UsuarioSchema, "usuarios");

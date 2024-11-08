const fs = require("fs");
const Documento = require("../modelos/Documento");

const crearDocumento = async (req, res) => {
    let parametros = req.body;

    const documento = new Documento(parametros);
    documento.save();

    return res.status(200).json({
        status: "exito",
        documento: parametros,
        mensaje: "Documento creado con exito!!"
    });
};

const listarDocumentos = async (req, res) => {

    try {
        let consulta = Documento.find({});

        if (req.params.ultimos) {
            consulta.limit(req.params.ultimos);
        }

        let resultado = await consulta.sort({ fecha: -1 });

        if (!resultado) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se han encontrado documentos!!"
            });
        } else {
            return res.status(200).send({
                status: "éxito",
                contador: resultado.length,
                resultado
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se encuentran documentos!!"
        });
    }
}

const listar_un_documento = async (req, res) => {
    let id = req.params.id;

    try {
        let resultado = await Documento.findById(id);
        if (!resultado) {
            return res.status(404).son({
                status: "error",
                mensaje: "No se ha encontrado el documento"
            });
        } else {
            return res.status(200).json({
                status:"exito",
                resultado
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha encontrado el documento"
        });
    }
}

const borrarDocumento = async (req, res) => {
    // Recoger un id por la url

    try {
        let documentoId = req.params.id;
        let resultado = await Documento.findOneAndDelete({ _id: documentoId });

        if (!resultado) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error al borrar el documento"
            });
        } else {
            return res.status(200).json({
                status: "éxito",
                articulo: resultado,
                mensaje: "Documento borrado"
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha podido borrar el documento, posiblemente el formato de ID es incorrecto!!"
        });
    }
}

const editarDocumento = async (req, res) => {
    let documentoId = req.params.id;
    let parametros = req.body;

    try {
        let resultado = await Documento.findOneAndUpdate({ _id: documentoId }, req.body, { new: true });

        if (!resultado) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error al actualizar el documento"
            });
        } else {
            return res.status(200).json({
                status: "éxito",
                articulo: resultado,
                mensaje: "Documento actualizado!!"
            });
        }

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos por enviar"
        });
    }

}

const filtrarDocumentos = async (req, res) => {
    let busqueda = req.params.busqueda;

    let consulta = Documento.find({
        "$or": [
            { "Titulo": { "$regex": busqueda, "$options": "i" } },
            { "tipo": { "$regex": busqueda, "$options": "i" } },
        ]
    });

    let resultado = await consulta.sort({ fecha: -1 });


    if (!resultado || resultado.length <= 0) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se ha encontrado el documento"
        });
    }
    else {

        return res.status(200).json({
            status: "éxito",
            documentos: resultado
        });
    }

}

module.exports = {
    crearDocumento,
    listarDocumentos,
    listar_un_documento,
    borrarDocumento,
    editarDocumento,
    filtrarDocumentos,
    
}
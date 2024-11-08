const express = require("express");

const router = express.Router();

const DocumentoControlador = require("../controladores/documento");
const UsuarioControlador = require("../controladores/usuario");
const PrestamoControlador = require("../controladores/prestamo")

// rutas de documentos
router.post("/crearDocumento", DocumentoControlador.crearDocumento);
router.get("/listarDocumentos", DocumentoControlador.listarDocumentos);
router.get("/listarDocumento/:titulo", DocumentoControlador.listar_un_documento);
router.delete("borrarDocumento/:id", DocumentoControlador.borrarDocumento);
router.put("editarDocumento/:id", DocumentoControlador.editarDocumento);
router.get("/filtrarDocumentos/:busqueda", DocumentoControlador.filtrarDocumentos);


//rutas usuarios
router.post("/crearUsuario", UsuarioControlador.crear_usuario);
router.get("/listarUsuario", UsuarioControlador.listar_usuario);
router.get("/listarUsuario/:nombre", UsuarioControlador.listar_un_usuario);
router.delete("/borrarUsuario/:id", UsuarioControlador.borrar_usuario);
router.put("/editarUsuario/:id", UsuarioControlador.editar_usuario);


// rutas prestamos
router.post("/crearPrestamo", PrestamoControlador.crearPrestamo);
router.get("/verPrestamos", PrestamoControlador.verPrestamos);
router.get("/verPrestamoId/:id", PrestamoControlador.verPrestamoId);
router.get("/ordenarPrestamo", PrestamoControlador.ordenarPrestamo);
router.put("/actualizarPrestamo", PrestamoControlador.actualizarPrestamo);
router.delete("/eliminarPrestamo", PrestamoControlador.eliminarPrestamo);

module.exports = router;
const express = require("express");
const { conexion } = require("./base_de_datos/conexion");
const rutas_documentos = require("./rutas/documento");
const cors = require("cors");

const app = express();
const port = 9000;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json

//rutas
app.get('/', (req,res) => {
    res.status(200).send("Bienvenido a la API")
});

//conexión con mongodb
conexion();

// Cargo las rutas
app.use("/api", rutas_documentos);

app.listen(port, () => console.log("El Server está escuchando en el puerto", port));
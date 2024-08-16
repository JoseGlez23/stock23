const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const puerto = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://josegm23c:eXif6tQ0679gsglI@cluster0.wgpmchs.mongodb.net/inventario",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error de conexión a la base de datos", err);
  });

const rutasComputadoras = require("./rutas/computadoraRutas");
const rutasUsuario = require("./rutas/usuarioRutas"); 

app.use("/api/computadoras", rutasComputadoras);
app.use("/api/usuarios", rutasUsuario); 

app.listen(puerto, () => {
  console.log(`Servidor está corriendo en http://localhost:${puerto}`);
});

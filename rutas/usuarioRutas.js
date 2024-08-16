const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador');

// Ruta de inicio de sesión
router.post('/login', usuarioControlador.iniciarSesion);

// Ruta para obtener todos los usuarios (propósitos de prueba)
router.get('/', usuarioControlador.obtenerUsuarios);

module.exports = router;

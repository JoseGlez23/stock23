const express = require('express');
const router = express.Router();
const computadoraControlador = require('../controladores/computadoraControlador');

// Definición de rutas
router.post('/', computadoraControlador.crearComputadora);
router.get('/', computadoraControlador.obtenerComputadoras);
router.put('/:id', computadoraControlador.actualizarComputadora);
router.delete('/:id', computadoraControlador.eliminarComputadora);

module.exports = router;

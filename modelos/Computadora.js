const mongoose = require('mongoose');

const esquemaComputadora = new mongoose.Schema({
  marca: String,
  modelo: String,
  numeroserie: String,
  estado: { type: String, enum: ['disponible', 'no disponible'] },
  fecha: Date,
  stock: { type: Number, default: 0 }  // Nuevo campo para el stock
});

module.exports = mongoose.model('Computadora', esquemaComputadora);

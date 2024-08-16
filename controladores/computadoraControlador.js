const Computadora = require('../modelos/Computadora');

// Crear una nueva computadora
exports.crearComputadora = async (req, res) => {
  const { marca, modelo, numeroserie, estado, fecha } = req.body;
  try {
    const nuevaComputadora = new Computadora({ marca, modelo, numeroserie, estado, fecha });
    await nuevaComputadora.save();
    res.status(201).json(nuevaComputadora);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las computadoras
exports.obtenerComputadoras = async (req, res) => {
  try {
    const computadoras = await Computadora.find();
    res.status(200).json(computadoras);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una computadora
exports.actualizarComputadora = async (req, res) => {
  const { id } = req.params;
  try {
    const computadoraActualizada = await Computadora.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(computadoraActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una computadora
exports.eliminarComputadora = async (req, res) => {
  const { id } = req.params;
  try {
    await Computadora.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

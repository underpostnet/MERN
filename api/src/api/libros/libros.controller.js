const fs = require('fs');
const path = require('path');

const libros = require('./libros.services');

const librosCtrl = {};

// Find all libros
librosCtrl.findAll = async (req, res) => {
  try {
    const result = await libros.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Find libro by id
librosCtrl.findById = async (req, res) => {
  try {
    const result = await libros.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Create libro
librosCtrl.create = async (req, res) => {
  try {
    console.log(req.body);
    const libro = req.body;
    const result = await libros.create(libro);
    if (!result) {
      res.status(400).json(result.errors);
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update libro
librosCtrl.update = async (req, res) => {
  try {
    const result = await libros.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete libro
librosCtrl.delete = async (req, res) => {
  try {
    const result = await libros.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Edit libro
librosCtrl.edit = async (req, res) => {
  try {
    const result = await libros.edit(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Metodo que sube la imagen y lo asocia a fotoPersonal del modelo
librosCtrl.uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const { id } = req.params.id;
    // Si no viene archivo, no se hace nada
    if (!file) {
      return res.status(400).send({
        message: 'No se ha subido ninguna imagen',
      });
    }
    const result = await libros.uploadImage(id, file);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get libro image
librosCtrl.getImage = (req, res) => {
  const file = req.params.filename;
  const pathFile = `uploads/${file}`;

  if (fs.existsSync(pathFile)) {
    return res.sendFile(path.resolve(pathFile));
  }
  return res.status(404).send({
    status: 'error',
    message: `Image with image: ${file} was not found`,
  });
};

module.exports = librosCtrl;

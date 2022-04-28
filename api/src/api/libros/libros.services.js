const Libro = require('./libros.model');

const librosService = {};

// Todos los servicios del CRUD de libros

// Find all libros
librosService.findAll = async () => {
  try {
    const result = await Libro.find();
    return result;
  } catch (err) {
    return err;
  }
};

// Find libro by id
librosService.findById = async (id) => {
  try {
    const result = await Libro.findById(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Create libro
librosService.create = async (libro) => {
  try {
    const newLibro = new Libro(libro);
    await newLibro.save();
    return newLibro;
  } catch (err) {
    return err;
  }
};

// Update libro
librosService.update = async (id, libro) => {
  try {
    const result = await Libro.findByIdAndUpdate(id, libro);
    return result;
  } catch (err) {
    return err;
  }
};

// Delete libro
librosService.delete = async (id) => {
  try {
    const result = await Libro.findByIdAndRemove(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Si existe imagen en el body, se busca libro y se asocia imagen a fotoPersonal de libro y se guarda imagen con multer
librosService.uploadImage = async (id, file) => {
  try {
    // Se busca libro por id y se asocia imagen a fotoPersonal de libro
    const result = await this.findByIdAndUpdate(id, {
      fotoPersonal: file.filename,
    });
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = librosService;

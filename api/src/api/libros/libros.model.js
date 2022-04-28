// Contiene el modelo de libros

const { Schema, model } = require('mongoose');

const LibrosSchema = new Schema({
    ISBN: { type: String },
    nombreLibro: { type: String },
    autor: { type: String },
    editorial: { type: String },
    portada: { type: String  },
    paginas: { type: Number  }
});

module.exports = model('Libros', LibrosSchema);

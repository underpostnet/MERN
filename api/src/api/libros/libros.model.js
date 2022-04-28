// Contiene el modelo de libros

const { Schema, model } = require('mongoose');

const LibrosSchema = new Schema({

});

// rut: {
//   type: String,
//   required: true,
//   unique: true,
// },
// nombre: {
//   type: String,
//   required: true,
// },
// edad: {
//   type: Number,
//   required: true,
// },
// sexo: {
//   type: String,
//   required: true,
// },
// fotoPersonal: {
//   type: String,
//   // required: true,
// },
// fechaIngreso: {
//   type: Date,
//   required: true,
// },
// enfermedad: {
//   type: String,
// },
// revisado: {
//   type: Boolean,
//   required: true,
//   default: false,
// },

module.exports = model('Libros', LibrosSchema);

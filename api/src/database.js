const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/libros';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('db is connected'))
  .catch((err) => console.error(err));

module.exports = mongoose;

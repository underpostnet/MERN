const { Router } = require('express');

const router = Router();

const libros = require('./libros');

router.use('/libros', libros);

module.exports = router;

const { Router } = require('express');
const librosCtrl = require('./libros.controller');

const router = Router();

// Find all libros
router.get('/', librosCtrl.findAll);

// Find libro by id
router.get('/:id', librosCtrl.findById);

// Create libro
router.post('/', librosCtrl.create);

// Update libro
router.put('/:id', librosCtrl.update);

// Delete libro
router.delete('/:id', librosCtrl.delete);

// Upload image
router.post('/uploads/:id', librosCtrl.uploadImage);

// Get image
router.get('/uploads/:imageFile', librosCtrl.getImage);

module.exports = router;

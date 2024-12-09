const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Ruta para crear productos con imagen
router.post('/products', productController.createProduct);

module.exports = router;

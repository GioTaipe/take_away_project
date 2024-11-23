const express = require('express');
const upload = require('../middlewares/multer');
const productController = require('../controllers/productController');

const router = express.Router();

// Ruta para crear productos con imagen
router.post('/products', upload.single('image'), productController.createProduct);

module.exports = router;

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary.js');

// Configurar el almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products', // Carpeta en Cloudinary donde se guardarán los archivos
    allowed_formats: ['jpg', 'png', 'jpeg'], // Formatos permitidos
  },
});

// Exporta el middleware de multer configurado
const upload = multer({ storage });

module.exports = upload;

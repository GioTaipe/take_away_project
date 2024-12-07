const Product = require('../models/Product.js');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    // Obtén la URL de la imagen desde Cloudinary
    const image_url = req.file ? req.file.path : null;

    // Crea el producto en la base de datos
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      image_url,
      category,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }                                    
};

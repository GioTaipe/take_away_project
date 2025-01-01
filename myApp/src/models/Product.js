// src/models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configuración de la conexión a la base de datos

const Product = sequelize.define('Product', {
  id_product: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true, // Asegura que el valor sea un número decimal
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isInt: true, // Asegura que el valor sea un entero
    },
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true, // Permitimos que pueda ser nulo inicialmente
    validate: {
      isUrl: true, // Valida que sea una URL válida
    },
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'PRODUCTS', // Nombre de la tabla en la base de datos
  timestamps: false, // Agrega automáticamente createdAt y updatedAt
});

module.exports = Product;

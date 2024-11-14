// Configuración de la aplicación (DB, .env)
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,  // Agregamos el puerto aquí
  dialect: 'mysql',
  logging: false, // Desactiva el logging para producción
});

module.exports = sequelize;
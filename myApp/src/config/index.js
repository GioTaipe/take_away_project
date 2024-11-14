// src/database/index.js

const sequelize = require('./database.js');

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate(); // Verifica la conexión
    console.log('Conexión a la base de datos establecida.');
    await sequelize.sync(); // Sincroniza los modelos
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1); // Salir si la conexión falla
  }
};

module.exports = initializeDatabase;

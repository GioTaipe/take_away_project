// Configuración principal de Express (entry point)
require('dotenv').config();
const express = require("express");
const initializeDatabase = require('./config/index.js');
const userRoutes = require('./routes/userRoutes.js')
const app = express();

app.use(express.json());

initializeDatabase();

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Servidor en el puerto', 3000);
});

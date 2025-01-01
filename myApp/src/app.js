// Configuración principal de Express (entry point)
require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const initializeDatabase = require('./config/index.js');
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

initializeDatabase();

app.use('/api', userRoutes);
app.use('/product', productRoutes);

app.listen(3000, () => {
    console.log('Servidor en el puerto', 3000);
});

// Configuración principal de Express (entry point)
require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const initializeDatabase = require('./config/index.js');
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')
import { uploadFile } from './middleware/s3.js';
const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));

initializeDatabase();

app.use('/api', userRoutes);
app.use('/product', productRoutes);

app.post('/upload', async (req, res) => {
    try {
        if (!req.files) {
            return res.status(400).send('No se ha subido ningún archivo');
        }
        const file = req.files.file;
        const result = await uploadFile(file);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ha ocurrido un error');
    }
});

app.listen(3000, () => {
    console.log('Servidor en el puerto', 3000);
});

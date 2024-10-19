// Configuración principal de Express (entry point)
require('dotenv').config();
const express = require("express");
const pool = require('./config/database');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello world')
});

app.get('/ping', async (req, res) => {
    const result= await pool.query('SELECT NOW()')
    res.json(result[0]);
})

app.listen(3000)
console.log('Serve on port', 3000);


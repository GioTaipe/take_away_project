const express = require('express');
const userController = require('../controllers/userControllers.js');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

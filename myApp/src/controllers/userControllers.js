const User = require('../models/User');

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { first_name, last_name, email, password, phone, address } = req.body;
    const newUser = await User.create({ first_name, last_name, email, password, phone, address });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Eliminar un usuario

exports.deleteUser = async (req, res) => {

  try{
    const {id} = req.params;
    const deleted = await User.destroy({ where: {id_user:id} });

    if (deleted){
      res.status(200).json({ message: 'Usuario eliminado correctamente'})
    }
    else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }

  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar un usuario'});
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

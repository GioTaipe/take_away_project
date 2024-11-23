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

// Modificar un usuario
exports.updateUser = async (req, res) => {
  
  try {
    
    const {id} = req.params;
    const { first_name, last_name, email, password, phone, address } = req.body;
    
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { id_user: id } });

    if (!user) {
       res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Realizar la actualización
    await User.update(
      { first_name, last_name, email, password, phone, address },
      { where: { id_user: id } }
    );

    // Recuperar y envía el usuario actualizado
    const updatedUser = await User.findOne({ where: { id_user: id } });
    res.status(200).json(updatedUser);

  } catch (error){
    res.status(500).json({ error: 'Error al modificar un usuario' });
  }
}

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario

exports.getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findOne({ where: { id_user: id }})

    if( !user ){
      res.json('Usuario no encontrado')
    }
    else {
      res.json(user)
    }

  } catch( error ){
    res.json({ error: 'Error al obtener usuario'});
  }
}

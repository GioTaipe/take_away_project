const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

// Definir el modelo User
const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(100),
    },
    last_name: {
        type: DataTypes.STRING(100),
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
    },
    address: {
        type: DataTypes.STRING(255),
    },
    registration_date: {
        type: DataTypes.DATE
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    }
}, {
    tableName: 'users',  // Nombre de la tabla en la base de datos
    timestamps: false    // Desactivar createdAt y updatedAt
});

module.exports = User;
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      id: {
        type: Sequelize.DataTypes.INTEGER
      },
      usuario_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      nombre: {
        type: Sequelize.DataTypes.STRING
      },
      apellido: {
        type: Sequelize.DataTypes.STRING
      },
      cedula: {
        type: Sequelize.DataTypes.INTEGER
      },
      correo: {
        type: Sequelize.DataTypes.STRING
      },
      direccion: {
        type: Sequelize.DataTypes.STRING
      },
      telefono: {
        type: Sequelize.DataTypes.STRING
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pacientes');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id: {
        type: Sequelize.DataTypes.INTEGER,
      },
      usuario: {
        type: Sequelize.DataTypes.STRING,
      },
      clave: {
        type: Sequelize.DataTypes.STRING,
      },
      tipo: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  },
};

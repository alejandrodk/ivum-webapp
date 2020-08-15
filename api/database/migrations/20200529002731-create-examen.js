'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('examenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id: {
        type: Sequelize.DataTypes.INTEGER,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
      },
      especialidad: {
        type: Sequelize.DataTypes.STRING,
      },
      precio: {
        type: Sequelize.DataTypes.FLOAT,
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
    return queryInterface.dropTable('examens');
  },
};

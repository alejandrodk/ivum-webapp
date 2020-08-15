'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resultados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      id: {
        type: Sequelize.DataTypes.INTEGER,
      },
      consulta_id: {
        type: Sequelize.DataTypes.INTEGER,
      },
      diagnostico: {
        type: Sequelize.DataTypes.TEXT,
      },
      tratamiento: {
        type: Sequelize.DataTypes.TEXT,
      },
      observacion: {
        type: Sequelize.DataTypes.TEXT,
      },
      fecha: {
        type: Sequelize.DataTypes.DATE,
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
    return queryInterface.dropTable('resultados');
  },
};

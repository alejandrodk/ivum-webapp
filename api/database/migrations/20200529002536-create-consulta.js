'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consultas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      id: {
        type: Sequelize.DataTypes.INTEGER
      },
      paciente_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      medico_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      examen_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      observacion: {
        type: Sequelize.DataTypes.STRING
      },
      fecha: {
        type: Sequelize.DataTypes.DATEONLY
      },
      hora: {
        type: Sequelize.DataTypes.TIME
      },
      estado: {
        type: Sequelize.DataTypes.STRING
      },
      comprobante_id: {
        type: Sequelize.DataTypes.INTEGER
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
    return queryInterface.dropTable('consulta');
  }
};
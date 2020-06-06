'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comprobantes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
    },
    nombre : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    cedula : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    direccion : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    telefono : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    paciente_id : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    metodo_pago : {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: false
    },
    moneda : {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: false
    },
    monto : {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    iva : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    observacion : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    fecha : {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comprobantes');
  }
};
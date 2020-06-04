'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comprobantes', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    nombre : {
        type: Sequelize.STRING,
        allowNull : false
    },
    cedula : {
        type: Sequelize.STRING,
        allowNull : false
    },
    direccion : {
        type: Sequelize.STRING,
        allowNull : false
    },
    telefono : {
        type: Sequelize.STRING,
        allowNull : false
    },
    paciente_id : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    metodo_pago : {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    moneda : {
        type: Sequelize.STRING(5),
        allowNull: false
    },
    monto : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    iva : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    observacion : {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha : {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comprobantes');
  }
};
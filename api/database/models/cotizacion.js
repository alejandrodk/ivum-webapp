module.exports = (sequelize, dataTypes) => {
    const alias = 'cotizaciones';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        moneda : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        simbolo : {
            type: dataTypes.STRING(3),
            allowNull: true
        },
        cambio_actual : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    const Cotizacion = sequelize.define(alias, cols, { tableName: 'cotizaciones' });

    Cotizacion.associate = function(models){

    }

    return Cotizacion
}
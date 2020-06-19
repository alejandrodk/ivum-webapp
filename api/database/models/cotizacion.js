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
        valor_usd : {
            type: dataTypes.DECIMAL,
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
    Cotizacion.prototype.formatPrice = (price) => {
        let num = new Intl.NumberFormat(["de-DE"]).format(price);
        return num;
    }

    return Cotizacion
}
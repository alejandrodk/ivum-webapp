module.exports = (sequelize, dataTypes) => {
    const alias = 'comprobantes';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre : {
            type: dataTypes.STRING(100),
            allowNull : false
        },
        cedula : {
            type: dataTypes.STRING(15),
            allowNull : false
        },
        direccion : {
            type: dataTypes.STRING(200),
            allowNull : false
        },
        telefono : {
            type: dataTypes.STRING(20),
            allowNull : false
        },
        paciente_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        metodo_pago : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        moneda : {
            type: dataTypes.STRING(5),
            allowNull: false
        },
        monto : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        iva : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        observacion : {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha : {
            type: dataTypes.DATE,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    const Comprobante = sequelize.define(alias, cols, { tableName: 'comprobantes' });

    Comprobante.associate = function(models){
        Comprobante.hasMany(models.consultas, {
            as : 'consulta',
            foreignKey : 'comprobante_id'
        })
    }

    return Comprobante
}
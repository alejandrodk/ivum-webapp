module.exports = (sequelize, dataTypes) => {
    const alias = 'resultados';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        consulta_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        diagnostico : {
            type: dataTypes.TEXT,
            allowNull: false
        },
        tratamiento : {
            type: dataTypes.TEXT,
            allowNull: true
        },
        observacion : {
            type: dataTypes.TEXT,
            allowNull: true
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
    const Resultado = sequelize.define(alias, cols, { tableName: 'resultados' });

    Resultado.associate = function(models){
        Resultado.belongsTo(models.consultas, {
            as : 'consulta',
            foreignKey : 'consulta_id'
        })
    }

    return Resultado
}
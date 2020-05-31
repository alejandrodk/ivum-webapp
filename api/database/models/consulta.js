module.exports = (sequelize, dataTypes) => {
    const alias = 'consultas';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        paciente_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        medico_id : {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        examen_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        observacion : {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        fecha : {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        hora : {
            type: dataTypes.TIME,
            allowNull: false
        },
        estado : {
            type: dataTypes.STRING(10),
            allowNull: true
        },
        comprobante_id : {
            type: dataTypes.INTEGER,
            allowNull : true
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    const Consulta = sequelize.define(alias, cols, { tableName: 'consultas' });

    Consulta.associate = function(models){
        Consulta.hasOne(models.resultados, {
            as : 'resultado'
        })
        Consulta.belongsTo(models.medicos, {
            as : 'medico',
            foreignKey : 'medico_id'
        })
        Consulta.belongsTo(models.pacientes, {
            as : 'paciente',
            foreignKey : 'paciente_id'
        })
        Consulta.belongsTo(models.examenes, {
            as : 'examen',
            foreignKey : 'examen_id'
        })
        Consulta.belongsTo(models.comprobantes, {
            as : 'comprobante',
            foreignKey : 'comprobante_id'
        })
    }

    return Consulta
}
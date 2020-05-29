module.exports = (sequelize, dataTypes) => {
    const alias = 'usuarios';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        usuario : {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        clave : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        tipo : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    const Usuario = sequelize.define(alias, cols, { tableName: 'usuarios' });

    Usuario.associate = function(models){
        Usuario.hasOne(models.pacientes, {
            as : 'paciente'
        })
        Usuario.hasOne(models.medicos, {
            as : 'medico'
        })
    }

    return Usuario
}
module.exports = (sequelize, dataTypes) => {
    const alias = 'usuarios';
    const cols = {
        id: {
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
        cedula : {
            primaryKey: true,
            type: dataTypes.INTEGER,
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
            as : 'paciente',
            foreignKey : 'cedula'
        })
        Usuario.hasOne(models.medicos, {
            as : 'medico',
            foreignKey : 'cedula'
        })
    }

    return Usuario
}
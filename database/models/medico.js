module.exports = (sequelize, dataTypes) => {
    const alias = 'medicos';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        usuario_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        nombre : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        apellido : {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        cedula : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        correo : {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        direccion : {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefono : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        comision : {
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
    const Medico = sequelize.define(alias, cols, { tableName: 'medicos' });

    Medico.associate = function(models){
        Medico.belongsTo(models.usuarios, {
            as : 'usuario',
            foreignKey : 'usuario_id'
        })
        Medico.hasMany(models.consultas, {
            as : 'consulta'
        })
    }

    return Medico
}
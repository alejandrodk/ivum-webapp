module.exports = (sequelize, dataTypes) => {
    const alias = 'pacientes';
    const cols = {
        id: {
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre : {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        apellido : {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        sexo : {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        nacimiento : {
            type: dataTypes.DATE,
            allowNull: false
        },
        cedula : {
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false
        },
        correo : {
            type: dataTypes.STRING(25),
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
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    const Paciente = sequelize.define(alias, cols, { tableName: 'pacientes' });

    Paciente.associate = function(models){
        Paciente.belongsTo(models.usuarios, {
            as : 'usuario',
            foreignKey : 'cedula'
        })
        Paciente.hasMany(models.consultas, {
            as : 'consulta',
            foreignKey : 'cedula_paciente'
        })
    }

    return Paciente
}
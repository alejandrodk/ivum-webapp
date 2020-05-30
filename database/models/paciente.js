module.exports = (sequelize, dataTypes) => {
    const alias = 'pacientes';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        usuario_id : {
            type: dataTypes.INTEGER,
            allowNull: true
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
            foreignKey : 'usuario_id'
        })
        Paciente.hasMany(models.consultas, {
            as : 'consulta'
        })
    }

    return Paciente
}
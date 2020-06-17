module.exports = (sequelize, dataTypes) => {
    const alias = 'examenes';
    const cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        nombre : {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        especialidad : {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        precio : {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    };
    const Examen = sequelize.define(alias, cols, { tableName: 'examenes' });

    Examen.associate = function(models){
        Examen.hasMany(models.consultas, {
            as : 'consulta',
            foreignKey : 'examen_id'
        })
        Examen.belongsToMany(models.medicos, {
            as : 'medicos',
            through : 'medico_examen',
            foreignKey : 'examen_id',
            timestamps : false
        })
    }

    return Examen
}
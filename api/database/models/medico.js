module.exports = (sequelize, dataTypes) => {
  const alias = 'medicos';
  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    nombre: {
      type: dataTypes.STRING(15),
      allowNull: false,
    },
    apellido: {
      type: dataTypes.STRING(25),
      allowNull: false,
    },
    cedula: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    direccion: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: dataTypes.STRING(15),
      allowNull: false,
    },
    comision: {
      type: dataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: dataTypes.DATE,
    },
    updatedAt: {
      type: dataTypes.DATE,
    },
  };
  const Medico = sequelize.define(alias, cols, { tableName: 'medicos' });

  Medico.associate = function (models) {
    Medico.belongsTo(models.usuarios, {
      as: 'usuario',
      foreignKey: 'cedula',
    });
    Medico.hasMany(models.consultas, {
      as: 'consulta',
      foreignKey: 'medico_id',
    });
    Medico.belongsToMany(models.examenes, {
      as: 'examenes',
      through: 'medico_examen',
      foreignKey: 'medico_id',
      timestamps: false,
    });
  };

  return Medico;
};

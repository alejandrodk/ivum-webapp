const db = require('../database/models');

module.exports = {
  pacientes: async (req, res) => {
    let pacient = req.query.pacient;

    let where = {};
    if (pacient) where.cedula = pacient;

    try {
      let pacientes = await db.pacientes.findAll({
        where,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        logging: false,
      });
      return res.status(200).json(pacientes);
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed load collection',
        collection: 'Pacientes',
        error: err,
      });
    }
  },
  detail: async (req, res) => {
    let id = req.params.id;

    try {
      let paciente = await db.pacientes.findByPk(id);
      return res.status(200).json(paciente);
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed load resource',
        resource: 'Paciente',
        id: id,
        error: err,
      });
    }
  },
  create: async (req, res) => {
    try {
      let existPacient = await db.pacientes.findOne({
        where: { cedula: req.body.cedula },
        logging: false,
      });
      if (existPacient) {
        return res.status(400).json({
          message: 'Invalid Pacient',
          description: 'Pacient is already exist',
        });
      }
      let pacient = await db.pacientes.create(
        {
          usuario_id: null,
          ...req.body,
        },
        {
          logging: false,
        }
      );
      if (pacient) {
        return res.status(201).header('Location', `/pacientes/${pacient.id}`).json({
          message: 'Pacient created successful',
          pacient,
        });
      }
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed creating resource',
        resource: 'Paciente',
        error: err,
      });
    }
  },
  update: async (req, res) => {
    let id = req.params.id;

    try {
      let pacient = await db.pacientes.update(
        {
          ...req.body,
        },
        {
          where: { id: id },
          logging: false,
        }
      );
      if (pacient) {
        return res.status(200).json({
          message: 'Successful update',
        });
      }
    } catch (err) {
      return res.status(401).json({
        message: 'Error updating pacient',
        error: err,
      });
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      let result = await db.pacientes.destroy({
        where: { id },
        logging: false,
      });
      if (result) {
        return res.status(204).send('Successful deleting resource');
      }
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Error deleting user',
        error: err,
      });
    }
  },
};

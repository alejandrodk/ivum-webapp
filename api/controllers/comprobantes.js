const db = require('../database/models');
const sequelize = db.sequelize;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  comprobantes: async (req, res) => {
    let full_data = req.query.full_data;
    let pacient = req.query.pacient;
    let date_from = req.query.date_from;
    let date_to = req.query.date_to;

    let where = {};
    if (pacient) where.paciente_id = pacient;
    if (date_from || date_to)
      where.fecha = {
        [Op.gt]: date_from || new Date() - 300 * 24 * 60 * 60 * 100,
        [Op.lt]: date_to || new Date() + 100 * 24 * 60 * 60 * 100,
      };

    try {
      let comprobantes = await db.comprobantes.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: full_data ? [{ model: db.consultas, as: 'consulta' }] : [],
        order: [['fecha', 'DESC']],
        logging: false,
      });
      return res.status(200).json(comprobantes);
    } catch (err) {
      return res.status(200).json({
        message: 'Failed load collection',
        collection: 'comprobantes',
        error: err,
      });
    }
  },
  detail: async (req, res) => {},
  create: async (req, res) => {
    transaction = await sequelize.transaction();

    try {
      let consultas = req.body.consultas;
      delete req.body.consultas;

      let comprobante = await db.comprobantes.create(
        {
          ...req.body,
        },
        {
          logging: false,
          transaction,
        }
      );

      for (consulta of consultas) {
        await db.consultas.update(
          {
            comprobante_id: comprobante.id,
          },
          {
            where: { id: consulta.id },
            logging: false,
            transaction,
          }
        );
      }

      // commit
      await transaction.commit();

      return res.status(201).header('Location', `/comprobantes/${comprobante.id}`).json({
        message: 'Resource created successful',
        comprobante,
      });
    } catch (err) {
      await transaction.rollback();

      return res.status(res.statusCode).json({
        message: 'Failed creating resource',
        resource: 'Comprobante',
        error: err,
      });
    }
  },
  update: async (req, res) => {},
  delete: async (req, res) => {},
};

const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  examenes: async (req, res) => {
    let search = req.query.search;
    let limit = req.query.limit ? parseInt(req.query.limit) : null;
    let price_detail = req.query.price_detail;

    let where = search
      ? {
          [Op.or]: [
            { nombre: { [Op.like]: '%' + search + '%' } },
            { especialidad: { [Op.like]: '%' + search + '%' } },
          ],
        }
      : {};

    try {
      let examenes = await db.examenes.findAll({
        where,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        limit,
        logging: false,
      });
      let cotizaciones = await db.cotizaciones.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        logging: false,
      });

      if (price_detail) {
        examenes.map(item => {
          item.precio = {
            usd: item.precio * cotizaciones[0].valor_usd,
            eur: item.precio * cotizaciones[1].valor_usd,
            bsf: item.precio * cotizaciones[2].valor_usd,
          };
        });
      }

      return res.status(200).json(examenes);
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed load collection',
        collection: 'Exámenes',
        error: err,
      });
    }
  },
  detail: async (req, res) => {
    let id = req.params.id;
    let price_detail = req.query.price_detail;

    try {
      let examen = await db.examenes.findOne({
        where: { id },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        logging: false,
      });

      let cotizaciones = await db.cotizaciones.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        logging: false,
      });

      if (price_detail) {
        examen.precio = {
          usd: examen.precio * cotizaciones[0].valor_usd,
          eur: examen.precio * cotizaciones[1].valor_usd,
          bsf: examen.precio * cotizaciones[2].valor_usd,
        };
      }

      return res.status(200).json(examen);
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed load resource',
        resource: 'Exámen',
        id: id,
        error: err,
      });
    }
  },
  create: async (req, res) => {
    try {
      let existExamen = await db.examenes.findOne({
        where: { nombre: req.body.nombre },
        logging: false,
      });
      if (existExamen) {
        return res.status(400).json({
          message: 'Creation failed',
          description: '"Exámen" is already exist',
        });
      }
      req.body.id = 0;
      let examen = await db.examenes.create(
        {
          ...req.body,
        },
        {
          logging: false,
        }
      );
      if (examen) {
        return res.status(201).header('Location', `/examenes/${examen.id}`).json({
          message: 'Resource created successful',
          examen,
        });
      }
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed creating resource',
        resource: 'Exámen',
        error: err,
      });
    }
  },
  update: async (req, res) => {
    let id = req.params.id;

    try {
      let examen = await db.examenes.update(
        {
          ...req.body,
        },
        {
          where: { id: id },
          logging: false,
        }
      );
      if (examen) {
        return res.status(200).json({
          message: 'Successful update',
        });
      }
    } catch (err) {
      return res.status(401).json({
        message: 'Error updating Exámen',
        error: err,
      });
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      let result = await db.examenes.destroy({
        where: { id },
        logging: false,
      });
      if (result) {
        return res.status(204).send('Successful deleting resource');
      }
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Error deleting Resource',
        error: err,
      });
    }
  },
  doctors: async (req, res) => {
    let id = req.params.id;

    try {
      let doctors = await db.examenes.findOne({
        where: { id },
        attributes: ['nombre'],
        include: [
          {
            model: db.medicos,
            as: 'medicos',
            attributes: { exclude: ['createdAt', 'updatedAt', 'comision'] },
          },
        ],
        logging: false,
      });

      return res.status(200).json(doctors);
    } catch (err) {
      return res.status(res.statusCode).json({
        message: 'Failed load resource',
        error: err,
      });
    }
  },
};

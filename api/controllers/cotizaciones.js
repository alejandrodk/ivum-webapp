const db = require('../database/models');

module.exports = {
  cotizaciones: async (req, res) => {
    try {
      let cotizaciones = await db.cotizaciones.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        logging: false,
      });
      return res.status(200).json(cotizaciones);
    } catch (err) {
      return res.status(500).json({
        message: 'Database Error',
        description: err,
      });
    }
  },
  detail: async (req, res) => {},
  create: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};

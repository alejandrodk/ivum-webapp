const express = require('express');
const router = express.Router();
const controller = require('../controllers/cotizaciones');
const JWTvalidate = require('../middlewares/JWTvalidate');

router.get('/', controller.cotizaciones);
router.get('/:current', controller.detail);
router.post('/', JWTvalidate, controller.create);
router.patch('/:id', JWTvalidate, controller.update);
router.delete('/:id', JWTvalidate, controller.delete);

module.exports = router;

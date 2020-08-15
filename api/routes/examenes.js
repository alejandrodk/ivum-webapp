const express = require('express');
const router = express.Router();
const controller = require('../controllers/examenes');
const JWTvalidate = require('../middlewares/JWTvalidate');

router.get('/', controller.examenes);
router.post('/', JWTvalidate, controller.create);
router.get('/:id', controller.detail);
router.get('/:id/especialistas', controller.doctors);
router.patch('/:id', JWTvalidate, controller.update);
router.delete('/:id', JWTvalidate, controller.delete);

module.exports = router;

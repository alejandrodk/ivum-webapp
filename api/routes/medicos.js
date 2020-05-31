const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicos');
const JWTvalidate = require('../middlewares/JWTvalidate');

router.get('/', JWTvalidate ,controller.medicos);
router.post('/', JWTvalidate ,controller.create);
router.get('/:id', JWTvalidate ,controller.detail);
router.patch('/:id', JWTvalidate ,controller.update);
router.delete('/:id', JWTvalidate ,controller.delete);

module.exports = router;
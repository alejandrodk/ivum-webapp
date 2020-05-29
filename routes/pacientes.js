const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacientes');

router.get('/', controller.pacientes)

module.exports = router;
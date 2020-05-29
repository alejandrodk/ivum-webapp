const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicos');

router.get('/', controller.medicos)

module.exports = router;
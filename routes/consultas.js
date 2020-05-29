const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultas');

router.get('/', controller.consultas)

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultas');

router.get('/', controller.consultas);
router.post('/', controller.create);
router.get('/:id', controller.detail);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
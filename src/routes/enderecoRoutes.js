const express = require('express');
const router = express.Router();
const EnderecoController = require('../controllers/enderecoController');

router.get('/', EnderecoController.getAll);
router.get('/getById/:id', EnderecoController.getById);
module.exports = router;
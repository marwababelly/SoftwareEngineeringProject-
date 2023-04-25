const express = require('express');

const router = express.Router();
const customerController = require('../controllers/clientController');

router.get('/', customerController.getAll)

module.exports = router;
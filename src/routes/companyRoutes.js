const express = require('express');

const router = express.Router();

const controller = require('../controllers/companyControllers');

router.route('/save').post(controller.saveData);

module.exports = router;
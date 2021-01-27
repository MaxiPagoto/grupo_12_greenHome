var express = require('express');
var router = express.Router();
const apisController = require('../controllers/apiController')


router.get('/users', apisController.list);

module.exports = router;

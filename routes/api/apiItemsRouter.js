var express = require('express');
var router = express.Router();
const apisController = require('../../controllers/api/apiItemsController')


router.get('/:userID/list', apisController.list);


module.exports = router;

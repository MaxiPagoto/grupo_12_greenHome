var express = require('express');
var router = express.Router();
const cors = require('cors')
const apisProductsController = require('../../controllers/api/apiProductsController')


router.get('/', apisProductsController.list);
router.get('/last', apisProductsController.last)
router.get('/:id', apisProductsController.detail)


module.exports = router;

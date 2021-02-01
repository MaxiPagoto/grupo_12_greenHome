var express = require('express');
var router = express.Router();
const itemsRouter = require('./apiItemsRouter');
const apisController = require('../../controllers/api/apiOrdersController')

router.use('/items', itemsRouter);
router.post('/buy', apisController.buy);
router.get('/:id', apisController.list)


module.exports = router;

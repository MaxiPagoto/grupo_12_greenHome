var express = require('express');
var router = express.Router();
const itemsRouter = require('./apiItemsRouter');
const apisController = require('../../controllers/api/apiUsersController')

router.use('/items', itemsRouter);
router.get('/', apisController.list);



module.exports = router;

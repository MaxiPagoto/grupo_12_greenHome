var express = require('express');
var router = express.Router();
const apisController = require('../../controllers/api/apiItemsController')


router.post('/create', apisController.store);
router.get('/:id', apisController.list);
router.post('/destroy', apisController.drop);


module.exports = router;

var express = require('express');
var router = express.Router();
const apisController = require('../../controllers/api/apiUsersController')


router.get('/', apisController.list);
router.get('/:id', apisController.detail)
router.post('/', apisController.store)
router.post('/delete', apisController.delete)
router.post('/update', apisController.update)


module.exports = router;

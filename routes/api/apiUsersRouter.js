var express = require('express');
var router = express.Router();
const apisController = require('../../controllers/api/apiUsersController')


router.get('/', apisController.list);
router.post('/', apisController.store)
router.post('/delete', apisController.delete)


module.exports = router;

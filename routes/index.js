const express = require('express');
const router = express.Router();
const indexController = require ('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
router.get('/index', indexController.index)
router.get('/inspire', indexController.inspire)
module.exports = router;
